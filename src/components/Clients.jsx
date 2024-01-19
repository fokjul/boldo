import { clientLogos } from "../constants";

const Clients = () => {
  return (
    <section className="flex bg-darkBlue items-center justify-center w-full">
       <div className="flex flex-1 flex-wrap justify-evenly items-center py-6 max-w-[1200px] mx-[100px] m-auto mb-[56px] gap-6">
        {clientLogos.map((client, index) => (
            <div key={index}>
              <img  src={client.logo} className=" max-w-[124px]"/>
            </div>
        ))}
      </div> 
    </section>

    
  )
}

export default Clients