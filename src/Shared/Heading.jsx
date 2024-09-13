import PropTypes from 'prop-types';

const Heading = ({heading, subHeading}) => {
    return (
        <div>
            <h2 className='text-center w-full text-[32px] font-semibold text-white/[0.9] lg:w-full lg:text-[48px]'>{heading}</h2>
            <h3 className="header-font mb-[20px] text-[20px] font-[500] text-white/[0.9] lg:text-[40px]">{subHeading}</h3>
        </div>
    );
};

Heading.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired
};

export default Heading;