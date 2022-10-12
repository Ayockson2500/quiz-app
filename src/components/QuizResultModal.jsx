import React from 'react';
import  ReactDOM  from 'react-dom';

export const QuizResultModal = ({show, onClose, showTotalScore}) => {

    if (!show) return null
    
  return ReactDOM.createPortal (
    <div>
        <div className="modal-overlay">
        <div className="success-modal shadow bg-body rounded">
          <div className="success-primary text-center mb-3">
            Congratulation!
            <p>Your Total Score is: {showTotalScore}</p>
          </div>
          <h5 className="close-icon" onClick={onClose}>Ok</h5>
        </div>
      </div>
    </div>,
    document.getElementById('portal-root')
  )
}

export default QuizResultModal;