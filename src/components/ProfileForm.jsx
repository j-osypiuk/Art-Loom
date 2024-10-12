import React, {useState} from "react";
import {ProfileFormContext} from "../context/forms/ProfileFormContext.jsx";
import TextInput from "./TextInput.jsx";
import {formatTextInputs} from "../utils/forms/FormUtils.js"
import SelectInput from "./SelectInput.jsx";
import TabPanel from "./TabPanel.jsx";
import Tabs from "./Tabs.jsx";
import Textarea from "./Textarea.jsx";

const ProfileForm = ({props}) => {

    const [formData, setFormData] = useState(
        {
            showNick: false,
            artFields: {
                label: "Art Fields",
                options: props.content.tags.map(tag => tag.name),
                required: false,
                displayErrorMsg: "Art Fields is required field.",
            },
            description: {
                name: "profileDescription",
                label: "Profile Description",
                value: props.content.description,
                required: false,
                displayErrorMsg: "Profile Description is required field.",
            },
            textInputs: [
                {
                    name: "firstName",
                    label: "First Name",
                    type: "text",
                    value: props.userData.firstName,
                    isValid: true,
                    required: true,
                    displayErrorMsg: "First Name is required field.",
                },
                {
                    name: "lastName",
                    label: "Last Name",
                    type: "text",
                    value: props.userData.lastName,
                    isValid: true,
                    required: true,
                    displayErrorMsg: "Last Name is required field.",
                },
                {
                    name: "nickname",
                    label: "Nickname",
                    type: "text",
                    value: props.userData.nickname,
                    isValid: true,
                    required: true,
                    displayErrorMsg: "Nickname is required field.",
                },
                {
                    name: "phoneNumber",
                    label: "Phone Number",
                    type: "text",
                    value: props.userData.phoneNumber,
                    isValid: true,
                    required: true,
                    displayErrorMsg: "Phone Number is required field.",
                },
                {
                    name: "email",
                    label: "Email",
                    type: "email",
                    value: props.userData.email,
                    isValid: true,
                    required: true,
                    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    isRegexValid: true,
                    displayErrorMsg: "Email is required field.",
                    regexErrorMsg: "Please enter a valid email address.",
                },
                {
                    name: "confirmEmail",
                    label: "Confirm Email",
                    type: "email",
                    value: props.userData.email,
                    isValid: true,
                    required: true,
                    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    isRegexValid: true,
                    displayErrorMsg: "Last Name is required field.",
                    regexErrorMsg: "Please enter a valid email address.",
                },
                {
                    name: "newPassword",
                    label: "New Password",
                    type: "password",
                    value: "",
                    isValid: true,
                    required: true,
                    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    isRegexValid: true,
                    displayErrorMsg: "Password is required field.",
                    regexErrorMsg: "Password must include upper/lowercase, digits, and special characters."
                },
                {
                    name: "confirmPassword",
                    label: "Confirm New Password",
                    type: "password",
                    value: "",
                    isValid: true,
                    required: true,
                    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    isRegexValid: true,
                    displayErrorMsg: "Confirm Password is required field.",
                    regexErrorMsg: "Password must include upper/lowercase, digits, and special characters."
                },
            ]
        }
    )

    const handleFormSubmit = (event) => {
        event.preventDefault();
        let responseObj = {
            showNick: formData.showNick,
            artFields: formData.artFields,
            description: formData.description.value,
            ...formatTextInputs(formData.textInputs)
        };

        console.log(responseObj);
        props.setShowProfileForm(false);
    }

    return (
        <div className="cmp-profile-form">
            <ProfileFormContext.Provider value={{formData, setFormData, options: formData.artFields}}>
                <form method="post" className="cmp-profile-form__form" autoComplete="off">
                    <Tabs fontSize="1.2rem" minWidth="12rem">
                        <TabPanel label="Personal Data">
                            {
                                formData.textInputs.slice(0, 4).map((inputData, index) => <TextInput key={index} index={index}/>)
                            }
                            <SelectInput optionsName="artFields" required={true}/>
                        </TabPanel>
                        <TabPanel label="Description">
                            <Textarea name="description" rows={20}/>
                        </TabPanel>
                        <TabPanel label="Photos">
                            <h2>This is events panel</h2>
                        </TabPanel>
                        <TabPanel label="Credentials">
                            {
                                formData.textInputs.slice(0, 4).map((inputData, index) => <TextInput key={index+4} index={index+4}/>)
                            }
                        </TabPanel>
                    </Tabs>
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