import React from "react"
import "../styles/style.scss"
import tgLogo from "../images/tg.png"

const Hero = () => {
  return (
    <div className="app">
      <div className="heading">
        <h1 className="title">FFmemes</h1>
        <div className="sub_title">
          <i>infinite personalized meme feed</i>
        </div>
      </div>
      <div className="split-zone">
        <button>
          <span>
            <a
              className="ref-link"
              href="https://t.me/ffmemesbot?start=ffmemescom"
              target="blank"
            >
              Open in <b>Telegram</b>
            </a>
          </span>
          <img className="app-logo" src={tgLogo} />
        </button>
      </div>
    </div>
  )
}

export default Hero
