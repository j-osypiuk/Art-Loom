import {useContext, useEffect, useRef} from 'react'
import {ProfileFormContext} from "../context/forms/ProfileFormContext.jsx";

const TextInput = ({index}) => {

    const labelRef = useRef(null);
    const inputRef = useRef(null);
    const {formData, setFormData} = useContext(ProfileFormContext);

    useEffect(() => {
        if (formData.textInputs[index].value !== "") {
            handleInputFocus();
        }
    }, []);

    // useEffect(() => {
    //     inputRef.current.classList.toggle("cmp-input__input--error");
    //     labelRef.current.classList.toggle("cmp-input__label--error");
    //     labelRef.current.textContent = formData.textInputs[index].isValid ? `${formData.textInputs[index].label}` : `${formData.textInputs[index].label} is required field.`;
    // }, [formData.textInputs[index].isValid])

    const handleErrorMessage = (isValid, message = "") => {
        if (isValid) {
            inputRef.current.classList.remove("cmp-input__input--error");
            labelRef.current.classList.remove("cmp-input__label--error");
            labelRef.current.textContent = `${formData.textInputs[index].label}`;
        } else {
            inputRef.current.classList.add("cmp-input__input--error");
            labelRef.current.classList.add("cmp-input__label--error");
            labelRef.current.textContent = message;
        }
    }

    const validateInput = (value, regex, errorMessage) => {
        if (formData.textInputs[index].required) {
            if(!value) {
                updateInputProperty("isValid", false);
                handleErrorMessage(false, `${formData.textInputs[index].label} is required field.`);
            } else {
                if (regex) {
                    const isRegexValid = regex.test(value);
                    updateInputProperty("isValid", isRegexValid);
                    handleErrorMessage(isRegexValid, errorMessage);
                } else {
                    updateInputProperty("isValid", true);
                    handleErrorMessage(true);
                }
            }
        } else {
            if (regex && value) {
                const isRegexValid = regex.test(value);
                updateInputProperty("isValid", isRegexValid);
                handleErrorMessage(isRegexValid, errorMessage);
            } else {
                updateInputProperty("isValid", true);
                handleErrorMessage(true);
            }
        }
    }

    const updateInputValue = (event) => {
        validateInput(event.target.value, formData.textInputs[index].regex, formData.textInputs[index].errorMessage);
        updateInputProperty("value", event.target.value);
    }

    const updateInputProperty = (propertyName, value) => {
        setFormData(prevData => ({
            ...prevData,
            textInputs: prevData.textInputs.map((input, i) =>
                i === index ? {...input, [propertyName]: value } : input
            )
        }));
    }

    const handleInputFocus = () => {
        inputRef.current.classList.add("cmp-input__input--focused");
        labelRef.current.classList.add("cmp-input__label--focused");
    };

    const handleInputBlur = () => {
        if (formData.textInputs[index].value === "") {
            inputRef.current.classList.remove("cmp-input__input--focused");
            labelRef.current.classList.remove("cmp-input__label--focused");
        }
    }

    return (
        <div className="cmp-input">
            <label
                ref={labelRef}
                htmlFor={`${formData.textInputs[index].name}-input`}
                id={`${formData.textInputs[index].name}-label`}
                className="cmp-input__label"
            >
                {formData.textInputs[index].label}
            </label>
            <input
                ref={inputRef}
                value={formData.textInputs[index].value}
                onChange={updateInputValue}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                type={formData.textInputs[index].type}
                name={formData.textInputs[index].name}
                id={`${formData.textInputs[index].name}-input`}
                className="cmp-input__input"
            />
        </div>
    )
}

export default TextInput;