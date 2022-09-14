import Navigation from "./component/navigation/Navigation";
import 'aos/dist/aos.css'
import Plank from "./component/content/Plank";
import { useEffect, useState } from "react";
import About from "./component/content/About";
import Portfolio from "./component/content/Portfolio";
import Email from "./component/content/Email";
import Aos from "aos";
import ScaleLoader from "react-spinners/ScaleLoader";
import AppleIcn from './assets/icons.png';

function App() {
  const [AboutApp, setAbout] = useState(false);
  const [BtnPortfolio,setPortfolio] = useState(false);
  const [BtnEmail,setBtnEmail] = useState(false);
  const [Loading,setLoading] = useState(false);

  const OpenAbout = () => {
    if(BtnPortfolio === true || BtnEmail === true){
      setPortfolio(false)
      setBtnEmail(false)
    }
    setAbout(!AboutApp);
  }
  const OpenPortFolio = ()=>{
    if(AboutApp === true || BtnEmail=== true){
      setAbout(false)
      setBtnEmail(false)
    }
    setPortfolio(!BtnPortfolio);
  }
  const OpenEmail = () =>{
    if(BtnPortfolio === true || AboutApp === true){
      setAbout(false)
      setPortfolio(false)
    }
    setBtnEmail(!BtnEmail)
  }
  useEffect(()=>{
    Aos.init()
  },[]);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },5000);
  },[])
  return (
    <>
    { Loading ? 
      <div className="Loading">
        <img src={AppleIcn} alt="Apple" width={60} className=""/>
        <ScaleLoader  color="#FFFFFF" size={15}/> 
        <h1 className="text-2xl text-white">DOOLEAN</h1>
      </div>
      :
      (
      <>
        <Navigation />
        <main className="h-[90vh]">
          {AboutApp ?<About oneClick={OpenAbout} twoClick={OpenAbout}/> : null}
          {BtnPortfolio ? <Portfolio Open={OpenPortFolio}/>:null}
          {BtnEmail ? <Email Email={OpenEmail}/> : null}
        <Plank 
        Click={OpenAbout} 
        PortFolio={OpenPortFolio} 
        OpnEmail={OpenEmail}/>
        </main>
      </>
      )
    }
    </>
  );
}

export default App;
