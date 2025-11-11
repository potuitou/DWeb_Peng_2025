import cx from "classnames";

//Props destructuring
const Button = (props) => {
  const { children, rounded, className, ...otherProps } = props;

  const baseClass =
    "inline-flex items-center justify-center px-8 py-3 border border-transparent transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

    //className: take from the parent
    //baseClass: always apply
    //{}:conditional, if rounded is true then rounded-full
    const classes = cx(className, baseClass, {
    "rounded-full": rounded,
  });

  return (
    <button {...otherProps} className={classes}>
      {children}
    </button>
  );
};

export default Button;
