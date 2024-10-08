import Spacing from '../../../../components/Spacing/Spacing';
import Shimmer from '../../../../components/Shimmer/Shimmer';
import styles from './ProductListItemShimmer.module.scss';

const ProductListItemShimmer: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.rowContainer}>
        <Shimmer
          width="120px"
          height="150px"
          borderRadius="8px"
          className={styles.imageShimmer}
        />
        <div className={styles.columnContainer}>
          <Shimmer width="80px" height="20px" borderRadius="4px" />
          <Spacing h="md-lg" />

          <Shimmer width="250px" height="24px" borderRadius="4px" />
          <Spacing h="sm" />
          {/* Store Name and Verified Icon */}
          <Shimmer width="100px" height="16px" borderRadius="4px" />
          <Spacing h="sm" />

          {/* Price */}
          <Shimmer width="180px" height="30px" borderRadius="4px" />
          <Spacing h="sm" />

          {/* Installments */}
          <Shimmer width="100px" height="10px" borderRadius="4px" />
          <Spacing h="sm" />

          {/* Arrive Today Badge */}
          <Shimmer width="100px" height="18px" borderRadius="4px" />
        </div>
      </div>
    </div>
  );
};

export default ProductListItemShimmer;
