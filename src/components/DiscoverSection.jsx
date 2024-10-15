import ArtCard from "./ArtCard.jsx";

const DiscoverSection = () => {

    return (
        <div className="cmp-discover-section">
            <ArtCard props={{
                id: "a",
                title: "Super artwork bae",
                likesCount: 152,
                dislikesCount: 42,
                commentsCount: 483434,
                artworkHref: "asdfadfadf/sdcsda",
                thumbnailPath: "src/assets/temp.jpg"
            }}/>
            <ArtCard props={{
                id: "b",
                title: "Super artwork bae",
                likesCount: 23,
                dislikesCount: 324,
                commentsCount: 15,
                artworkHref: "#",
                thumbnailPath: "src/assets/white.png"
            }}/>
            <ArtCard props={{
                id: "c",
                title: "Super artwork bae",
                likesCount: 32,
                dislikesCount: 2,
                commentsCount: 34,
                artworkHref: "#",
                thumbnailPath: "src/assets/black.png"
            }}/>
            <ArtCard props={{
                id: "d",
                title: "Super artwork bae",
                likesCount: 152,
                dislikesCount: 42,
                commentsCount: 483434,
                artworkHref: "asdfadfadf/sdcsda",
                thumbnailPath: "src/assets/temp.jpg"
            }}/>
            <ArtCard props={{
                id: "e",
                title: "Super artwork bae",
                likesCount: 32,
                dislikesCount: 2,
                commentsCount: 34,
                artworkHref: "#",
                thumbnailPath: "src/assets/black.png"
            }}/>
        </div>
    )
}

export default DiscoverSection