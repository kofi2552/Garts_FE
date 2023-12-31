import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({
  title,
  children,
  className,
  size = 'dialog',
  isOpen,
  id,
  onClose,
}) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const addedClasses =
    `${className ? ` ${className}` : ''}` +
    `${size ? ` cc-modal-${size}` : ''}`;

  const modalId = id || 'modal-' + Math.floor(Math.random() * 9999999);

  const handleClose = () => {
    setOpen(false);
    if (onClose) {
      onClose(); // Notify parent component about the modal close
    }
  };

  const modalComponent =
    open &&
    ReactDOM.createPortal(
      <div className={`cc-modal-container${addedClasses}`} id={modalId}>
        <button
          className="cc-modal-overlay"
          onClick={handleClose}
          aria-label="Close Modal"
        />
        <div className="cc-modal">
          {size !== 'dialog' ? (
            <div className="cc-modal-header">
              <h3 className="cc-modal-title">{title}</h3>
              <button
                className="cc-modal-close"
                onClick={handleClose}
                aria-label="Close Modal"
              />
            </div>
          ) : (
            <button className="cc-modal-fixed-close" onClick={handleClose}>
              Close
            </button>
          )}

          <div className="cc-modal-body">{children}</div>
        </div>
      </div>,
      document.body
    );

  return (
    <>
      {modalComponent}
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  hasBtn: PropTypes.bool,
  btnText: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['dialog', 'small', 'medium', 'large', 'full']),
  isOpen: PropTypes.bool,
  id: PropTypes.string,
  onClose: PropTypes.func, // Callback for handling modal close
};

export default Modal;




// hasBtn = true,
// btnText,


{/* {hasBtn && (
        <button
          className="cc-open-modal cc-button shrink"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-controls={modalId}
        >
          {btnText} Open
        </button>
      )} */}