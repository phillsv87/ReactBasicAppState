import EventEmitter from "eventemitter3";
import { delayAsync } from "./common-js";
import { User } from "./rs-type";
import RsApp from "./RsApp";

export default class UserManager extends EventEmitter
{

    private readonly app:RsApp;

    private _user:User|null=null;
    public get user(){return this._user}
    public set user(value:User|null){
        this._user=value;
        this.emit('user');
    }


    constructor(app:RsApp)
    {
        super()
        this.app=app;
    }

    public async initAsync()
    {
        // load user
        await delayAsync(2000);

        // this.user=*something*
    }

    public async signInAsync(email:string):Promise<boolean>
    {

        if(!email){
            return false;
        }

        // Make an API call
        await delayAsync(100);
        
        this.user={
            id:77,
            email
        }

        return true;
        

    }

    public async signOutAsync()
    {
        // Make an API call
        await delayAsync(100);

        this.user=null;
    }

}