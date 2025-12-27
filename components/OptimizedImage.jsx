import Image from "next/image";
import { useState } from "react";

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        quality={85}
        onLoadingComplete={() => setIsLoading(false)}
        className={`
          duration-700 ease-in-out
          ${isLoading ? "scale-110 blur-sm" : "scale-100 blur-0"}
        `}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;

// Usage:
// <OptimizedImage
//   src="/assets/images/project.jpg"
//   alt="Project Screenshot"
//   width={600}
//   height={400}
//   className="rounded-lg"
// />
