import {getActiveContext} from "../context/forms/ActiveFormContextProvider.jsx";
import {useEffect, useRef, useState} from "react";

const SelectInput = ({optionsName}) => {

    const {formData, setFormData} = getActiveContext();
    const labelRef = useRef(null);
    const selectRef = useRef(null);
    const caretRef = useRef(null);
    const selectContainerRef = useRef(null);
    const selectedOptionsRef = useRef(null);
    // Api call in future
    const [allOptions] = useState([
        "SCULPTURE",
        "MUSIC",
        "CINEMA",
        "PAINTING",
        "DRAWING",
        "DANCE",
        "POETRY",
        "ACTING",
        "GHOSTWRITING"
    ].sort());

    useEffect(() => {
        if (formData[optionsName].options.length < 1 && formData[optionsName].required) {
            showError();
        }
        selectedOptionsRef.current = formData[optionsName].options;
    }, [formData[optionsName].options]);

    useEffect(() => {
        if (formData[optionsName].options.length > 0) {
            focusSelect();
        } else {
            if (formData[optionsName].required) {
                showError();
            }
        }

        const handleClick = (event) => {
            if (event.target.classList.contains("cmp-select-input__option") ||
                event.target.classList.contains("cmp-select-input__input") ||
                event.target.classList.contains("cmp-select-input__label")
            ) {
                focusSelect();
            } else {
                blurSelect();
            }
        }

        window.addEventListener("click", handleClick)

        return () => {window.removeEventListener("click", handleClick)}
    }, []);

    const focusSelect = () => {
        caretRef.current.classList.add("cmp-select-input__caret--rotated", "cmp-select-input__caret--focused")
        selectRef.current.classList.add("cmp-select-input__input--focused");
        labelRef.current.classList.add("cmp-select-input__label--focused");
        selectContainerRef.current.classList.add("cmp-select-input__option-wrap--expanded");
        if (selectedOptionsRef.current.length > 0) {
            hideError();
        }
    }

    const blurSelect = () => {
        caretRef.current.classList.remove("cmp-select-input__caret--rotated")
        selectContainerRef.current.classList.remove("cmp-select-input__option-wrap--expanded");
        if (selectedOptionsRef.current.length < 1) {
            selectRef.current.classList.remove("cmp-select-input__input--focused");
            caretRef.current.classList.remove("cmp-select-input__caret--focused")
            labelRef.current.classList.remove("cmp-select-input__label--focused");
            if (formData[optionsName].required) {
                showError();
            }
        }
    }

    const showError = () => {
        labelRef.current.classList.add("cmp-select-input__label--error");
        labelRef.current.textContent = formData[optionsName].displayErrorMsg;
        selectRef.current.classList.add("cmp-select-input__input--error");
        caretRef.current.classList.add("cmp-select-input__caret--error");
    }

    const hideError = () => {
        labelRef.current.classList.remove("cmp-select-input__label--error");
        labelRef.current.textContent = formData[optionsName].label;
        selectRef.current.classList.remove("cmp-select-input__input--error");
        caretRef.current.classList.remove("cmp-select-input__caret--error");
    }

    const handleOptionClick = (event) => {
        const selectedOption = event.target.textContent;
        if (formData[optionsName].options.includes(selectedOption)) {
            setFormData(prev => ({...prev, [optionsName]: {...prev[optionsName], options: formData[optionsName].options.filter((option) => option !== selectedOption)}}));
            event.target.classList.remove("cmp-select-input__option--selected");
        } else {
            setFormData(prev => ({...prev, [optionsName]: {...prev[optionsName], options: [...prev[optionsName].options, selectedOption]}}));
            event.target.classList.add("cmp-select-input__option--selected");
        }
    }

    return (
        <div className="cmp-select-input">
            <div ref={caretRef} className="cmp-select-input__caret"></div>
            <label
                className="cmp-select-input__label"
                ref={labelRef}
            >
                {formData[optionsName].label}
            </label>
            <input
                value={[formData[optionsName].options[0], ...formData[optionsName].options.slice(1).map(option => ` ${option}`)]}
                ref={selectRef}
                onChange={()=>{}}
                className="cmp-select-input__input"
                id="temp-id"
            >
            </input>
            <div ref={selectContainerRef} className="cmp-select-input__option-wrap">
                <ul className="cmp-select-input__option-list">
                    {
                        allOptions.map((field) =>
                            <li key={field}
                                onClick={handleOptionClick}
                                className={`cmp-select-input__option ${formData[optionsName].options.includes(field) && "cmp-select-input__option--selected"}`}
                            >
                                {field}
                            </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default SelectInput;