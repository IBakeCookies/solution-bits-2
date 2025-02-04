import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Cocktail from '@atom/Cocktail.vue'
import { cocktailMockApp } from '@data/mock/app/cocktailMockApp'

describe('Cocktail', () => {
  it('renders properly', () => {
    const wrapper = mount(Cocktail, { props: { cocktail: cocktailMockApp } })

    expect(wrapper.text()).toContain(cocktailMockApp.name)
    expect(wrapper.text()).toContain(cocktailMockApp.alcoholic)
    expect(wrapper.text()).toContain(cocktailMockApp.glass)
    expect(wrapper.text()).toContain(cocktailMockApp.instructions)
    expect(wrapper.text()).toContain(cocktailMockApp.ingredients[0].ingredient)
    expect(wrapper.text()).toContain(cocktailMockApp.ingredients[0].measure)
    expect(wrapper.find('img').attributes('src')).toBe(cocktailMockApp.thumbnail)
  })
})
