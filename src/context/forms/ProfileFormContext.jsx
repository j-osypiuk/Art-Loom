import { createContext } from 'react';

export const ProfileFormContext = createContext({
    showNick: false,
    artFields: [],
    description: "Very talented and passionate artist.",
    nickname: "",
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
})