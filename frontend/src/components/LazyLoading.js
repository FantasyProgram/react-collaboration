import React from 'react'
import loadable from '@loadable/component';

export const LazyCard = loadable(() => import('./Card.jsx'), {
  fallback: <h1>Loading...</h1>,
});