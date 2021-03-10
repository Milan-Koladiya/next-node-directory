import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render () {
        console.log("Hello from _document");
        return <Html>
        <Head>
            <meta property="og:title" content="Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books &amp; More. Best Offers!"/><meta name="Keywords" content="Online Shopping in India,online Shopping store,Online Shopping Site,Buy Online,Shop Online,Online Shopping,Flipkart"></meta>
        </Head>
        <body>
        <Main>

        </Main>
        </body>
        <NextScript>

        </NextScript>
        </Html>
    }
} 

export default MyDocument