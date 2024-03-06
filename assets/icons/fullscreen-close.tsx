import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="#FFF"
      {...props}
    >
      <Path d="M18 3h2v4h4v2h-6V3zm6 12v2h-4v4h-2v-6h6zM6 21H4v-4H0v-2h6v6zM0 9V7h4V3h2v6H0z" />
    </Svg>
  )
}

export default SvgComponent
