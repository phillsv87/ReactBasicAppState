import React, { useCallback, useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { useApp, useUser } from '../lib/hooks';


export default function UserProfile()
{

    const {userManager}=useApp();
    const user=useUser();

    const [email,setEmail]=useState('');

    const signIn=useCallback(async ()=>{
        const success=await userManager.signInAsync(email);
        console.log('Sign-in',success);
    },[userManager,email]);

    return (
        <View style={styles.root}>
            {user?
                <>
                    <Button title="Sign Out" onPress={()=>userManager.signOutAsync()}/>
                </>
            :
                <>
                    <TextInput
                        placeholder="Enter Your Email"
                        placeholderTextColor="#aaa"
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}/>
                    <Button title="Sign In" onPress={signIn}/>
                </>
            }
        </View>
    )

}

const styles=StyleSheet.create({
    root:{
        marginTop:20

    },
    input:{
        borderColor:'#ccc',
        borderWidth:1,
        borderRadius:10,
        padding:10,
    }
});
