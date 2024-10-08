import classNames from 'classnames';
import styles from './Column.module.scss';

type ColumnProps = {
  children: React.ReactNode;
  className?: string;
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around';
  fullHeight?: boolean;
  fullWidth?: boolean;
};

const mapAlignment = (alignment: string) => {
  switch (alignment) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'between':
      return 'space-between';
    case 'around':
      return 'space-around';
    default:
      return alignment;
  }
};

const Column: React.FC<ColumnProps> = ({
  children,
  className = '',
  alignItems = 'stretch',
  justifyContent = 'start',
  fullHeight = false,
  fullWidth = false,
}) => {
  return (
    <div
      className={classNames(
        styles.column,
        className,
        fullHeight && 'full-height',
        fullWidth && 'full-width',
        styles[`align-${mapAlignment(alignItems)}`],
        styles[`justify-${mapAlignment(justifyContent)}`],
      )}
    >
      {children}
    </div>
  );
};

export default Column;
