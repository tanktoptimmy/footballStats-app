import './card.modules.css';

const Card = ({ type }) => {
  return <span className={`card ${type}`}></span>;
};

export default Card;
