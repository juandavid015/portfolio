'server-only'
// this code is intended to be executed on the server side.
// It's a way to specify that the code should not be included
// in the client-side bundle when the application is built.
import type { Locale } from './i18n-config'

// Define a dictionary of functions that import language-specific JSON dictionaries
// the
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default)
}

export const getDictionary = async (locale: Locale) => {
  // Attempt to retrieve the dictionary function for the specified locale.
  // If not found or if there is an issue with the dynamic import, fall back to English.
  const dictionaryFunction = dictionaries[locale]?.() ?? dictionaries.en()
  return dictionaryFunction
}
