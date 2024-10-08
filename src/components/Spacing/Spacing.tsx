import classNames from 'classnames';
import styles from './Spacing.module.scss';

type SpacingToken =
  | 'xs'
  | 'sm'
  | 'md'
  | 'md-lg'
  | 'lg'
  | 'lg-xl'
  | 'xl'
  | 'xxl';

type SpacingProps = {
  children?: React.ReactNode;
  className?: string;
  m?: SpacingToken;
  mt?: SpacingToken;
  mr?: SpacingToken;
  mb?: SpacingToken;
  ml?: SpacingToken;
  p?: SpacingToken;
  pt?: SpacingToken;
  pr?: SpacingToken;
  pb?: SpacingToken;
  pl?: SpacingToken;
  w?: SpacingToken;
  h?: SpacingToken;
};

const Spacing: React.FC<SpacingProps> = ({
  children,
  className = '',
  m,
  mt,
  mr,
  mb,
  ml,
  p,
  pt,
  pr,
  pb,
  pl,
  w,
  h,
}) => {
  const spacingClasses = classNames(
    className,
    m && styles[`m-${m}`],
    mt && styles[`mt-${mt}`],
    mr && styles[`mr-${mr}`],
    mb && styles[`mb-${mb}`],
    ml && styles[`ml-${ml}`],
    p && styles[`p-${p}`],
    pt && styles[`pt-${pt}`],
    pr && styles[`pr-${pr}`],
    pb && styles[`pb-${pb}`],
    pl && styles[`pl-${pl}`],
    w && styles[`w-${w}`],
    h && styles[`h-${h}`],
  );

  return <div className={spacingClasses}>{children}</div>;
};

export default Spacing;
