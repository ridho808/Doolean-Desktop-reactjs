import Navigation from "./component/navigation/Navigation";
import 'aos/dist/aos.css'
import Plank from "./component/content/Plank";
import { useEffect, useState } from "react";
import About from "./component/content/About";
import Portfolio from "./component/content/Portfolio";
import Email from "./component/content/Email";
import Aos from "aos";
import { SuperSEO } from "react-super-seo";

function App() {
  const [AboutApp, setAbout] = useState(false);
  const [BtnPortfolio,setPortfolio] = useState(false);
  const [BtnEmail,setBtnEmail] = useState(false)

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
  },[])
  return (
    <>
      <SuperSEO
      title="Doolean Desktop | Personal Website"
      description="Website Profile Frontend Developer"
      openGraph={{
        ogImage : "./assets/Abyss.png",
        ogImageAlt: "DESKTOP",
        ogImageWidth: 1200,
        ogImageHeight: 630,
        ogImageType: "png",
      }}
      />
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
  );
}

export default App;
