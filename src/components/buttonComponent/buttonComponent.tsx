import styles from "./buttonComponent.module.scss";

 export type ButtonProps = {
  backgroundColor: string;
  buttonText: string;
  color?:string
};
type ButtonStyle = {
  backgroundColor: string;
  color:string
};
const ButtonComponent = (props: ButtonProps) => {
  const { backgroundColor, buttonText ,color} = props;
  const buttonStyle: ButtonStyle = {
    backgroundColor: `${backgroundColor}`,
    color:`${color}`
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
