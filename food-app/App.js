import ReactDOM from "react-dom/client";
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Body from './src/components/Body';

const AppLayout = () => (
    <>
        <Header />
        <Body />
        <Footer />
    </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);