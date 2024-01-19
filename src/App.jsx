import { Hero, Clients, Services, Testimonials, Customers, Blog, Subscription, Footer } from "./components";


const App = () => {
  return (
    <div className="">
      <Hero />
      <Clients /> 
      <Services />
      <Testimonials />
      <Customers />
      <Blog />
      <Subscription />
      <Footer />
    </div>
  )
}

export default App