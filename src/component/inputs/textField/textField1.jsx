import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const TextFields = () => {
  const classes = useStyles();
  const handleSubmit = (e) => {
    // e.preventDefault();
  };

  // TextField를 input처럼 사용하고자 한다면
  // 세부 설정은 이런식으로 적용시켜야 합니다.
  const inputProps = {
    step: 0.2,
    max: 40,
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
      <br />
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="이름" />
        <TextField id="filled-basic" label="이메일" variant="filled" />
        <TextField id="outlined-basic" label="폰번호" variant="outlined" />
      </form>
      <br />
      <br />
      {/* noValidate 속성이 true면 유효검사를 건너뜁니다 */}
      <form className={classes.root} autoComplete="off">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>
        <div>
          <TextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Hello World"
          />
          <TextField
            disabled
            id="standard-disabled"
            label="Disabled"
            defaultValue="Hello World"
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            id="standard-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-number"
            label="Number"
            type="number"
            inputProps={inputProps}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField id="standard-search" label="Search field" type="search" />
          <TextField
            id="standard-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </div>
        <br />
        <br />
        <div>
          <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            disabled
            id="filled-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
          <TextField
            id="filled-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
          />
          <TextField
            id="filled-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="filled"
          />
        </div>
        <br />
        <br />
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            variant="outlined"
          />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="outlined"
          />
        </div>
      </form>
    </div>
  );
};

export default TextFields;
