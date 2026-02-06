"use client";
import "./Card.css";
import { useState } from "react";
import { motion } from "motion/react";

export default function Card({
  title,
  media = [],
  date,
  topics,
  description,
  link,
  delay,
}) {
  const [mediaLoaded, setMediaLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMedia = Array.isArray(media) && media.length > 0;
  const isReady = !hasMedia || mediaLoaded;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={isReady ? { opacity: 1, y: 0 } : {}}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
    >
      <div className="card">
        <h3>{title}</h3>
         <div className="media-viewer">
          {hasMedia &&( 
            <img
              src={media[activeIndex].src}
              alt={title}
              loading="lazy"
              onLoad={() => setMediaLoaded(true)}
            />
          )}
        </div>
        <p className="subtext"> {date}</p>
        <p>Topics: {topics.join(", ")}</p>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
          View on GitHub
        </a>

      </div>
    </motion.div>
  );
}
