import { useEffect } from 'react'

const FormInput = ({props, handleInputChange}) => {

    useEffect(() => {
        const label = document.querySelector(`#${props.name}-label`);
        const input = document.querySelector(`#${props.name}-input`);

        input.classList.toggle("cmp-input__input--error");

        label.classList.toggle("cmp-input__label--error");
        label.textContent = props.isValid ? `${props.label}` : `${props.label} is required field.`;
    }, [props.isValid])

    const updateInputValue = (event) => {
        handleInputChange({
            ...props,
            value: event.target.value,
        });
    }

    const handleInputAction = (event) => {
        const input = event.target;

        if (input.value !== "")
            return;

        input.classList.toggle("cmp-input__input--focused");

        const label = document.querySelector(`#${props.name}-label`);
        label.classList.toggle("cmp-input__label--focused");
    };

    return (
        <div className="cmp-input">
            <label htmlFor={`${props.name}-input`} id={`${props.name}-label`} className="cmp-input__label">
                {props.label}
            </label>
            <input
                value={props.value}
                onChange={updateInputValue}
                onFocus={handleInputAction}
                onBlur={handleInputAction}
                type={props.type}
                name={props.name}
                id={`${props.name}-input`}
                className="cmp-input__input"
            />
        </div>
    )
}

export default FormInput;