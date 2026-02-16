import styles from "./page.module.css";
import Card from "@/components/Card.jsx";
import {listProjects} from "@/lib/github";

export const revalidate = 600;

export default async function Projects() {
  const projects = (await listProjects());
  return (
    <>
      <section className={styles.projectsSection}>
        <header className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>process_my.projects</h1>
          <p className={styles.sectionDescription}>
            Here are some of my recent projects.
          </p>
        </header>
        <div>
          {projects.map((p, i) => (
           
            <Card
              key={p.id}
              title={p.title}
              media={p.media}
              description={p.description}
              date={p.date}
              topics={p.topics}
              link={p.html_url}
              delay={i * 0.1}
            />
          ))}

        </div>
      </section>
      <section className={styles.moreProjectsSection}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>find_more.projects</h2>
          <p className={styles.sectionDescription}>
            Check out my 
            <a href = "https://github.com/nagev-r" target = "_blank" rel="noopener noreferrer"> github </a> 
            for more cool stuff.
          </p>
        </header>
      </section>
    </>
  );
}
