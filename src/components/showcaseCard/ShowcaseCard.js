import React from "react";
import { Fade } from "react-reveal";
import "./ShowcaseCard.css";

export default function ShowcaseCard({ project, theme }) {
  const open = (url) => {
    if (!url) return;
    const win = window.open(url, "_blank");
    if (win && win.focus) win.focus();
  };

  const resolveImageSrc = () => {
    const provided = (project?.image || "").trim();
    if (!provided) return ""; // no image
    if (provided.startsWith("http")) return provided;
    try {
      return require(`../../assests/images/${provided}`);
    } catch (_e) {
      return "";
    }
  };
  const imageSrc = resolveImageSrc();

  return (
    <div className="showcase-card">
      <Fade bottom duration={1000} distance="24px">
        <div className="showcase-inner" onClick={() => open(project.link)}>
          <div className="showcase-topband" />
          {imageSrc ? (
            <div className="showcase-media">
              <img
                className="showcase-image"
                src={imageSrc}
                alt={project.name}
              />
            </div>
          ) : null}
          <div className="showcase-header">
            <div className="showcase-titles">
              <h3 className="showcase-title" style={{ color: theme.text }}>
                {project.name}
              </h3>
              <div className="showcase-meta">
                {project.role ? (
                  <span
                    className="showcase-role"
                    style={{ color: theme.secondaryText }}
                  >
                    {project.role}
                  </span>
                ) : null}
                {project.period ? (
                  <span
                    className="showcase-period"
                    style={{ color: theme.secondaryText }}
                  >
                    {project.period}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
          {project.summary && (
            <p className="showcase-summary" style={{ color: theme.text }}>
              {project.summary}
            </p>
          )}
          {project.highlights?.length ? (
            <ul className="showcase-highlights">
              {project.highlights.map((h, i) => (
                <li key={i} style={{ color: theme.text }}>
                  {h}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="showcase-tags">
            {project.tech?.map((t, i) => (
              <span
                key={`tech-${i}`}
                className="tag"
                style={{ borderColor: theme.text, color: theme.text }}
              >
                {t}
              </span>
            ))}
            {project.skills?.map((s, i) => (
              <span
                key={`skill-${i}`}
                className="tag"
                style={{ borderColor: theme.text, color: theme.text }}
              >
                {s}
              </span>
            ))}
          </div>
          {project.link ? (
            <button
              className="showcase-link"
              onClick={() => open(project.link)}
            >
              View Project
            </button>
          ) : null}
        </div>
      </Fade>
    </div>
  );
}
