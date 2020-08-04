import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { IMeta } from '../../utils/Interfaces';
import { defaultMeta } from '../../utils/StaticData';

interface IProps {
    children: React.ReactNode
    meta?: IMeta
}

const Main = ({ children, meta }: IProps) => {
    const { title, description, image, url } = meta || defaultMeta
    return (
        <>
            <Head>
            <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="height=device-height,width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <title>{ title || 'Cari unit Apartemen Disewakan - 8000+ Verified Listing | Jendela360'}</title>
                <meta name="google-site-verification" content="pccnFefLIY5MklKIk9BIdTGGAAC5LuRk2anu3QubeE0" />
                <meta name="description" content={description || 'Temukan 7414 unit apartemen 1BR/ 2BR/ 3BR disewakan di Jakarta, harga mulai dari 3.340.000x12bln. ✓12x cicilan, ✓360 virtual tour.'} />
                <meta name="ahrefs-site-verification" content="efd9c5385600fd8425f75d006f556b4b271b88e54d114502e7ef46ecbd1de335" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@jendela360" />
                <meta name="twitter:creator" content="@jendela360" />
                <meta property="fb:app_id" content="260180081106004" />
                <meta property="og:site_name" content="Jendela360" />
                <meta property="og:url" content={url || process.env.NEXT_PUBLIC_URL} />
                <meta property="og:title" content={title || 'Cari unit Apartemen Disewakan - 8000+ Verified Listing | Jendela360'} />
                <meta property="og:description" content={description || 'Temukan 7414 unit apartemen 1BR/ 2BR/ 3BR disewakan di Jakarta, harga mulai dari 3.340.000x12bln. ✓12x cicilan, ✓360 virtual tour.'} />
                <meta property="og:image" content={image || `${process.env.NEXT_PUBLIC_URL}/assets/images/default-thumbnail.jpg`} />
                <meta name="base_url" content={process.env.NEXT_PUBLIC_URL} />
                <meta name="_token" content="Fj60Ue3Gp0CGc9aPUUTQeT7XzeUyNyhZEAHohecS" />


                <link rel="canonical" href={url} />
                <link rel="alternate" hrefLang="id" href={url} />
                <link rel="alternate" hrefLang="en" href={url} />
                <link rel="alternate" hrefLang="x-default" href={url} />

                <meta name="mobile-web-app-capable" content="yes" />
                <link rel="shortcut icon" href={`${process.env.NEXT_PUBLIC_URL}/favicon.ico`} type="image/x-icon" />
                <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_URL}/assets/images/mobile-favicon.png`} />
                <link rel="apple-touch-icon" sizes="72x72" href={`${process.env.NEXT_PUBLIC_URL}/assets/images/mobile-favicon.png`} />
                <link rel="apple-touch-icon" sizes="114x114" href={`${process.env.NEXT_PUBLIC_URL}/assets/images/mobile-favicon.png`} />
                <link rel="apple-touch-icon" sizes="128x128" href={`${process.env.NEXT_PUBLIC_URL}/assets/images/mobile-favicon.png`} />

                <link rel="preconnect" href="https://www.google-analytics.com" />

                {/* Google Analytics */}
                {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${ process.env.NEXT_PUBLIC_TRACKING_ID }`}></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                        
                            gtag('config', '${ process.env.NEXT_PUBLIC_TRACKING_ID }');
                        `
                    }}
                /> */}
            </Head>
            <div>
                <Header />
                <div className={`min-h-screen`}>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Main