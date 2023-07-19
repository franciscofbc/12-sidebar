import { useGlobalContext } from '../context';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return <article>{isModalOpen ? 'modal' : ''}</article>;
};

export default Modal;
