import { motion } from "framer-motion";

const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
  target = "_blank",
  ...props
}) => {
  const baseStyles =
    "px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 inline-flex items-center gap-2";

  const variants = {
    primary:
      "border border-textGreen text-textGreen hover:bg-hoverColor hover:shadow-lg hover:-translate-y-0.5",
    secondary:
      "bg-textGreen text-bodyColor hover:bg-textGreen/90 hover:shadow-lg hover:-translate-y-0.5",
    ghost: "text-textGreen hover:bg-hoverColor",
  };

  const ButtonContent = () => (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target={target} rel="noopener noreferrer">
        <ButtonContent />
      </a>
    );
  }

  return <ButtonContent />;
};

export default Button;

// Usage Examples:
// <Button href="/resume.pdf">Download Resume</Button>
// <Button variant="secondary">Contact Me</Button>
// <Button variant="ghost" onClick={handleClick}>Learn More</Button>
