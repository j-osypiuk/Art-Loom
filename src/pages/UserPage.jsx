import ProfileBanner from "../components/ProfileBanner.jsx";
import ArtBanner from "../components/ArtBanner.jsx";
import {Colors} from "../utils/colors.js";

const UserPage = () => {

    const art_1 = {
        thumbnailUrl: "src/assets/temp.jpg",
        content: {
            title: "Super Artwork",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis.",
            tags: [
                {name: "cinema", bgColor: Colors.GREEN_DARK},
                {name: "music", bgColor: Colors.PURPLE_DARK},
            ]
        },
        stats: {likes: 150, dislikes: 23, comments: 53, dateLabel: "Added", date: "05-10-2024"}
    }

    const art_2 = {
        thumbnailUrl: "src/assets/note.png",
        content: {
            title: "Music Masterpiece",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis.",
            tags: [
                {name: "music", bgColor: Colors.BLUE_DARK},
            ]
        },
        stats: {likes: 24, dislikes: 3, comments: 23, dateLabel: "Added", date: "05-10-2024"}
    }

    return (
        <div>
            <ProfileBanner props={{}}/>
            <ArtBanner props={art_1}/>
            <ArtBanner props={art_2}/>
        </div>
    );
}

export default UserPage;