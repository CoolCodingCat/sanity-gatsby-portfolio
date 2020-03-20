export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5e74d4a87d508376b918f8e9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zqw32u2k',
                  apiId: '74ffff48-0fd4-4a85-95ef-ef789614f005'
                },
                {
                  buildHookId: '5e74d4a8a020cdd6cc6211ae',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9f16nhq5',
                  apiId: '21d982aa-5efe-4a7b-aca6-bac4a992de0f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CoolCodingCat/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9f16nhq5.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
