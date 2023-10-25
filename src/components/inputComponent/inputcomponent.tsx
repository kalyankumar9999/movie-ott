import styles from "./inputcomponent.module.scss";
interface InputComponentProps {
  customPlaceHolder: string;
  customLabel: string;
  customInputType: string;
}
const InputComponent = (props: InputComponentProps) => {
  const { customPlaceHolder, customLabel, customInputType } = props;
  return (
    <div className={styles.inputFieldContainer}>
      <label className={styles.inputLabel}>{customLabel}</label>
      <input
        type={customInputType}
        placeholder={customPlaceHolder}
        className={styles.inputField}
      />
    </div>
  );
};
export default InputComponent;
