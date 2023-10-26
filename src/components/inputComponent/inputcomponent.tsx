import styles from "./inputcomponent.module.scss";
export interface InputComponentProps {
  customPlaceHolder: string;
  customLabel: string;
  customInputType: string;
  error: string;
}
const InputComponent = (props: InputComponentProps) => {
  const { customPlaceHolder, customLabel, customInputType, error } = props;
  return (
    <div className={styles.inputFieldContainer}>
      <label className={styles.inputLabel}>{customLabel}</label>
      <input
        type={customInputType}
        placeholder={customPlaceHolder}
        className={`${styles.inputField} ${
          error ? styles.inputFieldError : ""
        }`}
      />
      {error && <div className={styles.inputFieldErrorText}>{error}</div>}
    </div>
  );
};
export default InputComponent;
