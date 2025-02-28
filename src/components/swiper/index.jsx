import { Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/less/navigation'
import { useEffect, useRef } from 'react'

/**
 * 轮播组件
 * @param {Array}  slides 轮播数据
 * @param {ReactRef} prevRef 前箭头
 * @param {nextRef} nextRef 后箭头
 *
 */
const HsSwiper = ({ slides, prevRef, nextRef }) => {
  const swiperRef = useRef(null)

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.swiper &&
      prevRef.current &&
      nextRef.current
    ) {
      const swiper = swiperRef.current.swiper

      // 绑定导航按钮
      swiper.params.navigation.prevEl = prevRef.current
      swiper.params.navigation.nextEl = nextRef.current

      // 重新初始化导航模块
      swiper.navigation.destroy() // 销毁旧的导航模块
      swiper.navigation.init() // 重新初始化导航模块
      swiper.navigation.update() // 更新导航按钮状态

      // 更新 Swiper
      swiper.update()
    }
  }, [prevRef, nextRef])

  return (
    <>
      {/* 轮播实体  */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false, // 用户交互后不禁用自动播放
        }}
      >
        {slides.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={item}></img>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default HsSwiper
