import NavBar from '../components/NavBar/NavBar';
import Sections from '../components/Sections/Sections';
import StickToBottom from '../components/StickToBottom/StickToBottom';
import { FIRM_NAME } from '../services/constants';
import Head from 'next/head';

const Iepf = (props) => {
  const title = `Recover Lost Shares with ${FIRM_NAME}`;
  const description = `Recover lost shares, open Free Demat A/C and look through other specialized services`;
  const sections = [
    {
      title: `What is IEPF and how to recover lost shares?`,
      details: `
            <b>IEPF: </b> The Investor Education and Protection Fund (IEPF) is a government initiative that safeguards the interests of investors. If shares are lost or unclaimed for a specified period, they are transferred to the IEPF. The IEPF then holds and manages these shares on behalf of the rightful owners, ensuring their protection and eventual return.<br />
            <br /><b>Recover Lost Shares from IEPF: </b>${FIRM_NAME} assists clients in recovering lost or unclaimed shares through the <b>Investor Education and Protection Fund (IEPF)</b>.
            <br /><br /><b>If you have queries like: </b>
            <br />- How to claim / Procedure / Process to claim shares and dividend from IEPF for a deceased person??
            <br />- How to check shares with IEPF?
            <br />- How to resolve IEPF Login / register problems?
            <br />- How to know about <b>indemnity bond</b> for IEPF?
            <br />- What is IEPF delay / turnaround time?
            <br />- How to dematerialize physical shares and certificates?
            <br />- How to transfer shares with or without succession certificate?
            <br />- How to file IEPF 5 online?
            <br /><b>${FIRM_NAME}</b> is here to help you out. 
            <br /><br />WhatsApp on our helpline <a href="https://wa.me/919081038865" className="icon-link icon-link-hover" target="_blank">+91-9081038865</a> to chat with our authorised IEPF practitioner and get your queries resolved.
            `,
      cta: 'Get In Touch',
      ctaLink: '/contact-us',
      cardBorderClass: 'border-warning',
      imageBgClass: 'text-bg-warning',
      ctaBtnClass: 'btn-warning',
    },
  ];
  return (
    <div className="main-container iepf-main-page">
      <NavBar activeLink="iepf" />
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
      <h1 className="page-head">Recover Lost Shares From IEPF</h1>
      <Sections sectionData={sections} />
      <StickToBottom
        cta="Get In Touch"
        target="_self"
        ctaLink="/contact-us"
        ctaClass="btn-warning"
      />
    </div>
  );
};

export default Iepf;
