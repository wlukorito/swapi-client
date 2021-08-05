import { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ILocationState } from '../context/state';

import './Details.css';

const Details: FC = (props) => {
    const history = useHistory();
    const location = useLocation<ILocationState>();

    const { person } = location.state;
    const { homeworld } = person;

    return (
        <div className="container mb-3">
            <div className="card p-3 my-2">
                <div className="uname">
                    <i className="far fa-user fa-lg mx-3"></i>
                    <span className="h_1 text-uppercase">{person.name}</span>
                </div>
                <div className="usummary">
                    <div className="detail-card shadow">
                        <h6 className="display-6">{person.height}</h6>
                        <p className="lead">Height</p>
                    </div>

                    <div className="detail-card shadow">
                        <h6 className="display-6">{person.mass}</h6>
                        <p className="lead">Mass</p>
                    </div>

                    <div className="detail-card shadow">
                        <h6 className="display-6">{person.gender}</h6>
                        <p className="lead">Gender</p>
                    </div>
                    <div className="detail-card shadow">
                        <h6 className="display-6">{homeworld.name}</h6>
                        <p className="lead">Homeworld</p>
                    </div>
                </div>
            </div>

            <div className="row" id="homeworld">
                <div className="homeworld my-2">
                    <p className="h_2">
                        <i className="fas fa-globe"></i>
                        Homeworld Info
                        <button
                            className="btn btn-outline-dark mx-5"
                            onClick={() => history.goBack()}
                        >
                            Back
                        </button>
                    </p>
                    <p className="h_2">
                        <i className="fas fa-map-marker-alt"></i>
                        {homeworld.name}
                    </p>
                </div>
            </div>

            <div className="row shadow" id="homeworld-details">
                <div className="col-6 col-sm-3">
                    <p className="lead">Rotation Period</p>
                    <p className="h_3">{homeworld.rotation_period}</p>
                </div>
                <div className="col-6 col-sm-3">
                    <p className="lead">Orbital Period</p>
                    <h6 className="h_3">{homeworld.orbital_period}</h6>
                </div>
                <div className="col-6 col-sm-3">
                    <p className="lead">Diameter</p>
                    <h6 className="h_3">{homeworld.diameter}</h6>
                </div>
                <div className="col-6 col-sm-3">
                    <p className="lead">Population</p>
                    <h6 className="h_3">{homeworld.population}</h6>
                </div>

                <div className="w-100 d-none d-md-block"></div>

                <div className="col-6 col-sm-3">
                    <p className="lead">Gravity</p>
                    <h6 className="h_3">{homeworld.gravity}</h6>
                </div>
                <div className="col-6 col-sm-3">
                    <p className="lead">Surface Water</p>
                    <h6 className="h_3">{homeworld.surface_water}</h6>
                </div>
                <div className="col-6 col-sm-3">
                    <p className="lead">Climate</p>
                    <h6 className="h_3">{homeworld.climate}</h6>
                </div>
                <div className="col-6 col-sm-3">
                    <p className="lead">Terrain</p>
                    <h6 className="h_3">{homeworld.terrain}</h6>
                </div>
            </div>
        </div>
    );
};

export default Details;
