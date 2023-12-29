import './tabs.modules.css';

const Tabs = ({ tabs, selected, onClick }) => {
  return (
    <nav>
      <ul className="ul">
        {tabs.map((tab) => (
          <li key={tab}>
            <button role="tab" aria-selected={selected === tab} onClick={() => onClick(tab)}>
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
