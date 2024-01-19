import {testimonials, headers} from "../constants";
import { styles } from "../style";
import { arrowBtnL, arrowBtnR } from "../assets";

const Testimonials = () => {
  return (
    <section className="flex flex-1 justify-center bg-darkBlue w-full ">
      <div className="flex flex-1 flex-col justify-between mx-[100px] m-auto  my-[96px] max-w-[1200px]">
        <div className="relative">
          <h2 className={`${styles.heading_XXL} text-white  max-w-[716px] text-start  mb-[72px]`}>
            {headers.testimonials_header}
          </h2>
          <div className="flex flex-1 gap-7 absolute -right-10 bottom-10 z-[5]">
            <img src={arrowBtnL} className="w-[72px] h-[72px]"/>
            <img src={arrowBtnR} className="w-[72px] h-[72px]"/>
          </div>
        </div>
      
        <div className="flex flex-1 sm:flex-row flex-col gap-6">
          {testimonials.map((testimonial, index) =>(
            <div key={testimonial.id} className="flex flex-1 flex-col bg-white p-10 rounded-md gap-10">
              <p className={`${styles.paragraph_M}`}>{testimonial.content}</p>
              <div className="flex flex-1 md:flex-row flex-col gap-4">
                <img src={testimonial.avatar} className="w-[58px] h-[58px]"/>
                <div>
                  <p className={`${styles.paragraph_XS} font-bold`}>{testimonial.author}</p>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default Testimonials