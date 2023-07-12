import React, { useState } from "react";
import "./ToggleNoteList.css";
import withToggle from "./withToggle";

function ToggleNoteList({ isShow, toggleHandler }) {
  return (
    <div className="toggle-container">
      <h3 className='text-warning text-center py-4'>using High Order Component (HOC) </h3>
      <button onClick={toggleHandler} className="btn btn-success mt-5">
        {isShow ? "-" : "+"}
      </button>
      {isShow && (
        <form action="#" className="form-toggle">
          <div className="form-group">
            <label htmlFor="Add New Note"></label>
            <input type="text" className="form-control" />
          </div>
          <button type="submit" className="btn btn-success mt-3">
            Add New Notes
          </button>
        </form>
      )}
    </div>
  );
}

export default withToggle(ToggleNoteList) 