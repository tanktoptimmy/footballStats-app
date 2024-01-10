import './glowcard.modules.css';

const GlowCard = ({ children, px, py}) =>  (
  <section data-glow className={`glow-card ${px ? px : ''} ${py ? py : ''}`}>
    <div>
    {children}
    </div>
  </section>
);

export default GlowCard;
