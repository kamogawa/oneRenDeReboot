import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { searchUnitName } from '../actions';

// Redux関連
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { green } from '@material-ui/core/colors';

// AnimeList取得
import Unitlist from '../containers/Unitlist';

// スタイル
const styles = theme => ({
  div: {
    width: '100%',
    color: green
  },
});


class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      keyword: '',
      age: ''
    };
  }
  
  handlingChange = (e) => {
    this.setState({
      keyword: e.target.value
    });
  }

  selectHandleChange = (e) => {
    this.setState({
      keyword: e.target.value
    });
  }

  render() {
    const { classes } = this.props;
    console.log(this.state.keyword);
    return (
      <div>
        <h1>유닛 검색</h1>
        <form autoComplete="off">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel 
              //ref={inputLabel} 
              id="demo-simple-select-outlined-label"
            >
              티어
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={this.state.age}
              onChange={this.selectHandleChange}
              labelWidth={'120'}
            >
              <MenuItem value="">
                <em>지정 안함</em>
              </MenuItem>
              <MenuItem value={10}>1티어</MenuItem>
              <MenuItem value={20}>2티어</MenuItem>
              <MenuItem value={30}>3티어</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <Input placeholder="캐릭터를 입력하세요" onChange={this.handlingChange}></Input>
          </FormControl>


        </form>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => searchUnitName(this.state.keyword)}
        >검색</Button>
        <Unitlist ></Unitlist>
      </div>
    );
  }
}

// PropTypes
Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

// Redux関連
const mapState = (state, ownProps) => ({
});
function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

// Material-uiのテーマ設定＋Redux設定
export default connect(mapState, mapDispatch)(
  withStyles(styles, { withTheme: true })(Home)
);