import { ChevronRight } from 'lucide-react'
import catan from "./assets/catan.jpg"
import merch from "./assets/merch.png"
import mtc from "./assets/mtc.png"
import onepiece from "./assets/onepiece.jpg"
import syria from "./assets/syria.jpg"
import thaakat from "./assets/thaakat.png"
import turkish from "./assets/turkish.png"
import cat from "./assets/cat.jpeg"
import chess from "./assets/chess.png"
import wopo from "./assets/wopo.jpg"
import smash from "./assets/smash.jpg"
import favoritedrink from "./assets/favoritedrink.jpg"
function Life() {
  
  const IMAGE_LIST = [
    [wopo, "I used to be good at this sport"],
    [merch, "I designed this merch"],
    [catan, "I play this"],
    [mtc, "President of this club"],
    [favoritedrink, "My favorite drink"],
    [onepiece, "I'm fully caught up"],
    [syria, "My origin"],
    [thaakat, "I designed this merch"],
    [smash, "I would probably beat you in this"],
    [turkish, "I designed this tshirt"],
    [cat, "My cat"],
    [chess, "I play this sometimes"],
  ]


  return (
    <div className="flex flex-col md:flex-row min-h-dvh md:items-stretch">
      <div className="">
        <div className="md:text-6xl text-3xl w-full text-center md:text-left px-5 changa-one-regular mt-5">Life</div>
        <div className="flex flex-wrap gap-4 p-4">
          {IMAGE_LIST.map(image => 
            <div className="flex flex-col justify-center items-center">
              <img src={image[0]} className="h-40 object-contain"/>
              <div>{image[1]}</div>
            </div>
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

export default Life
