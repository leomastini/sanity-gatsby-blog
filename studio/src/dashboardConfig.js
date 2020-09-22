export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6a357c4a73fd14d197cc87',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6fokso4g',
                  apiId: '4be0affd-1abc-4517-82e8-fa923ea25cce'
                },
                {
                  buildHookId: '5f6a357d4546f512d50aa855',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-iqztxckz',
                  apiId: '8fe385c2-57f6-41fc-9af8-e3d5aec372a0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leomastini/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-iqztxckz.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
