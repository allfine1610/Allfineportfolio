import {stats} from '../constants'
import styles from '../style'

const Stats = () => 
(

  /*sm: Small screen size (e.g., smartphones).
md: Medium screen size (e.g., tablets).
lg: Large screen size (e.g., small laptops or desktops).
xl: Extra-large screen size (e.g., larger desktops or high-resolution displays).  */
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat)=>
    (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3 ml-10`}>
        <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
        <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient ml-3'>{stat.title}</p>
      </div>
    ))}
      
  </section>

)

export default Stats
