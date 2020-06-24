import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();

import Main from './pages/Main';
import Profile from './pages/Profile';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="FinDev" component={Main} />
                <AppStack.Screen name="Perfil no Github" component={Profile}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

