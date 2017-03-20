export const i18nReducer = (state = {
  translations: {}
}, action) => {

  if (action.type === 'UPDATE') {
    return {
      ...state,
      translations: action.payload
    }
  }

  return state
}
