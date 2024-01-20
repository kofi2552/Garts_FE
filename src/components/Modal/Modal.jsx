import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.css';
import { motion, AnimatePresence } from 'framer-motion';

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
      onClose(); 
    }
  };


  const modalClasses = `cc-modal${addedClasses}`;


  return (
    <>
    <AnimatePresence>
      {open && (
        <motion.div
          className="cc-modal-container"
          id={modalId}
        >
          <motion.button
            className={`cc-modal-overlay${open ? '' : ' closed'}`}
            onClick={handleClose}
            aria-label="Close Modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: open ? 0.7 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
          <motion.div
            className={modalClasses}
            initial={{ opacity: 0, translateY: '100%' }}
            animate={{ opacity: 1, translateY: '0%' }}
            exit={{ opacity: 0, translateY: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {size !== 'dialog' ? (
              <motion.div
                className="cc-modal-header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <h3 className="cc-modal-title">{title}</h3>
                <motion.button
                  className="cc-modal-close"
                  onClick={handleClose}
                  aria-label="Close Modal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              </motion.div>
            ) : (
              <motion.button
                className="cc-modal-fixed-close"
                onClick={handleClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                Close
              </motion.button>
            )}

            <motion.div
              className="cc-modal-body"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* <motion.button
                  className="cc-modal-close"
                  onClick={handleClose}
                  aria-label="Close Modal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                /> */}
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
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





































// old code for modal conatiner
// const modalComponent =
// open &&
// ReactDOM.createPortal(
//   // <div className={`cc-modal-container${addedClasses}`} id={modalId}>
//   <div className={modalClasses} id={modalId}>
//     <button
//       className="cc-modal-overlay"
//       onClick={handleClose}
//       aria-label="Close Modal"
//     />
//     <div className={modalBodyClasses}>
//     {/* <div className="cc-modal"> */}
//       {size !== 'dialog' ? (
//         <div className="cc-modal-header">
//           <h3 className="cc-modal-title">{title}</h3>
//           <button
//             className="cc-modal-close"
//             onClick={handleClose}
//             aria-label="Close Modal"
//           />
//         </div>
//       ) : (
//         <button className="cc-modal-fixed-close" onClick={handleClose}>
//           Close
//         </button>
//       )}

//       <div className="cc-modal-body">{children}</div>
//     </div>
//   </div>,
//   document.body
// );



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