import React from 'react';
import styles from './Shimmer.module.scss';

interface ShimmerProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Shimmer: React.FC<ShimmerProps> = ({
  width = '100%',
  height = '16px',
  borderRadius = '4px',
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`${styles.shimmer} ${className}`}
      style={{ width, height, borderRadius, ...style }}
      role="presentation"
      aria-hidden="true"
    />
  );
};

export default Shimmer;
