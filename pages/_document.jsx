import Document, { Html, Head, Main, NextScript } from 'next/document'
import { APPLE, FAVICON, LOGO_16, LOGO_192, LOGO_32, LOGO_512 } from '../utils/images-url'
import { AUTHER, WEBSITE_NAME } from '../utils/meta-tags'

class MyDocument extends Document {
  
  render() {
    return (
      <Html lang="en">
        <Head>
        <meta charSet="utf-8"/>
        <meta name="author" content={AUTHER}/>
        <meta name="application-name" content={WEBSITE_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        <link rel="icon" href={FAVICON} />
        <link rel="icon" type="image/png" sizes="16x16" href={LOGO_16} />
        <link rel="icon" type="image/png" sizes="32x32" href={LOGO_32} />
        <link rel="icon" type="image/png" sizes="192x192" href={LOGO_192} />
        <link rel="icon" type="image/png" sizes="512x512" href={LOGO_512} />
        <link rel="apple-touch-icon" href={APPLE} />
        <link rel="mask-icon" href={LOGO_192} color="#5bbad5" />
        <link rel="shortcut icon" href={FAVICON} />

        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="msapplication-TileImage" content={LOGO_192} />
        <meta name="theme-color" content="#ffffff" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument