"use client";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { useEffect, useRef } from "react";
const CarDeleteDialog = ({ onClose, open, car }) => {
  const handleClose = () => {
    onClose();
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <>
      <Dialog
        open={Boolean(open)}
        onClose={onClose}
        fullWidth={true}
        maxWidth={"sm"}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Toolbar>
          <div className="flex justify-end ml-2 w-full">
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </div>
        </Toolbar>
        <DialogContent className="w-full">
          <div className="w-full">
            <h1 className=" font-bold text-center ">
              Are You Sure You Want To Delete This Car !
            </h1>
            <p className="text-center mt-4">Title :- {car?.title}</p>
            <div className="mt-10 w-full text-center">
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                variant="contained"
                className="bg-[#FF9393] ml-4"
                onClick={handleClose}
              >
                Delete
              </Button>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          {/* <Button
                variant="contained"
                className="bg-[#FF9393]"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button variant="contained" onClick={handleClose}>
                Add Car
              </Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CarDeleteDialog;
