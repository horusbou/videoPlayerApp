import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="22pt"
      height="24pt"
      viewBox="0 0 22 24"
      {...props}
    >
      <Path
        d="M.737 27.262V.738L18.382 14zM24.263.738v26.524"
        transform="scale(.88 .85714)"
        fill="none"
        strokeWidth={1}
        strokeLinecap="square"
        strokeLinejoin="miter"
        stroke="#fff"
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
    </Svg>
  )
}

export default SvgComponent
