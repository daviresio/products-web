import classNames from 'classnames';
import Text from '../Text/Text';
import styles from './Badge.module.scss';

interface BadgeProps {
  children: React.ReactNode;
  variant: 'info' | 'success' | 'warning';
}

const Badge: React.FC<BadgeProps> = ({ children, variant }) => {
  return (
    <div className={classNames(styles.badge, styles[variant])}>
      <Text variant="label-small">{children}</Text>
    </div>
  );
};
export default Badge;
