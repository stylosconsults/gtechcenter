"use client";

import {
  createSubscriptionApi,
  deleteSubscriptionApi,
  fetchAllSubscriptionsApi,
  fetchSingleSubscriptionApi,
  updateSubscriptionApi,
} from "@/lib/subscribe.api";
import { SavedSubscription } from "@/types/Subscription";
import { all } from "axios";
import { create } from "domain";
import { useEffect, useState } from "react";

interface SubscribeSuccessMsgs {
  createSuccessMsg: string;
  updateSuccessMsg: string;
  getAllSuccessMsg: string;
  getSingleSuccessMsg: string;
  deleteSuccessMsg: string;
}

export const useSubscription = () => {
  const [subscriptions, setSubscriptions] = useState<SavedSubscription[]>([]);
  const [singleSubscription, setSingleSubscription] =
    useState<SavedSubscription | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [subscribeSuccessMsgs, setSubscribeSuccessMsgs] =
    useState<SubscribeSuccessMsgs>({
      createSuccessMsg: "",
      updateSuccessMsg: "",
      getAllSuccessMsg: "",
      getSingleSuccessMsg: "",
      deleteSuccessMsg: "",
    });

  const fetchSubscriptions = async () => {
    setLoading(true);
    setError("");
    try {
      const allSubscriptions = await fetchAllSubscriptionsApi();

      setSubscriptions([...allSubscriptions.subscriptions]);
      setSubscribeSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        getAllSuccessMsg: allSubscriptions.message,
      }));
      console.log("subscriptions: ", allSubscriptions);
    } catch (error) {
      setError((error as Error).message);
      setSubscribeSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        getAllSuccessMsg: "",
      }));
    } finally {
      setLoading(false);
    }
  };

  const createSubscription = async (newSubscription: string) => {
    setLoading(true);
    setError("");
    try {
      console.log("before creating subscription");
      const savedSubscription = await createSubscriptionApi(newSubscription);
      setSubscriptions((previousSubs) => [
        ...previousSubs,
        savedSubscription.subscription,
      ]);
      setSubscribeSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        createSuccessMsg: savedSubscription.message,
      }));
    } catch (error) {
      setError((error as Error).message);
      setSubscribeSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        createSuccessMsg: "",
      }));
    } finally {
      setLoading(false);
    }
  };

  const updateSubscription = async (
    subscriptionId: string,
    updatedSubscribeData: string
  ) => {
    setLoading(true);
    setError("");
    try {
      const updatedSubscription = await updateSubscriptionApi(
        subscriptionId,
        updatedSubscribeData
      );

      setSubscriptions((previousSubs) =>
        previousSubs.map((subscription) =>
          subscription._id === updatedSubscription.subscription._id
            ? updatedSubscription.subscription
            : subscription
        )
      );

      setSubscribeSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        updateSuccessMsg: updatedSubscription.message,
      }));
    } catch (error) {
      setError((error as Error).message);
      setSubscribeSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        updateSuccessMsg: "",
      }));
    } finally {
      setLoading(false);
    }
  };

  const getSingleSubscription = async (subscriptionId: string) => {
    setLoading(true);
    setError("");
    try {
      const subscription = await fetchSingleSubscriptionApi(subscriptionId);

      setSingleSubscription({ ...subscription.subscription });

      setSubscribeSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        getSingleSuccessMsg: subscription.message,
      }));
    } catch (error) {
      setError((error as Error).message);
      setSubscribeSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        getSingleSuccessMsg: "",
      }));
    } finally {
      setLoading(false);
    }
  };

  const deleteSubscription = async (subscriptionId: string) => {
    setLoading(true);
    setError("");
    try {
      const result = await deleteSubscriptionApi(subscriptionId);

      setSubscriptions((previousSubs) =>
        previousSubs.filter((sub) => sub._id !== subscriptionId)
      );

      setSubscribeSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        deleteSuccessMsg: "deleted successfully",
      }));
    } catch (error) {
      setError((error as Error).message);
      setSubscribeSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        deleteSuccessMsg: "",
      }));
    } finally {
      setLoading(false);
    }
  };

  //   useEffect(() => {
  //     fetchSubscriptions();
  //   }, []);

  return {
    error,
    loading,
    subscriptions,
    singleSubscription,
    subscribeSuccessMsgs,
    setError,
    createSubscription,
    updateSubscription,
    getSingleSubscription,
    deleteSubscription,
  };
};
