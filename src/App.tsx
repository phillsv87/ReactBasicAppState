/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { appConfig } from './app-config';
import Page1 from './components/Page1';
import { RsAppContext } from './lib/hooks';
import RsApp from './lib/RsApp';

declare const global: { HermesInternal: null | {} };

const App = () => {

    const [app,setApp]=useState<RsApp|null>(null);

    useEffect(()=>{
        let m=true;

        const init=async ()=>{
            const app=new RsApp(appConfig);
            await app.initAsync();
            if(m){
                setApp(app);
            }
        }

        init();

        return ()=>{m=false}
    },[]);


    if(!app){
        return <ActivityIndicator />
    }

    return (
        <RsAppContext.Provider value={app}>
            
                <Page1 title="First Page"/>
            
        </RsAppContext.Provider>
    )

};

const styles = StyleSheet.create({

});

export default App;
