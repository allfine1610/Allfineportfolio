import {features} from'../constants';
import styles, {layout} from '../style';
import Button from './Button';

const FeatureCard=({icon,title,content,index}) =>
(
    <div className={`flex flex-row mr-5 p-6 rounded-[20px] ${index !== features.length -1?"mb-6" : "mb-0" } feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
          <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain' />
        </div>
        <div className='flex flex-col flex-1 ml-3'>
          <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
              {title}
          </h4>
          <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
            {content}
          </p>

        </div>
    </div>

)

const Business = () => {
  return (
    <section id="features" className={`${layout.section} ml-10`}>
      <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} ml-10 xl:ml-40 `}>Work Experience
        </h2> 
        <p className={`${styles.paragraph} max-w-[470px] ml-10 mr-10 xl:ml-40`}>I specialize in product design, from crafting intuitive UI/UX to developing comprehensive digital experiences, with expertise in business analysis to drive informed design decisions
        </p>
        
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature,index) =>
          (
            <FeatureCard key={feature.id} {...feature} index={index} />
            
          ))}


        </div>

      
    </section>
  )
}

export default Business
