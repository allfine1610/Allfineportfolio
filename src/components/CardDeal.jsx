import {card} from '../assets';
import styles, { layout } from '../style';
import Button from './Button';


const CardDeal = () => 
 (
  <section className={`${layout.section} ml-10 flex flex-col sm:flex-row`}>
  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>About Me 
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      I am a passionate and self-learnt web developer and graphic designer, with more than 3 years of hands-on experience on multiple creative design projects, concept design and visual conceptualization. 
    </p>
    <Button styles="mt-10"/>
  </div>
  <div className={layout.sectionImg}>
    <img src={card} alt="billing" className="w-[90%] h-[90%] mr-10" />
  </div>
</section>

  )


export default CardDeal
