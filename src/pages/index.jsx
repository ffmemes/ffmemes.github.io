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
    <footer className="text-center">
      ffmemes 2020 | <a href="#">About</a>
    </footer>
  </>
)

export default IndexPage
