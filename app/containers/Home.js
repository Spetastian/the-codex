import React from 'react';
import appStyle from '../app.scss';
import SmallNote from '../components/SmallNote';
import connectProps from '../utils/redux-connect-helper'

const Home = () => {
  return (
    <div className={appStyle.mainWrapper}>
        <h1>Home</h1>

        <div className={appStyle.grid}>
        <div className={appStyle.gridCol}>
            <SmallNote title="Awesome note 1" text="Awesome text" />
        </div>
        <div className={appStyle.gridCol}>
            <SmallNote title="Awesome note 2" text="Awesome text" />
        </div>
        <div className={appStyle.gridCol}>
            <SmallNote title="Awesome note 3" text="Awesome text" />
        </div>
        <div className={appStyle.gridCol}>
            <SmallNote title="Awesome note 4" text="Awesome text" />
        </div>
        <div className={appStyle.gridCol}>
            <SmallNote title="Awesome note 5" text="Awesome text" />
        </div>
        </div>

    </div>
  );
};

function mapStateToProps(state) {
  return state;
}

export default connectProps(mapStateToProps, Home);