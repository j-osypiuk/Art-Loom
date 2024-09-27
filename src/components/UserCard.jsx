const UserCard = ({props}) => {
    return (
        <div className="cmp-user-card">
            <div className="cmp-user-card__image"></div>
            <div className="cmp-user-card__data_wrap">
                <p className="cmp-user-card__nickname">Jane Wlazła</p>
                <hr/>
                <p className="cmp-user-card__art-field-wrap">
                    <span className="cmp-user-card__art-field">SCULPTURE</span>
                    <span className="cmp-user-card__art-field">MUSIC</span>
                    <span className="cmp-user-card__art-field">CINEMA</span>
                    <span className="cmp-user-card__art-field">PAINTING</span>
                    <span className="cmp-user-card__art-field">DRAWING</span>
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