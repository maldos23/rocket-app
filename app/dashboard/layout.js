import styles from "./styles.module.css";

export default function Layout({ children, search, account, navbar }) {
  return (
    <>
      <div className={styles.grid}>
        <nav className={styles.navbar}>{navbar}</nav>
        <section className={styles.container}>
          <div className={styles.appbar}>
            <h2 className={styles.productTitle}>Productos</h2>
            {search}
            {account}
          </div>
          <div>{children}</div>
        </section>
      </div>
    </>
  );
}
