import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import type { Location } from '~/types/timeline'

// Fix for default marker icon in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

interface MapComponentProps {
  location: Location
}

export default function MapComponent({ location }: MapComponentProps) {
  return (
    <div className="h-64 w-full rounded-2xl overflow-hidden">
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={17}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.lat, location.lng]}>
          <Popup>
            <div className="text-center">
              <p className="font-semibold text-pink-pastel-700">{location.name}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
