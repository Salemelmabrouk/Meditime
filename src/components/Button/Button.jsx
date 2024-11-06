// Button.js
import PropTypes from 'prop-types';

export default function Button({ children, onClick, className }) {
    return (
        <button
            className={`w-[148px]    h-[43px] rounded-[47px]   ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

// PropTypes for type checking
Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

// Default props
Button.defaultProps = {
    onClick: () => {},
    className: '',
};
