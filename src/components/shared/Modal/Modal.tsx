import "rc-dialog/assets/index.css";
import * as React from "react";
import Dialog from "rc-dialog";

interface IModalProps {
  button?: JSX.Element;
  content?: JSX.Element;
  toggleModal?: React.Dispatch<React.SetStateAction<boolean>>
  modal?: boolean
  width?: number
  height?: number
}

const Modal = ({ button, content, modal,toggleModal,height, width }: IModalProps) => {

  const onToggleDialog = () => {
    toggleModal?.((value) => !value);
  };

  const dialog = (
    <Dialog
      visible={modal}
      animation="zoom"
      maskAnimation="fade"
      onClose={onToggleDialog}
      forceRender
      style={{
        width: "80%",
        padding:"0px"
      }}
      className=" py-[2%] bg-red-600"
    >
      {content}
    </Dialog>
  );

  return (
    <div>
      <span onClick={onToggleDialog}>{button}</span>
      {dialog}
    </div>
  );
};

export default Modal;
