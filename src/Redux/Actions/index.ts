import { Dispatch } from 'redux';
import { setShowSideBar } from '../Slices';

export const setShowSideBarAction = (value: boolean, dispatch: Dispatch) => {
    dispatch(setShowSideBar(value))
}