import { IoClose } from 'react-icons/io5';
import { useGlobalContext } from '../context';
import { links, social } from '../data';
import logo from '../logo.svg';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div>
        <div className="header">
          <img src={logo} alt="logo" />
          <button type="button" onClick={closeSidebar} className="btn-close">
            <IoClose />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="social-links">
        {social.map((socialLink) => {
          const { id, url, icon } = socialLink;
          return (
            <li key={id}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
