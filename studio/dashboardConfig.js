export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '60d374b439185b1918402be8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xpuat5w6',
                  apiId: 'f5c57c18-8eb4-4134-aa94-ebc0f76900b0'
                },
                {
                  buildHookId: '60d374b449b0f5184f2583eb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-4kp3bxfd',
                  apiId: '70a1cf37-5644-4a14-b32b-07c51351b93f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cmssanitydev/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-4kp3bxfd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
