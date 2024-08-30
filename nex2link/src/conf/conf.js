const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITEPROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteOrdersCollectionId: String(import.meta.env.VITE_APPWRITE_ORDERS_COLLECTION_ID),
}

export default conf;