import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  /* Dynamic classname uses curly braces {} and dynamic classname main `` backticks use hohta hai not "" or'' */
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col x1:px-0 sm:px-16 px-6`}>
    
          <div className='flex flex-row items-center justify-between w-full xl:ml-40'>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[100px] text-[52px] text-white ss:leading-[110.8px] leading-[55px]">
            Hello, I am <br className="hidden sm:block" />{" "}
            <span className="text-gradient">Alfin Jaison</span>{" "}
          </h1>
          
              </div>
                  
                  <p className={`${styles.paragraph} max-w-[600px]  mt-5 xl:ml-40`}> I love Blending Design and Analysis for Meaningful Solutions
                  </p>
    </div>

{/*right side of screen */}
<div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/> 
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
</div>





  </section>
);

export default Hero;
