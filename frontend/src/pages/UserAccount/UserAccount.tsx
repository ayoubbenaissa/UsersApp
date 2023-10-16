import { useQuery } from "@tanstack/react-query"
import { getUserAccount } from "./api";
import { Spinner } from "@/components/Spinner/Spinner";
import { Error } from "@/components/Error/Error";

export const UserAccount = () => {

    // fetching "UserAccount" from backend
    const { isLoading, error, data: userAccountQuery } = useQuery({
        queryKey: ["userAccount"],
        queryFn: getUserAccount
    });

    if (isLoading) return <Spinner waitingInfoText="loading user account data ..." />

    if (error) return <Error errorMessage={JSON.stringify((error as Error).message || 'error')} />

    console.log(` ** data fetched: ${JSON.stringify(userAccountQuery)}`);

    return (
        <div className="user-account">
            <h1>User Account</h1>
        </div>
    )
}