

import styles from "./Homepage.module.css";
// import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <div>
      {/* <PageNav /> */}
    <main className={styles.homepage}>
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps i nto every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
      </section>
    </main>
    </div>

  );
}