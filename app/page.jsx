
import styles from "./page.module.css";
import SocialButtons from "@/components/SocialButtons.jsx";

function Page() {
  const email = ["br34thesignal", "gmail.com"].join("@");
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>
            Hello...
            <br />
            I'm Nageline Vallon-Rodriguez
            <span className="glitch" data-text="Nageline">
              
            </span>
          </h1>
          <p className={styles.heroSubtitle}>
            Software Developer | Multimedia Artist
          </p>
         
        </div>
      </section>

      {/* <div className="scroll-spacer"></div> */}

      <section className={styles.about}>
        <div className={styles.aboutContainer}>
          <h2 className={styles.aboutTitle}>read_about.me</h2>
          <p className={styles.aboutDescription}>
            Call me Naj. <br /> <br /> I'm a curious CS grad that likes to try my hand at different things
            when it comes to computers. Whether it is tinkering with low level stuff, learning a new language,
            or utilizing some cool resources I've found, I enjoy connecting the dots and exploring new info. 
            <br /> <br /> I have a deep love and appreciation for the arts and humanities especially as it pertains
            to the role computers have in our lives and the ethical discourse surrounding modern day implementations.
            <br /> I also like to chat about it!
          </p>
          <a href={`mailto:${email}`} target = "_blank" rel="noopener noreferrer" className={styles.contactBtn}>
            contact.me
          </a>
          <SocialButtons />
        </div>
        <div className={styles.aboutImg}>
            <img
              src="/boobooboo2.jpg"
              alt="Nageline Vallon-Rodriguez"
              loading="lazy"
            />
          </div>
      </section>

      
    </>
  );
}

export default Page;
