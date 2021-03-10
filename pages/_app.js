import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  console.log("This is _app component");
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
