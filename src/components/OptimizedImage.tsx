import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
  sizes?: string;
  priority?: boolean;
}

// Generate responsive srcset for different screen sizes
const generateSrcSet = (src: string): string => {
  // For external URLs or data URLs, return empty
  if (src.startsWith('http') || src.startsWith('data:')) {
    return '';
  }
  
  // For local images, we use the same image but browser will pick based on viewport
  // In production, this could integrate with an image CDN for actual resizing
  return `${src} 640w, ${src} 768w, ${src} 1024w, ${src} 1280w, ${src} 1920w`;
};

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  containerClassName = "",
  aspectRatio,
  sizes = "(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 50vw",
  priority = false
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const srcSet = generateSrcSet(src);

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden ${containerClassName}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* Skeleton placeholder with shimmer */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-br from-muted via-muted/80 to-muted"
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{
              animation: 'shimmer 1.5s infinite',
              transform: 'translateX(-100%)'
            }}
          />
        </div>
      </motion.div>

      {/* Actual image with smooth reveal */}
      {isInView && (
        <motion.img
          src={src}
          srcSet={srcSet || undefined}
          sizes={srcSet ? sizes : undefined}
          alt={alt}
          className={`${className} ${isLoaded ? '' : 'opacity-0'}`}
          initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            scale: isLoaded ? 1 : 1.05,
            filter: isLoaded ? 'blur(0px)' : 'blur(10px)'
          }}
          transition={{ 
            duration: 0.7, 
            ease: [0.25, 0.1, 0.25, 1]
          }}
          onLoad={() => setIsLoaded(true)}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
