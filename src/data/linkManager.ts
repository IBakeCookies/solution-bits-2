export type LinkManagerKeys = keyof typeof LINKS

export const LINKS = {
  __test: 'https://test.com',
  cocktail: 'https://www.thecocktaildb.com/api/json/v1/1/search.php',
}

class LinkManager {
  private links = LINKS

  getLink(name: LinkManagerKeys): string {
    return this.links[name]
  }
}

export const linkManager = new LinkManager()
