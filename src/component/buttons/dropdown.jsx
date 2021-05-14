import React, { useRef, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const options = [
  'Create a merge commit',
  'Squash and marge',
  'Rebase and merge',
];

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(); // ()안에 비우거나 null이거나 같다
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleClick = () => {
    console.log(`you clicked ${options[selectedIndex]}`);
  };
  const handleMenuItemClick = (event, index) => {
    console.log(`index is ${index}`);
    setSelectedIndex(index);
    setOpen(false);
  };
  const handleToggle = () => {
    open === false ? setOpen(true) : setOpen(false);
    // setOpen((preOpen) => !preOpen); // 아마 ()=> 쓸때 인자로 현재 state 값을 받을 수 있나봄
    //두개 다 가능
  };
  const handleClose = (event) => {
    console.log(anchorRef.current);
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <ButtonGroup
          variant="contained"
          color="primary"
          ref={anchorRef}
          aria-label="split button"
        >
          <Button onClick={handleClick}>{options[selectedIndex]}</Button>
          <Button
            color="primary"
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expended={open ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                {/* 화면의 다른 곳을 선택했을 때 이벤트 발생시키는 이벤트 리스너*/}
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        disabled={index === 2}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
};

export default Dropdown;
