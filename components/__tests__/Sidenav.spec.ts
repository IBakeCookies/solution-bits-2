import { describe, it, expect } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'
import Sidenav from '@atom/Sidenav.vue'

describe('Sidebar', () => {
  it('renders properly', () => {
    const cocktails = ['old russian', 'mojito']
    const wrapper = mount(Sidenav, {
      props: {
        id: '1',
        cocktails,
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })
    const text = wrapper.text()

    expect(text).toContain(cocktails[0])
    expect(text).toContain(cocktails[1])
    expect(wrapper.text()).not.toContain('margarita')
  })
})
