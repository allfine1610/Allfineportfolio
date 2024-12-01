import React from 'react'
import styles from './style';

{/* tho basically poora ek ek karke import karna hectic hai...tho index.js components main banaya..usme import export kiya....and idhar uska shortcut likha */}
import { Navbar, Hero, Stats,Business,Billing, CardDeal,Testimonials, Clients , CTA,Footer } from './components';




const App = () => {
  return (
    <>
    {/* ek container baneyag...jo width full hoga..and oeverflow elements ko hide kar dega...*/}
    <div className={'bg-primary w-full overflow-hidden'}>
        <div className={'${styles.paddingX} ${styles.flexCenter}'}>
            <div className={'${styles.boxWidth}'}>
                <Navbar/>
            </div>
        </div>
     </div>
   

  <div className={'bg-primary ${styles.flexStart}'}>
    <div className={'${styles.boxWidth}'}>
      <Hero/>
    </div>
  </div>

  <div className={'bg-primary ${styles.paddingX} ${styles.flexStart}'}>
    <div className={'${styles.boxWidth}'}>
     <Stats/>
     
     <Billing/>
    
     <Testimonials/>
     <Business/>
       {/*<CTA/>*/}
     <Footer/>
    </div>
  </div>
  </>
  )
}

export default App
