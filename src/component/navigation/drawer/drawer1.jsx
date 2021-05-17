import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

// custom hook
const useStyles = makeStyles({
  list: { width: 250 },
  fullList: { width: 'auto' },
});

const Drawer1 = () => {
  //custom hook을 classes라는 변수로 지정
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  //toggle을 위한 함수
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    // clsx(default, {예외적용 : 예외가 적용될 규칙}) 으로 판단됨...
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* List는 list 내에 갖고 있어야할 ListItem 항목들이 필요*/}
      <List>
        {/* map은 요소 하나하나만 받을수도, 요소와 index 까지 받을 수도 있다*/}
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider /> {/* 가로줄 하나가 생김 */}
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button variant="outlined" onClick={toggleDrawer(anchor, true)}>
            {anchor}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            transitionDuration={{ enter: 3000, exit: 1000 }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};
{
  /* 
  작동순서
  1. left를 누르면 onClick={toggleDrawer(anchor, true)에 의해서 anchor에 left가 들어가
    toggle내의 setState로 left : false를 true로 바꿔주게 되고 re-render가 된다.
  2. re-render 되면서 생성된 Drawer들 중에 left만 open 값을 true로 받게 되어 열린다. 


  - anchor는 'bottom','left','top','right' 타입들이 있고 default는 left이다.
*/
}

export default Drawer1;
