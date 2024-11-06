import PropTypes from 'prop-types';

export default function TextBox({ title, subtitle, className }) {
    return (
        <div className={`${className}`}>
            <p className="font-outfit text-white leading-[80px] text-[50px] whitespace-nowrap">
                {title}
            </p>
            {subtitle && (
                <p className="font-outfit  font-semibold text-white leading-[80px] text-[50px] whitespace-nowrap">
                    {subtitle}
                </p>
            )}
        </div>
    );
}



// PropTypes for type checking
TextBox.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    className: PropTypes.string,
};

// Default props
TextBox.defaultProps = {
    subtitle: '', // Default value for subtitle
    className: '',
};
