import React from "react"
import "../styles/style.scss"

const Hero = () => {
  return (
    <div className="app">
      <div className="title">FFmemes</div>
      <div className="sub_title">infnite personalized meme feed</div>
      <div className="split-zone">
        <div className="left-side">
          <button>Open in Messenger</button>
        </div>
        <div className="right-side">
          <button>Open in Telegram</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
