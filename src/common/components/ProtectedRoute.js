import React from 'react';
import { Route } from 'react-router';

const ProtectedRoute = ({ authenticated, ...props }) => authenticated ? (<Route { ...props } />) : null;

export default ProtectedRoute;