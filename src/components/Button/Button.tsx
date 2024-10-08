import classNames from 'classnames';
import styles from './Button.module.scss';
import Text from '../Text/Text';

type ButtonVariant = 'flat' | 'outlined';
type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'info'
  | 'warning';

interface ButtonProps {
  variant: ButtonVariant;
  color: ButtonColor;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  color,
  label,
  onClick,
  disabled = false,
}) => {
  const buttonClass = classNames(
    styles.button,
    styles[variant],
    styles[color],
    { [styles.disabled]: disabled },
  );

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      <Text variant="body-bold">{label}</Text>
    </button>
  );
};

export default Button;
