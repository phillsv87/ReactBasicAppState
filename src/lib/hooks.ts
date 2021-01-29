import React, { useContext } from 'react';
import { useProperty } from './common-js';
import { User } from './rs-type';
import RsApp from './RsApp';

export const RsAppContext=React.createContext<RsApp|null>(null);

export function useApp():RsApp
{
    const app=useContext(RsAppContext);
    if(!app){
        throw new Error('useApp used outside of RsAppContext');
    }

    return app;
}

export function useUser():User|null
{
    const {userManager}=useApp();
    const user=useProperty(userManager,'user');
    return user;
}