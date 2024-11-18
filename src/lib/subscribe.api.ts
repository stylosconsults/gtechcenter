import {
  ResponseSubscription,
  ResponseSubscriptions,
  SavedSubscription,
} from "@/types/Subscription";
import axios, { AxiosError } from "axios";

const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const token = localStorage.getItem("auth_token");

export const createSubscriptionApi = async (
  newSubscription: string
): Promise<ResponseSubscription> => {
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

export const fetchAllSubscriptionsApi =
  async (): Promise<ResponseSubscriptions> => {
    try {
      const response = await axios.get("/api/subscribe", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("all subscriptions", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log("axios error", error.message);
        throw new Error(error.response?.data.message);
      }
      throw error;
    }
  };

export const fetchSingleSubscriptionApi = async (
  subscriptionId: string
): Promise<ResponseSubscription> => {
  try {
    const response = await axios.get(`/api/subscribe/${subscriptionId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("axios error", error.message);
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const updateSubscriptionApi = async (
  subscriptionId: string,
  updatedSubData: string
): Promise<ResponseSubscription> => {
  try {
    const response = await axios.put(
      `/api/subscribe/${subscriptionId}`,
      updatedSubData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("axios error", error.message);
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const deleteSubscriptionApi = async (
  subscriptionId: string
): Promise<void> => {
  try {
    const response = await axios.delete(
      `/api/subscribe/${subscriptionId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("axios error", error.message);
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};
