import React from 'react'
import loadable from '@loadable/component';

//import {Skeleton} from 'primereact/skeleton';


const defaultFallback = <div>loading</div>
export const LazyCard = loadable(() => import('./PCard.jsx'), {
  fallback: <h1>Loading...</h1>,
});

export const RegistrationForm = loadable(()=> import('./RegistrationForm.jsx'),{fallback:defaultFallback})