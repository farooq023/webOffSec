import axios from 'axios';
import { setAlert } from './alerts';


const scan = (domain) => async (dispatch) => {
    
    console.log(domain)
    
    try {
      const res = await axios.post('/api/scan', domain);
        console.log("response: " + res);
   
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
    }
  };

  export default scan;