import React, { useState } from "react";
import upArrow from "../../assets/assets/uparrow.jpg";
import rightarrowdrop from "../../assets/assets/dropdownright.jpg";

import "../../styles/dropdown.css";

const Dropdown = ({ title, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="filter-section">
            <div onClick={() => setOpen(!open)} className="dropdown-header">
                <h2 className="filter-title">{title}</h2>
                <img
                    src={open ? upArrow : rightarrowdrop}
                    alt="toggle arrow"
                />
            </div>
            <div
                className={`dropdown-content-wrapper ${open ? "open" : ""}`}
            >
                <div className="dropdown-content">{children}</div>
            </div>
        </div>
    );
};

export default Dropdown;
