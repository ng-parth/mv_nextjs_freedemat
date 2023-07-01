import Carousel from '../components/Carousel/Carousel';
import NavBar from '../components/NavBar/NavBar';
import Sections from '../components/Sections/Sections';
import Head from 'next/head';
import StickToBottom from '../components/StickToBottom/StickToBottom';
import { FIRM_NAME, OPEN_DEMAT_LINK } from '../services/constants';

function HomePage() {
  return (
    <div className="main-container">
      <Head>
        <title>Welcome To {FIRM_NAME}</title>
        <meta
          name="description"
          content="Open Free Demat A/C and look through other specialized services"
          key="desc"
        />
        <meta property="og:title" content="Free Demat A/C & Services" />
        <meta
          property="og:description"
          content="Open Free Demat A/C and look through other specializaed servcices"
        />
        <meta
          property="og:image"
          content="/assets/images/demat-ac-services.jpeg"
        />
      </Head>
      <NavBar />
      <Carousel />
      <Sections />
      <StickToBottom ctaLink={OPEN_DEMAT_LINK} cta="Open Free Demat Account" />
    </div>
  );
}

export default HomePage;
