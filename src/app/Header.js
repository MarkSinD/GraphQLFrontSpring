import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";

const useHeaderStyles = makeStyles((theme) => ({
    pageLabel: {
        paddingTop: 12,
        paddingBottom: 12,
    },
}),);

const Header = ({label}) => {
    const classes = useHeaderStyles();
    return (
        <div>
            <Typography variant="h5" className={classes.pageLabel}>{label}</Typography>
        </div>
    )
};

export default Header;