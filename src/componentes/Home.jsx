import { GiHamburgerMenu } from 'react-icons/gi';
import { useGlobalContext } from '../context';

const Home = () => {
  const { openModal, openSidebar } = useGlobalContext();

  return (
    <section className="home">
      <button type="button" onClick={openSidebar} className="btn-sidebar">
        <GiHamburgerMenu />
      </button>
      <button type="button" onClick={openModal} className="btn">
        show modal
      </button>
    </section>
  );
};

export default Home;
