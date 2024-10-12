import React, {useEffect, useRef, useState} from "react";

const Tabs = ({ children, fontSize, minWidth }) => {
    const [activeTab, setActiveTab] = useState(0);
    const lineRef = useRef(null);

    useEffect(() => {
        const activeBtn = document.querySelector(".cmp-tabs__tab-btn--active");
        lineRef.current.style.width = activeBtn.offsetWidth + 'px';
    }, []);

    const handleTabClick = (index, event) => {
        setActiveTab(index);
        lineRef.current.style.left = event.target.offsetLeft + 'px';
        lineRef.current.style.width = event.target.offsetWidth + 'px';
    };

    return (
        <div>
            <div className="cmp-tabs__header" style={{fontSize: fontSize, minWidth: minWidth}}>
                {React.Children.map(children, (child, index) => (
                    <button
                        type="button"
                        key={index}
                        className={`cmp-tabs__tab-btn ${index === activeTab && "cmp-tabs__tab-btn--active"}`}
                        onClick={(event) => handleTabClick(index, event)}
                    >
                        {child.props.label}
                    </button>
                ))}
                <div ref={lineRef} className="cmp-tabs__line"></div>
            </div>
            <div className="cmp-tabs__content">
                {React.Children.map(children, (child, index) => index === activeTab && <div>{child}</div>)}
            </div>
        </div>
    );
};


export default Tabs;