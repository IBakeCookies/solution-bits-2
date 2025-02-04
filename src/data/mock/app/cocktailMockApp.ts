import type { CocktailApp } from '@data/type/app/cocktailApp'

export const cocktailMockApp: CocktailApp = {
  name: 'Margarita',
  category: 'Ordinary Drink',
  alcoholic: 'Alcoholic',
  glass: 'Cocktail glass',
  instructions:
    'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
  ingredients: [
    {
      ingredient: 'Tequila',
      measure: '1 1/2 oz ',
    },
    {
      ingredient: 'Triple sec',
      measure: '1/2 oz ',
    },
    {
      ingredient: 'Lime juice',
      measure: '1 oz ',
    },
    {
      ingredient: 'Salt',
      measure: '',
    },
  ],
  thumbnail: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
}
