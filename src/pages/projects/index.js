import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/project.module.css'
import { graphql, Link } from 'gatsby'

export default function Projects({ data }) {

  const projects = data.allMarkdownRemark.nodes

  return (
	<Layout>
	  <div className={styles.portfolio}>
		<h1>Projects</h1>
		<h3>Projects & Websites I've Created</h3>
		<div className={styles.projects}>
		  { projects.map(project => (
			<Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
			  <img src={project.frontmatter.thumb.childImageSharp.fluid.src} alt="" width={'100%'}/>
			  <div>
				<h3>{ project.frontmatter.title }</h3>
				<p>{ project.frontmatter.stack }</p>
			  </div>
			</Link>
		  ))}
		</div>
	  </div>
	</Layout>
  )
}

// export page query
export const query = graphql`
  query ProjectsPage {
	allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
	  nodes {
		frontmatter {
		  slug
		  stack
		  title
		  date
		  thumb {
		  	childImageSharp {
		  		fluid {
		  			src
		  		}
		  	}
		  }
		}
		id
	  }
  	}
  	site {
    	siteMetadata {
    		contact
    	}
    }
  }
`
