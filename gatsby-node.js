const path = require('path')
// 상세페이지 탬플릿 생성
exports.createPages = async ({ graphql,  actions }) => {

  const { data } = await graphql(`
  	query Projects {
  		allMarkdownRemark {
  			nodes {
  				frontmatter {
  					slug
  				}
  			}
  		}
  	}
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
	actions.createPage({
	  path: '/projects/' + node.frontmatter.slug,
	  component: path.resolve('./src/templates/project-details.js'),
	  // context: { slug: node.frontmatter.slug }
	  context: { slug: node.frontmatter.slug }
	})
  })
}
