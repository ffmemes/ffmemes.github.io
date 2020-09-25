import React from "react"
import "../styles/style.scss"
import SEO from "../components/seo"
import { Link } from "gatsby"

const About = () => {
  return (
    <div>
      <SEO title="Home" />
      <main>
        <div className="about">
          <div className="mt-15 ml-15">
            <Link to="/">←Back</Link>
          </div>
          <div className="heading">
            <div className="title">About</div>
            <div className="sub_title">
              Everything you wanted to know about FFmemes
            </div>
          </div>

          <div className="content">
            <div className="about_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              quibusdam voluptates laboriosam pariatur expedita culpa hic
              veritatis aliquid corporis sunt? Sequi nulla cumque dolorem, vel
              quos laborum neque quo dolorum hic, facere culpa ipsum numquam non
              vitae, cum necessitatibus! Nostrum qui illum, adipisci placeat
              temporibus at id amet maxime dolorum!
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center">
        ffmemes 2020 | <a href="/about">About</a>
      </footer>
    </div>
  )
}

export default About
