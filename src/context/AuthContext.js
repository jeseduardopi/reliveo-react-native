import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../utils/config';
import axios from '../utils/axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    // here to only store USER INFO, if Token = true, we call t`
    // `https://reliveoapi.com/api/users?email=${emai}`

    // const [userInfoToken, setUserInfoToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    // const [reqRes, setReqRes] = useState(null);

    const login = (email, password) => {
        // setIsLoading(true);

        // const url = 'http://reliveoapi.com/authentication_token';

        const body = {
            email,
            password,
        };

        axios
            // .post('/authentication_token', body)
            .post('/user/signin', body)
            .then((res) => {
                // console.log(res);
                let userInfo = res.data;
                userInfo.token = 'qsdfqsdfqs';
                setUserToken(userInfo.token);
                console.log(res.data);

                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                AsyncStorage.setItem('userToken', userInfo.token);
            })
            .catch((e) => {
                console.log(`Login error: ${e}`);
            });

        // ? 1 - Si token, faire appel à l'api pour recuperer infoUser

        // setUserToken('qsdf');

        // AsyncStorage.setItem('userToken', userToken, {
        //     email,
        //     password,
        // })
        //     .then((res) => {
        //         console.log(res.data);
        // let userInfo = res.data;
        // setUserInfo(userInfo);
        // setUserToken(userInfo.data.token);

        // AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        // AsyncStorage.setItem('userToken', userInfo.data.token);
        // console.log('User token' + userInfo.data.token);
    };

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('userToken');
    };

    const signup = (data) => {
        // console.log('sign up', data);

        axios
            .post('/user/signup', data)
            .then((response) => {
                const result = response.data;
                const { message, status, data } = result;
                console.log(result);

                if (status !== 'SUCCESS') {
                    // handleMessage(message, status);
                    return message;
                }
            })
            .catch((error) => {
                console.log(error);
                // setIsSubmitting(false);
                console.log('An error occurred. Check your network and try again.');
            });
    };

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userInfo = await AsyncStorage.getItem('userInfo');
            let userToken = await AsyncStorage.getItem('userToken');

            userInfo = JSON.parse(userInfo);

            if (userInfo) {
                setUserToken(userToken);
                setUserInfo(userInfo);
                // setIsLoading(false);
            }
        } catch (e) {
            console.log(`is logged in error ${e}`);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ login, logout, signup, isLoading, userToken, userInfo }}>
            {children}
        </AuthContext.Provider>
    );
};
