import { useEffect, useRef, useState } from 'react'
import play from '../../assets/play.png'
import pause from '../../assets/pause.png'

/**
 * 视频组件
 * @param {string}  src 视频地址
 * @param {string} poster 封面图
 *
 */
const HsVideo = ({ src, poster }) => {
  const vdo = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // 播放视频
  const playVideo = () => {
    if (isPlaying) {
      vdo.current.pause()
      return setIsPlaying(false)
    }

    vdo.current.play()
    setIsPlaying(true)
  }

  if (!src) return null

  return (
    <div className="videocontainer">
      {isPlaying ? (
        <img src={pause} className="pause" onClick={playVideo}></img>
      ) : (
        <img src={play} className="play" onClick={playVideo}></img>
      )}
      <video poster={poster} ref={vdo}>
        <source src={src} type="video/mp4"></source>
        <source src={src} type="video/ogg"></source>
      </video>
    </div>
  )
}

export default HsVideo
