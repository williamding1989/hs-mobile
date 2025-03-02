// 模块
import { useEffect, useRef, useState } from 'react'
import { HsSwiper, HsVideo } from '../../components/index.jsx'
import './index.less'

// 资源
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
import swiper_left1 from '../../assets/swiper_left1.png'
import swiper_right1 from '../../assets/swiper_right1.png'
import swiper_right from '../../assets/swiper_right.png'
import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'
import tomato from '../../assets/tomato.png'
import seefood from '../../assets/seefood.png'
import cassia from '../../assets/cassia.png'
import poster2 from '../../assets/poster2.png'
import curry1 from '../../assets/curry1.jpg'
import curry2 from '../../assets/curry2.jpg'
import curry3 from '../../assets/curry3.jpg'
import curry4 from '../../assets/curry4.jpg'
import curry5 from '../../assets/curry5.jpg'
import curry6 from '../../assets/curry6.jpg'
import aboutbg1 from '../../assets/aboutbg1.jpg'
import aboutbg2 from '../../assets/aboutbg2.jpg'

const homepage = 'https://www.housefoods.com.cn/'
const currypage = 'https://www.housefoods.com.cn/index/curry/index'
const recipepage = 'https://www.housefoods.com.cn/index/recipe/index.html'

const Home = () => {
  const _step1 = useRef(null)
  const _step2 = useRef(null)
  const _step3 = useRef(null)
  const block = useRef(null)
  const _tomato = useRef(null)
  const _seefood = useRef(null)

  const abouths__prev = useRef(null)
  const abouths__next = useRef(null)
  const fancy__prev1 = useRef(null)
  const fancy__prev2 = useRef(null)
  const fancy__next1 = useRef(null)
  const fancy__next2 = useRef(null)

  useEffect(() => {
    // 创建 IntersectionObserver 实例
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Array.from(entry.target.children).map((dom) => {
            dom.classList.add('show')
          })
        } else {
          Array.from(entry.target.children).map((dom) => {
            dom.classList.remove('show')
          })
        }
      })
    })

    // 观察目标元素
    observe(observer, _step1)
    observe(observer, _step2)
    observe(observer, _step3)
    observe(observer, block)
    observe(observer, _tomato)
    observe(observer, _seefood)

    return () => {
      unobserve(observer, _step1)
      unobserve(observer, _step2)
      unobserve(observer, _step3)
      unobserve(observer, block)
      unobserve(observer, _tomato)
      unobserve(observer, _seefood)
    }
  }, [])

  // 观察
  const observe = (observer, target) => {
    if (target.current) observer.observe(target.current)
  }

  // 取消观察
  const unobserve = (observer, target) => {
    if (target.current) observer.unobserve(target.current)
  }

  // 返回顶部
  const backtotop = () =>
    window.scrollTo({
      top: 0,
    })

  // 跳转
  const jump = (link) => {
    window.location.href = link
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
        <div ref={_tomato} className="fancy__tomato">
          <img src={tomato} />
        </div>
        <div ref={_seefood} className="fancy__seefood">
          <img src={seefood} />
        </div>
        <div className="fancy__title">花式菜谱</div>
        <div className="fancy__desc">使用各类食挑战多样咖喱食谱</div>
        {/* 轮播 */}
        <div className="fancy__swiperwrap">
          <div className="fancy__swipercontainer">
            <HsSwiper
              slides={[curry1, curry2, curry3]}
              prevRef={fancy__prev1}
              nextRef={fancy__next1}
            ></HsSwiper>
            <img
              src={swiper_left1}
              ref={fancy__prev1}
              className="fancy__prev"
            ></img>
            <img
              src={swiper_right1}
              ref={fancy__next1}
              className="fancy__next"
            ></img>
          </div>
          <div className="swiper__tips">百梦多咖喱鸡肉饭</div>
        </div>

        {/* 轮播 */}
        <div className="fancy__swiperwrap">
          <div className="fancy__swipercontainer">
            <HsSwiper
              slides={[curry4, curry5, curry6]}
              prevRef={fancy__prev2}
              nextRef={fancy__next2}
            ></HsSwiper>
            <img
              src={swiper_left1}
              ref={fancy__prev2}
              className="fancy__prev"
            ></img>
            <img
              src={swiper_right1}
              ref={fancy__next2}
              className="fancy__next"
            ></img>
          </div>
          <div className="swiper__tips">百梦多咖喱鸡肉饭</div>
        </div>
        <div
          className="btn fancy__more"
          onClick={() => {
            jump(recipepage)
          }}
        >
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
        <img src={bee2} className="classroom__bee" />
        <img src={cassia} className="classroom__cassia" />
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
        <div
          className="btn classroom__btn"
          onClick={() => {
            jump(currypage)
          }}
        >
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
        <div ref={_step1}>
          <img src={step1} className="aboutbmd__step1"></img>
        </div>
        <div ref={_step2}>
          <img src={step2} className="aboutbmd__step2"></img>
        </div>
        <div ref={_step3}>
          <img src={step3} className="aboutbmd__step3"></img>
        </div>
        {/* 百梦多品牌宣传片 */}
        <div className="aboutbmd__brand">
          <div className="brand__title">百梦多品牌宣传片</div>
          <div className="brand__videocontainer">
            <HsVideo src={video2} poster={poster2}></HsVideo>
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
            slides={[aboutbg1, aboutbg2]}
            prevRef={abouths__prev}
            nextRef={abouths__next}
          ></HsSwiper>
          <img
            src={swiper_left}
            ref={abouths__prev}
            className="abouths__prev"
          ></img>
          <img
            src={swiper_right}
            ref={abouths__next}
            className="abouths__next"
          ></img>
          <div className="swiper__tips">点击上方轻松了解更多活动哦~</div>
        </div>
        <div
          className="btn abouths__backhome"
          onClick={() => {
            jump(homepage)
          }}
        >
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
