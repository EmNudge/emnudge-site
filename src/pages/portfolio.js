import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Table from '../components/table'

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Portfolio</h1>
    <Table rows={[
      ['Concerns', 'MrMakistein', 'Detective'],
      ['Team Fortress 2', 'Valve', 'Davey Jones'],
      ['VR Flush', 'Brudingo Team', 'Businessman'],
      ['My Time At Portia', 'Pathea Games', 'Django'],
      ['Phobos', 'TFuture', 'Computer'],
      ['Switch & Ditch', 'Tempera Games', 'Fighters'],
      ['Eastshade', 'Eastshade Studios', 'Park Ranger, Ingov'],
    ]} />
  </Layout>
)

export default Portfolio
