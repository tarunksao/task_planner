import { Is_Error, Is_Loading, Is_Success } from "./task.type"
import axios from 'axios';

export const createTask = (form) => async (dispatch) => {
    dispatch({type:Is_Loading});
    try{
        const res = await axios.post('https://real-ruby-crab-sari.cyclic.app/tasks', form);
        const data = await res.data;
        console.log(data);
        dispatch({type:Is_Success, payload:[]});
        return data;
    } catch (err) {
        dispatch({type:Is_Error});
        console.log(err);
    }
}

export const getTasks = () => async (dispatch) => {
    dispatch({type:Is_Loading});
    try{
        const res = await axios.get('https://real-ruby-crab-sari.cyclic.app/tasks');
        const data = await res.data;
        console.log(data);
        dispatch({type:Is_Success, payload:[]});
        return data;
    } catch (err) {
        dispatch({type:Is_Error});
        console.log(err);
    }
}