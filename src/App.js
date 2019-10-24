import React, { Component } from 'react';

// 共通スタイル読み込み
import './App.css';

// Route関連
import { Route, Switch } from 'react-router-dom';

// コンテナ読み込み
import ResponsiveDrawer from './containers/ResponsiveDrawer';

// コンテナ読み込み
import Home from './containers/Home';
import Info from './containers/Info';

// 不明なRouteは全てNotFound
// const NotFound = () => {
//   return(
//     <h2>ページが見つかりません</h2>
//   )
// }

class App extends Component {

  render() {
    return (
      <div className="App">
        <ResponsiveDrawer className="ResponsiveDrawer">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/info" component={Info}/>
            {/* <Route component={WrapMainContent(NotFound)}/> */}
          </Switch>
        </ResponsiveDrawer>
      </div>
    );
  }
}

// React-Router情報取得
export default App;

