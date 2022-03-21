import '../scss/Toggle.scss';

const Toggle  = ({ label, onClick }) => {
    return (
        <div className="toggle-container dyslexia-friendly-true">
            {label}
            <div className="toggle-switch">
                <input type="checkbox" className="checkbox"
                    name={label} id={label} onChange={onClick}/>
                <label className="label" htmlFor={label}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
    )
}

export default Toggle;
