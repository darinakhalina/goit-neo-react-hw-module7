import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

function SearchBox() {
  const searchFormId = useId();
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css['search-form-container']}>
      <label htmlFor={searchFormId}>Find contacts by name</label>
      <input
        className={css['search-form']}
        id={searchFormId}
        type="search"
        value={value}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
}

export default SearchBox;
