import React from "react"
import "../styles/style.scss"
// import { TgImage, MsgImage } from "./image"
import tgLogo from "../images/tg.png"
import msgLogo from "../images/messenger.png"

const Hero = () => {
  return (
    <div className="app">
      <div className="heading">
        <h1 className="title">FFmemes</h1>
        <div className="sub_title">
          <i>infnite personalized meme feed</i>
        </div>
      </div>
      <div className="split-zone">
        <div className="left-side">
          <button>
            <span>
              Open in <b>Messenger</b>
            </span>
            <img className="app-logo" src={msgLogo} />
          </button>
        </div>
        <div className="right-side">
          <button>
            <span>
              Open in <b>Telegram</b>
            </span>
            <img className="app-logo" src={tgLogo} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
