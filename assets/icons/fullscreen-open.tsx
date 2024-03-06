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
      <Path d="M24 9h-2V5h-4V3h6v6zm-6 12v-2h4v-4h2v6h-6zM0 15h2v4h4v2H0v-6zM6 3v2H2v4H0V3h6z" />
    </Svg>
  )
}

export default SvgComponent
