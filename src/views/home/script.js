'use strict';

export default {
  name: 'home',

  head() {
    return {
      title: 'home title',
      meta: [
        { vmid: 'description', name: 'description', content: 'home description' },
        { vmid: 'og:title', property: 'og:title', content: 'home og:title' },
        { vmid: 'og:description', property: 'og:description', content: 'home og:description' },
        { vmid: 'og:image', property: 'og:image', content: 'home og:image' }
      ]
    }
  }
}