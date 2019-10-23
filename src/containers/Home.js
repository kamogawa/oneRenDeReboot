import React from 'react';

import { withStyles } from '@material-ui/core/styles';

// Redux関連
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { green } from '@material-ui/core/colors';

// スタイル
const styles = theme => ({
  div: {
    width: '100%',
    color: green
  },
});


class Home extends React.Component {
  render() {
    return (
      <div>
        HOME 
      </div>
    );
  }
}

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