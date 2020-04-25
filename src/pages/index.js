import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import './index.css'
import AppList from "../components/app-list"

const IndexPage = () => {

  const [query, setQuery] = useState('');
  const [example, setExample] = useState('Signal');
  
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
        }
      }
      allAppListCsv {
        edges {
          node {
            Name
          }
        }
      }
    }
  `)

  const search = (event) => {
    const query = event.target.value;
    setQuery(query);
  }

  const changeExample = () => {
    const numberItems = data.allAppListCsv.edges.length;
    const randIndex = Math.floor(Math.random() * (numberItems));
    const selectedApp = data.allAppListCsv.edges[randIndex].node;
    setExample(selectedApp.Name);
    setTimeout(() => {
      changeExample()
    }, 2000)
  }

  useEffect(() => {
    changeExample();
  }, []);
  
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} />
      <h1>Is <input onChange={search} placeholder={"e.g. " + example} /> E2E Encrypted?</h1>
      <AppList query={query}/>
    </Layout>
  )
}

export default IndexPage
