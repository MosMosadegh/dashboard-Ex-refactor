import React from "react";
import { memo } from "react";

const FilteredNotes = memo(({ notesArray }) => {
  console.log("FilteredNotes Run");
  return (
    <>
      {notesArray
        .filter((note) => {
          console.log("FilterRun");
          return note.title.toLowerCase().includes("js");
        })
        .map((note) => (
          <div key={note.id}>
            <li>
              {note.id} - {note.title}
            </li>
          </div>
        ))}
    </>
  );
});

export default FilteredNotes;
