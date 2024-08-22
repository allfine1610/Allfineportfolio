import {feedback} from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard';


const Testimonials = () => 
  (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} ml-10 mt-30 flex-col relative`}>
  
  <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] flex items-center justify-center">
    Skills
  </h1>

      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card}/>
        ))}

      </div>
    </section>
  )


export default Testimonials
