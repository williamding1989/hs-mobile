import { Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/less/navigation'
import { useEffect, forwardRef } from 'react'

/**
 * 轮播组件
 * @param {Array}  slides 轮播数据
 * @param {ReactRef} prevRef 前箭头
 * @param {nextRef} nextRef 后箭头
 *
 */
const HsSwiper = forwardRef(({ slides, prevRef, nextRef }, ref) => {
  return (
    <>
      {/* 轮播实体  */}
      <Swiper
        ref={ref}
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
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
})

export default HsSwiper
