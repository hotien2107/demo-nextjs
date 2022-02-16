import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import freedom from "../../public/images/images.jpeg";

const Team = () => {
  return (
    <>
      <Head>
        <title>Team</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ul>
        <li>
          <Link href={`/team/${1}`}>Ngoc</Link>
        </li>
        <li>
          <Link href={`/team/${2}`}>Ly</Link>
        </li>
        <li>
          <Link href={`/team/${3}`}>Tien</Link>
        </li>
      </ul>
      <span>image in internet, size: 500 x 300</span>
      <Image
        src='https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg'
        alt='Picture of the author'
        width={500}
        height={300}
      />
      <span>image in assets, size: 500 x 300</span>
      <Image src={freedom} alt='Picture of the author' width={500} height={300} />
    </>
  );
};

export default Team;
