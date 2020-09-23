import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Hero from "../components/hero"

import "../styles/style.scss"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <main>
      <Hero />
    </main>
    <footer>ffmemes 2020</footer>
  </>
)

export default IndexPage
