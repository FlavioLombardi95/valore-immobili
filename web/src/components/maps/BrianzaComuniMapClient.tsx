'use client'

/* Hallmark · design-system: DESIGN.md · component: BrianzaComuniMapClient
 * Real OSM map with comune boundaries (Nominatim/OSM GeoJSON)
 */
import type { Feature, FeatureCollection, Geometry } from 'geojson'
import L from 'leaflet'
import { useEffect, useMemo } from 'react'
import { GeoJSON, MapContainer, useMap } from 'react-leaflet'
import { OsmTileLayer } from '@/components/maps/OsmTileLayer'
import comuniData from '@/data/brianza-comuni.json'
import { localityPath } from '@/lib/localities'
import 'leaflet/dist/leaflet.css'

type ComuneProps = {
  id: string
  name: string
}

const HREF_BY_ID: Record<string, string> = {
  monza: '/monza',
  lissone: localityPath('lissone'),
  brugherio: localityPath('brugherio'),
  villasanta: localityPath('villasanta'),
  muggio: localityPath('muggio'),
  desio: localityPath('desio'),
  concorezzo: localityPath('concorezzo'),
  'cologno-monzese': localityPath('cologno-monzese'),
  vimodrone: localityPath('vimodrone'),
  seregno: localityPath('seregno'),
  'cesano-maderno': localityPath('cesano-maderno'),
  limbiate: localityPath('limbiate'),
  vimercate: localityPath('vimercate'),
  giussano: localityPath('giussano'),
  meda: localityPath('meda'),
}

function FitBounds({ data }: { data: FeatureCollection }) {
  const map = useMap()
  useEffect(() => {
    const layer = L.geoJSON(data as FeatureCollection)
    const bounds = layer.getBounds()
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [24, 24], maxZoom: 12 })
    }
  }, [data, map])
  return null
}

function styleFor(id: string): L.PathOptions {
  if (id === 'monza') {
    return {
      color: '#a63b00',
      weight: 2,
      fillColor: '#f26522',
      fillOpacity: 0.35,
    }
  }
  return {
    color: '#005fac',
    weight: 1.5,
    fillColor: '#005fac',
    fillOpacity: 0.18,
  }
}

export function BrianzaComuniMapClient() {
  const data = comuniData as FeatureCollection<Geometry, ComuneProps>

  const onEachFeature = useMemo(
    () => (feature: Feature<Geometry, ComuneProps>, layer: L.Layer) => {
      const id = feature.properties?.id
      const name = feature.properties?.name ?? id
      const href = id ? HREF_BY_ID[id] : undefined
      if (!href || !name) return
      layer.bindPopup(
        `<strong>${name}</strong><br/><a href="${href}">Valutazione immobiliare</a>`,
      )
      layer.on({
        mouseover: (e) => {
          const target = e.target as L.Path
          target.setStyle({ weight: 3, fillOpacity: 0.4 })
          target.bringToFront()
        },
        mouseout: (e) => {
          const target = e.target as L.Path
          if (id) target.setStyle(styleFor(id))
        },
      })
    },
    [],
  )

  return (
    <MapContainer
      center={[45.5845, 9.2749]}
      zoom={11}
      scrollWheelZoom={false}
      className="h-[min(70vw,420px)] w-full sm:h-[440px]"
      aria-label="Mappa OpenStreetMap dei comuni intorno a Monza"
    >
      <OsmTileLayer />
      <FitBounds data={data} />
      <GeoJSON
        data={data}
        style={(feature) => styleFor(String(feature?.properties?.id ?? ''))}
        onEachFeature={onEachFeature}
      />
    </MapContainer>
  )
}
