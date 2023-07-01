import Link from 'next/link';
import NavBar from '../components/NavBar/NavBar';
import StickToBottom from '../components/StickToBottom/StickToBottom';
import { FIRM_NAME, OPEN_DEMAT_LINK, SERVICES } from '../services/constants';
import Head from 'next/head';

const Services = (props) => {
  const title = `Services offer by ${FIRM_NAME}`;
  const description = `IEPF services, demat services and various other services offered by ${FIRM_NAME}`;
  return (
    <div className="main-container">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/assets/images/iepf.jpeg" />
      </Head>
      <NavBar activeLink="services" />
      <h1 className="page-head">Our Services</h1>
      <div className="row services">
        {SERVICES.map((s) => (
          <div className="col-sm-6" key={s.key}>
            <div className={`card ${s.cardBorderClass}`}>
              <div className="card-header">
                <h5>{s.title}</h5>
              </div>
              <Link href={s.link || '#'}>
                <img
                  src={s.imageUrl || 'http://via.placeholder.com/640x360'}
                  className="card-img-top"
                  alt={s.title}
                />
              </Link>
              <div className="card-body">
                <p
                  className="card-text"
                  dangerouslySetInnerHTML={{ __html: s.details }}
                />
                {s.link && (
                  <Link href={s.link} className="icon-link">
                    {s.cta || 'View More'}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <StickToBottom
        ctaLink={OPEN_DEMAT_LINK}
        cta="Open Free Demat Account"
        ctaClass="btn-info"
      />
    </div>
  );
};

export default Services;
