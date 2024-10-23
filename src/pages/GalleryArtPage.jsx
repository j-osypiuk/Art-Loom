import UserBanner from "../components/UserBanner.jsx";
import React, {useEffect, useRef, useState} from "react";
import {Colors} from "../utils/colors.js";
import TextWrap from "../components/TextWrap.jsx";
import Tag from "../components/Tag.jsx";
import StatsBanner from "../components/StatsBanner.jsx";
import CommentSection from "../components/CommentSection.jsx";
import {Carousel} from "../components/Carousel.jsx";

const GalleryArtPage = () => {

    const titleWrapRef = useRef(null);

    const [bannerContent, setBannerContent] = useState({
        id: 1,
        title: "Super Artwork With Newest Possible colors used in work",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, v Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla,",
        tags: [
            {name: "CINEMA", bgColor: Colors.RED_DARK},
            {name: "MUSIC", bgColor: Colors.PURPLE_DARK},
            {name: "CINEMA", bgColor: Colors.RED_DARK},
            {name: "MUSIC", bgColor: Colors.PURPLE_DARK},
            {name: "CINEMA", bgColor: Colors.RED_DARK},
            {name: "MUSIC", bgColor: Colors.PURPLE_DARK},
            {name: "CINEMA", bgColor: Colors.RED_DARK},
            {name: "MUSIC", bgColor: Colors.PURPLE_DARK},
            {name: "CINEMA", bgColor: Colors.RED_DARK},
            {name: "MUSIC", bgColor: Colors.PURPLE_DARK},
        ],
        stats: {likes: 10, dislikes: 10, comments: 10, dateLabel: "Added", date: "2024-05-29"},
    });

    return(
        <div className="cmp-gallery-page">
            <UserBanner type="artPage" />
            <div className="cmp-gallery-page_banner">
                <img className="cmp-gallery-page__thumbnail-img"
                     src="src/assets/thumbnails/art-thumbnail-12.jpg"
                     alt="Art thumbnail image"/>
                <div className="cmp-gallery-page__banner-content-wrap">
                    <div className="cmp-gallery-page__title-wrap" ref={titleWrapRef}>
                        <span className="cmp-gallery-page__title">{bannerContent.title}</span>
                        <div className="cmp-gallery-page__tag-container tag-container">
                            {
                                bannerContent.tags.map((tag, i) => {
                                    return (
                                        <Tag key={`${tag.name}-${i}`} props={{text: tag.name, bgColor: tag.bgColor}}></Tag>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="cmp-gallery-page__description-wrap">
                        <TextWrap props={{
                            height: 34.8,
                            fontSize: 1.6,
                            color: Colors.GRAY_300,
                            lineHeight: 1.2,
                            text: bannerContent.description
                        }}/>
                    </div>
                </div>
            </div>
            <StatsBanner props={bannerContent.stats} showDate={true}/>
            <Carousel sources={[
                "src/assets/thumbnails/art-thumbnail-12.jpg",
                "src/assets/thumbnails/art-thumbnail-4.jpg",
                "src/assets/thumbnails/art-thumbnail-18.jpg",
                "src/assets/white-bg.jpg"
            ]}/>
            <CommentSection />
        </div>
    )
}

export default GalleryArtPage;