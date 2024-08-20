const FormInput = ({inputName, label, type}) => {

    const handleInputAction = (event) => {
        const input = event.target;

        if (input.value !== "")
            return;

        input.classList.toggle("cmp-input__input--focused");
        const label = document.querySelector(`label[for="${input.id}"]`);
        label.classList.toggle("cmp-input__label--focused");
    };

    return (
        <div className="cmp-input">
            <label htmlFor={inputName} className="cmp-input__label">
                {label}
            </label>
            <input
                onFocus={handleInputAction}
                onBlur={handleInputAction}
                type={type}
                name={inputName}
                id={inputName}
                className="cmp-input__input"
            />
        </div>
    )
}

export default FormInput;