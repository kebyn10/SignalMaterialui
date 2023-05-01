import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSignal } from "@preact/signals-react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  let modalSignalSee = useSignal("");

  const ModaLDev = (bool) => {
    return (
      <Modal
        open={bool}
        onClose={changeUse}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          ></Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    );
  };
  const changeUse = () => {
    let text = modalSignalSee;
    if (text == "") {
      modalSignalSee.value = ModaLDev(true);
    } else {
      modalSignalSee.value = "";
    }
  };
  console.log("refresh");

  return (
    <div>
      <p onClick={changeUse}>cadsad</p>
      {modalSignalSee}
    </div>
  );
}
