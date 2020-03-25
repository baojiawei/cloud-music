import React from 'react';
import { IconStyle } from './assets/iconfont/iconfont'
import { GlobalStyle } from './style'
import { renderRoutes } from 'react-router-config';
import routes from './routes/index.js'
import { HashRouter } from 'react-router-dom'
import store from './store/index'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <GlobalStyle></GlobalStyle>
          <IconStyle></IconStyle>
          {renderRoutes(routes)}
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
