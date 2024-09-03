import { Client, Databases, Query } from "appwrite";
import  conf  from '../conf/conf'; // Assuming you have a configuration file

export class Services {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }

    async createOrder({orderType, Status, deliveryDate, userId}) {
        try {
            return await this.databases.createDocument(
                conf.databaseId,
                conf.ordersCollectionId,
                ID.unique(),  
                {
                    orderType,
                    Status,
                    deliveryDate,
                    userId
                }
                [
                    Permission.read(Role.user(userId)),
                    Permission.read(Role.team(teamId)),
                    Permission.write(Role.team(teamId)),
                    Permission.update(Role.team(teamId)),
                    Permission.delete(Role.team(teamId))
                ]
            );
        } catch (error) {
            console.error("Appwrite error:", error);
            throw error;
        }
    }

    async updateOrder(orderId, {orderType, Status, deliveryDate,}) {
        try {
            return await this.databases.updateDocument(
                conf.databaseId,
                conf.ordersCollectionId,
                orderId,
                {
                    orderType,
                    Status,
                    deliveryDate,
                }
            );
        } catch (error) {
            console.error("Appwrite error:", error);
            throw error;
        }
    }

    async getOrder(orderId) {
        try {
            return await this.databases.getDocument(
                conf.databaseId,
                conf.ordersCollectionId,
                orderId
            );
        } catch (error) {
            console.error("Appwrite error:", error);
            throw error;
        }
    }

    async deleteOrder(orderId) {
        try {
             await this.databases.deleteDocument(
                conf.databaseId,
                conf.ordersCollectionId,
                orderId
            );
            return true;
        } catch (error) {
            console.error("Appwrite error:", error);
            throw error;

            return false;
        }
    }


    async listUserOrders(userId) {
        try {
            return await this.databases.listDocuments(
                conf.databaseId,
                conf.ordersCollectionId,
                [
                    Query.equal('userId', userId),
                    Query.orderDesc('$createdAt')
                ]
            );
        } catch (error) {
            console.error("Appwrite error:", error);
            throw error;
        }
    }

    // Add more methods as needed
}


const services = new Services();

export default services;

