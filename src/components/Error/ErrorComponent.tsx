import styles from './ErrorComponent.module.scss';
import Spacing from '../Spacing/Spacing';
import Text from '../Text/Text';
import Button from '../Button/Button';
import Column from '../Column/Column';
import { Error } from '../../assets/svgs';
import { useTranslation } from 'react-i18next';

interface ErrorComponentProps {
  onRetry: () => void;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ onRetry }) => {
  const { t } = useTranslation();

  return (
    <Column
      fullHeight
      fullWidth
      alignItems="center"
      justifyContent="center"
      className={styles.container}
    >
      <Error />
      <Spacing h="xl" />
      <Text variant="body-large" color="warning" className={styles.text}>
        {t('error.message')}
      </Text>
      <Spacing h="lg" />
      <Button
        variant="outlined"
        color="warning"
        label={t('error.retry')}
        onClick={onRetry}
      />
    </Column>
  );
};

export default ErrorComponent;
