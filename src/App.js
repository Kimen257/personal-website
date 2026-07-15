import React, {useState} from "react";
import ModalWindow from './ModalWindow';


const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <div className="App">
      <header>
        <div className="menu">
          <a href="#about">Обо мне</a>
          <a href="#services">Услуги</a>
          <a href="#portfolio">Портфолио</a>
          <a href="#reviews">Отзывы</a>
          <a href="#guarantees">Гарантии</a> 
        </div>

        <button onClick={handleOpenModal}  className="btn"> Связаться </button>

        <a 
    href="https://t.me/kimen257"
    target="_blank"
    rel="noopener noreferrer"
    className="icon telegram"
    aria-label="Telegram"
>
    <img src="/icons/telegram.png" alt="Telegram" />
</a>

      </header>
              <ModalWindow show={showModal} onClose={handleCloseModal}>
          <h2 style={{ color: "#4824ff", fontSize: "40px" }}> Контакты</h2>
          <p style={{ fontSize: "22px" }}> Вы можете связаться со мной в Телеграм или позвонить мне </p>
        </ModalWindow>
    </div>
  );
}

export default App;
