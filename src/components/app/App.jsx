import {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const NoMatch = lazy(() => import('../pages/NoMatch'))
const MainPage = lazy(() => import('../pages/MainPage'))
const ComicsPage = lazy(() => import('../pages/ComicsPage'))
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'))

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<ErrorBoundary />}>
                        <Routes>
                            <Route path='/' element={<MainPage />} />
                            <Route path='/comics' element={<ComicsPage />} />
                            <Route path='/comics/:comicId' element={<SingleComicPage />} />
                            <Route path='*' element={<NoMatch />} />
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;