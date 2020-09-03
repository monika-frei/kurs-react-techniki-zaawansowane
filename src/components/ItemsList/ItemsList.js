import React from "react";
import styles from "./ItemsList.module.scss";
import cx from "classnames";
import Collapse from "../../providers/Collapse";

const items = ["Docs-1", "Docs-2", "Docs-3", "Docs-4", "Docs-5"];

const ItemsList = () => {
  const listClass = (data) =>
    cx(styles.list, {
      [styles.isCollapsed]: data,
    });
  return (
    <Collapse
      render={({ isCollapsed, toggle }) => (
        <div>
          <button className="button is-dark is-large" onClick={toggle}>
            Collapse
          </button>
          <ul className={listClass(isCollapsed)}>
            {items.map((item, index) => (
              <li className="notification is-primary" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    ></Collapse>
  );
};

export default ItemsList;
