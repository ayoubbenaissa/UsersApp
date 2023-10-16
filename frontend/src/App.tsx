import { Route, Routes } from 'react-router-dom';
import { UserAccount } from './pages/UserAccount/UserAccount';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';

export const App = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={<UserAccount />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
        </>
    );
};
