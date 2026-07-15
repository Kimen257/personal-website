import React, { useState, useCallback, useEffect } from 'react';
import './ModalWindow.css';

const ModalWindow = ({ show, onClose, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (show) {
            setIsVisible(true);
            document.addEventListener('keydown', handleKeyDown);
        } else {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 300);

            return () => clearTimeout(timer);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [show, handleKeyDown]);

    if (!isVisible) {
        return null;
    }

    return (
        <div
            className={`modal-backdrop ${show ? 'show' : ''}`}
            onClick={onClose}
        >
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="modal-close-button"
                    aria-label="Close modal"
                >
                    ×
                </button>

                {children}

<div className="buttons-wrapper">

    <a
        href="https://t.me/kimen257"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button telegram"
    >
        Telegram
    </a>

    <a
        href="tel:+79999999999"
        className="social-button phone"
    >
        Номер телефона
    </a>

</div>
            </div>
        </div>
    );
};

export default ModalWindow;