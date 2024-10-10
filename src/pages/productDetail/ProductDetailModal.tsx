import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useClickOutside from '../../hooks/useClickOutside';
import styles from './ProductDetailModal.module.scss';
import Text from '../../components/Text/Text';
import { Close, Verified } from '../../assets/svgs';
import { currencyFormatter } from '../../utils/formatters';
import Badge from '../../components/Badge/Badge';
import Column from '../../components/Column/Column';
import Rating from '../../components/Rating/Rating';
import Row from '../../components/Row/Row';
import Spacing from '../../components/Spacing/Spacing';
import { Product } from '../../types/product';
import { getProduct } from '../../services/productsRequests';
import { log } from '../../services/logger';
import ErrorLoading from '../../components/Error/ErrorComponent';
import Shimmer from '../../components/Shimmer/Shimmer';
import { useTranslation } from 'react-i18next';

const ProductDetailModal: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const closeModal = () => {
    navigate(-1);
  };

  useClickOutside(contentRef, (event) => {
    const target = event.target as HTMLElement;
    if (!contentRef.current?.contains(target)) {
      closeModal();
    }
  });

  const handleGetProduct = async () => {
    setIsLoading(true);
    try {
      const response = await getProduct(id!);
      setProduct(response.data);
    } catch (error) {
      log(error, 'error');
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!id?.length) {
      return;
    }
    handleGetProduct();
  }, [id]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const content = (product: Product) => {
    let highlightComponent: React.ReactNode = null;

    if (product.highlight_status === 'BEST_SELLER') {
      highlightComponent = (
        <Badge variant="warning">{t('product.badges.bestSeller')}</Badge>
      );
    } else if (product.highlight_status === 'DAILY_OFFER') {
      highlightComponent = (
        <Badge variant="info">{t('product.badges.dailyOffer')}</Badge>
      );
    }

    return (
      <Row alignItems="start">
        <img
          className={styles.image}
          src={product.image_link}
          alt={t('product.imageAlt')}
        />
        <Spacing w="lg" h="lg" />
        <Column className={styles.detail}>
          {highlightComponent && (
            <>
              {highlightComponent}
              <Spacing h="sm" />
            </>
          )}
          <Text variant="body-bold">{product.store_name}</Text>
          <Spacing h="xs" />
          <Text variant={'subtitle'}>{product.name}</Text>
          <Spacing h="sm" />
          <Row alignItems="center">
            <Text variant="body-light">{product.store_name}</Text>
            <Spacing w="sm" />
            <Verified width={14} height={14} />
          </Row>
          <Spacing h="sm" />
          <Rating
            rating={product.review_score}
            amountOfRatings={product.total_reviews}
          />
          <Spacing h="md-lg" />
          {product.discount > 0 ? (
            <>
              <Text variant={'caption'} color="gray" strikethrough>
                {currencyFormatter(product.price)}
              </Text>
              <Spacing h="sm" />
              <Row alignItems="center">
                <Text variant={'body-large'}>
                  {currencyFormatter(product.discounted_price)}
                </Text>
                <Spacing w="md" />
                <Text variant={'label'} color="success">
                  {product.discount}% {t('product.discount')}
                </Text>
              </Row>
            </>
          ) : (
            <Text variant="body-large">{currencyFormatter(product.price)}</Text>
          )}
          <Spacing h="sm" />
          <Text
            variant="body-light"
            color={product.has_interest ? 'text' : 'success'}
          >{`${
            product.has_interest
              ? t('product.installments.withInterest', {
                  count: product.max_installments,
                  value: currencyFormatter(product.installment_value),
                })
              : t('product.installments.samePrice', {
                  count: product.max_installments,
                  value: currencyFormatter(product.installment_value),
                })
          }`}</Text>
          {product.arrive_today && (
            <Spacing mt="md">
              <Badge variant="success">{t('product.arriveToday')}</Badge>
            </Spacing>
          )}
        </Column>
      </Row>
    );
  };

  const laodingContent = () => {
    return (
      <Row alignItems="start">
        <Shimmer
          width="300px"
          height="400px"
          className={styles['shimmer-placeholder']}
        />
        <Spacing w="lg" h="lg" />
        <Column className={styles.productDetails}>
          <Shimmer width="120px" height="20px" />
          <Spacing h="sm" />
          <Shimmer width="240px" height="32px" />
          <Spacing h="md-lg" />
          <Shimmer width="160px" height="20px" />
          <Spacing h="sm" />
          <Shimmer width="120px" height="24px" />
          <Spacing h="sm" />
          <Shimmer width="180px" height="20px" />
        </Column>
      </Row>
    );
  };

  return (
    <div className={styles['modal-container']}>
      <div ref={contentRef} className={styles.modal}>
        <button
          className={styles.close}
          onClick={closeModal}
          aria-label={t('common.close')}
        >
          <Close width={24} height={24} />
        </button>
        <div className={styles.container}>
          {isLoading ? (
            laodingContent()
          ) : hasError || !product ? (
            <ErrorLoading onRetry={handleGetProduct} />
          ) : (
            content(product)
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
