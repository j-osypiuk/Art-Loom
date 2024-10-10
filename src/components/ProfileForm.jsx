import {useState} from "react";
import {ProfileFormContext} from "../context/forms/ProfileFormContext.jsx";
import TextInput from "./TextInput.jsx";
import {formatTextInputs} from "../utils/forms/FormUtils.js"

const ProfileForm = ({props}) => {

    const [formData, setFormData] = useState(
        {
            showNick: false,
            artFields: props.content.tags.map(tag => tag.name),
            description: props.content.description,
            textInputs: [
                {
                    name: "firstName",
                    label: "First Name",
                    type: "text",
                    value: props.userData.firstName,
                    isValid: true,
                    required: true
                },
                {
                    name: "lastName",
                    label: "Last Name",
                    type: "text",
                    value: props.userData.lastName,
                    isValid: true,
                    required: true
                },
                {
                    name: "email",
                    label: "Email",
                    type: "email",
                    value: props.userData.email,
                    isValid: true,
                    required: true,
                    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    errorMessage: "Please enter a valid email address. Example: example@example.com"
                },
                {
                    name: "phoneNumber",
                    label: "Phone Number",
                    type: "text",
                    value: props.userData.phoneNumber,
                    isValid: true,
                    required: true
                },
                {
                    name: "nickname",
                    label: "Nickname",
                    type: "text",
                    value: props.userData.nickname,
                    isValid: true,
                    required: true
                },
            ]
        }
    )

    const handleFormSubmit = (event) => {
        event.preventDefault();
        let responseObj = {
            showNick: formData.showNick,
            artFields: formData.artFields,
            description: formData.description,
            ...formatTextInputs(formData.textInputs)
        };

        console.log(responseObj);
        props.setShowProfileForm(false);
    }

    return (
        <div className="cmp-profile-form">
            <ProfileFormContext.Provider value={{formData, setFormData}}>
                <h1>Profile form</h1>
                <form method="post" className="cmp-login__form" autoComplete="off">
                    {
                        formData.textInputs.map((inputData, index) => <TextInput key={index} index={index}/>)
                    }
                    <div className="cmp-profile-form__btn-wrap">
                        <button type="submit" className="cmp-profile-form__button" onClick={handleFormSubmit}>
                            Save
                        </button>
                    </div>
                </form>
            </ProfileFormContext.Provider>
        </div>
    );
}

export default ProfileForm;