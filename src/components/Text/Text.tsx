import classNames from 'classnames';
import styles from './Text.module.scss';

interface TextProps {
  variant:
    | 'subtitle'
    | 'body-light'
    | 'body-bold'
    | 'body-large'
    | 'label'
    | 'caption'
    | 'label-small';
  className?: string;
  color?:
    | 'primary'
    | 'secondary'
    | 'text'
    | 'neutral'
    | 'success'
    | 'danger'
    | 'gray'
    | 'white'
    | 'warning';
  strikethrough?: boolean;
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  children,
  variant,
  className = '',
  color,
  strikethrough,
}) => {
  const classes = classNames(
    styles[variant],
    color && styles[color],
    strikethrough && styles.strikethrough,
    className,
  );

  switch (variant) {
    case 'subtitle':
      return <h2 className={classes}>{children}</h2>;
    default:
      return <span className={classes}>{children}</span>;
  }
};

export default Text;
