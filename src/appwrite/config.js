import conf from "../conf/conf";
import { Client,Databases,Storage,Query,ID} from "appwrite";

class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,status,content,featuredImage,userId})
    {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    status,
                    featuredImage,
                    userId
                }
            )
        } catch (error) {
            console.log("Error occured :: createPost :: ",error);
        }
    }

    async updatePost(slug,{title,status,content,featuredImage})
    {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    status,
                    featuredImage
                }
            )
        } catch (error) {
            console.log("Error occured :: createPost :: ",error);
        }
    }

    async deletePost(slug)
    {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Error occured :: createPost :: ",error);
        }
    }

    async getPost(slug)
    {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite :: getPost error :: ", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status","active")])
    {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite :: getPosts error :: ", error);
            return false;
        }
    }

    // files

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error",error);
            return false;
        }
    }

    async deleteFile(fileID)
    {
        try {
            this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileID
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error",error);
            return false;
        }
    }

    getFilePreview(fileID)
    {
        try {
            return this.bucket.getFilePreview(conf.appwriteBucketId,fileID);
        } catch (error) {
            console.log("Appwrite Service :: getFile error occured :: ", error);
            return false;
        }
    }
}

const service = new Service();

export default service;