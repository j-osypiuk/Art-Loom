const Tag = ({props}) => {

    return (
        <span className="cmp-tag" style={{backgroundColor: `var(${props.bgColor})`}}>{props.text}</span>
    )
}

export default Tag;