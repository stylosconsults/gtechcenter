export interface SavedSubscription {
    _id: string
    email: string;
    subscriptionDate: string;
    subscriptionTime: string;
}


export interface ResponseSubscription{
    subscription: SavedSubscription;
    message: string
}