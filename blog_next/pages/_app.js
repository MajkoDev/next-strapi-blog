import NavBar from "../components/Navbar";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;