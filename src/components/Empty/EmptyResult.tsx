import Button from '../Button/Button';
import Column from '../Column/Column';
import Spacing from '../Spacing/Spacing';
import Text from '../Text/Text';
import styles from './EmptyResult.module.scss';
import Empty from '../../assets/images/empty.png';
import { useTranslation } from 'react-i18next';

interface EmptyResultProps {
  onClearFilter: () => void;
}

const EmptyResult: React.FC<EmptyResultProps> = ({ onClearFilter }) => {
  const { t } = useTranslation();

  return (
    <Column
      fullHeight
      fullWidth
      alignItems="center"
      justifyContent="center"
      className={styles.container}
    >
      <img src={Empty} alt={t('emptyResult.message')} className={styles.img} />
      <Text variant="body-large">{t('emptyResult.message')}</Text>
      <Spacing h="md" />
      <Button
        variant="outlined"
        color="secondary"
        label={t('emptyResult.clearSearch')}
        onClick={onClearFilter}
      />
    </Column>
  );
};

export default EmptyResult;
