import { Features, Download, SectionWrapper } from "./components";
import assets from "./assets";
const App = () => {
  return (
    <div>
      <SectionWrapper
        title="Your own store of nifty NFTs. 
      Start selling and growing."
        description="Buy, store, collect NFTs, exchange & earn crypto. 
      Join 25+ million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace.
         Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively
        on all users' devices. You can easily get your app into people's hands."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative ways to showcase the store"
        description="The app contains two screens. The first screen lists all 
        NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
    </div>
  );
};

export default App;
