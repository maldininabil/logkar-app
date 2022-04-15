import { lazy } from "libraries";

const HomePage = lazy(() => import('pages/Home'));
const FilmPage = lazy(() => import('pages/Films'));
const DetailPage = lazy(() => import('pages/Detail'));

const routes = [
    { title: 'Home Page', element: <HomePage />, exact: true, path: '/' },
    { title: 'List Film', element: <FilmPage />, exact: true, path: '/films' },
    { title: 'Detail Film', element: <DetailPage />, exact: true, path: `/films/:id` },
];

export default routes;