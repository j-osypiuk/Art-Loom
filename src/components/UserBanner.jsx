import {useEffect, useState} from "react";

const UserBanner = ({type}) => {

    const [fontSize, setFontSize] = useState(0);
    const [imageSize, setImageSize] = useState(0);

    const [fullName, setFullName] = useState("Marlyn Davis");
    const [nickname, setNickname] = useState("CrazyMarlynnnn");

    useEffect(() => {

        if (type === "artPage") {
            setFontSize(2.4);
            setImageSize(6.4);
        }
        if (type === "comment") {
        }

    }, [])

    return(
        <div className="cmp-user-banner">
            <img className="cmp-user-banner__profile-img"
                 src="src/assets/profile-photo.jpg"
                 alt="User Profile Photo"
                 style={{width:`${imageSize}rem`, height:`${imageSize}rem`}}
            />
            <div className="cmp-user-banner__name-wrap">
                <span className="cmp-user-banner__full-name" style={{fontSize: `${fontSize}rem`}}>{`${fullName} `}</span>
                <span className="cmp-user-banner__nick-name" style={{fontSize: `${fontSize}rem`}}>#{nickname}</span>
            </div>
        </div>
    )
}

export default UserBanner;