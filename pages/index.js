import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'

import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'

// Load data from file system, represents async, fetching ect..
// This is static and done at build time, not recalled often.
export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}

// Takes argument from above async and passes in the response
export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{ siteTitle }</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p className={utilStyles.centerText}>My specialist area of interest is web development and bridging the gap between high complexity
                    systems and the average user. Currently working mainly with JavaScript based technologies including
                    NodeJS and Typescript within the Angular framework to make truly cutting edge, high functioning
                    web applications, really enjoying learning new design principles along the way.
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Topics</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}