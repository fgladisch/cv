export const i18nReducer = (state = {
  language: 'en',
  translations: {}
}, action) => {

  if (action.type === 'CHANGE_LANGUAGE') {
    const { language, translations } = action.payload
    return {
      ...state,
      language,
      translations
    }
  }

  return state
}
