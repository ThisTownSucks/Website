import React, { useEffect, useRef, useState, FunctionComponent } from 'react'
import { useWindowSize } from 'the-platform'
import { aberrationRatio } from '../utils'

const Aberration: FunctionComponent = ({ children }) => {
  const ref = useRef(null)
  const innerContentRef = useRef(null)
  const { height } = useWindowSize()
  const [rect, setRect] = useState({ top: 0, bottom: 0 })
  const [ratio, setRatio] = useState(0)
  const [innerContentHeight, setInnerContentHeight] = useState('100%')

  const getRatio = () => {
    setRect(ref.current.getBoundingClientRect())
    setRatio(aberrationRatio(rect, height, 2.5))
  }

  useEffect(() => {
    getRatio()
    window.addEventListener('scroll', getRatio)
    return () => window.removeEventListener('scroll', getRatio)
  })

  useEffect(() => {
    setInnerContentHeight(
      innerContentRef.current.getBoundingClientRect().height
    )
  })

  return (
    <div style={{ mixBlendMode: 'multiply' }}>
      {/* prettier-ignore */}
      <svg style={{overflow: "visible"}} width="100%" height={innerContentHeight}>
        <defs>
          <filter id="aberration">
            <feOffset id="cyan" in="SourceGraphic" result="cyanOffset" dx="0" dy={ratio} />
            <feOffset id="magenta" in="SourceGraphic" result="magentaOffset" dx="0" dy="0" />
            <feOffset id="yellow" in="SourceGraphic" result="yellowOffset" dx="0" dy={-ratio} />
            <feColorMatrix
              in="cyanOffset"
              result="cyanMatrix"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 1
                      0 0 0 0 1
                      0 0 0 1 0"
            />
            <feColorMatrix
              in="magentaOffset"
              result="magentaMatrix"
              type="matrix"
              values="0 0 0 0 1
                      0 1 0 0 0
                      0 0 0 0 1
                      0 0 0 1 0"
            />
            <feColorMatrix
              in="yellowOffset"
              result="yellowMatrix"
              type="matrix"
              values="0 0 0 0 1
                      0 0 0 0 1
                      0 0 1 0 0
                      0 0 0 1 0"
            />
            <feBlend mode="multiply" in="cyanMatrix" in2="magentaMatrix" result="cyanAndMagenta" />
            <feBlend mode="multiply" in="yellowMatrix" in2="cyanAndMagenta" />
          </filter>
        </defs>
          <foreignObject
            ref={ref}
            filter="url(#aberration)"
            style={{overflow: "visible"}}
            height="100%"
            width="100%">
            <div ref={innerContentRef}>{children}</div>
          </foreignObject>
      </svg>
    </div>
  )
}

export default Aberration
