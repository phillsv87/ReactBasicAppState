import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useApp, useUser } from '../lib/hooks';
import UserProfile from './UserProfile';

interface Page1Props
{
    title:string;
}

export default function Page1({
    title
}:Page1Props){

    const {config}=useApp();

    const user=useUser();

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.txt}>API - {config.apiBaseUrl}</Text>
                <Text style={styles.txt}>Your Email - {user?.email}</Text>

                <UserProfile/>
            </View>
        </View>
    )

}

const styles=StyleSheet.create({
    root:{
        flex:1,
        paddingTop:50,
        alignItems:'center'
    },
    container:{
        maxWidth:340,
        padding:20
    },
    txt:{
        marginTop:20
    },
    title:{
        fontSize:18
    }
});
