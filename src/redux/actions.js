import { createAction } from '@reduxjs/toolkit';

// const asyncActionCreator = args => dispatch => {
//   //http
//   // fetch().then(x=>dispatch(aaa(x)).catch(y=>yyy(y)))
// };
//в компоненте:
// dispatch(asyncActionCreator(5));

export const addContact = createAction('contacts/Add');

export const deleteContact = createAction('contacts/Delete');

export const changeFilter = createAction('filter/Change');
