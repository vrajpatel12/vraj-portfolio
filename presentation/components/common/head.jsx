import Head from 'next/head'
import { WHOLE_LOGO } from '../../../utils/images-url'
import { HOME_META } from '../../../utils/meta-page-url'
import { DESC, TITLE, TWITTER, WEBSITE_NAME } from '../../../utils/meta-tags'

const  MyHead = ({title=TITLE,desc=DESC,url="https://vraj-portfolio.vercel.app"+WHOLE_LOGO,type="website",weburl=HOME_META})=> {
  return (
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="apple-mobile-web-app-title" content={title} />

        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={url} />
        <meta property="og:image:alt" content={title} />
        <meta property="og:url" content={weburl} />
        <meta property="og:site_name" content={WEBSITE_NAME} />

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={desc}/>
        <meta name="twitter:site" content={TWITTER}/>
        <meta name="twitter:image" content={url}/>
        <meta property="twitter:image:alt" content={title} />
        <meta name="twitter:creator" content={TWITTER}/>
      </Head>
  )
}

export default MyHead