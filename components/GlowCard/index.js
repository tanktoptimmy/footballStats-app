import './glowcard.modules.css';

const GlowCard = ({ children }) => {
  return (<section data-glow className='glow-card'>
  <div>
  {children}
  </div></section>);
};

export default GlowCard;
