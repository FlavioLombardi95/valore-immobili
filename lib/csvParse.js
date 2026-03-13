/**
 * Parse CSV text (es. export Google Sheet) in array di righe (array di celle).
 */
export function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter(Boolean)
  return lines.map((line) => {
    const row = []
    let cell = ''
    let inQuotes = false
    for (let i = 0; i < line.length; i++) {
      const c = line[i]
      if (c === '"') {
        inQuotes = !inQuotes
      } else if (c === ',' && !inQuotes) {
        row.push(cell.trim())
        cell = ''
      } else {
        cell += c
      }
    }
    row.push(cell.trim())
    return row
  })
}
