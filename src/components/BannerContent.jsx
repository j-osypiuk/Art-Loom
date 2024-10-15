import Tag from "./Tag.jsx";
import TextWrap from "./TextWrap.jsx";
import {Colors} from "../utils/colors.js";

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
            <TextWrap props={{height: props.textHeight, fontSize: 1.6, color: Colors.GRAY_300, lineHeight: 1.2, text: props.description}}/>
        </div>
    )
}

export default BannerContent;