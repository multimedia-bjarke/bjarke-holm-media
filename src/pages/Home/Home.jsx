import styles from "./Home.module.css";

export default function Home() {
  return (
    <section>
      <h1>Home Page</h1>
      <p className={styles.paragraph}>Home is where the heart is 💛</p>
      <p>Oh My, sounds like a bad movie!</p>
    </section>
  );
}
