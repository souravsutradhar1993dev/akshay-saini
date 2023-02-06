import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err)
    return (
        <>
            <h2>Oops!!!</h2>
            <p>Page Not Found</p>
        </>
    );
};

export default Error;