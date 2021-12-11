import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("");

  const onClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const onClickl = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const onFlick = () => {
    // let str = text;
    var splitStr = text.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    setText(splitStr.join(" "));
  };

  const onClear = () => {
    setText("");
  };
  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container mt-5"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <textarea
          className="form-control"
          placeholder="Enter the text here"
          id="floatingTextarea"
          onChange={onChange}
          value={text}
          rows="14"
          style={{
            backgroundColor: props.mode === "dark" ? "gray" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>

        <div className=" d-md-block mt-3">
          <button
            className="btn btn-primary me-2 my-1"
            onClick={onClick}
            type="button"
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary me-2 my-1"
            onClick={onClickl}
            type="button"
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary me-2 my-1"
            onClick={onFlick}
            type="button"
          >
            Convert to First letter to Uppercase
          </button>
          <button
            className="btn btn-primary my-1"
            onClick={onClear}
            type="button"
          >
            Clear
          </button>
        </div>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <span style={{ fontSize: 25 }}>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }
          </span>{" "}
          Words and <span style={{ fontSize: 25 }}>{text.length}</span>{" "}
          Characters
        </p>
      </div>
    </>
  );
}
