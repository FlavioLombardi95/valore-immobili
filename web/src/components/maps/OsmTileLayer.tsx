'use client'

/* Hallmark · design-system: DESIGN.md · component: OsmTileLayer
 * Free OpenStreetMap tiles (no API key)
 */
import { TileLayer } from 'react-leaflet'

export function OsmTileLayer() {
  return (
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      maxZoom={19}
    />
  )
}
