import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Table from '../components/table'

import './portfolio.scss';

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Past Roles</h1>
    <div className="tables-container">
      <h2>Games</h2>
      <Table
        head={[
          'Game', 'Developer', 'Role'
        ]}
        rows={[
          ['Team Fortress 2', 'Valve', 'Davey Jones'],
          ['Concerns', 'MrMakistein', 'Detective'],
          ['My Time At Portia', 'Pathea Games', 'Django'],
          ['VR Flush', 'Brudingo Team', 'Businessman'],
          ['Eastshade', 'Eastshade Studios', 'Park Ranger, Ingov'],
          ['Reality Falls', 'Lewis Denby', 'Lukas'],
          ['Industria', 'Bleakmill', 'Walter Rebel'],
          ['Lilith Odyssey', 'Jun & Pate', 'Various Radio'],
          ['Switch & Ditch', 'Tempera Games', 'Fighters'],
          ['Phobos', 'TFuture', 'Computer'],
          ['Wallachia Reign of Dracula', 'Migami Games', 'Father'],
          ['Bunker Busters', 'Amusudan', 'Grunts'],
        ]} 
      />
      <br/>
      <h2>Animations</h2>
      <Table
        head={[
          'Animation', 'Animator', 'Role'
        ]}
        rows={[
          ['My Pizza Family Ep 1', 'Lonnie Marts III', 'Nate, Pepperoni'],
          ['The Ice Cream Mann', 'Mittens', 'Heavy, Sniper, Demo'],
          ['Black Dust', 'Secrios', 'Spencer'],
          ['A Baby Trouble', 'HoovyTube', 'Heavy'],
          ['The Scout who Never Gave Up', 'HoovyTube', 'Heavy, Sniper'],
          ['Second Bananmus', 'Uberchain', 'Heavy'],
          ['The Importance of Biology', 'Mittens', 'Kermit'],
        ]} 
      />
      <br/>
      <h2>Narration</h2>
      <Table
        head={[
          'Video', 'Company'
        ]}
        rows={[
          ['Boreal Alyph November Update', 'Keep Away From Fire'],
          ['Road To Valve', 'MechaFourth'],
        ]} 
      />
    </div>
  </Layout>
)

export default Portfolio
