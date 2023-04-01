import { ADD_EVENT } from "../constant/ActionType";

export const add_event = (data) => {
    console.log('data from add event')
    console.log(data)

    return{
        type : ADD_EVENT,
        data : data
    }
}