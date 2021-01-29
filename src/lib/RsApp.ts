import EventEmitter from "eventemitter3";
import { RsAppConfig } from "./rs-type";
import UserManager from "./UserManager";

export default class RsApp extends EventEmitter
{

    public readonly config:RsAppConfig;
    public readonly userManager:UserManager;

    constructor(config:RsAppConfig)
    {
        super();
        this.config=config;
        this.userManager=new UserManager(this);
    }

    public async initAsync()
    {
        await this.userManager.initAsync();
    }
}