import { FC } from 'react';

const ErrorPage: FC = () => {
    return (
        <div className="container text-center pt-5">
            <div className="alert alert-danger" role="alert">
                <h6 className="display-1">404</h6>
                <p className="h_0">Occurred, an error has!</p>
                <p className="h_3">
                    <a href="/" className="alert-link">
                        Go Back Home
                    </a>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;
