import Tag from "./Tag.jsx";
import {Colors} from "../utils/colors.js";

const UserCard = ({props}) => {
    return (
        <div className="cmp-user-card">
            <div className="cmp-user-card__image"></div>
            <div className="cmp-user-card__data_wrap">
                <p className="cmp-user-card__nickname">Jane Wlazła</p>
                <hr/>
                <p className="cmp-user-card__tag-container tag-container">
                    <Tag props={{text: "SCULPTURE", bgColor: Colors.GREEN_DARK}}></Tag>
                    <Tag props={{text: "MUSIC", bgColor: Colors.GREEN_DARK}}></Tag>
                    <Tag props={{text: "CINEMA", bgColor: Colors.GREEN_DARK}}></Tag>
                    <Tag props={{text: "PAINTING", bgColor: Colors.GREEN_DARK}}></Tag>
                    <Tag props={{text: "DRAWING", bgColor: Colors.GREEN_DARK}}></Tag>
                </p>
                <p className="cmp-user-card__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <button className="cmp-user-card__btn" type="button">Connect</button>
        </div>
    );
}

export default UserCard;