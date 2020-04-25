import React from "react"
import Fuse from "fuse.js"
import { useStaticQuery, graphql } from "gatsby"
import AppCart from './app-card'

import './app-list.scss'

const AppList = ({ query }) => {
  const appListData = useStaticQuery(graphql`
    query AppListQuery {
      allAppListCsv {
        edges {
          node {
            id
            Name
            Organization
            Official_Site
            IsE2EE
            IsOSS
            IsServerOSS
            By_default
            Refs
            Source
            Million_users
          }
        }
      }
    }
  `)

  const allApps = appListData.allAppListCsv.edges.map(edge => edge.node);
  
  let apps = allApps;
  if(query){
    const fuse = new Fuse(allApps, {
      threshold: 0.2,
      keys: ['Name']
    })
    apps = fuse.search(query).map(result => result.item);
  }

  const list = apps.map((app) => {
    return <AppCart app={app} />
  });

  return (
    <ul id="app-list">
      {list}
    </ul>
  )
}

export default AppList
