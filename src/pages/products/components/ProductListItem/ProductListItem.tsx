import { Product } from '../../../../types/product';
import Row from '../../../../components/Row/Row';
import Text from '../../../../components/Text/Text';
import { Link, useLocation } from 'react-router-dom';
import { currencyFormatter } from '../../../../utils/formatters';
import styles from './ProductListItem.module.scss';
import Spacing from '../../../../components/Spacing/Spacing';
import Badge from '../../../../components/Badge/Badge';
import { Verified } from '../../../../assets/svgs';
import Rating from '../../../../components/Rating/Rating';
import React from 'react';
import Image from '../../../../components/Image/Image';
import Shimmer from '../../../../components/Shimmer/Shimmer';
import { useTranslation } from 'react-i18next';

interface ProductListItemProps {
  product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const getHighlightComponent = () => {
    switch (product.highlight_status) {
      case 'BEST_SELLER':
        return (
          <Badge variant="warning">{t('product.badges.bestSeller')}</Badge>
        );
      case 'DAILY_OFFER':
        return <Badge variant="info">{t('product.badges.dailyOffer')}</Badge>;
      default:
        return null;
    }
  };

  const renderPrice = () => {
    if (product.discount === 0) {
      return (
        <Text variant="body-large">{currencyFormatter(product.price)}</Text>
      );
    }
    return (
      <>
        <Text variant="caption" color="gray" strikethrough>
          {currencyFormatter(product.price)}
        </Text>
        <Row>
          <Text variant="body-large">
            {currencyFormatter(product.discounted_price)}
          </Text>
          <Spacing w="md" />
          <Text variant="label" color="success">
            {product.discount}% {t('product.discount')}
          </Text>
        </Row>
      </>
    );
  };

  const renderInstallments = () => {
    if (!product.has_interest) {
      return (
        <Text variant="body-light" color="success">
          {t('product.installments.samePrice', {
            count: product.max_installments,
            value: currencyFormatter(product.installment_value),
          })}
        </Text>
      );
    }
    return (
      <Text variant="body-light" color="text">
        {t('product.installments.withInterest', {
          count: product.max_installments,
          value: currencyFormatter(product.installment_value),
        })}
      </Text>
    );
  };

  return (
    <div className={styles.card}>
      <div className={styles.row}>
        <Image
          src={product.image_link}
          alt={t('product.imageAlt')}
          placeholder={
            <Shimmer
              width="128px"
              height="150px"
              className={styles['shimmer-placeholder']}
            />
          }
          className={styles.img}
        />
        <Spacing h="xl" />
        <div className={styles.column}>
          {getHighlightComponent() || (
            <Text variant="body-bold">{product.brand}</Text>
          )}
          <Spacing h={getHighlightComponent() ? 'md' : 'sm'} />
          <Link
            to={`/productos/${product.id}`}
            state={{ previousLocation: location }}
          >
            <Text variant="subtitle">{product.name}</Text>
          </Link>
          <Spacing h="sm" />
          <Row>
            <Text variant="body-light">{product.store_name}</Text>
            <Spacing w="xs" />
            <Verified width={10} height={10} />
          </Row>
          <Spacing h="sm" />
          <Rating
            rating={product.review_score}
            amountOfRatings={product.total_reviews}
          />
          <Spacing h="sm" />
          {renderPrice()}
          {renderInstallments()}
          {product.arrive_today && (
            <Spacing mt="md">
              <Badge variant="success">{t('product.arriveToday')}</Badge>
            </Spacing>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
