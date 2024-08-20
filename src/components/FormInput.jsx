const FormInput = ({inputName, label, type}) => {

    const handleInputFocus = (event) => {
        const input = event.target;
        input.classList = "cmp-input__input cmp-input__input--focused";

        const label = document.querySelector(`label[for="${input.id}"]`);
        label.classList = "cmp-input__label cmp-input__label--focused";
    };

    const handleInputBlur = (event) => {
        const input = event.target;
        if (input.value !== "") return;
        input.classList = "cmp-input__input";

        const label = document.querySelector(`label[for="${input.id}"]`);
        label.classList = "cmp-input__label";
    };

    return (
        <div className="cmp-input">
            <label htmlFor={inputName} className="cmp-input__label">
                {label}
            </label>
            <input
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                type={type}
                name={inputName}
                id={inputName}
                className="cmp-input__input"
            />
        </div>
    )
}

export default FormInput;