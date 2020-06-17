import Head from 'next/head';

import Link from "next/dist/client/link";
import Date from '../../components/date';

import Layout from '../../components/layout';
import Button from '../../components/button';

import utilStyles from '../../styles/utils.module.css';
import styles from "../../components/layout.module.scss";

import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <article className={`${styles.container} ${styles.vmt}`}>
                    <div className={styles.spacing}>
                        <div className={`${utilStyles.lightText}`}>
                            <span>Author: {postData.author}</span>
                            <Date dateString={postData.date}/>
                        </div>
                        <div className={styles.splitter}>
                            {/* ... */}
                        </div>
                    </div>
                    <h1 className={`${utilStyles.headingXl} ${styles.headerFont}`}>{postData.title}</h1>
                    <div className={styles.pText} dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
                    <div className={` ${styles.splitter} ${styles.paddingTop}`}>
                        {/* ... */}
                    </div>
                </article>
            </article>
            <article className={`${styles.containerLow} ${styles.mb}`}>
                <div className={styles.commentWrapper}>
                    <article className={`${styles.commentSection}`}>
                        <p>Comments coming soon...</p>
                    </article>
                </div>
            </article>
            <article className={`${styles.containerLow} ${styles.mb}`}>
                <Link href="/">
                    <div className={styles.spaceBetween}>
                        <Button actions={{ left: true, text: 'Back to home', link: '/' }}>Back to home</Button>
                        <Button actions={{ left: false, text: 'Share', link: '' }}>Share</Button>
                    </div>
                </Link>
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}