"use client";

import {
  createSubscriptionApi,
  deleteSubscriptionApi,
  fetchAllSubscriptionsApi,
  fetchSingleSubscriptionApi,
  updateSubscriptionApi,
} from "@/lib/subscribe.api";
import { SavedSubscription } from "@/types/Subscription";
import { create } from "domain";
import { useEffect, useState } from "react";

export const useSubscription = () => {
  const [subscriptions, setsubscriptions] = useState<SavedSubscription[]>([]);
  const [singleSubscription, setSingleSubscription] =
    useState<SavedSubscription | null>(null);
  const [error, seterror] = useState<string | null>(null);
  const [loading, setloading] = useState<boolean>(false);

  const fetchSubscriptions = async () => {
    setloading(true);
    seterror(null);
    try {
      const subscriptions = await fetchAllSubscriptionsApi();
      setsubscriptions([...subscriptions]);
    } catch (error) {
      seterror((error as Error).message);
    } finally {
      setloading(false);
    }
  };

  const createSubscription = async (newSusbcription: string) => {
    setloading(true);
    seterror(null);
    try {
      console.log("before creating subscription");
      const savedSubscription = await createSubscriptionApi(newSusbcription);
      console.log("after creating subscription");
      setsubscriptions((previousSubs) => [...previousSubs, savedSubscription]);
    } catch (error) {
      seterror((error as Error).message);
    } finally {
      setloading(false);
    }
  };

  const updateSubscription = async (
    subscriptionId: string,
    updatedSubscribeData: string
  ) => {
    setloading(true);
    seterror(null);
    try {
      const updatedSubscription = await updateSubscriptionApi(
        subscriptionId,
        updatedSubscribeData
      );
      setsubscriptions((previousSubs) =>
        previousSubs.map((subscription) =>
          subscription._id === updatedSubscription._id
            ? updatedSubscription
            : subscription
        )
      );
    } catch (error) {
      seterror((error as Error).message);
    } finally {
      setloading(false);
    }
  };

  const getSingleSubscription = async (subscriptionId: string) => {
    setloading(true);
    seterror(null);
    try {
      const subscription = await fetchSingleSubscriptionApi(subscriptionId);
      setSingleSubscription({ ...subscription });
    } catch (error) {
      seterror((error as Error).message);
    } finally {
      setloading(false);
    }
  };

  const deleteSubscription = async (subscriptionId: string) => {
    setloading(true);
    seterror(null);
    try {
      const result = await deleteSubscriptionApi(subscriptionId);
      setsubscriptions((previousSubs) =>
        previousSubs.filter((sub) => sub._id !== subscriptionId)
      );
    } catch (error) {
      seterror((error as Error).message);
    } finally {
      setloading(false);
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
    seterror,
    createSubscription,
    updateSubscription,
    getSingleSubscription,
    deleteSubscription,
  };
};
