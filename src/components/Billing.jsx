import { apple, bill,google } from "../assets"
import styles, {layout} from "../style"


const Billing = () => 
 (
  <section id="product" className={layout.sectionReverse}>
  <div className={layout.sectionImgReverse}>
    <img src={bill} alt="billing" className="w-[90%] h-[100%] ml-20 relative z-[5]" />

    {/* gradient start */}
    <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
    <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    {/* gradient end */}
  </div>

  <div className={`${layout.sectionInfo} ml-10`}>
  <h2 className={`${styles.heading2} `}>
      About me 
    </h2>
    <p className={`${styles.paragraph}  max-w-[470px] mt-5`}>
    I am a multi-disciplinary professional with a strong foundation in product design, UX/UI development, and business analysis. I bring a unique perspective to product design, integrating user-centered design principles with strategic business insights. My experience spans software development, market strategies all of which fuel my passion for creating intuitive and impactful products
    </p>

  

    <div className="flex flex-row flex-wrap items-center mt-6 sm:mt-10">
  <a href="https://www.linkedin.com/in/alfinjaison" target="_blank" rel="noopener noreferrer" className="mr-5 cursor-pointer">
    <img src={apple} alt="LinkedIn" className="w-[150px] h-[75px] object-contain" />
  </a>
  <a href="mailto:alfinjaison2002@gmail.com" className="cursor-pointer">
    <img src={google} alt="Email" className="w-[100px] h-[75px] object-contain" />
  </a>
</div>





  </div>
</section>
 )


export default Billing
