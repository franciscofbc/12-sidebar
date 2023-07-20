import { useGlobalContext } from '../context';
import { IoClose } from 'react-icons/io5';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    isModalOpen && (
      <section>
        <article className="modal">
          <button type="button" onClick={closeModal} className="btn-close">
            <IoClose />
          </button>
          <h4>modal content</h4>
        </article>
        <article className="overlay"></article>
      </section>
    )
  );
};

export default Modal;
