
import PictureEverydayVideo from './assets/picture-everyday.mp4'
import './App.css'
import { ChevronRight } from 'lucide-react'
import halabi from "./assets/halabi.png"
import delay from "./assets/delay.png"
import pathlit from "./assets/pathlit.png"
import zymbly from "./assets/zymbly.jpg"
import arcade from "./assets/arcade.png"
import events from "./assets/events.png"
import hack from "./assets/hack.png"
function Projects() {

  const PROJECT_DATA = [
    {
      title: "Delay",
      description: "A moble app that makes you answer multiple choice questions for screen time. It has 10k downloads and is 4.8 stars on the App Store",
      image: delay,
      link: "https://apps.apple.com/us/app/delay-study-before-you-scroll/id6749641307"
    },
    {
      title: "Pathlit",
      description: "My first job. I joined my freshman year of college as the 6th person on the team. Worked on optimizing the speed of the AI workflow builder in addition to adding more tools to its collection.",
      image: pathlit,
      link: "https://pathlit.com"
    },
    {
      title: "Zymbly",
      description: "A spontaneous summer job I took up in London. It was me and the two founders. I did a lot of coding as we tested out startup ideas and pivoted. They ended up getting into YCombinator soon after I left.",
      image: zymbly,
      link: "https://www.zymbly.com/"
    },
    {
      title: "Arcade",
      description: "I was the first intern at an awesome series A startup in SF. This was one of the first job experiences where I did 99% AI code, and got to ship some substantial features for thousands of users.",
      image: arcade,
      link: "https://arcade.software"
    },
    {
      title: "Halabi",
      description: "200 downloads - my first app. It was a contacts manager designed to make tagging contacts easy.",
      image: halabi,
      link: "https://apps.apple.com/us/app/halabi/id6667094995"
    },
    {
      title: "EventsAtUIUC.com",
      description: "Over 10k total site visits. I scrape ~900 instagrams using distribution browser automation on a cron job every day. I get a lot of free food this way. There's also one for Michigan, Purdue, and Wisconsin.",
      image: events,
      link: "https://eventsatuiuc.com"
    },
    {
      title: "HackIllinois Systems",
      description: "I was on the team building the mobile app for Hackillinois '26. Now I'm the Systems team co-lead managing 10 developers across numerous projects.",
      image: hack,
      link: "hackillinois.org"
    },
  ]
  return (
    <div className="flex flex-col md:flex-row min-h-dvh md:items-stretch">
      <div>
        <div className="md:text-6xl text-3xl w-full text-center md:text-left px-5 changa-one-regular pt-5">Projects/Work</div>
        <div className="flex flex-col justify-center items-start">
          {PROJECT_DATA.map(item => 
            <a href={item.link} className="flex flex-row gap-2 cursor-pointer hover:bg-gray-50 p-4">
              <div className="flex flex-col">
                <div className="font-bold" >{item.title}</div>
                <div>{item.description}</div>
              </div>
              <img src={item.image} className="w-40 object-contain"/>
            </a>
          )}
        </div>
      </div>
      <div className="flex w-full md:w-auto flex-1 md:flex-none">
        <a href="/" className="bg-red-400 md:w-70 w-full py-10 text-white text-xl font-bold flex justify-center items-center cursor-pointer"><span>Home</span><ChevronRight /></a>
      </div>
      {/* <div class="subtitle">This code was handcrafted without AI code/design</div> */}
    </div>
  )
}

export default Projects
