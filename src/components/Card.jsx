import PropTypes from 'prop-types';

const Card = ({children, text, className = ""}) => {
  return (
      <div className={`w-max h-[254px] rounded-[30px] bg-[#f3eeee] shadow-[15px_15px_30px_#bebebe] ${className}`}>
        <p className='text-end p-3'>{text}</p>
        {children}
      </div>
  );
}

export default Card;

Card.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  className: PropTypes.string
};