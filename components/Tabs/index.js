import './tabs.modules.css';
import { GlowCard } from '@/components';
const Tabs = ({ tabs, selected, onClick }) => {
  return (
    <nav>
      <ul className="ul-tabs">
        {tabs.map((tab) => (
          <li key={tab}>
            <GlowCard>
              <button role="tab" aria-selected={selected === tab} onClick={() => onClick(tab)}>
                {tab}
              </button>
            </GlowCard>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
