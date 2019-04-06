/** A 2-tuple with a geo coordinate's longitude and latitude, in that order. */
export type LongLatTuple = [number, number];

export interface GeoCoordinates {
  Latitude: number;
  Longitude: number;
}

export interface PointGeometry {
  type: 'Point';
  coordinates: LongLatTuple;
}

export type Location = Partial<{
  Address: string;
  'Business Name': string;
  'Country Code': string;
  'Geo Coordinates': GeoCoordinates;
}>;

export type FeatureProperties = Partial<{
  'Google Maps URL': string;
  Location: Location;
  Published: string;
  Title: string;
  Updated: string;
}>;

export interface Feature {
  type: 'Feature';
  geometry: PointGeometry;
  properties: FeatureProperties;
}

export interface FeatureCollection {
  type: 'FeatureCollection';
  features: Feature[];
}
