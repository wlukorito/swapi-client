import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

import './DataTable.css';

const DataTable: FC = () => {
    const { globalState } = useAppContext();
    const history = useHistory();

    return (
        <table className="table table-bordered table-hover mt-3">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Height</th>
                    <th scope="col">Mass</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Details</th>
                </tr>
            </thead>
            <tbody>
                {globalState.people.results.map((person) => (
                    <tr key={person.name}>
                        <td>{person.name}</td>
                        <td>{person.height}</td>
                        <td>{person.mass}</td>
                        <td className="text-capitalize">{person.gender}</td>
                        <td>
                            <button
                                className="btn btn-sm btn-outline-dark"
                                type="button"
                                onClick={() =>
                                    history.push('/details', { person })
                                }
                            >
                                <i className="far fa-folder-open"></i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;
