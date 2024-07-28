
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../src/Screens/Home'
import Signup from '../src/Screens/Signup'
import Login from '../src/Screens/Login'
import Welcome from '../src/Screens/Welcome'
import Second from '../src/Screens/SecondScreen/Second'
import ThirdScreen from '../src/Screens/ThirdScreen/ThirdScreen'
import FourthScreen from '../src/Screens/FourthScreen/FourthScreen'
import TodayTask from '../src/Screens/Todaytask/TodayTask'
import Bottom_Tab_Navigation from './Tab_Navigationn/Bottom_Tab_Navigation'
import MonthlyTask from '../src/Screens/MonthlyTask/MonthlyTask'
import Add_Task from '../src/Screens/Add_Task/Add_Task'
import Create_Task from '../src/Screens/Create_Task/Create_Task'
import Create_Team from '../src/Screens/Create_Team/Create_Team'
import Progrees from '../src/Screens/Progrees/Progrees'
// import TodayTask from '../src/Screens/Todaytask/TodayTask'
import EditProfile from '../src/Screens/EditProfile/EditProfile'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { save_tokens_constant } from '../src/Screens/utilits/constant'
import { check_auth_service } from '../service/auth_service'
import { authAction } from '../store/slices/authSlice'
import { Loader } from '../aseets/Loder'



const Stack = createNativeStackNavigator()
const Index = () => {

    const authSlice = useSelector((state) => state.auth)

    const dispatch = useDispatch()

    useEffect(() => {
        //  iife ----->
        ; (async () => {

            const auth_token = await AsyncStorage.getItem(save_tokens_constant) || ''

            if (auth_token) {
                try {
                    const res = await check_auth_service()

                    if (res.data) {
                        dispatch(authAction({ auth: true, profile: res.data.data }))
                    }
                } catch (error) {
                    dispatch(authAction({ auth: false, profile: null }))
                }
            }
            else {
                dispatch(authAction({ auth: false, profile: null }))
            }

        })();
    }, [])


    return (

        authSlice.loading ? <Loader size="large" /> : <NavigationContainer>

            {authSlice.auth == false ? <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name='second' component={Second} />
                <Stack.Screen name='third' component={ThirdScreen} />
                <Stack.Screen name='four' component={FourthScreen} />
                <Stack.Screen name='Signup' component={Signup} />
                <Stack.Screen name='Login' component={Login} />
            </Stack.Navigator> :
                <Stack.Navigator screenOptions={{ headerShown: false }}  >
                    <Stack.Screen name='bottom-tabs' component={Bottom_Tab_Navigation} />
                    <Stack.Screen name='todaytask' component={TodayTask} />
                    <Stack.Screen name='Monthlytask' component={MonthlyTask} />
                    <Stack.Screen name='Addtask' component={Add_Task} />
                    <Stack.Screen name='createTask' component={Create_Task} />
                    <Stack.Screen name='createTeam' component={Create_Team} />
                    <Stack.Screen name='progrees' component={Progrees} />
                    <Stack.Screen name='editProfile' component={EditProfile} />
                </Stack.Navigator>
            }
        </NavigationContainer>
    )
}

export default Index