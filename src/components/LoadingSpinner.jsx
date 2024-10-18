const LoadingSpinner = ({size, width, color}) => {
    return (
        <div className="cmp-loading-spinner"
             style={
                {
                     width: `${size}rem`,
                     height: `${size}rem`,
                     border: `${width}rem solid rgba(0, 0, 0, 0.1)`,
                     borderLeftColor: `var(${color})`
                }
            }
        >
        </div>
    );
};

export default LoadingSpinner;
