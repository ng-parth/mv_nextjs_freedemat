import NavBar from '../components/NavBar/NavBar';
import Sections from '../components/Sections/Sections';
import { FIRM_NAME } from '../services/constants';

const AboutUs = (props) => {
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
      <NavBar activeLink="aboutUs" />
      <h1 className="page-head">About Us</h1>
      <Sections sectionData={sections} />
    </div>
  );
};

export default AboutUs;
