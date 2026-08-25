#!/usr/bin/env python3
"""Submit URLs to IndexNow (Bing / Yandex / etc.)."""
from __future__ import annotations

import json
import sys
import urllib.request

HOST = "valore-immobili.it"
KEY = "1dd1bcd5e28044dc909d1b941acf3ff1"
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"

DEFAULT_URLS = [
  f"https://{HOST}/valore-al-metro-quadro-monza",
  f"https://{HOST}/costo-vendere-casa-monza",
  f"https://{HOST}/classe-energetica-valore-casa",
  f"https://{HOST}/ristrutturare-prima-di-vendere",
  f"https://{HOST}/comprare-casa-monza",
  f"https://{HOST}/valutazione-online-o-sopralluogo",
  f"https://{HOST}/monza",
  f"https://{HOST}/vendere-casa-monza",
  f"https://{HOST}/valutazione/ville-brianza",
  f"https://{HOST}/sitemap.xml",
]


def main() -> int:
  urls = sys.argv[1:] or DEFAULT_URLS
  payload = {
    "host": HOST,
    "key": KEY,
    "keyLocation": KEY_LOCATION,
    "urlList": urls,
  }
  req = urllib.request.Request(
    "https://api.indexnow.org/indexnow",
    data=json.dumps(payload).encode(),
    headers={"Content-Type": "application/json; charset=utf-8"},
    method="POST",
  )
  try:
    with urllib.request.urlopen(req, timeout=30) as resp:
      print("status", resp.status)
      body = resp.read().decode()
      if body:
        print(body)
  except Exception as e:
    if hasattr(e, "read"):
      print("ERR", getattr(e, "code", "?"), e.read().decode())
    else:
      print("ERR", e)
    return 1
  print(f"submitted {len(urls)} urls")
  return 0


if __name__ == "__main__":
  raise SystemExit(main())
