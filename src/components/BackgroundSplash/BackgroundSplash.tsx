import Image from "next/image";

interface SplashProps {
  src: string;
  alt: string;
  className: string;
  style?: React.CSSProperties;
}

export const Splash = ({ src, alt, className, style }: SplashProps) => {
  return (
    <div className={`absolute z-0 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        layout="responsive"
        style={style}
      />
    </div>
  );
};
