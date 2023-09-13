import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={290}
    height={405}
    viewBox="0 0 290 405"
    backgroundColor="#eeeef9"
    foregroundColor="#ebe3f4"
    {...props}
  >
    <rect x="12" y="18" rx="10" ry="10" width="90" height="30" /> 
    <rect x="12" y="18" rx="12" ry="12" width="275" height="298" /> 
    <rect x="12" y="331" rx="9" ry="9" width="275" height="27" /> 
    <rect x="12" y="373" rx="9" ry="9" width="65" height="24" /> 
    <rect x="156" y="371" rx="9" ry="9" width="130" height="24" />
  </ContentLoader>
)

export default Skeleton
