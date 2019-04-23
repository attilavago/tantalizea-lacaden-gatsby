module.exports = {
    siteMetadata: {
        title: `Tantalizea | Graphic Designer`,
        siteUrl: `https://www.tantalizea.com/`,
        description: `Tantalizea Lacaden homepage`,
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`
    ]
}