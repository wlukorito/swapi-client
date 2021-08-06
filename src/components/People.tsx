import { FC, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { useAppContext } from '../context/appContext';

import { GET_PEOPLE } from '../queries';
import './People.css';
import DataTable from './DataTable';
import Loader from './shared/Loader';
import ErrorPage from './shared/ErrorPage';
import { getCurrentPage, parsePageUrl } from '../utils';

const People: FC = () => {
    const { globalState, setGlobalState } = useAppContext();

    const [currentPage, setCurrentPage] = useState(() =>
        getCurrentPage(globalState)
    );

    const [ready, setReady] = useState(false);

    const { loading, error, data } = useQuery(GET_PEOPLE, {
        variables: { page: currentPage },
    });

    const pageCount = Math.ceil(parseInt(globalState.people.count) / 10);

    useEffect(() => {
        if (!loading) {
            setReady(true);
        }

        if (!loading && data) {
            setGlobalState({
                ...globalState,
                previousPage: parsePageUrl(data.people.previous),
                nextPage: parsePageUrl(data.people.next),
                people: data.people,
            });
        }
        
    }, [ready, error, data]); // eslint-disable-line react-hooks/exhaustive-deps

    if (!ready) {
        return <Loader />;
    }

    if (error) {
        return <ErrorPage />;
    }

    return (
        <div className="container people-wrapper">
            <p className="mt-3">
                <span className="h_1">PEOPLE / Page {currentPage || 1}</span>
            </p>

            <DataTable />

            <div className="d-flex justify-content-md-center" id="pagination">
                <div className="btn-toolbar">
                    <div className="btn-group btn-group-sm">
                        <button
                            className="btn btn-outline-dark"
                            onClick={() => {
                                setCurrentPage(globalState.previousPage);
                                setReady(false);
                            }}
                            disabled={!globalState.previousPage}
                        >
                            <i className="fas fa-backward fa-lg"></i>
                            Prev
                        </button>

                        {/* Generate page numbers */}
                        {[...Array(pageCount)].map((val, idx) => (
                            <button
                                type="button"
                                className={
                                    currentPage === `${idx + 1}`
                                        ? 'btn btn-outline-dark active'
                                        : 'btn btn-outline-dark'
                                }
                                onClick={() => {
                                    setCurrentPage(`${idx + 1}`);
                                    setReady(false);
                                }}
                            >
                                {idx + 1}
                            </button>
                        ))}

                        <button
                            className="btn btn-outline-dark"
                            onClick={() => {
                                setCurrentPage(globalState.nextPage);
                                setReady(false);
                            }}
                            disabled={!globalState.nextPage}
                        >
                            Next
                            <i className="fas fa-forward fa-lg"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default People;
