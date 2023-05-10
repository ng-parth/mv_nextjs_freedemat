import NavBar from "../components/NavBar/NavBar";
import { SERVICES } from "../services/constants";

const Services = props => {
    return <div className="main-container">
        <NavBar activeLink="services" />
        <h1 className="page-head">Our Services</h1>
        <div className="row services">
            {
                SERVICES.map(s => <div className="col-sm-6" key={s.key}>
                    <div className={`card ${s.cardBorderClass}`}>
                        <div className="card-header"><h5>{s.title}</h5></div>
                        <img src="http://via.placeholder.com/640x360" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text" dangerouslySetInnerHTML={{__html: s.details}} />
                        </div>
                    </div>
            </div>)
            }
            </div>
    </div>
}

export default Services;
