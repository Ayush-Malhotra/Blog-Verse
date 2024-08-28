import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class Authservice{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){

        try {
            const user = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
            if(user)
            {
                return await this.login({email,password});
            }
            else
            {
                return user;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(
                email, 
                password
            );
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite Service :: getCuurentUser :: error",error);
        }
    }

    async logout(){
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            throw error;
        }
    }
}

const authservice = new Authservice();

export default authservice;