import { Star, StarFilled } from '../../assets/svgs';
import styles from './Rating.module.scss';
import Row from '../Row/Row';
import Spacing from '../Spacing/Spacing';
import Text from '../Text/Text';
import classNames from 'classnames';

interface RatingProps {
  rating: number;
  amountOfRatings?: number;
}

const Rating: React.FC<RatingProps> = ({ rating, amountOfRatings }) => {
  const percentage = (rating / 5) * 100;

  return (
    <Row className={styles.relative}>
      <Text variant={'caption'} color="gray">
        {rating}
      </Text>
      <Spacing w="sm" />
      <div className={styles.relative}>
        <StarsUnfilled />
        <StarsFilled clipPercentage={percentage} />
      </div>
      <Spacing w="sm" />
      <Text variant={'caption'} color="gray">
        ({amountOfRatings})
      </Text>
    </Row>
  );
};

interface StarsFilledProps {
  clipPercentage: number;
}

const StarsFilled: React.FC<StarsFilledProps> = ({ clipPercentage }) => {
  return (
    <div
      data-testid="stars-filled"
      className={classNames(styles.row, styles['stars-filled'])}
      style={{ clipPath: `inset(0 ${100 - clipPercentage}% 0 0)` }}
    >
      <StarFilled width={10} height={10} />
      <Spacing w="xs" />
      <StarFilled width={10} height={10} />
      <Spacing w="xs" />
      <StarFilled width={10} height={10} />
      <Spacing w="xs" />
      <StarFilled width={10} height={10} />
      <Spacing w="xs" />
      <StarFilled width={10} height={10} />
    </div>
  );
};

const StarsUnfilled = () => {
  return (
    <Row data-testid="stars-unfilled">
      <Star width={10} height={10} />
      <Spacing w="xs" />
      <Star width={10} height={10} />
      <Spacing w="xs" />
      <Star width={10} height={10} />
      <Spacing w="xs" />
      <Star width={10} height={10} />
      <Spacing w="xs" />
      <Star width={10} height={10} />
    </Row>
  );
};

export default Rating;
