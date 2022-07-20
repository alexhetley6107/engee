import React, { useState } from 'react';
import {
	BsFillArrowRightCircleFill as Right,
	BsFillArrowLeftCircleFill as Left,
} from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';

import { selectMode, toggleMode } from '../../redux/slices/tests';

function LangMode() {
	const origin = useSelector(selectMode);

	const dispatch = useDispatch();

	const onClickMode = () => {
		dispatch(toggleMode());
	};

	return (
		<div className={`langMode ${origin ? '' : 'active'}`} onClick={onClickMode}>
			<p>EN </p>
			<p className='arrow'>{origin ? <Right /> : <Left />}</p>
			<p> RU</p>
		</div>
	);
}

export default LangMode;
