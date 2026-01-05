export interface Media {
  type: 'image' | 'video'
  src: string
  alt: string
}

export interface Location {
  lat: number
  lng: number
  name: string
}

export interface Moment {
  id: string
  title: string
  date: string
  place: string
  location: Location
  description: string
  media: Media[]
}

export interface TimelineData {
  moments: Moment[]
}
