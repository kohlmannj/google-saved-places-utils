import { promises } from 'fs';
import { FeatureCollection, Feature } from './types';

export async function readGoogleMapsSavedPlaces(filePath: string) {
  const contents = await promises.readFile(filePath);
  return JSON.parse(contents.toString()) as FeatureCollection;
}

/**
 * Get an Apple Maps URL for the specified Feature.
 *
 * @see https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/MapLinks/MapLinks.html
 *
 * @param f the Google Maps Feature for which to generate an Apple Maps location URL
 * @returns an Apple Maps location URL
 */
export function getAppleMapsUrlForFeature({ properties: { Location, Title } }: Feature): string {
  const appleMapsUrl = new URL('https://maps.apple.com/');

  if (Title) {
    appleMapsUrl.searchParams.append('q', Title);
  }

  if (Location && Location['Geo Coordinates']) {
    const { Latitude, Longitude } = Location['Geo Coordinates'];
    appleMapsUrl.searchParams.append('near', [Latitude, Longitude].join(','));
  }

  return appleMapsUrl.toString();
}
