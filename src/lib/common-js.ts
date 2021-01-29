import EventEmitter from "eventemitter3";
import { useCallback, useLayoutEffect, useState } from "react";

export function delayAsync(delayMs:number):Promise<void>
{
    delayMs=Math.round(delayMs);
    return new Promise((r)=>{
        if(delayMs<=0){
            r();
        }else{
            setTimeout(()=>{
                r();
            },delayMs);
        }
    });
}

export function useEvent(
    emitter:EventEmitter,
    event:string|symbol,
    listener: (...args: any[]) => void,
    enabled:boolean=true)
{
    useLayoutEffect(()=>{
        if(emitter && enabled){
            emitter.on(event,listener);
        }
        return ()=>{
            if(emitter && enabled){
                emitter.off(event,listener);
            }
        }
    },[emitter,listener,enabled,event]);

}

export function useUpdateEvent(
    emitter:EventEmitter,
    event:string|symbol,
    enabled:boolean=true):number
{
    const [index,setIndex]=useState<number>(0);

    const increment=useCallback(()=>{
        setIndex(v=>v+1);
    },[]);

    useEvent(emitter,event,increment,enabled);

    return index;

}

export function useProperty<T extends EventEmitter,K extends keyof T>(emitter:T,propertyName:K)
{
    useUpdateEvent(emitter,propertyName as string);
    return emitter[propertyName];
}