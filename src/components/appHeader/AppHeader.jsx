// import {Route, Routes, Link} from 'react-router-dom'
import './appHeader.scss';
// import ComicsList from '../comicsList/ComicsList';

const AppHeader = () => <>
    <header className="app__header">
        <h1 className="app__title">
            <a href="#">
                <span>Marvel</span> information portal
            </a>
        </h1>
        <nav className="app__menu">
            <ul>
                <li><a href="#">Characters</a></li>
                /
                <li><a to="/comics">Comics</a></li>
            </ul>
        </nav>
    </header>
    {/* <Routes>
        <Route path='/comics' element={<ComicsList />} />
    </Routes> */}
</>

export default AppHeader;