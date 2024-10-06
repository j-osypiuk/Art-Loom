import {useState, useEffect, useRef} from "react";
import {MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp} from "react-icons/md";

const TextWrap = ({ props }) => {

    const textContainerRef = useRef(null);
    const [expanded, setExpanded] = useState(false);
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        const textWrapHeight = textContainerRef.current.scrollHeight;
        textWrapHeight > props.height * 10 ? setShowBtn(true) : setShowBtn(false);
    }, [])

    const handleTextExpand = () => {
        const textWrap = textContainerRef.current;
        if (!expanded) {
            textWrap.style.height = `${textWrap.scrollHeight / 10}rem`;
            setExpanded(true);
        } else {
            textWrap.style.height = `${props.height}rem`;
            setExpanded(false);
        }
    }

    return (
        <div className="cmp-text-wrap">
            <div className="cmp-text-wrap__text-container" ref={textContainerRef} style={{height: `${props.height}rem`}}>
                <p className="cmp-text-wrap__text" style={{
                    fontSize: props.fontSize ? `${props.fontSize}rem` : "1.6rem",
                    color: props.color ? `var(${props.color})` : "#fff",
                    lineHeight: props.lineHeight ? props.lineHeight : 1.2,
                }}>
                    {props.text}
                </p>
            </div>
            {showBtn &&
                <button className="cmp-text-wrap__btn" type="button" onClick={handleTextExpand}>
                    {expanded ? <MdKeyboardDoubleArrowUp/> : <MdKeyboardDoubleArrowDown/>}
                </button>
            }
        </div>
    )
}

export default TextWrap;