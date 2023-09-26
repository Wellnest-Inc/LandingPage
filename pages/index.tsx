import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wellnest, Inc.</title>
        <meta name="description" content="Playful apps." />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Wellnest, Inc.
        </h1>

        <p className={styles.description}>
          We build <b>playful</b>, <b>social</b> apps.{' '}
        </p>

        <div className={styles.grid}>
          <a href="https://slingshot.camera" className={styles.card}>
            <h2>Slingshot &rarr;</h2>
            <p>Pull down and release to sling cute shots to friends.</p>
          </a>
          <a href="https://lockparty.me" className={styles.card}>
            <h2>LockParty &rarr;</h2>
            <p>Beautiful, live photo grids on your Lock Screen.</p>
          </a>
          <a href="https://cutouts.me" className={styles.card}>
            <h2>Cutouts &rarr;</h2>
            <p>Snap and drag pictures into iMessage.</p>
          </a>

          <a href="https://sideline.so" className={styles.card}>
            <h2>Sideline &rarr;</h2>
            <p>Supercharged Reddit game threads.</p>
          </a>

          <a
            href="https://twitter.com/tommysearle/status/1451244788053803010?s=20&t=jzq3fBf4r4DR3Jhy2zlexw"
            className={styles.card}
          >
            <h2>Licks &rarr;</h2>
            <p>Layer and collab audio tracks on your phone.</p>
          </a>

          <a
            href="https://twitter.com/tommysearle/status/1458155452840103939?s=20&t=jzq3fBf4r4DR3Jhy2zlexw"
            className={styles.card}
          >
            <h2>Ponchi &rarr;</h2>
            <p>
              A social, tamagotchi-style pet you feed by walking. 
            </p>
          </a>

          <a
            href="https://wellnestworld.netlify.app/"
            className={styles.card}
          >
            <h2>Wellnest World &rarr;</h2>
            <p>
              Use flowers to plant journal entries on an island.
            </p>
          </a>

          <a
            href="https://apps.apple.com/us/app/wellnest-self-care-journal/id1492773698"
            className={styles.card}
          >
            <h2>Wellnest v1 &rarr;</h2>
            <p>
              A playful mindfulness journal with prompts.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          Made with ❤️‍🔥 in San Francisco.
      </footer>
    </div>
  )
}
