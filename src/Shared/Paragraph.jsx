import PropTypes from 'prop-types';

const Paragraph = ({details}) => {
    return (
        <div>
            <p className="text-base text-white/[0.55] lg:text-xl">{details}</p>
        </div>
    );
};

Paragraph.propTypes = {
    details: PropTypes.string.isRequired
};

export default Paragraph;