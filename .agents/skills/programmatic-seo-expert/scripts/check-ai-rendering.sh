#!/usr/bin/env bash
#
# check-ai-rendering.sh — the highest-leverage AI-search check.
#
# No major AI crawler (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Bytespider)
# executes JavaScript — they fetch RAW HTML and move on. If your critical content,
# internal links, and JSON-LD are not in the raw HTML response, your pages are
# effectively invisible to AI engines (and to Bing, which ~92% of ChatGPT relies on).
#
# This script fetches a URL as Googlebot, GPTBot, and ClaudeBot and reports:
#   - HTTP status and response time
#   - raw HTML byte size and visible word count (tags stripped)
#   - whether JSON-LD structured data is present
#   - whether the page looks client-side rendered (heuristic warning)
#
# Usage:   scripts/check-ai-rendering.sh <url> [<url> ...]
# Example: scripts/check-ai-rendering.sh https://example.com/apps/slack
#
# Exit code is non-zero if any URL looks client-side rendered (CI-friendly).

set -uo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <url> [<url> ...]" >&2
  exit 2
fi

# Representative agents: Google's renderer vs. JS-blind AI crawlers.
declare -a UAS=(
  "Googlebot|Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
  "GPTBot|Mozilla/5.0 (compatible; GPTBot/1.2; +https://openai.com/gptbot)"
  "ClaudeBot|Mozilla/5.0 (compatible; ClaudeBot/1.0; +http://www.anthropic.com/claudebot)"
)

# Word-count threshold below which we suspect an empty CSR shell.
MIN_WORDS=${MIN_WORDS:-100}

overall_rc=0

strip_to_words() {
  # stdin: HTML -> stdout: word count of visible text (scripts/styles/tags removed)
  sed -E 's/<script[^>]*>.*<\/script>//gI; s/<style[^>]*>.*<\/style>//gI' \
    | sed -E 's/<[^>]+>/ /g' \
    | tr -s '[:space:]' ' ' \
    | wc -w \
    | tr -d ' '
}

for url in "$@"; do
  echo "════════════════════════════════════════════════════════════"
  echo "URL: $url"
  echo "════════════════════════════════════════════════════════════"

  suspect_csr=0

  for entry in "${UAS[@]}"; do
    name="${entry%%|*}"
    ua="${entry#*|}"

    # One fetch per agent: body followed by a metadata trailer line (no second request).
    resp="$(curl -sS -L --max-time 30 -A "$ua" \
              -w '\n__META__ %{http_code} %{time_total}s %{size_download}bytes' "$url" 2>/dev/null)"
    meta="${resp##*__META__ }"
    body="${resp%$'\n'__META__*}"

    words="$(printf '%s' "$body" | strip_to_words)"
    if printf '%s' "$body" | grep -qiE 'application/ld\+json'; then
      jsonld="yes"
    else
      jsonld="NO"
    fi

    printf '  %-10s %s | words:%s | json-ld:%s\n' "$name" "$meta" "$words" "$jsonld"

    if [[ "$name" == "GPTBot" || "$name" == "ClaudeBot" ]] && [[ "$words" -lt "$MIN_WORDS" ]]; then
      suspect_csr=1
    fi
  done

  # Heuristic: if JS-blind AI bots see a near-empty shell, the page is likely CSR.
  if [[ "$suspect_csr" -eq 1 ]]; then
    echo "  ⚠️  LIKELY CLIENT-SIDE RENDERED — AI crawlers see <${MIN_WORDS} words of content."
    echo "      Fix: SSR/SSG/ISR so content, links, and JSON-LD are in the initial HTML."
    overall_rc=1
  else
    echo "  ✓ Content appears present in raw HTML for AI crawlers."
  fi
  echo
done

exit "$overall_rc"
