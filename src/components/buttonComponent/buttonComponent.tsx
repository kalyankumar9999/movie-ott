import styles from "./buttonComponent.module.scss";

type ButtonProps = {
  backgroundColor: string;
  buttonText: string;
};
type ButtonStyle = {
  backgroundColor: string;
};
const ButtonComponent = (props: ButtonProps) => {
  const { backgroundColor, buttonText } = props;
  const buttonStyle: ButtonStyle = {
    backgroundColor: `${backgroundColor}`,
  };
  return (
    <div>
      <button className={styles.buttonComponent} style={buttonStyle}>
        {buttonText}
      </button>
    </div>
  );
};

export default ButtonComponent;
