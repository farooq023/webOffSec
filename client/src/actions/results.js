import axios from 'axios';
import {LOAD_SCAN_RESULTS} from './types';

export const results = () => async(dispatch)=>{
    try {
        const res = await axios.get('/api/results');
        dispatch({
            type:LOAD_SCAN_RESULTS,
            payload:res.data,
        })
    }
    catch(err){}
}