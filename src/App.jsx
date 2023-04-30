import React from "react";
import styles from "./style";

import {
  Billing,
  Business,
  Button,
  CardDeal,
  Client,
  CTA,
  FeedbackCard,
  Footer,
  GetStart,
  Hero,
  Navbar,
  Tetimonials,
  Stat,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stat /> <Business /> <Billing /> <CardDeal /> <Tetimonials />
          <Client /> <CTA /> <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
