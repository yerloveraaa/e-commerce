import React, { useState, useCallback } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'


import colors from '../../styles/colors'
import { getMeApi } from '../../api/user'

import useAuth from '../../hooks/useAuth'
import { Search } from '../../components/search'
import StatusBar from '../../components/StatusBar'
import ScreeenLoading from '../../components/ScreeenLoading'
import UserInfo from '../../components/Account/UserInfo'
import Menu from '../../components/Account/Menu'



ScreeenLoading



export default function Account() {

    const [user, setUser] = useState(null)

    const {auth} =  useAuth();

    // console.log(auth);

    useFocusEffect(
        useCallback(() => {
            (async () => {
               
                const response = await getMeApi(auth.token);
               setUser(response)
            })();
        }, [])

    );


    return (
        <>
            <StatusBar backgroundColor={colors.bgDark} barStyle="light-content" />
            {!user ? (   <ScreeenLoading   />) :(
                <>
                <Search />
            <ScrollView>
            <UserInfo user={user} />
            <Menu />
            </ScrollView>

                </>
            )
            }
            
          
        </>
    )
}



 