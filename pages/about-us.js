import NavBar from '../components/NavBar/NavBar';
import Sections from '../components/Sections/Sections';
import StickToBottom from '../components/StickToBottom/StickToBottom';
import { FIRM_NAME, OPEN_DEMAT_LINK } from '../services/constants';
import Head from 'next/head';

const AboutUs = (props) => {
  const title = `About ${FIRM_NAME}`;
  const description = `Know more about services and team at ${FIRM_NAME}`;
  const sections = [
    {
      title: `What is ${FIRM_NAME}?`,
      details: `
            ${FIRM_NAME} is a comprehensive financial consulting firm that offers various finanacial services to help clients manage their investments more efficiently. With ${FIRM_NAME}'s financial services, clients can:<br />
            <br/>- <b>Open a Demat Account</b>: ${FIRM_NAME} offers a hassle-free process to open a demat account, which is necessary to hold and trade securities in India.
            <br />- <b>Lost Share Recovery</b>: ${FIRM_NAME} assists clients in recovering lost or unclaimed shares through the <b>Investor Education and Protection Fund (IEPF)</b>.
            <br /><br />In addition to its demat and trading services, ${FIRM_NAME} also offers a range of services to help clients achieve their financial goals. With a team of experienced professionals, ${FIRM_NAME} provides personalized and tailored solutions to suit individual needs.<br /><br />Some of the key services offered by ${FIRM_NAME} include:
            <br />- <b>Financial Planning</b>: ${FIRM_NAME} helps clients develop a holistic financial plan to achieve long-term financial stability and security.
            <br />- <b>Investment Management</b>: ${FIRM_NAME} provides expert investment advice and management services to help clients maximize returns and minimize risks.
            <br />- <b>Tax Planning</b>: ${FIRM_NAME} offers customized tax planning solutions to help clients optimize their tax liabilities and take advantage of available tax-saving opportunities.
            <br /><br />
            Whether you are an individual, family, or business, ${FIRM_NAME} can provide the guidance and support you need to achieve your financial objectives.`,
      cta: 'Get In Touch',
      ctaLink: '/contact-us',
      cardBorderClass: 'border-success',
      imageBgClass: 'text-bg-success',
      ctaBtnClass: 'btn-success',
    },
  ];
  return (
    <div className="main-container">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="/assets/images/demat-ac-services.jpeg"
        />
      </Head>
      <NavBar activeLink="aboutUs" />
      <h1 className="page-head">About Us</h1>
      <Sections sectionData={sections} />
      <StickToBottom ctaLink={OPEN_DEMAT_LINK} cta="Open Free Demat Account" />
    </div>
  );
};

export default AboutUs;
