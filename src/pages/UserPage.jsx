import Tag from "../components/Tag.jsx";
import {Colors} from "../utils/colors.js";
import ProfileBanner from "../components/ProfileBanner.jsx";

const UserPage = () => {
    return (
        <div>
            <ProfileBanner props={{}}/>
            <Tag props={{text: "Hello", bgColor: Colors.GREEN_DARK}}></Tag>
            <Tag props={{text: "Red", bgColor: Colors.RED_LIGHT}}></Tag>
            <Tag props={{text: "purple", bgColor: Colors.PURPLE}}></Tag>
        </div>
    );
}

export default UserPage;