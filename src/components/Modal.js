function Modal(props) {

  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm()
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <div className="btn btn--alt" onClick={cancelHandler}>Cancel</div>
      <div className="btn" onClick={confirmHandler}>Confirm</div>
    </div>
  );
}

export default Modal;
