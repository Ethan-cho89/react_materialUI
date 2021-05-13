import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import './boxes.css';
const Boxes = (props, { component }) => {
  /* 
    박스 컴포넌트는 거의 모든 CSS 유틸리티의 wrapper 역할을 합니다. 


    box는 기본 div로 설정되어 있고
    component라는 속성을 통해 span 같은 다른 것으로 변할 수 있다.
    div는 다른 것들을 담을 수 있고 span은 다른 것들을 담지 못한다. 

    m={숫자} 는 margin 값을 적용한다.
    p={숫자} 는 padding 값을 적용한다.

    bgcolor 는 background-color
    color는 font color
  */

  return (
    <Typography component="div" variant="body1">
      <Box bgcolor="error.main">{props.children}</Box>
    </Typography>
  );
};

export default Boxes;
