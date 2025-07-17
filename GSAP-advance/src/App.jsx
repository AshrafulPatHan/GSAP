import './App.css'
import { gsap } from "gsap";
import { ScrollTrigger,SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger,SplitText)

function App() {

  return (
   <div className='flex-center '>
    hello
   </div>
  )
}

export default App
