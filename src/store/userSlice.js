import { createSlice } from "@reduxjs/toolkit"

const user = createSlice({
    name: 'user', 
    initialState: { name: 'gil dong', age : 20 },
    reducers : {
        changeName(state){
            state.name = 'Park ' + state.name
        },
        // 파라미터는 보통 action으로 지정
        changeAge(state, action){
            state.age += action.payload
        }
    }
})

export let { changeName, changeAge } = user.actions

export default user;