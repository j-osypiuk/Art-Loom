import Tag from "./Tag.jsx";

const BannerContent = ({props}) => {
    return (
        <div className="cpm-banner-content__info-container">
            <h1 className="cpm-banner-content__title">{props.title}</h1>
            <div className="cpm-banner-content__tag-container tag-container">
                {
                    props.tags.map((tag) => {
                        return (
                            <Tag key={tag.name} props={{text: tag.name, bgColor: tag.bgColor}}></Tag>
                        )
                    })
                }
            </div>
            <p className="cpm-banner-content__description">{props.description}</p>
        </div>
    )
}

export default BannerContent;