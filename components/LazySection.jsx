import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LazySection = ({
  children,
  threshold = 0.1,
  delay = 0,
  className = "",
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default LazySection;

// Usage in index.js:
// <LazySection delay={0.1}>
//   <Experience />
// </LazySection>
//
// <LazySection delay={0.2}>
//   <Projects />
// </LazySection>
