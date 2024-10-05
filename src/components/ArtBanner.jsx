import StatsBanner from "./StatsBanner.jsx";
import profilePhoto from "../assets/temp.jpg";

const ArtBanner = (props) => {
    return (
        <div className="cmp-art-banner">
            <div className="cmp-art-banner__thumbnail-wrap">
                <img src={profilePhoto} alt="User profile photo" className="cmp-art-banner__thumbnail"/>
            </div>
            <div className="cmp-art-banner__info-container">
                <div>
                    <h2 className="cmp-art-banner__title">Pirates of Caribbean</h2>
                    <p className="cmp-art-banner__description">
                        venenatis feugiat et a turpis.
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius
                        mollis
                        tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla
                        facilisis
                        ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus
                        vitae ligula
                        venenatis feugiat et a turpis.
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius
                        mollis
                        tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla
                        facilisis
                        ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus
                        vitae ligula
                        venenatis feugiat et a turpis.
                    </p>
                </div>
                <StatsBanner props={{likes: 150, dislikes: 23, comments: 53, dateLabel: "Added", date: "05-10-2024"}}/>
            </div>
        </div>
    )
}

export default ArtBanner;