import {ChangeEvent} from 'react';

type InputPropsType = {
	currentText: string// НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (text: string)=>void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		props.setCurrentText(e.currentTarget.value);
		// НУЖНО ДОПИСАТЬ
	};

	 return (
	   <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	 );
};

//было так
//export const Input = (props: InputPropsType) => {
	//const onChangeHandler = (event: 'НУЖНО ПРОТИПИЗИРОВАТЬ') => {
		// НУЖНО ДОПИСАТЬ
	//};

	// return (
	//   <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	// );
//};
