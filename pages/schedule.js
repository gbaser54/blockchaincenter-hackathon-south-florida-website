import next from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';

const schedule = () => {
    return(

    <>
    <Head>
        <title>Schedule</title>
        <meta name="description" content="Generated by create next app" />
        <link href='https://fonts.googleapis.com/css?family=Work Sans' rel='stylesheet'></link>
    </Head>
    <Navbar />
     <div className={styles.Schedule}>
            <div className={styles.Scheduleheading} id="schedule">
                Schedule
            </div>

            <div className={styles.Schedulepara}>
                Bring developers, analysts, and designers
                together to build financial projects
            </div>


            <div className={styles.schedulepart}>
                <div className={styles.schedulepartinfo}>
                    <div className={styles.date}>
                        Thu,Jun 23rd
                    </div>
                    <div className={styles.time}>
                        2:00 pm EDT
                    </div>
                    <div className={styles.duration}>
                        (duration comes here - (30 minutes))
                    </div>
                </div>
                <div className={styles.blank}>
                    <input type="text" placeholder="Topics comes here"></input>
                </div>

            </div>

            <div className={styles.schedulepart}>
                <div className={styles.schedulepartinfo}>
                    <div className={styles.date}>
                        Thu,Jun 23rd
                    </div>
                    <div className={styles.time}>
                        2:00 pm EDT
                    </div>
                    <div className={styles.duration}>
                        (duration comes here - (30 minutes))
                    </div>
                </div>
                <div className={styles.blank}>
                    <input type="text" placeholder="Topics comes here"></input>
                </div>
            </div>

        </div><div className={styles.prizes}>

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

    export default schedule;