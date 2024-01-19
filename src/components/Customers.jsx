import { customerConnect, arrowDown } from "../assets";
import { styles } from "../style";
import { headers, faq } from "../constants";

const Customers = () => {
  return (
    <section className='flex flex-1 justify-center  w-full'>
        <div className='flex flex-1 flex-col justify-between mx-[100px] m-auto  my-[76px] max-w-[1200px] gap-[56px]'>
            <img src={customerConnect}/>
            <div className="flex flex-1 sm:flex-row flex-col justify-between sm:gap-[100px] gap-[70px]">
                <h2 className={`${styles.heading_XL} max-w-[500px]`}>
                    {headers.customers_header}
                </h2>
                <div className="w-[500px]" >
                    {faq.map((item, index) => (
                        <div key={item.id} className={`flex flex-1 items-center justify-between w-full border-b-2 h-[54px] ${index !== faq.length - 1  ? 'mb-8' : 'mb-0'}`}>
                            <p className="pr-4">
                            {item.content}
                            </p>
                            <img src={item.icon}/>
                        </div>  
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Customers