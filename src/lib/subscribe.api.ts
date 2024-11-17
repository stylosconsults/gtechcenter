import { SavedSubscription } from "@/types/Subscription";
import axios, {  AxiosError } from "axios";

const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const createSubscriptionApi = async (
  newSubscription: string
): Promise<SavedSubscription> => {
  try {
    const response = await apiClient.post("/subscribe", {
      email: newSubscription,
    });
    console.log("new subscription ", response.data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const fetchAllSubscriptionsApi = async (): Promise<
  SavedSubscription[]
> => {
  try {
    const response = await apiClient.get("/subscribe");
    console.log("all subscriptions", response.data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("axios error", error.message);
      throw new Error(error.response?.data.message);
    }
    throw error
  }
};

export const fetchSingleSubscriptionApi = async (
  subscriptionId: string
): Promise<SavedSubscription> => {
  try {
    const response = await apiClient.get(`/subscribe/${subscriptionId}`);
    console.log(`subscription of ${subscriptionId}`, response.data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
        console.log("axios error", error.message);
        throw new Error(error.response?.data.message);
      }
    throw error
  }
};

export const updateSubscriptionApi = async (
  subscriptionId: string,
  updatedSubData: string
): Promise<SavedSubscription> => {
  try {
    const response = await apiClient.put(
      `/subscribe/${subscriptionId}`,
      updatedSubData
    );
    console.log(`updated subscription`, response.data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
        console.log("axios error", error.message);
        throw new Error(error.response?.data.message);
      }
    throw error
  }
};

export const deleteSubscriptionApi = async (
  subscriptionId: string
): Promise<void> => {
  try {
    const response = await apiClient.delete(`/subscribe/${subscriptionId}`);
    console.log(`deleted of ${subscriptionId}`, response.data);
  } catch (error) {
    if (error instanceof AxiosError) {
        console.log("axios error", error.message);
        throw new Error(error.response?.data.message);
      }
    throw error
  }
};
