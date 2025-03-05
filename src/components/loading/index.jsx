import { useEffect, useRef } from 'react'
import steploading from '../../assets/steploading.png'
import './index.less'

/**
 * Loading组件
 *
 */
const HsLoading = ({ show }) => {
  if (!show) return
  return (
    <div className="HsLoading">
      <div className="stepContainer"></div>
    </div>
  )
}

export default HsLoading
