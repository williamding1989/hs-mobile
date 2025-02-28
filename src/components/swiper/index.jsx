import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/less/navigation'

/**
 * 轮播组件
 * @param {Array}  slides 轮播数据
 * @param {REeactNode} Navi 箭头组件
 *
 */
const HsSwiper = ({ slides, Navi }) => {
  return (
    <div>
      {Navi && <Navi />}

      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
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
    </div>
  )
}

export default HsSwiper
