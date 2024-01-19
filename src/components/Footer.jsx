import { footer } from "../constants";
import { styles } from "../style";
import { Button_XS } from "./Button";

const Footer = () => {
  return (
    <section className="flex flex-1 justify-between items-center w-full">
      <div className="flex flex-1 justify-between mx-[100px] m-auto  my-[64px] max-w-[1200px]">
        <div className="flex flex-1 flex-col max-w-[300px] gap-10 mr-12">
          <img src={footer.icon} className="w-[156px] h-41px"/>
          <p className={`${styles.paragraph_XS} text-grey`}>{footer.content}</p>
          <p className={`${styles.paragraph_XS} text-grey`}>{footer.rights}</p>
        </div>
        <div className="flex flex-1 sm:flex-row flex-col justify-between max-w-[642px]">
          {footer.navigation.map((item, index) => (
            <div key={item.id}>
              <p className={`sm:${styles.paragraph_S} ${styles.paragraph_XS} font-bold mb-6`}>{item.navheader}</p>
              <ul className="flex flex-1 flex-col gap-6">
                {item.navlinks.map((link, index) =>(
                  <div key={link} className="flex flex-1 md:flex-row flex-col">
                    <li className={`sm:${styles.paragraph_S} ${styles.paragraph_XS} text-grey`}>{link}</li>
                    {link === "Careers" && <Button_XS 
                    label = "Hiring!" 
                    visuals = "bg-green text-darkBlue text-xs w-[72px] h-[30px] ml-1"/>}
                  </div>
                  
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer