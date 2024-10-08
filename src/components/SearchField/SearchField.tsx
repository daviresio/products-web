import { useState, useEffect, useRef } from 'react';
import { Clock, SearchIcon } from '../../assets/svgs';
import styles from './SearchField.module.scss';
import Row from '../Row/Row';
import Spacing from '../Spacing/Spacing';
import Text from '../Text/Text';
import { LOCAL_STORAGE_KEYS, URL_PARAMS } from '../../utils/constants';
import { useTranslation } from 'react-i18next';
import useUpdateSearchQuery from '../../hooks/useUpdateSearchQuery';
import { useLocation } from 'react-router-dom';

interface SearchFieldProps {}

const SearchField: React.FC<SearchFieldProps> = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const updateSearchQuery = useUpdateSearchQuery();
  const location = useLocation();

  useEffect(() => {
    const searches = localStorage.getItem(LOCAL_STORAGE_KEYS.PREVIOUS_SEARCHES);
    if (searches) {
      setPreviousSearches(JSON.parse(searches));
    }
  }, []);

  // Atualiza o campo de busca sempre que a URL mudar
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchParam = urlParams.get(URL_PARAMS.SEARCH);

    // Se não houver searchParam, limpa o campo de busca
    setSearchTerm(searchParam || '');
  }, [location.search]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>,
  ) => {
    e.preventDefault();

    if (searchTerm.trim() !== '') {
      const updatedSearches = [
        searchTerm,
        ...previousSearches.filter((s) => s !== searchTerm),
      ].slice(0, 5);

      setPreviousSearches(updatedSearches);
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.PREVIOUS_SEARCHES,
        JSON.stringify(updatedSearches),
      );
    }

    updateSearchQuery(searchTerm);

    setSearchTerm('');
    setShowDropdown(false);

    inputRef.current?.blur();
  };

  const handleFocus = () => {
    setShowDropdown(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowDropdown(true);
  };

  const handlePreviousSearchClick = (term: string) => {
    setSearchTerm(term);
    setShowDropdown(false);

    updateSearchQuery(term);
    inputRef.current?.blur();
  };

  const filteredSearches = previousSearches.filter((term) =>
    term.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const highlightMatch = (term: string, query: string) => {
    const index = term.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1 || query === '') {
      return term;
    }
    const beforeStr = term.slice(0, index);
    const matchStr = term.slice(index, index + query.length);
    const afterStr = term.slice(index + query.length);
    return (
      <>
        {beforeStr}
        <strong>{matchStr}</strong>
        {afterStr}
      </>
    );
  };

  return (
    <div className={styles['search-field']} ref={dropdownRef}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          ref={inputRef}
          value={searchTerm}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder={t('search.placeholder')}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              inputRef.current?.blur();
              handleSearch(e);
            }
          }}
        />
        <div className={styles.tick} />
        <button type="submit" aria-label={t('search.ariaLabel')}>
          <SearchIcon />
        </button>
        {showDropdown && filteredSearches.length > 0 && (
          <ul className={styles.list}>
            {filteredSearches.map((term, index) => (
              <li key={index} onClick={() => handlePreviousSearchClick(term)}>
                <Row>
                  <Clock width={16} height={16} />
                  <Spacing w="md" />
                  <Text variant="body-light">
                    {highlightMatch(term, searchTerm)}
                  </Text>
                </Row>
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default SearchField;
