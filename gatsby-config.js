module.exports = {
  siteMetadata: {
    title: 'CR Coding',
    description: 'Free Coding Lessons',
    keywords: 'Coding, kickstart, crcoding, gulliver preparatory, gulliver academy'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'msgwwgrjg3be',
        accessToken: '0VXMvj82TZrG4n4SEolRhKACDhifDuOXf13L33w2qb8'
      }
    }
  ],
}
