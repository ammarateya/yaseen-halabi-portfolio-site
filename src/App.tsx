import PictureEverydayVideo from './assets/picture-everyday.mp4'
import './App.css'
import { ChevronRight } from 'lucide-react'
import { Link } from 'wouter'
import { useState } from 'react'
function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false)
  return (
    <div className="flex vw-100 flex-col md:flex-row h-screen justify-center items-center">
      <div>
        <div className="md:text-6xl text-3xl w-full text-center md:text-left px-5 changa-one-regular py-3">Yaseen Halabi</div>
        <div className="w-full px-5 flex flex-col md:flex-row md:gap-4 gap-0 md:min-w-130" >
          <video
            className="h-60 mb-3 md:mb-0"
            src={PictureEverydayVideo}
            autoPlay
            loop
            playsInline
            muted
          />
          <div className="flex flex-col text-sm md:text-base gap-auto md:justify-evenly gap-1 mb-3 max-w-100">
            <div>Welcome to my site! A couple things you should know:</div>
            <div>1) This website was <a target="_blank" className="underline text-blue-600" href="https://github.com/yaseenhalabi/yaseen-halabi-portfolio-site.git">handcrafted</a>, no LLMs.</div>
            <div>2) I enjoy solving problems with software. I also enjoy solving problems with software.</div>
            <div>3) We should chat. Even for no reason!</div>
            <div className="flex flex-row items-center gap-2">
              <div>DM me on LinkedIn: </div>
              <a className="cursor-pointer" href="https://www.linkedin.com/in/yaseenhalabi/">
                <img className="h-8 object-cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1280px-LinkedIn_icon.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail"/>
              </a>
            </div>
<label className="inline-flex items-center cursor-pointer select-none">
      <input
        type="checkbox"
        checked={darkModeEnabled}
        onChange={() => setDarkModeEnabled(!darkModeEnabled)}
        className="sr-only peer"
      />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-400"></div>
      <span className="ms-3 text-sm font-medium text-gray-900">
        {darkModeEnabled ? 'You expected me to make a dark mode? Thats mad lame' : 'Light mode on'}
      </span>
    </label>
          </div>
        </div>
      </div>
      <div className="flex w-full h-full justify-center">
        <Link href="/projects" className="bg-blue-400 w-full py-10 text-white text-xl font-bold flex justify-center items-center cursor-pointer"><span>Work/Projects</span><ChevronRight /></Link>
        <Link href="/life" className="bg-red-400 w-full py-10 text-white text-xl font-bold flex justify-center items-center cursor-pointer"><span>Life</span><ChevronRight /></Link>
      </div>
    </div>
  )
}

export default App
