import React from "react";
import Downshift from "downshift";
import cx from "classnames";

const items = [
  { value: "apple" },
  { value: "pear" },
  { value: "orange" },
  { value: "grape" },
  { value: "banana" },
];

function Patterns() {
  return (
    <Downshift>
      {({
        isOpen,
        inputValue,
        getInputProps,
        getMenuProps,
        getItemProps,
        selectedItem,
      }) => (
        <div
          className={cx("dropdown", {
            "is-active": isOpen,
          })}
        >
          <input
            className="input"
            type="text"
            placeholder="Text input"
            {...getInputProps()}
          ></input>
          <div className="dropdown-menu">
            <div className="dropdown-content" {...getMenuProps()}>
              {items
                .filter(({ value }) => value.includes(inputValue))
                .map(({ value }, index) => (
                  <button
                    className={cx("dropdown-item", "button", "is-white", {
                      "is-active": value === selectedItem,
                    })}
                    key={value}
                    {...getItemProps({
                      key: value,
                      index,
                      item: value,
                    })}
                  >
                    {value}
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}
    </Downshift>
  );
}

export default Patterns;
