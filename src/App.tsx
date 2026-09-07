import PictureEverydayVideo from './assets/picture-everyday.mp4'
import './App.css'
import { ChevronRight } from 'lucide-react'
function App() {
  return (
    <div className="flex vw-100 flex-col md:flex-row h-screen justify-center items-center">
      <div>
        <div className="text-6xl w-full text-center md:text-left px-5 changa-one-regular py-5">Yaseen Halabi</div>
        <div className="w-full px-5 flex flex-col md:flex-row gap-4" >
          <video
            className="h-60 mb-5"
            src={PictureEverydayVideo}
            autoPlay
            loop
            muted
          />
          <div className="flex flex-col gap-auto md:justify-evenly gap-1 mb-5">
            <div>Nice to meet you! Three things you should know:</div>
            <div>1) I enjoy solving problems with software. I also enjoy solving problems with software.</div>
            <div>2) This website was handcrafted, no LLMs.</div>
            <div>3) We should chat. Even for no reason!</div>
            <div className="flex flex-row items-center gap-2">
              <div>DM me on LinkedIn: </div>
              <a className="cursor-pointer" href="https://www.linkedin.com/in/yaseenhalabi/">
                <img className="h-8 object-cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1280px-LinkedIn_icon.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-full justify-center">
        <a className="bg-blue-400 w-full py-10 text-white text-xl font-bold flex justify-center items-center cursor-pointer"><span>Projects</span><ChevronRight /></a>
        <a className="bg-red-400 w-full py-10 text-white text-xl font-bold flex justify-center items-center cursor-pointer"><span>Experience</span><ChevronRight /></a>
      </div>
      {/* <div class="subtitle">This code was handcrafted without AI code/design</div> */}
    </div>
  )
}

export default App
