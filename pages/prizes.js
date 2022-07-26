import next from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';

const prizes = () => {
    return(
    <>
    <Head>
        <title>Prizes</title>
        <meta name="description" content="Generated by create next app" />
        <link href='https://fonts.googleapis.com/css?family=Work Sans' rel='stylesheet'></link>
      </Head>
     <Navbar />
     <div className={styles.prizes}>

<div className={styles.Scheduleheading} id="prices">
  Prizes
</div>

<div className={styles.Schedulepara}>
Bring developers, analysts, and designers
together to build financial projects
</div>

</div></>


    );
    }

    export default prizes;