import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#dee2e6",
  },
  title: {
    backgroundColor: "#dee2e6",
    fontWeight: "600",
  },
  btnClose: {
    marginLeft: "100px",
  },
  btnGetQuote: {
    marginLeft: "20px",
    alignItems: "center",
  },
}));
export default function ScrollDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen("paper")} color="primary">
        Read more
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" className={classes.title}>
          ASO Getting ranked in App Store
          <Button onClick={handleClose} className={classes.btnClose}>
            <CloseIcon />
          </Button>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Paper className={classes.paper}> App Store Optimization</Paper>
            <br />

            <ul>
              <li>Getting at the top of the results</li>
              <li>App Store keyword Optimization</li>
              <li>Store Asset Optimizationis</li>
              <ul>
                <li>Create Store Listing Assets according to Guidelines</li>
                <li>Logo</li>
                <li>Screenshots</li>
                <li>Video</li>
              </ul>

              <li>Fulfilling all the ASO ranking factors</li>
              <li>App review and rating management</li>
            </ul>

            <Paper className={classes.paper}>Play Store Optimization</Paper>
            <br />

            <ul>
            <li>Getting at the top of the results</li>
            <li>App Store keyword/Keyphrase Optimization</li>
            <li>Store Asset Optimization</li>
            <li>Store Asset Optimization</li>
            <ul>
              <li>Create Store Listing Assets according to Guidelines</li>
              <li>Logo</li>
              <li>Screenshots</li>
              <li>Video</li>
            </ul>
            <li>Fulfilling all the Play StoreOptimization factors</li>
            <li>App review and rating management</li>
          </ul>

            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <div class="card-body gradient-buttons">
          <button
            type="button"
            class="btn btn-primary"
            style={{ marginLeft: "400px", marginright: "auto" }}
          >
            {" "}
            Get a quote
          </button>
        </div>        </DialogActions>
      </Dialog>
    </div>
  );
}
