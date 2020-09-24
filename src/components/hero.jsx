import React from "react"
import "../styles/style.scss"
// import { TgImage, MsgImage } from "./image"
import tgLogo from "../images/tg.png"
import msgLogo from "../images/messenger.png"

const Hero = () => {
  return (
    <div className="app">
      <div className="heading buttons">
        <h1 className="title">FFmemes</h1>
        <div className="sub_title">
          <i>infnite personalized meme feed</i>
        </div>
      </div>
      <div className="split-zone">
        <div className="left-side">
          <button>
            <span>
              <a
                className="ref-link"
                href="https://m.me/ffmemesbot"
                target="blank"
              >
                Open in <b>Messenger</b>
              </a>
            </span>
            <img className="app-logo" src={msgLogo} />
          </button>
        </div>
        <div className="right-side">
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
    </div>
  )
}

export default Hero
