import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

// 버튼에 label 걸어서 input요소와 연결하기

const Button1 = () => {
  return (
    <div
      style={{
        width: '800px',
        height: '800px',
        margin: '15px',
        border: '1px solid black',
      }}
    >
      <input
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
        style={{ display: 'none' }}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          component="span" //이런 방식에서는 컴포넌트 span을 안해주면 label로 연결이안됨
          color="primary"
          size="large"
        >
          upload1
        </Button>
        <Button variant="contained" color="primary" disableRipple>
          Button
        </Button>
      </label>
      <br />
      <br />
      <Button
        variant="contained"
        color="secondary"
        size="small"
        disableElevation
      >
        <label htmlFor="contained-button-file">upload2</label>
      </Button>
      <br />
      <br />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          alert('Alert!!');
        }}
      >
        Alert
      </Button>
      <Button variant="outlined" color="secondary">
        Alert
      </Button>
      <br />
      <br />
      <ButtonGroup orientation="vertical" size="large" color="primary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <br />
      <br />
      <ButtonGroup size="large" color="secondary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
};

export default Button1;
