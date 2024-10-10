import ProfileBanner from "../components/ProfileBanner.jsx";
import ArtBanner from "../components/ArtBanner.jsx";
import {Colors} from "../utils/colors.js";
import {useState} from "react";

const UserPage = () => {

    const [profileData, setProfileData] = useState(
        {
            userData: {
                nickname: "janes-art",
                email: "jane@mail.com",
                phoneNumber: "444555222",
                firstName: "Jane",
                lastName: "Wlazła",
            },
            thumbnailUrl: "src/assets/profile-photo.jpg",
            content: {
                title: "Jane Wlazła",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis.",
                tags: [
                    {name: "SCULPTURE", bgColor: Colors.GREEN_DARK},
                    {name: "MUSIC", bgColor: Colors.PURPLE_DARK},
                    {name: "CINEMA", bgColor: Colors.RED_DARK},
                    {name: "PAINTING", bgColor: Colors.YELLOW_DARK},
                    {name: "DRAWING", bgColor: Colors.BLUE_DARK},
                ],
                textHeight: 5.6
            },
            stats: {likes: 150, dislikes: 23, comments: 53, dateLabel: "Joined", date: "05-10-2024"},
            artworks: [
                {
                    id: 1,
                    thumbnailUrl: "src/assets/temp.jpg",
                    content: {
                        title: "Super Artwork",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis.",
                        tags: [
                            {name: "CINEMA", bgColor: Colors.RED_DARK},
                            {name: "MUSIC", bgColor: Colors.PURPLE_DARK},
                        ],
                        textHeight: 23.3
                    },
                    stats: {likes: 10, dislikes: 10, comments: 10, dateLabel: "Added", date: "2024-05-29"},
                },
                {
                    id: 2,
                    thumbnailUrl: "src/assets/note.png",
                    content: {
                        title: "Music Masterpiece",
                        description: "EXPANDED Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis.",
                        tags: [
                            {name: "MUSIC", bgColor: Colors.PURPLE_DARK},
                        ],
                        textHeight: 23.3
                    },
                    stats: {likes: 50, dislikes: 50, comments: 50, dateLabel: "Added", date: "2024-05-02"}
                },
                {
                    id: 3,
                    thumbnailUrl: "src/assets/white.png",
                    content: {
                        title: "White Masterpiece",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis.",
                        tags: [
                            {name: "MUSIC", bgColor: Colors.PURPLE_DARK},
                        ],
                        textHeight: 23.3
                    },
                    stats: {likes: 20, dislikes: 20, comments: 20, dateLabel: "Added", date: "2024-05-14"}
                },
                {
                    id: 4,
                    thumbnailUrl: "src/assets/black.png",
                    content: {
                        title: "Black Masterpiece",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis.",
                        tags: [
                            {name: "MUSIC", bgColor: Colors.PURPLE_DARK},
                        ],
                        textHeight: 23.3
                    },
                    stats: {likes: 40, dislikes: 40, comments: 40, dateLabel: "Added", date: "2024-05-18"}
                },
            ]
        }
    );

    const [displayedArtworks, setDisplayedArtworks] = useState(profileData.artworks);
    const [sortType, setSortType] = useState("newest");
    const [filterValue, setFilterValue] = useState("");

    const handleSortChange = (event) => {
        const newSortType = event.target.value;
        setSortType(newSortType)
        let sortedArtworks = [];

        switch (newSortType) {
            case "newest": {
                sortedArtworks = profileData.artworks.sort((a, b) =>
                    new Date(b.stats.date) - new Date(a.stats.date)
                );
                break;
            }
            case "oldest": {
                sortedArtworks = profileData.artworks.sort((a, b) =>
                    new Date(a.stats.date) - new Date(b.stats.date)
                );
                break;
            }
            case "mostPopular": {
                sortedArtworks = profileData.artworks.sort((a, b) =>
                    (b.stats.likes + b.stats.dislikes + b.stats.comments) - (a.stats.likes + a.stats.dislikes + a.stats.comments)
                );
                break;
            }
        }

        setDisplayedArtworks(sortedArtworks);
    }

    const handleFilterChange = (event) => {
        const filterValue = event.target.value;
        setFilterValue(filterValue);
        const filteredArtworks = profileData.artworks.filter(artwork => artwork.content.tags.map(tag => tag.name).includes(filterValue));
        setDisplayedArtworks(filteredArtworks)
    }

    return (
        <div className="cmp-user-page">
            <ProfileBanner props={profileData}/>
            <div className="cmp-user-page__select_wrap">
                <select value={filterValue} onChange={handleFilterChange} className="cmp-user-page__art-field-filter-select" id="artFieldFilter" name="artFieldFilter">
                    {
                        profileData.content.tags.map(tag => <option key={tag.name} value={tag.name}>{tag.name}</option>)
                    }
                </select>
                <select value={sortType} onChange={handleSortChange} className="cmp-user-page__sort-type-select" id="sortType" name="sortType">
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="mostPopular">Most Popular</option>
                </select>
            </div>
            {
                displayedArtworks.map(artwork => <ArtBanner key={artwork.id} props={artwork}/>)
            }
        </div>
    );
}

export default UserPage;