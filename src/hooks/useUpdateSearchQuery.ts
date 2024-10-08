import { useNavigate, useLocation } from 'react-router-dom';
import { URL_PARAMS } from '../utils/constants';

const useUpdateSearchQuery = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const updateSearchQuery = (searchTerm: string) => {
    navigate({
      pathname: location.pathname,
      search: `?${URL_PARAMS.SEARCH}=${encodeURIComponent(searchTerm)}`,
    });
  };

  return updateSearchQuery;
};

export default useUpdateSearchQuery;
