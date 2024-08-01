import s from './SearchBox.module.css';
const SearchBox = ({ value, onFilter }) => {
    return (
        <div>
            <label className={s.label}>
                Find contacts by name
                <input className={s.search}
                type="text"
                value={value}
                onChange={(e) => onFilter(e.target.value)}
                />
            </label>
        </div>
    );
};

export default SearchBox;