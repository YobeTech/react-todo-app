


/**
 * checked = boolean
 * onClick
 */
const Checkbox  = (props) => {
    const {checked, onClick} = props;
    const handleClick = () => {
        const status = !checked;
        onClick(status);
    }
    return (
        <label className="Checkbox" onClick={handleClick}>
            <input type="checkbox" checked={checked}/>
            <span className="checkmark" />
        </label>

    )
}

export default Checkbox;