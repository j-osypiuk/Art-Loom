import React, {useEffect, useRef, useState} from "react";
import { FaFileUpload } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import {FileUploadType} from "../utils/FileUploadType.js"
import {getActiveContext} from "../context/forms/ActiveFormContextProvider.jsx";

const FileUpload = ({type}) => {

    const [previewImage, setPreviewImage] = useState(null);
    const [filePropertyName, setFilePropertyName] = useState(null);
    const [imageTypeClass, setImageTypeClass] = useState("");
    const [inputLabel, setInputLabel] = useState("");
    const fileInputRef = useRef(null);
    const {formData, setFormData} = getActiveContext();

    useEffect(() => {
        let className = "cmp-file-upload__img-preview ";
        let label = ""
        switch (type) {
            case FileUploadType.PROFILE_IMAGE: {
                className += "cmp-file-upload__img-preview--profile-photo";
                label = "Profile Photo";
                setFilePropertyName("profileImg")
                break;
            }
            case FileUploadType.PROFILE_BACKGROUND_IMAGE: {
                className += "cmp-file-upload__img-preview--profile-background";
                label = "Profile Background Photo";
                setFilePropertyName("profileBackgroundImg")
                break;
            }
            case FileUploadType.ART_THUMBNAIL_IMAGE: {
                className += "cmp-file-upload__img-preview--art-thumbnail";
                label = "Art Thumbnail";
                setFilePropertyName("artThumbnailImg")
                break;
            }
        }
        setImageTypeClass(className);
        setInputLabel(label);

        if (formData[filePropertyName]) {
            setPreviewImage(URL.createObjectURL(formData[filePropertyName]));
        }
    }, []);

    useEffect(() => {
        if (formData[filePropertyName]) {
            setPreviewImage(URL.createObjectURL(formData[filePropertyName]));
        } else {
            setPreviewImage(null);
        }
    }, [formData[filePropertyName]]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
        }

        switch (type) {
            case FileUploadType.PROFILE_IMAGE: {
                setFormData(prev => ({...prev, [filePropertyName]: file}));
                break;
            }
            case FileUploadType.PROFILE_BACKGROUND_IMAGE: {
                setFormData(prev => ({...prev, [filePropertyName]: file}));
                break;
            }
            case FileUploadType.ART_THUMBNAIL_IMAGE: {
                setFormData(prev => ({...prev, [filePropertyName]: file}));
                break;
            }
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleImgDelete = () => {
        setFormData(prev => ({...prev, [filePropertyName]: null}));
    }

    return (
        <div className="cmp-file-upload">
            <label htmlFor={`cmp-file-upload__file-input--${type}`} className="cmp-file-upload__label">
                {inputLabel}
            </label>
            <div className="cmp-file-upload__input-wrap">
                <input
                    className="cmp-file-upload__file-input"
                    id={`cmp-file-upload__file-input--${type}`}
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                />
                <div className="cmp-file-upload__content-wrap">
                    {previewImage && (
                        <button type="button" className="cmp-file-upload__delete-btn" onClick={handleImgDelete}>
                            <MdDeleteForever className="cmp-file-upload__delete" />
                        </button>
                    )}
                    {previewImage && (
                        <div className="cmp-file-upload__preview-wrap">
                            <img className={imageTypeClass} src={previewImage} alt="Selected"/>
                        </div>
                    )}
                    {!previewImage && (
                        <div className="cmp-file-upload__icon-wrap">
                            <FaFileUpload className="cmp-file-upload__icon"/>
                        </div>
                    )}
                    <div className="cmp-file-upload__btn-wrap">
                        <button className="cmp-file-upload__browse-btn" type="button" onClick={handleButtonClick}>
                            Browse Files
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FileUpload;
