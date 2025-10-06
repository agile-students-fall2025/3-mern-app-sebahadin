import React, { useEffect, useState } from "react";
import "./About.css";

export default function About() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const API = process.env.REACT_APP_API_URL || "http://localhost:5002";
    fetch(`${API}/about`)
      .then(r => (r.ok ? r.json() : Promise.reject(r.statusText)))
      .then(setData)
      .catch(setErr);
  }, []);

  if (err) return <main className="about">Failed to load About.</main>;
  if (!data) return <main className="about">Loading…</main>;

  return (
    <main className="about">
      <div className="about-container">
        <img
          src={data.image}
          alt={data.name}
          className="about-image"
        />
        <h2 className="about-name">{data.name}</h2>
        {data.paragraphs.map((p, i) => (
          <p key={i} className="about-paragraph">{p}</p>
        ))}
      </div>
    </main>
  );
}
