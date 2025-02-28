import { useEffect, useRef, useState } from 'react'
import { HsSwiper, HsVideo } from '../../components/index.jsx'
import './index.less'

// 静态资源
import banner__bg from '../../assets/banner_bg.png'
import curryrice from '../../assets/curryrice.png'
import logo from '../../assets/logo.png'
import line from '../../assets/line.png'
import fat from '../../assets/fat.png'
import spoon from '../../assets/spoon.png'
import zero from '../../assets/zero.png'
import currcybox from '../../assets/currcybox.png'
import abouths__bg from '../../assets/abouths__bg.png'
import btn__bg from '../../assets/btn__bg.png'
import btn__bg1 from '../../assets/btn__bg1.png'
import icon_right from '../../assets/icon_right.png'
import icon_right1 from '../../assets/icon_right1.png'
import aboutbmd__titlebg from '../../assets/aboutbmd__titlebg.png'
import classic__titlebg from '../../assets/classic__titlebg.png'
import abouths__titlebg from '../../assets/abouths__titlebg.png'
import classroom__titlebg1 from '../../assets/classroom__titlebg1.png'
import classroom__titlebg2 from '../../assets/classroom__titlebg2.png'
import bee1 from '../../assets/bee1.png'
import bee2 from '../../assets/bee2.png'
import demo from '../../assets/demo.png'
import step1 from '../../assets/step1.png'
import step2 from '../../assets/step2.png'
import step3 from '../../assets/step3.png'
import chickenrice__bg from '../../assets/chickenrice__bg.png'
import chickenrice__desc from '../../assets/chickenrice__desc.png'
import chickenrice__content from '../../assets/chickenrice.png'
import fancy__titlebg from '../../assets/fancy__titlebg.png'
import blockbg from '../../assets/block.png'
import chocolate from '../../assets/chocolate.png'
import totop from '../../assets/totop.png'
import coriander from '../../assets/coriander.png'
import xianggu from '../../assets/xianggu.png'
import rice from '../../assets/rice.png'
import swiper1 from '../../assets/swiper1.png'
import swiper_left from '../../assets/swiper_left.png'
import swiper_right from '../../assets/swiper_right.png'
import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'

const Home = () => {
  const _step1 = useRef(null)
  const _step2 = useRef(null)
  const _step3 = useRef(null)
  const block = useRef(null)
  const _bee = useRef(null)
  // const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    // 创建 IntersectionObserver 实例
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Array.from(entry.target.children).map((dom) => {
            dom.classList.add('show')
          })
          // setIsInView(true)
        } else {
          Array.from(entry.target.children).map((dom) => {
            dom.classList.remove('show')
          })
          // setIsInView(false)
        }
      })
    })

    // 观察目标元素
    if (_step1.current) observer.observe(_step1.current)
    if (_step2.current) observer.observe(_step2.current)
    if (_step3.current) observer.observe(_step3.current)
    if (block.current) observer.observe(block.current)
    // if (_bee.current) observer.observe(_bee.current)

    // 清理工作
    return () => {
      if (_step1.current) observer.unobserve(_step1.current)
      if (_step2.current) observer.unobserve(_step2.current)
      if (_step3.current) observer.unobserve(_step3.current)
      if (block.current) observer.observe(block.current)
      // if (_bee.current) observer.unobserve(_bee.current)
      // window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // // 处理滚动时动态更新元素的位置
  // const handleScroll = () => {
  //   const scrollOffset = window.scrollY
  //   _bee.current.style.transform = `translateY(${scrollOffset / 10}px)`
  // }

  // useEffect(() => {
  //   if (isInView) {
  //     // 监听滚动事件
  //     window.addEventListener('scroll', handleScroll)
  //   }
  // }, [isInView])

  // 返回顶部
  const backtotop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  return (
    <div className="Home">
      {/* banner区域 */}
      <div className="banner">
        <img src={banner__bg} className="banner__bg"></img>
        <img src={curryrice} className="banner__curryrice"></img>
        <img src={logo} className="banner__logo"></img>
        <img src={line} className="banner__line"></img>
        <img src={fat} className="banner__fat"></img>
        <img src={spoon} className="banner__spoon"></img>
        <img src={zero} className="banner__zero"></img>
        <img src={currcybox} className="banner__currcybox"></img>

        {/* 宣传语 */}
        <div className="banner__slogan">
          <div className="slogan__desc">大家很喜欢</div>
          <div className="slogan__desc">一盘超满足</div>
        </div>

        {/* 按钮区域 */}
        <div className="banner__guide">
          <a className="guide__list" href="#classic">
            <div className="list__title">经典菜谱</div>
            <div className="list__dsc">～新手必看～</div>
          </a>
          <a className="guide__list" href="#fancy">
            <div className="list__title">花式菜谱</div>
            <div className="list__dsc">～进阶必看～</div>
          </a>
          <a className="guide__list" href="#classroom">
            <div className="list__title">日式咖喱课堂</div>
            <div className="list__dsc">～知识轻松学～</div>
          </a>
          <a className="guide__list" href="#aboutbmd">
            <div className="list__title">关于百梦多</div>
            <div className="list__dsc">～品牌大揭秘～</div>
          </a>
          <a className="guide__list" href="#abouths">
            <div className="list__title">关于好侍</div>
            <div className="list__dsc">～活动全知晓～</div>
          </a>
        </div>
      </div>

      {/* 经典菜谱 */}
      <div className="classic" id="classic">
        <img src={classic__titlebg} className="classic__titlebg"></img>
        <div className="classic__title">经典菜谱</div>
        <div className="classic__desc">制作简单 无需其他调料</div>
        <img src={bee1} className="classic__bee"></img>
        <img src={chocolate} className="classic__chocolate"></img>

        <div className="classic__chickenrice">
          <img src={chickenrice__bg} className="chickenrice__bg"></img>
          <img src={chickenrice__desc} className="chickenrice__desc"></img>
          <div className="chickenrice__content">
            <HsVideo src={video1} poster={chickenrice__content}></HsVideo>
          </div>
        </div>
      </div>

      {/* 花式菜谱 */}
      <div className="fancy" id="fancy">
        <img src={fancy__titlebg} className="fancy__titlebg" />
        <div className="fancy__title">花式菜谱</div>
        <div className="fancy__desc">使用各类食挑战多样咖喱食谱</div>
        <div className="btn fancy__more">
          <img src={btn__bg}></img>
          <img src={icon_right1} className="fancy__icon"></img>
          <div className="btn__desc ">更多百梦多菜谱</div>
        </div>
      </div>

      {/* 空区域 */}
      <img src={blockbg} className="block"></img>

      {/* 日式咖喱课堂 */}
      <div className="classroom" id="classroom">
        <img src={classroom__titlebg1} className="classroom__titlebg1" />
        <img src={classroom__titlebg2} className="classroom__titlebg2" />
        <div className="classroom__title">日式咖喱课堂</div>
        <img src={bee2} className="classroom__bee" ref={_bee} />
        <img src={coriander} className="classroom__coriander" />
        <img src={xianggu} className="classroom__xianggu" />
        <div className="classroom__content" ref={block}>
          <div className="content__block1 content__block">
            <div className="content__tips">咖喱从日本明治时代初期到现在</div>
            <div className="content__tips">
              经过不断地改良，被越来越多的人接受
            </div>
            <div className="content__tips">
              成为了日本人民非常喜欢的食品之一
            </div>
          </div>
          <div className="content__block2 content__block">
            <div className="content__tips">为什么咖喱会成为</div>
            <div className="content__tips">大家不可或缺的国民食品呢?</div>
            <div className="content__tips">让我们来看看独属于咖喱的魅力吧</div>
          </div>
        </div>

        <div className="classroom__ricewrap">
          <img src={rice} className="classroom__rice" />
        </div>

        <div className="btn classroom__btn">
          <img src={btn__bg1}></img>
          <img src={icon_right} className="classroom__icon"></img>
          <div className="btn__desc ">成为咖喱达人吧</div>
        </div>
      </div>

      {/* 波浪动画 */}
      <div className="wave"></div>

      {/* 关于百梦多 */}
      <div className="aboutbmd" id="aboutbmd">
        <img src={aboutbmd__titlebg} className="aboutbmd__titlebg"></img>
        <div className="aboutbmd__title">关于百梦多</div>
        <img src={demo} className="aboutbmd__demo"></img>
        <div className="showmodule" ref={_step1}>
          <img src={step1} className="aboutbmd__step1"></img>
        </div>
        <div className="showmodule" ref={_step2}>
          <img src={step2} className="aboutbmd__step2"></img>
        </div>
        <div className="showmodule" ref={_step3}>
          <img src={step3} className="aboutbmd__step3"></img>
        </div>
        {/* 百梦多品牌宣传片 */}
        <div className="aboutbmd__brand">
          <div className="brand__title">百梦多品牌宣传片</div>
          <div className="brand__videocontainer">
            <HsVideo src={video2} poster={swiper1}></HsVideo>
          </div>
        </div>
      </div>

      {/* 关于好侍 */}
      <div className="abouths" id="abouths">
        <img src={abouths__titlebg} className="abouths__titlebg" />
        <img src={abouths__bg} className="abouths__bg"></img>
        <div className="abouths__title">关于好侍</div>
        {/* 轮播 */}
        <div className="abouths__swipercontainer">
          <HsSwiper
            slides={[swiper1, swiper1, swiper1]}
            Navi={() => {
              return (
                <>
                  <img src={swiper_left} className="abouths__prev"></img>
                  <img src={swiper_right} className="abouths__next"></img>
                </>
              )
            }}
          ></HsSwiper>
          <div className="swiper__tips">点击上方轻松了解更多活动哦~</div>
        </div>
        <div className="btn abouths__backhome">
          <img src={btn__bg}></img>
          <div className="btn__desc ">进入官网首页</div>
        </div>
      </div>

      {/* 返回顶部 */}
      <div className="totop" onClick={backtotop}>
        <img src={totop} className="totop__icon"></img>
        <div>TOP</div>
      </div>
    </div>
  )
}

export default Home
