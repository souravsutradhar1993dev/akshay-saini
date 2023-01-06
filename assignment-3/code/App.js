import { createElement as ce} from "react";
import ReactDOM from "react-dom/client";
import logo from './assets/images/logo.jpg';
import user from './assets/images/user.png';
import './assets/css/header.css';

// const container = ce('div', {
//     'className': 'title'
// }, [
//     ce('h1', {}, 'Heading 1'),
//     ce('h2', {}, 'Heading 2'),
//     ce('h3', {}, 'Heading 3'),
// ]);

const HeaderComponent = () => (
    <div className="header">
        <div className="logo">
            <img src={logo}  />
        </div>
        <div className="search-bar">
            <input type="search" placeholder="Search Here..." />
        </div>
        <div className="user">
            <img src={user}  />
        </div>
    </div>
);

const TitleComponent = () => (
    <div className="title">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
    </div>
);

const ContainerComponent = () => (
    <div className="container">
        <HeaderComponent />
        <TitleComponent />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<ContainerComponent/>);