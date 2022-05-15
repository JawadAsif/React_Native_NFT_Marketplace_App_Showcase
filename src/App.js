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
    </div>
  );
};

export default App;
