import React from 'react';
import {View} from 'react-native';
import { WebView }  from 'react-native-webview'
import { useNavigation } from '@react-navigation/native';

function Profile({ route,navigation }){
    // navigation = useNavigation();
     const { github_username} = route.params;
    return (
        <WebView style={{flex:1}} source={{uri : `http://github.com/${github_username}`}} />
    );
}

export default Profile;