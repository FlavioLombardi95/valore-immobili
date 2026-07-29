'use client'

/* Hallmark · design-system: DESIGN.md · component: MonzaQuartieriMapClient
 * Real OSM map: Monza boundary + quartiere markers from OSM/Nominatim
 */
import type { Feature, FeatureCollection, Geometry, Point, Polygon, MultiPolygon } from 'geojson'
import L from 'leaflet'
import { useEffect } from 'react'
import { CircleMarker, GeoJSON, MapContainer, Popup, useMap } from 'react-leaflet'
import { OsmTileLayer } from '@/components/maps/OsmTileLayer'
import quartieriData from '@/data/monza-quartieri.json'
import 'leaflet/dist/leaflet.css'

type QuartiereProps = {
  id: string
  name: string
}

type QuartieriFile = {
  boundary: Feature<Polygon | MultiPolygon, { id: string; name: string }>
  features: Feature<Point, QuartiereProps>[]
}

function FitBoundary({ boundary }: { boundary: Feature }) {
  const map = useMap()
  useEffect(() => {
    const layer = L.geoJSON(boundary as Feature)
    const bounds = layer.getBounds()
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [28, 28], maxZoom: 13 })
    }
  }, [boundary, map])
  return null
}

export function MonzaQuartieriMapClient() {
  const data = quartieriData as QuartieriFile
  const points = {
    type: 'FeatureCollection',
    features: data.features,
  } as FeatureCollection<Point, QuartiereProps>

  return (
    <MapContainer
      center={[45.5845, 9.2749]}
      zoom={12}
      scrollWheelZoom={false}
      className="h-[min(70vw,420px)] w-full sm:h-[440px]"
      aria-label="Mappa OpenStreetMap dei quartieri di Monza"
    >
      <OsmTileLayer />
      <FitBoundary boundary={data.boundary} />
      <GeoJSON
        data={data.boundary as FeatureCollection | Feature}
        style={{
          color: '#a63b00',
          weight: 2,
          fillColor: '#f26522',
          fillOpacity: 0.08,
        }}
      />
      {points.features.map((feature) => {
        const [lng, lat] = feature.geometry.coordinates
        return (
          <CircleMarker
            key={feature.properties.id}
            center={[lat, lng]}
            radius={8}
            pathOptions={{
              color: '#005fac',
              weight: 2,
              fillColor: '#f26522',
              fillOpacity: 0.9,
            }}
          >
            <Popup>
              <strong>{feature.properties.name}</strong>
            </Popup>
          </CircleMarker>
        )
      })}
    </MapContainer>
  )
}
