import styles from "../style";
import Button from "./Button";

const CTA = () => (

<section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] ml-10 mr-10 box-shadow`}>
  <div className="flex flex-col flex-1">
    <h2 className={styles.heading2}>Projects I have worked on!</h2>
    <div className="flex flex-col gap-10 mt-5 sm:flex-row">
      <div className="flex-1">
        <p className={`${styles.paragraph} max-w-[470px]`}>
          <strong>Predictive Loan Risk Model</strong><br/>
          A machine learning model developed to predict the risk of loan defaults by providing the safest eligible loan amount.
        </p>
        <div className="mt-5">
      <Button link="https://github.com/allfine16/Prediction" />
        </div>
      </div>
      <div className="flex-1">
        <p className={`${styles.paragraph} max-w-[470px]`}>
          <strong>Fleet Management UI/UX</strong><br/>
          Designed the UI/UX of an agricultural fleet management software, focusing on the autonomous control and simulation of drones. 
        </p>
        <div className="mt-5">
          <Button link=" https://github.com/allfine1610/Fleet-management-"/>
        </div>
      </div>
    </div>
  </div>
</section>




 
);

export default CTA;