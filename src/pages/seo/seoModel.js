import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

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
    marginLeft: "80px",
  },
  btnGetQuote: {
    marginLeft: "20px",
    justifyContent: "center",
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
          SEO Getting ranked in Search Results?
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
            <Paper className={classes.paper}> Market research</Paper>
            <br />

            <ul>
              <li>Market analysis</li>
              <li>Competitor analysis</li>

              <li>Keyword analysis</li>
              <li>Filling keyword gaps</li>
              <li>Optimized navigation through sales funnel</li>
            </ul>

            <Paper className={classes.paper}> On page optimization</Paper>
            <br />

            <ul>
              <li>Powerful and Compelling Headings/Subheadings</li>
              <li>Placement of compelling meta keywording</li>
              <li>Keyword placement through Sales Funnel</li>
              <li>Restructuring URL issues</li>
              <li>Site mapping </li>
              <li>Google Analytics integration</li>
              <li>Google webmaster tool integration</li>
              <li>Fixing Page Speed issues</li>
              <li>Optimizing images</li>
              <li>Internal link building</li>
              <li>Yahoo, Bing, Yaindex, Keyword optimization</li>
              <li>Yahoo, Bing, Yaindex analytics setup</li>
              <li>Content Translation</li>
              <li>404 redirection</li>
            </ul>

            <Paper className={classes.paper}>Off Page optimization</Paper>

            <br />
            <ul>
              <li>Relevant backlinking</li>
              <li>Social Media Channel setup</li>
              <li>Forum integration</li>
              <li>Guest blogging</li>
              <li>Brand Mentioning </li>
              <li>Optimized and Effective social profile descriptions</li>
            </ul>
            <Paper className={classes.paper}>WIX /Wordpress SEO</Paper>

            <br />
            <ul>
              <li>Compelling Headings and Meta tags</li>
              <li>Keyword research</li>
              <li>Keyword Optimization (On Page)</li>
              <li>Social Media Channel Setup</li>
              <li>Google Analytics integration</li>
              <li>Google webmaster tool integration</li>
              <li>Rent Server Space </li>
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
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
