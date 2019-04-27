const path = require('path');

module.exports.createPages = async({graphql, actions}) => {
    const {createPage} = actions;
    const portfolioItemTemplate = path.resolve('./src/templates/portfolioItem.js');
    const response = await graphql(`
        query {
            allContentfulPortfolioItem {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    response.data.allContentfulPortfolioItem.edges.forEach(edge => {
        createPage({
            component: portfolioItemTemplate,
            path: `/portfolio/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    });
}