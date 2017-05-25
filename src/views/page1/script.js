'use strict';

export default {
  name: 'page1',

  head() {
    return {
      title: 'page1 title',
      meta: [
        { vmid: 'description', name: 'description', content: 'page1 description' },
        { vmid: 'og:title', property: 'og:title', content: 'page1 og:title' },
        { vmid: 'og:description', property: 'og:description', content: 'page1 og:description' },
        { vmid: 'og:image', property: 'og:image', content: 'page1 og:image' }
      ]
    }
  }
}