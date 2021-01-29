export interface RsAppConfig
{
    readonly apiBaseUrl:string;
}

export interface User
{
    id:number;
    email:string;
}

export interface SignInRequest
{
    email:string;
}