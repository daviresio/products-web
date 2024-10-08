import styles from './NotFound.module.scss';
import { useNavigate } from 'react-router-dom';
import NotFound from '../assets/images/not_found.jpg';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
import Spacing from '../../components/Spacing/Spacing';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          src={NotFound}
          alt="Página não encontrada"
          className={styles.image}
        />
        <Text variant="body-large">Oops! Página não encontrada</Text>
        <Spacing h="md" />
        <Button
          variant="flat"
          color="secondary"
          onClick={handleGoBack}
          label="Volver para el inicio"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
