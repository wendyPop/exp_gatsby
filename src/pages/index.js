import * as React from "react"
// import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import '../styles/global.css'
import * as styles from '../styles/home.module.css'
import {graphql, Link} from 'gatsby'
import { GatsbyImage, getImage }  from "gatsby-plugin-image"

export default function Home({ data }) {

  const image = getImage(data.mobileHeroImage)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer</p>
          <Link className={styles.btn} to={'/projects'}>My PortFolio Projects</Link>
        </div>
        {/*<img src="/banner.png" alt="site banner" style={{maxWidth: '100%'}}/>*/}
        <GatsbyImage image={ image } alt=""/>
      </section>
    </Layout>
  )
}

// 먼저 실행되어 컴포넌트의 props 로 내려간다.
// export const query = graphql`
//   query SiteInfo {
//     site {
//       siteMetadata {
//         description
//         title
//       }
//     }
//   }
// `

// 옛날 버전 이미지 가져오기
// export const query = graphql`
//   query Banner {
//     file(relativePath: {eq: "banner.png"}) {
//       id
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
//   `
export const mobileHeroImage = graphql`
  fragment mobileHeroImage on File {
     childImageSharp {
       gatsbyImageData(
         width: 500
         placeholder: BLURRED
         formats: [AUTO]
       )
     }
  }
`;

export const query = graphql`
  query {
    mobileHeroImage: file(relativePath: { eq: "banner.png" }) {
      ...mobileHeroImage
    }
  }
`;
