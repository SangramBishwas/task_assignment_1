import PropTypes from 'prop-types';
const Button = ({ text }) => {
    return (
        <div className='w-full lg:w-auto'>
            <button className='w-full px-10 py-3 bg-[#2d9f89] text-white font-semibold rounded-lg text-xl border border-[#2d9f89] hover:bg-transparent hover:border hover:border-[#2d9f89] hover:transition-colors hover:text-[#2d9f89] duration-500 hover:ease-linear'>{text}</button>
        </div>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired
};

export default Button;