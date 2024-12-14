import * as React from "react"
import { graphql } from "gatsby"
import Carousel from '../components/Carousel'

import Layout from "../components/layout"
import Seo from "../components/seo"

function Vincents({data}) {
  console.log(data)
  const images = data.allFile.edges.map((item) => {
    // console.log(item)
    return item.node
  })
  console.log(images)
return (
  <Layout>
    <Carousel images={images} />
    
  </Layout>
)
}


export const Head = () => <Seo title="Vincents" />

export default Vincents

export const query = graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "bikes/vincent"}}) {
      totalCount
      edges {
        node {
          childImageSharp {
            gatsbyImageData
          }
          name
        }
      }
    }
  }
`