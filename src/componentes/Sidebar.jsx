import { useGlobalContext } from '../context';

const Sidebar = () => {
  const { isSidebarOpen, closSidebar } = useGlobalContext();
  return <nav>{isSidebarOpen ? 'sidebar' : ''}</nav>;
};

export default Sidebar;
