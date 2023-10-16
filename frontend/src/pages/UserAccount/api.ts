import { UserAccount } from "@/types";
import { makeApiCall } from "@/utils/makeApiCall";

export const getUserAccount = async (): Promise<UserAccount> => {
    const userAccount = await makeApiCall(`http://localhost:3001/`, { method: 'GET'});
    return userAccount;
};