import styles from "./button2.module.css"



const Button2 = ({ children, fullwidth, ...props }) => {
  return (
    <div className={`${styles.button} ${fullwidth && styles.fullWidth} `} {...props}>
      {children}
    </div>
  );
};

export default Button2;