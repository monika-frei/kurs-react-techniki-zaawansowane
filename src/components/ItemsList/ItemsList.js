import React, { Component } from "react";
import styles from "./ItemsList.module.scss";
import cx from "classnames";
import withCollapse from "../../hoc/withCollapse";

const items = ["Docs-1", "Docs-2", "Docs-3", "Docs-4", "Docs-5"];

const ItemsList = ({ isCollapsed, toggle }) => {
  const listClass = cx(styles.list, {
    [styles.isCollapsed]: isCollapsed,
  });
  return (
    <div>
      <button className="button is-dark is-large" onClick={toggle}>
        Collapse
      </button>
      <ul className={listClass}>
        {items.map((item, index) => (
          <li className="notification is-primary" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withCollapse(ItemsList);
