
import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent() {
    return (
        <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"

    >
      <G clipPath="url(#clip0_698_411)">
        <Path
          d="M24.266 12.776c0-.815-.066-1.636-.207-2.438H12.74v4.621h6.482a5.555 5.555 0 01-2.399 3.646v2.999h3.867c2.271-2.09 3.576-5.177 3.576-8.828z"
          fill="#4285F4"
        />
        <Path
          d="M12.74 24.5c3.237 0 5.966-1.062 7.955-2.896l-3.867-2.998c-1.076.731-2.465 1.146-4.083 1.146-3.131 0-5.786-2.112-6.738-4.952h-3.99v3.091a12.002 12.002 0 0010.723 6.61z"
          fill="#34A853"
        />
        <Path
          d="M6.003 14.8a7.188 7.188 0 010-4.594V7.115H2.017a12.01 12.01 0 000 10.776l3.986-3.09z"
          fill="#FBBC04"
        />
        <Path
          d="M12.74 5.25a6.52 6.52 0 014.603 1.799l3.427-3.426A11.533 11.533 0 0012.74.5 11.998 11.998 0 002.017 7.115l3.986 3.09C6.95 7.363 9.609 5.25 12.74 5.25z"
          fill="#EA4335"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_698_411">
          <Path fill="#fff" transform="translate(.5 .5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>


    )
}

export default SvgComponent
