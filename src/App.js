
import "./component/style.css";
import Hero from './component/hero'
import Payments from './component/payment'
import Banking from './component/banking'
import Boost from './component/boost'
import Investing from './component/investing'
import FooterMobile from './component/footermobile'

function App() {

  return (
    <>
      <div className='snap-y snap-mandatory h-[100vh] overflow-y-scroll m-0 smlap:hidden'>
        <Hero/>
        <Payments/>
        <Banking/>
        <Boost/>
        <Investing/>
      </div>
      <div className='snap-y snap-mandatory h-[100vh] overflow-y-scroll m-0 revsmlap:hidden'>
        <Hero/>
        <Payments/>
        <Banking/>
        <Boost/>
        <Investing/>
        <FooterMobile/>
      </div>
    </>
  );
}

export default App;
