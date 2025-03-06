import styles from "../styles/not-found.module.scss";
import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body>
        <main className={styles.notfound}>
          <div className={styles.notfound__main}>
            <div className={styles.notfound__main__message}>
              <h2 className={styles.notfound__main__message__header}>
                Page Not Found
              </h2>
              <Link className={styles.notfound__main__message__link} href="/">
                Click to go to the homepage
              </Link>
            </div>
          </div>
          <aside className={styles.notfound__aside}></aside>
        </main>
      </body>
    </html>
  );
}
