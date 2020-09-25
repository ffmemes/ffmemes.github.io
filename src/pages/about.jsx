import React from "react"
import "../styles/style.scss"
import SEO from "../components/seo"
import { Link } from "gatsby"

const About = () => {
  return (
    <div>
      <SEO title="About" />
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
              Get personalized meme feed in Facebook Messenger and Telegram chatbots.
              
              FFmemes shows you the memes you like based on your and other users likes and dislikes. We scrape top memes from various sources and our moderators manually filter out low quality content.
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
