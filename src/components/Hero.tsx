import { useContext } from "react"
import { CustomContext } from "./Context"

function Hero() {
    const [works] = useContext(CustomContext)
  return (
    <div className="bg-secoundary_lightGray h-[400px]">
      
    </div>
  )
}

export default Hero