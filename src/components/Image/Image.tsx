import { useState } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholder: React.ReactNode;
  className?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  placeholder,
  className,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && placeholder}
      <img
        className={classNames(
          styles.image,
          { [styles.loaded]: isLoaded },
          className,
        )}
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        {...rest}
      />
    </>
  );
};

export default Image;
