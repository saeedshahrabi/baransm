import axios from "axios" 
import { ISignUp } from "../models/signup.Model";
export class Registeration {


    // getToken(data: { email: string, password: string }): Promise<IAPI_Response<IToken>> {
    //     return this.getTokenfromServer(data)
    // }

    // profile(): Promise<IAPI_Response<IUser>> {
    //     return this.axiosTokenInstance.get('/user/current');
    // }

    // profileUpdate(data:IUser):Promise<IAPI_Response<IUser>>{
    //     return this.axiosTokenInstance.put('/user/current',data);
    // }

    // profile_check(): Promise<AxiosResponse<{}>> {
    //     return this.axiosTokenInstance.head('/users/profile');
    // }

    async signup(data:ISignUp): Promise<any> {
        return axios.post('http://localhost:4444/signup', data);
    }

    
}