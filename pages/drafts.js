import React from "react";

export default function Drafts() {
  // TODO: Load saved drafts from local storage or a database
  const savedDrafts = [];

  return (
    <div>
      <h1>Saved Drafts</h1>
      {savedDrafts.length === 0 ? (
        <p>No saved drafts yet</p>
      ) : (
        <ul>
          {savedDrafts.map((draft) => (
            <li key={draft.id}>
              <a href={`/drafts/${draft.id}`}>{draft.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
