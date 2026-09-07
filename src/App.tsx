import { useState } from 'react'
import PictureEverydayVideo from './assets/picture-everyday.mp4'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div class="flex vw-100 flex-col h-screen justify-center items-center">
      <div class="text-6xl changa-one-regular py-5">Yaseen Halabi</div>
      <video
        class="h-60 mb-5"
        src={PictureEverydayVideo}
        autoPlay
        loop
        muted
      />
      <div class="flex gap-2 w-full h-full justify-center">
        <div class="bg-blue-400 w-full py-10 text-white text-xl font-bold flex justify-center items-center">See projects</div>
        <div class="bg-red-400 w-full py-10 text-white text-xl font-bold flex justify-center items-center">Work experience</div>
      </div>
      {/* <div class="subtitle">This code was handcrafted without AI code/design</div> */}
    </div>
  )
}

export default App
