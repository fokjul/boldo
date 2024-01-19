import { Link } from "./Button";
import { styles } from '../style';
import { services } from "../constants";

const ServiceCard = () => {
  return (
    <>
        {services.map((service, index)=> (
        <div key={service.id} className="flex flex-1 flex-col max-w-[350px] p-4 sm:gap-6 gap-3">
            <img src={service.image} className="w-full"/>
            <div className="flex flex-col gap-3">
                <p className={`sm:${styles.paragraph_M} ${styles.paragraph_S}`}>{service.title}</p>
                <p className={`sm:${styles.paragraph_S} ${styles.paragraph_XS} text-grey font-normal`}>{service.content}</p>
            </div>
            <Link label="Explore page"/>
        </div>
    ))}
    </>
  )
}

export default ServiceCard