export function Modal({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <p className="modal-message">{message}</p>
        <button onClick={onClose} className="modal-close-btn">
          Close
        </button>
      </div>
    </div>
  );
}
