import { headers } from "../constants";
import { styles } from "../style";
import { Button_M } from "./Button";
import { ellipse02 } from "../assets";

const Subscription = () => {
  return (
    <section className="flex flex-1 justify-center bg-darkBlue w-full relative mb-[84px]">
        <div className="flex flex-1 flex-col items-center mx-[100px] m-auto  my-[96px] max-w-[1200px] relative z-[5]">
            <h2 className={`${styles.heading_XXL} text-white  max-w-[716px] text-center  mb-[72px]`}>
                {headers.subscription_header}
            </h2>
            <div className="flex gap-6 relative z-10">
                <input type="email" placeholder="Your email address" className=" min-w-[370px] h-[60px] rounded-[3.5rem] px-8"/>
                <Button_M 
                    label="Start now" 
                    visuals = "bg-green text-darkBlue"
                />
            </div>
        </div>
        <div className="absolute z-5 right-0 top-0">
              <img src={ellipse02}/>
        </div>
    </section>
  )
}

export default Subscription