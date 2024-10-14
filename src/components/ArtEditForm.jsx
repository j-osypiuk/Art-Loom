import Tabs from "./Tabs.jsx";
import TabPanel from "./TabPanel.jsx";
import TextInput from "./TextInput.jsx";
import SelectInput from "./SelectInput.jsx";
import Textarea from "./Textarea.jsx";
import FileUpload from "./FileUpload.jsx";
import {FileUploadType} from "../utils/FileUploadType.js";
import React, {useState} from "react";
import {ArtEditFormContext} from "../context/forms/ArtEditFormContext.jsx";
import {formatTextInputs} from "../utils/forms/FormUtils.js";

const ArtEditForm = ({props}) => {

    const [formData, setFormData] = useState({
        artThumbnailImg: null,
        textInputs: [
            {
                name: "title",
                label: "Title",
                type: "text",
                value: props.content.title,
                isValid: true,
                required: true,
                displayErrorMsg: "Title is required field.",
            }
        ],
        artFields: {
            label: "Art Fields",
            options: props.content.tags.map(tag => tag.name),
            required: true,
            displayErrorMsg: "Art Fields is required field.",
        },
        description: {
            name: "artDescription",
            label: "Art Description",
            value: props.content.description,
            required: true,
            displayErrorMsg: "Art description is required field.",
        },
    })

    const handleFormSubmit = (event) => {
        event.preventDefault();
        let responseObj = {
            artThumbnailImg: formData.artThumbnailImg,
            artFields: formData.artFields,
            description: formData.description.value,
            ...formatTextInputs(formData.textInputs)
        };

        console.log(responseObj);
        props.setShowArtEditForm(false);
    }

    return (
        <div className="cmp-art-edit-form">
            <ArtEditFormContext.Provider value={{formData, setFormData, options: formData.artFields}}>
                <form method="post" className="cmp-art-edit-form__form" autoComplete="off">
                    <Tabs fontSize="1.2rem" minWidth="12rem">
                        <TabPanel label="Content">
                            <TextInput index={0}/>
                            <SelectInput optionsName="artFields" required={true}/>
                            <Textarea name="description" rows={19}/>
                        </TabPanel>
                        <TabPanel label="Thumbnail Image">
                            <FileUpload type={FileUploadType.ART_THUMBNAIL_IMAGE}/>
                        </TabPanel>
                    </Tabs>
                    <div className="cmp-art-edit-form__btn-wrap">
                        <button type="submit" className="cmp-art-edit-form__button" onClick={handleFormSubmit}>
                            Save
                        </button>
                    </div>
                </form>
            </ArtEditFormContext.Provider>
        </div>
    )
}

export default ArtEditForm;