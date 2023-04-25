import Head from "next/head";
import Header from "../Header";

const Layout = ({ children, imageURL, title, description }) => {
  return (
    <>
      <Head>
        <title>Milieu kissing children</title>
        <meta
          name="description"
          content={
            description
              ? description
              : "I love children"
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="twitter:image"
          content={
            imageURL
              ? imageURL
              : "https://media.discordapp.net/attachments/1059410777473286174/1061642318349869066/Slide_16_9_-_14.png"
          }
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <div>
        <Header />
        <div id={"content"}>
        {children}
        </div>
      </div>
    </>
  );
};

export default Layout;