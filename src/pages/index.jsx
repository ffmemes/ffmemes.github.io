import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Hero from "../components/hero"

import "../styles/style.scss"

const IndexPage = () => (
  <>
    <SEO title="FFmemes" />
    <main>
      <Hero />
    </main>
    <footer className="text-center">
      ffmemes 2020 | <Link to="/about">About</Link>
    </footer>
  </>
)

export default IndexPage
