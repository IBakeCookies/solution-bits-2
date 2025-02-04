import { describe, it, expect } from 'vitest'
import { transformCocktailApiToCocktailApp } from '@business/transform/cocktailTransform'
import { cocktailMockApi } from '@data/mock/api/cocktailMockApi'
import { cocktailMockApp } from '@data/mock/app/cocktailMockApp'

describe('transformCocktailApiToCocktailApp', () => {
  it('should properly transform', () => {
    expect(transformCocktailApiToCocktailApp(cocktailMockApi)).toEqual(cocktailMockApp)
  })
})
