// utils/toastConfig.ts
import { toast, ToastOptions } from 'react-hot-toast'

const defaultOptions: ToastOptions = {
    duration: 3000,
    position: 'top-right',
}

export const toastConfig = {
    success: (message: string, options?: ToastOptions) => {
        return toast.success(message, {
            ...defaultOptions,
            style: {
                background: '#4CAF50',
                color: '#fff',
                padding: '16px',
                borderRadius: '8px',
            },
            iconTheme: {
                primary: '#fff',
                secondary: '#4CAF50',
            },
            ...options,
        })
    },

    error: (message: string, options?: ToastOptions) => {
        return toast.error(message, {
            ...defaultOptions,
            style: {
                background: '#f44336',
                color: '#fff',
                padding: '16px',
                borderRadius: '8px',
            },
            iconTheme: {
                primary: '#fff',
                secondary: '#f44336',
            },
            ...options,
        })
    },

    loading: (message: string, options?: ToastOptions) => {
        return toast.loading(message, {
            ...defaultOptions,
            ...options,
        })
    },

    promise: <T,>(
        promise: Promise<T>,
        messages: {
            loading: string;
            success: string;
            error: string;
        },
        options?: ToastOptions
    ) => {
        return toast.promise(
            promise,
            messages,
            {
                ...defaultOptions,
                ...options,
            }
        )
    }
}