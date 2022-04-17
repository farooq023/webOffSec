import axios from 'axios';
import {LOAD_AGENTS} from './types';

export const agents=()=>async(dispatch)=>{
  

      try{
    const res=await axios.get('/api/agents');

    dispatch({
        type:LOAD_AGENTS,
        payload:res.data,
    })}
    catch(err){

    }
}