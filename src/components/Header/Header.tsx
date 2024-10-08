import Row from '../Row/Row';
import SearchField from '../SearchField/SearchField';
import styles from './Header.module.scss';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <Row alignItems="center" justifyContent="center" fullHeight fullWidth>
        <SearchField />
      </Row>
    </header>
  );
};

export default Header;
