import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Material-UI
import { createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

// Redux関連
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

// Router関連
import { BrowserRouter as Router } from 'react-router-dom';

// Redux設定
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Material-UIテーマカスタマイズ
const theme = createMuiTheme({
  palette: {
    type: 'light', 
    primary: red, 
    secondary: blue, 
  },
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme} >
      <Router>
        <App/>
      </Router>
    </MuiThemeProvider>
  </Provider>  
  , document.getElementById('root'));


