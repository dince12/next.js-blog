import Head from 'next/head';

import Link from "next/dist/client/link";
import Date from '../../components/date';

import Layout from '../../components/layout';
import Button from '../../components/button';

import utilStyles from '../../styles/utils.module.css';
import styles from "../../components/layout.module.scss";
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({postData}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <img src="https://images.unsplash.com/photo-1456154875099-97a3a56074d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" className={styles.hero}/>
                <article className={styles.container}>
                    <h1 className={`${utilStyles.headingXl} ${styles.headerFont}`}>{postData.title}</h1>
                    <div className={styles.spacing}>
                        <div className={ `${utilStyles.lightText} ${styles.headerFont}`}>
                            <Date dateString={postData.date}/>
                            <span>Sol {postData.sol}</span>
                        </div>
                        <div className={styles.splitter}></div>
                    </div>
                    <div className={styles.pText} dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
                    <div className={` ${styles.splitter} ${styles.paddingTop}`}></div>
                </article>
            </article>

            <article className={styles.container}>
                <Link href="/">
                    <div className={styles.spaceBetween}>

                        <Button actions={ {left: true, text: 'Back to home', link: '/'} }>Back to home</Button>
                        {/*<Button actions={ {left: false, text: 'Share', link: ''} } >Share</Button>*/}

                    </div>
                </Link>
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    // get all id's
    const paths = getAllPostIds();
    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}