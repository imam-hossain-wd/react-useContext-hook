import React from 'react';
import {userContext} from '../userContext/UserContext';
import ComTwo from './ComTwo';


const Com = () => {
    const user = {
        name: "Imam",
        Religion : "Islam"
    }
  
    return (
        <userContext.Provider value={user}>
            <ComTwo></ComTwo>
            
        </userContext.Provider>
    );
};

export default Com;