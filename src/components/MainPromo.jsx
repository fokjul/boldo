import { Button_M, ButtonOutline } from './Button';
import { hero } from '../assets';
import { styles } from '../style';

const MainPromo = () => {
  return (
    <section className='flex flex-1 flex-col items-center sm:flex-row  sm:justify-between sm:items-center mb-[56px] gap-6'>
      <div className='flex flex-1 flex-col max-w-[567px] mb-10 sm:mb-0'>
        <h1 className={`${styles.heading_XXL} text-white mb-4 text-center sm:text-left`}>Save time by building <br className='sm:block hidden'/> fast with Boldo Template </h1>
        <p className={`${styles.paragraph_XS} text-lightGrey mb-10 text-center sm:text-left`}>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
        <div className='flex flex-1 gap-4 justify-center sm:justify-start'>
          <Button_M 
            label="Buy template" 
            visuals="bg-green text-darkBlue"
          />
          <ButtonOutline 
            label="Explore"
            visuals="text-white border-white-600"/>
        </div>
      </div>
      <div className='flex w-[50%] justify-end'>
        <img src={hero} alt='hero'/>
      </div>
    </section>
  )
}

export default MainPromo