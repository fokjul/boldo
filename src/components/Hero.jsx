import {Navbar, MainPromo } from "../components";
import { ellipse } from "../assets";


const Hero = () => {
  return (
        <section className="flex flex-1 justify-center bg-darkBlue w-full relative">
            <div className="flex flex-1 flex-col justify-between mx-[100px] m-auto  mt-14 max-w-[1200px] relative z-[5]">
              <Navbar />
              <MainPromo />
            </div>
            <div className="absolute z-[0] right-0 top-0">
              <img src={ellipse}/>
            </div>
        </section>
  )
}

export default Hero