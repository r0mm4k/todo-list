import React from 'react';

import s from './loader.module.css';
import loader from './loader.svg'
const Loader = () => {
	return <div className={s.loader}><img src={loader} alt="loader"/></div>
};

export default Loader;
