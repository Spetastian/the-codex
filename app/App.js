import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import appStyle from './app.scss';
import { connect } from 'react-redux';

const App = ({children}) => {
  return (
    <div className={appStyle.mainWrapper}>
      <AppBar title="Note thingie app bar" />
      <div className={appStyle.contentWrapper}>
        <main className={appStyle.mainContent}>
          {children}
        </main>
        <aside className={appStyle.rightContent}>
            Right content
        </aside>
      </div>
    </div>
  );
};

export default App;