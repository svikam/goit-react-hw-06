import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = ({ value }) => {
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };
    return (
        <div>
            <label className={s.label}>
                Find contacts by name
                <input className={s.search}
                type="text"
                value={value}
                onChange={handleChange}
                />
            </label>
        </div>
    );
};

export default SearchBox;