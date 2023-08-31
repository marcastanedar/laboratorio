import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div>
          <h1>
            <span>
              Hello<span className={styles.yellowText}>.</span>
            </span>
            <br />
            <span>
              <span>I am</span>
            </span>
            <br />
            <span>Josh Carlson</span>
          </h1>
        </div>
      </header>
      <section className={styles.infoSection}>
        <img
        src="/la joven de la perla2.jpg"
        alt="Imagen"
        className={styles.image}
        >
        </img>
        <div className={styles.infoContainer}>
          <span className={styles.title + " " + styles.yellowText}>Josh</span>
          <br/>
          <span className={styles.title}>Carlson</span>
          <div className={styles.list}>
            <ul>
              <li>
                <span className={styles.grayText}>Age: </span>27
              </li>
              <li>
                <span className={styles.grayText}>Nationality: </span>German
              </li>
              <li>
                <span className={styles.grayText}>Skill set: </span>proyect Managment and financial performance
              </li>
              <li>
                <span className={styles.grayText}>Languages: </span>English, German
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
