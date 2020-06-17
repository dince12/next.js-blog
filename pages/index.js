import Head from 'next/head';
import Link from "next/dist/client/link";
import {getSortedPostsData} from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import styles from "../components/layout.module.scss";
import Layout, {siteTitle} from '../components/layout';

// Load data from file system, represents async, fetching ect..
// This is static and done at build time, not recalled often.

// For now we will read posts from file system, this is aimed
// to be replaced for a db down the line or cms.
export async function getStaticProps() {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData
        }
    }
}

// Takes argument from above async and passes in the response
export default function Home({allPostsData}) {
    const name = 'SpaceX tech-report';
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <header className={styles.header}>
                <h2 className={utilStyles.headingLg}>
                    <Link href="/">
                        <a className={utilStyles.colorInherit}>{name}</a>
                    </Link>
                </h2>
                <>
                    <img
                        src="/images/rocket.png"
                        className={`${styles.headerHomeImage} ${styles.bannerImg} ${utilStyles.borderCircle}`}
                        alt={name}
                    />
                </>
            </header>
            <section className={utilStyles.headingMd}>
                <p className={utilStyles.centerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam consectetur elit odio, a dignissim mauris ultrices vitae. Cras eget velit vel mauris
                    fringilla ultrices. Nam tempus lacinia elit, nec lobortis metus viverra quis. Ut laoreet
                    lobortis sapien sed bibendum. Quisque ullamcorper et sapien ac faucibus. Vestibulum felis nisi,
                    aliquam id neque vel, mollis vestibulum nulla. Nullam id porttitor lacus. Cras aliquam gravida
                    vehicula. Integer odio ligula, consequat in mollis eu, scelerisque nec dolor. Mauris vitae mi
                    at nulla bibendum condimentum quis non magna. Nunc tincidunt consectetur mauris, ut semper erat.
                    Duis tellus leo, rutrum at placerat at, molestie in mi. Quisque volutpat eu ex nec dapibus.
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Topics</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            {title}
                            <br/>
                            {id}
                            <br/>
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}