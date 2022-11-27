import React from 'react'
import Layout from "../components/Layout";
import * as styles from '../styles/project-details.module.css'
import { graphql } from 'gatsby'

export default function ProjectDetails({ data }) {

  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
	<Layout>
	  <div className={styles.details}>
		<h2>{ title }</h2>
		<h3>{ stack }</h3>
		<div className={styles.featured}>
		  {/*{ featuredImg }*/}
		  이미지
		</div>
		<div dangerouslySetInnerHTML={{ __html: html }} className={styles.html}/>
	  </div>
	</Layout>
  )
}

export const query = graphql`
	query ProjectDetail($slug: String) {
		markdownRemark(frontmatter: {slug: { eq: $slug}}) {
			html
			frontmatter {
				stack
				title
				featuredImg {
					childImageSharp {
						fluid {
							src
						}
					}
				}
			}
		}
	}
`
