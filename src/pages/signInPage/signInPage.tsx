import ButtonComponent from "../../components/buttonComponent";
import InputComponent from "../../components/inputComponent";
import { PlayButton } from "../../assets/svgIcons/svgIcons";
import styles from "./signInPage.module.scss";

type Props = {};

const SignInPage = (props: Props) => {
  return (
    <div className={styles.signInContainer}>
      <div className={styles.brandNameContainer}>
        
        <p className={styles.brandName}>Movie OTT</p>
      </div>
      <div className={styles.signIncontent}>
        <div className={styles.signInForm}>
          <h1 className={styles.signInText}>
            Sign <span>In</span>
          </h1>
          <div className={styles.signInInputFields}>
            <InputComponent
              customPlaceHolder="Email"
              customInputType="email"
              customLabel="Email"
              error=""
            />
          </div>
          <div className={styles.signInInputFields}>
            <InputComponent
              customPlaceHolder="Email"
              customInputType="email"
              customLabel="Email"
              error=""
            />
          </div>
          <div className={styles.signInButton}>
            <ButtonComponent
              backgroundColor="#BB261A"
              buttonText="SignIn"
              color="#fff"
            />
          </div>
        </div>
        <div className={styles.signUpContent}>
          <p className={styles.welcomText}>
            Welcome to <span>Movie OTT</span>
          </p>
          <div className={styles.signUpPlayIcon}>
            <PlayButton className={styles.playIcon} />
          </div>
          <p className={styles.signUpText}>
            <span>New here? </span>Create an account here.
          </p>
          <div className={styles.signUpButton}>
            <ButtonComponent
              backgroundColor="#AFB2B9"
              buttonText="SignUp"
              color="#1D253A"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
