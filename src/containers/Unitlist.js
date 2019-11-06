import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

// Redux関連
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

// コンポーネントの準備
import Unit from '../components/Unitlist';
import Unititem from '../components/Unititem';
import { tire1, tire2 } from '../unitlist';

// スタイル
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

class Unitlist extends React.Component {
  render() {
    return (
      <div>
        <Unit unitList={tire1}/>
        <Unititem />
      </div>
    );
  }
}

// Material-ui関連
Unitlist.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

// Redux関連
const mapState = (state, ownProps) => ({
  AnimeListReducer: state.AnimeListReducer,
});
function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

// Material-uiのテーマ設定＋Redux設定
export default connect(mapState, mapDispatch)(
  withStyles(styles, { withTheme: true })(Unitlist)
);