import { getAppleMapsUrlForFeature, readGoogleMapsSavedPlaces } from './utils';

const filePath = '';

(async () => {
  const fc = await readGoogleMapsSavedPlaces(filePath);
  console.log(fc.features.map(getAppleMapsUrlForFeature).join('\n')); /* ? */
})();
