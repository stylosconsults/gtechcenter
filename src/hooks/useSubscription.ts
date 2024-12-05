"use client";

import {
  createSubscriptionApi,
  deleteSubscriptionApi,
  // fetchAllSubscriptionsApi,
  fetchSingleSubscriptionApi,
  updateSubscriptionApi,
} from "@/lib/subscribe.api";
import { SavedSubscription } from "@/types/Subscription";
import {  useState } from "react";
import toast from "react-hot-toast";

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

  // const fetchSubscriptions = async () => {
  //   setLoading(true);
  //   setError("");
  //   setSubscribeSuccessMsgs((previousSuccessMsgs) => ({
  //     ...previousSuccessMsgs,
  //     getAllSuccessMsg: "",
  //   }));
  //   try {
  //     const allSubscriptions = await fetchAllSubscriptionsApi();

  //     setSubscriptions([...allSubscriptions.subscriptions]);
  //     setSubscribeSuccessMsgs((previousSuccessMsgs) => ({
  //       ...previousSuccessMsgs,
  //       getAllSuccessMsg: allSubscriptions.message,
  //     }));
  //   } catch (error) {
  //     setError((error as Error).message);
  //     setSubscribeSuccessMsgs((previousSuccessMsgs) => ({
  //       ...previousSuccessMsgs,
  //       getAllSuccessMsg: "",
  //     }));
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const createSubscription = async (newSubscription: string) => {
    setLoading(true);
    setError("");
    setSubscribeSuccessMsgs((previousSuccessMsgs) => ({
      ...previousSuccessMsgs,
      createSuccessMsg: "",
    }));
    try {
      const savedSubscription = await toast.promise(
        createSubscriptionApi(newSubscription),

        {
          loading: "Wait !! Subscribing...",
          success: (data) => data.message,
          error: (err) => err.message,
        }
      );
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
    setSubscribeSuccessMsgs((previousSuccessMsgs) => ({
      ...previousSuccessMsgs,
      updateSuccessMsg: "",
    }));
    try {
      const updatedSubscription = await toast.promise(updateSubscriptionApi(
        subscriptionId,
        updatedSubscribeData
      ),
    
      {
        loading: "Wait !!  Updating ...",
        success: (data) => data.message,
        error: (err) => err.message,
      }
    )

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
    setSubscribeSuccessMsgs((previousSuccessMsgs) => ({
      ...previousSuccessMsgs,
      getSingleSuccessMsg: "",
    }));
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
    setSubscribeSuccessMsgs((previousSuccessMsgs) => ({
      ...previousSuccessMsgs,
      deleteSuccessMsg: "",
    }));
    try {
      await toast.promise(deleteSubscriptionApi(subscriptionId),
    
      {
        loading: "Wait !! Subscribing...",
        success: "Subscription deleted successfully",
        error: (err) => err.message,
      }
    );

      setSubscriptions((previousSubs) =>
        previousSubs.filter((sub) => sub._id !== subscriptionId)
      );

      setSubscribeSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        deleteSuccessMsg: "Subscription deleted successfully",
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
