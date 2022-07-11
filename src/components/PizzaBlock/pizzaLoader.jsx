import React from "react"
import ContentLoader from "react-content-loader"

const CustomLoader = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="143" cy="82" r="80" /> 
    <rect x="11" y="171" rx="7" ry="7" width="275" height="20" /> 
    <rect x="96" y="189" rx="0" ry="0" width="24" height="3" /> 
    <rect x="11" y="210" rx="0" ry="0" width="275" height="106" /> 
    <rect x="21" y="341" rx="0" ry="0" width="77" height="29" /> 
    <rect x="162" y="339" rx="0" ry="0" width="108" height="50" />
  </ContentLoader>
)

export default CustomLoader