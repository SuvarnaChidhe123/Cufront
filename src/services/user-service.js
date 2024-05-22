import { myAxious } from "./helper";

export const signUp =(user)=>{

    return myAxious.post('/api/v1/register',user).then((response)=> response.data)
}

export const loginUser = (loginDetail) =>{
    return myAxious.post('/api/v1/login', loginDetail).then((response)=>response.data)
}