/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload, HomeRounded } from "@material-ui/icons";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import LibraryBooksRoundedIcon from "@material-ui/icons/LibraryBooksRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink} color="transparent">
          <HomeRounded className={classes.icons} /> Home
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/curriculum" className={classes.navLink} color="transparent">
          <MenuBookRoundedIcon className={classes.icons} /> 커리큘럼
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/lecturer" className={classes.navLink} color="transparent">
          <PeopleRoundedIcon className={classes.icons} /> 전문강사진
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="/lecture_files"
          className={classes.navLink}
          color="transparent"
        >
          <LibraryBooksRoundedIcon className={classes.icons} /> 강의자료
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/login" className={classes.navLink} color="transparent">
          <AccountCircleIcon className={classes.icons} /> 로그인
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}
