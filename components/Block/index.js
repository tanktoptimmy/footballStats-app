import './block.modules.css';

const Block = ({ text, type }) => {
  return <span className={`block ${type}`}>{text}</span>;
};

export default Block;
