import {
  ResponseSubscription,
  ResponseSubscriptions,
} from "@/types/Subscription";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";


const BASEURL = "http://localhost:3001/api"

const apiClient = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const token = Cookies.get("auth_token");

export const createSubscriptionApi = async (
  newSubscription: string
): Promise<ResponseSubscription> => {
  try {
    const response = await apiClient.post("/subscribe", {
      email: newSubscription,
    });
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
      const response = await axios.get(`${BASEURL}/subscribe`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message);
      }
      throw error;
    }
  };

export const fetchSingleSubscriptionApi = async (
  subscriptionId: string
): Promise<ResponseSubscription> => {
  try {
    const response = await axios.get(`${BASEURL}/subscribe/${subscriptionId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
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
      `${BASEURL}/subscribe/${subscriptionId}`,
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
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const deleteSubscriptionApi = async (
  subscriptionId: string
): Promise<void> => {
  try {
     await axios.delete(
      `${BASEURL}/subscribe/${subscriptionId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};
