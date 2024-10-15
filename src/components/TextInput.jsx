import {useEffect, useRef} from 'react'
import {getActiveContext} from "../context/forms/ActiveFormContextProvider.jsx";

const TextInput = ({index}) => {

    const labelRef = useRef(null);
    const inputRef = useRef(null);
    const {formData, setFormData} = getActiveContext();

    useEffect(() => {
        if (formData.textInputs[index].value !== "") {
            handleInputFocus();
        }
    }, []);

    useEffect(() => {
        if (formData.textInputs[index].isValid) {
            inputRef.current.classList.remove("cmp-text-input__input--error");
            labelRef.current.classList.remove("cmp-text-input__label--error");
            labelRef.current.textContent = formData.textInputs[index].label;
        } else {
            inputRef.current.classList.add("cmp-text-input__input--error");
            labelRef.current.classList.add("cmp-text-input__label--error");
            labelRef.current.textContent = formData.textInputs[index].displayErrorMsg;
        }
    }, [formData.textInputs[index].isValid, formData.textInputs[index].isRegexValid, formData.textInputs[index].displayErrorMsg]);

    const validateInput = (label, value, isRequired, regex, regexErrorMsg = "") => {
        if (isRequired) {
            if(!value) {
                updateInputProperty("isValid", false);
                updateInputProperty("displayErrorMsg", `${label} is required field.`);
            } else {
                if (regex) {
                    validateRegex(regex,regexErrorMsg, value);
                } else {
                    updateInputProperty("isValid", true);
                }
            }
        } else {
            if (regex) {
                validateRegex(regex,regexErrorMsg, value);
            } else {
                updateInputProperty("isValid", true);
            }
        }
    }

    const validateRegex = (regex, regexErrorMsg, value) => {
        if (!regex.test(value)) {
            updateInputProperty("isValid", false);
            updateInputProperty("isRegexValid", false);
            updateInputProperty("displayErrorMsg", regexErrorMsg);
        } else {
            updateInputProperty("isValid", true);
            updateInputProperty("isRegexValid", true);
            updateInputProperty("isRegexValid", true);
        }
    }

    const updateInputValue = (event) => {
        validateInput(
            formData.textInputs[index].label,
            event.target.value,
            formData.textInputs[index].required,
            formData.textInputs[index].regex,
            formData.textInputs[index].regexErrorMsg
        );
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
        inputRef.current.classList.add("cmp-text-input__input--focused");
        labelRef.current.classList.add("cmp-text-input__label--focused");
    };

    const handleInputBlur = () => {
        if (formData.textInputs[index].value === "") {
            inputRef.current.classList.remove("cmp-text-input__input--focused");
            labelRef.current.classList.remove("cmp-text-input__label--focused");
        }
    }

    return (
        <div className="cmp-text-input">
            <label
                ref={labelRef}
                htmlFor={`${formData.textInputs[index].name}-input`}
                id={`${formData.textInputs[index].name}-label`}
                className="cmp-text-input__label"
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
                className="cmp-text-input__input"
            />
        </div>
    )
}

export default TextInput;