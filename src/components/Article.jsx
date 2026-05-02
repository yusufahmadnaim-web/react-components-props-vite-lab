import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const minutesLabel = minutes ? `${minutes} min read` : null;
  const readingEmoji = minutes ? getReadingEmoji(minutes) : null;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {minutesLabel ? (
        <small>
          {readingEmoji} {minutesLabel}
        </small>
      ) : null}
      <p>{preview}</p>
    </article>
  );
}

function getReadingEmoji(minutes) {
  if (minutes < 30) {
    const cups = Math.max(1, Math.ceil(minutes / 5));
    return "☕️".repeat(cups);
  }
  const bentos = Math.max(1, Math.ceil(minutes / 10));
  return "🍱".repeat(bentos);
}

export default Article;
