import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%,-${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Modal1 = () => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">TEXT IN A MODAL</h2>
      <p id="simple-modal-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
        consequatur quam fugiat illo harum recusandae eveniet tempore omnis rem
        quis excepturi alias dolore impedit nesciunt repellendus perspiciatis
        laudantium sit ex!
      </p>
      <Modal1 />
    </div>
  );
  {
    /*
  1. 처음 render되면 button이 있고 그 버튼을 누르면 modal창의 open이 true가 되면서 보여진다.
  2. Modal창 안에는 다시 Modal이 있으므로 버튼이 보여지고 그 버튼을 누르면
    랜덤 값으로 지정한 장소에 새로운 모달창이 생성된다.


*/
  }
  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default Modal1;
