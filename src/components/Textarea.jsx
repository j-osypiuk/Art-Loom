import {getActiveContext} from "../context/forms/ActiveFormContextProvider.jsx";
import {useEffect, useRef} from "react";

const Textarea = ({name, rows}) => {

    const {formData, setFormData} = getActiveContext();
    const labelRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (formData[name].value) {
            handleInputFocus();
        }
    }, []);

    useEffect(() => {
        if (!formData[name].value) {
            if (formData[name].required) {
                inputRef.current.classList.add("cmp-textarea__textarea--error");
                labelRef.current.classList.add("cmp-textarea__label--error");
                labelRef.current.textContent = formData[name].displayErrorMsg;
            }
        } else {
            inputRef.current.classList.remove("cmp-textarea__textarea--error");
            labelRef.current.classList.remove("cmp-textarea__label--error");
            labelRef.current.textContent = formData[name].label;
        }
    }, [formData[name].value]);

    const handleInputChange = (event) => {
        setFormData(prev => ({...prev, [name]: {...prev[name], value: event.target.value}}));
    }

    const handleInputFocus = () => {
        inputRef.current.classList.add("cmp-textarea__textarea--focused");
        labelRef.current.classList.add("cmp-textarea__label--focused");
    };

    const handleInputBlur = () => {
        if (!formData[name].value) {
            inputRef.current.classList.remove("cmp-textarea__textarea--focused");
            labelRef.current.classList.remove("cmp-textarea__label--focused");
        }
    }

    return (
        <div className="cmp-textarea__input">
            <label
                ref={labelRef}
                htmlFor={`${formData[name].name}-input`}
                id={`${formData[name].name}-label`}
                className="cmp-textarea__label"
            >
                {formData[name].label}
            </label>
            <textarea
                ref={inputRef}
                value={formData[name].value}
                name={formData[name].name}
                id={`${formData[name].name}-input`}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className="cmp-textarea__textarea"
                spellCheck="false"
                rows={rows}
            />
        </div>
    )
}

export default Textarea;