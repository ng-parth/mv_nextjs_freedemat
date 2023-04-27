import Carousel from "../components/Carousel/Carousel";
import NavBar from "../components/NavBar/NavBar"
import Sections from "../components/Sections/Sections";
import Head from "next/head";

function HomePage() {
    return <div className="main-container">
        <Head>
            <title>Welcome To Free Demat A/C & Services</title>
            <meta name="description" content="Open Free Demat A/C and look through other specializaed servcices" key="desc" />
            <meta property="og:title" content="Free Demat A/C & Services" />
            <meta
            property="og:description"
            content="Open Free Demat A/C and look through other specializaed servcices"
            />
            <meta
            property="og:image"
            content="https://example.com/images/cool-page.jpg"
            />
        </Head>
        <NavBar />
        <Carousel />
        <Sections />
    </div>
  }
  
  export default HomePage
