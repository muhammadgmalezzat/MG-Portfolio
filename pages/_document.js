import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;600;800;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,500;1,100;1,200;1,900&family=Oswald:wght@200;400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;600;800;900&family=La+Belle+Aurore&family=Montserrat:ital,wght@0,100;0,200;0,300;0,500;1,100;1,200;1,900&family=Oswald:wght@200;400;700&display=swap" rel="stylesheet" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
