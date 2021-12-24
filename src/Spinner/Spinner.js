import React from "react";
import ClipLoader from 'react-spinners/ClipLoader';
import {makeStyles} from "@material-ui/styles";

const useSpinnerStyles = makeStyles({
  spinnerWrapper: {
    margin: '0',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}, {name: "Spinner"});

const Spinner = () => {
  const classes = useSpinnerStyles();
  return (
    <div className={classes.spinnerWrapper}>
      <ClipLoader
        sizeUnit={"px"}
        size={150}
        color={"#ffb300"}
        loading
      />
    </div>
  )
};

export default Spinner;
