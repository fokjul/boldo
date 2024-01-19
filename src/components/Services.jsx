import {styles, layout } from '../style';
import ServiceCard from "./ServiceCard";
import { results, headers } from '../constants';
import { Button_M, Button_S } from './Button';

const Services = () => {
  return (
    <section className='flex flex-1 justify-center items-center w-full'>
        <div className="flex flex-1 flex-col mx-[100px] m-auto  max-w-[1200px]">
            <div className="flex flex-1 flex-col justify-between items-center w-full sm:gap-[0.75rem] my-[64px]">
                <p className={`${styles.paragraph_S} text-grey`}>
                    Our Services
                </p>
                <h2 className={`${styles.heading_XXL} text-black mb-[80px] text-center max-w-[842px]`}>
                    {headers.services_header}
                </h2>
                <div className="flex flex-1 sm:flex-row flex-col justify-between items-center w-full">
                    <ServiceCard />
                </div>
            </div>
            <div className={`${layout.serviceSection} flex-col`}>
                <div className='flex flex-1 w-[500px]'>
                    <img src={results[0].image}/>
                </div>
                <div className='max-w-[500px] flex flex-1 flex-col gap-[40px] '>
                    <h3 className={`flex ${styles.heading_XL}`}>{results[0].title}</h3>
                    {results[0].items.map((item, index) => (
                        <div key={item.id} className='flex items-center gap-[24px]'>
                            <img src={item.icon}/>
                            <p className={`${styles.paragraph_S}`}>{item.content}</p>
                        </div>
                    ))}
                    <div>
                        <Button_M 
                            label="Buy template" 
                            bgColor="bg-darkBlue"
                            textColor="text-white"
                        />
                    </div>
                </div>
            </div>
            <div className={`${layout.serviceSection} md:flex-row-reverse`}>
                <div className='flex flex-1 w-[500px] justify-end'>
                    <img src={results[1].image}/>
                </div>
                <div className='max-w-[500px] flex flex-1 flex-col gap-[40px] '>
                    <h3 className={`flex ${styles.heading_XL}`}>{results[1].title}</h3>
                    <div>
                    {results[1].items.map((item, index) => (
                        <div key={item.id} className='group flex items-center mb-[24px] gap-[24px] box-shadow h-[68px] pl-5 rounded hover:bg-darkBlue hover:text-white'>
                            <img src={item.icon}/>
                            <p className={`${styles.paragraph_XS} font-semibold group-hover:text-white`}>{item.content}</p>
                        </div>
                    ))}
                    </div>
                    
                </div>
            </div>
        </div>
            
       
    </section>
  )
}

export default Services