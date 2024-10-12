import React, {useState} from "react";
import {ProfileFormContext} from "../context/forms/ProfileFormContext.jsx";
import TextInput from "./TextInput.jsx";
import {formatTextInputs} from "../utils/forms/FormUtils.js"
import SelectInput from "./SelectInput.jsx";
import TabPanel from "./TabPanel.jsx";
import ArtBanner from "./ArtBanner.jsx";
import Tabs from "./Tabs.jsx";

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
            <ProfileFormContext.Provider value={{formData, setFormData, options: formData.artFields}}>
                <h1>Profile form</h1>
                <form method="post" className="cmp-login__form" autoComplete="off">
                    <Tabs>
                        <TabPanel label="Personal Data">
                            <SelectInput optionsName="artFields" required={true}/>
                            {
                                formData.textInputs.map((inputData, index) => <TextInput key={index} index={index}/>)
                            }
                            <div className="cmp-profile-form__btn-wrap">
                                <button type="submit" className="cmp-profile-form__button" onClick={handleFormSubmit}>
                                    Save
                                </button>
                            </div>
                        </TabPanel>
                        <TabPanel label="Photos">
                            <h2>This is events panel</h2>
                        </TabPanel>
                        <TabPanel label="ETC.">
                            <h2>Content for Tab 3</h2>
                        </TabPanel>
                    </Tabs>
                </form>
            </ProfileFormContext.Provider>
        </div>
    );
}

export default ProfileForm;