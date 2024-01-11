import React, { memo, useState } from "react";
import { Handle, Position } from "reactflow";

const cards = (
  <div style={{ border: "1px solid red" }}>
    <div style={{ border: "1px solid red" }}>
      <div style={{ display: "flex" }}>
        {Array.from(new Array(6), (_, i) => (
          <div key={i}>
            <div>cards:</div>
            <img src="/smile.png" />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", overflow: "hidden" }}>
        {Array.from(new Array(6), (_, i) => (
          <div key={i}>
            <div>cards:</div>
            <img src="/234.jpeg" width={20} height={20} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        {Array.from(new Array(6), (_, i) => (
          <div key={i}>
            <div>cards:</div>
            <img src="/smile.png" />
          </div>
        ))}
      </div>
      <div style={{ display: "none", overflow: "hidden" }}>
        {Array.from(new Array(20), (_, i) => (
          <div key={i}>
            <div>cards:</div>
            <img src="/234.jpeg" width={20} height={20} />
          </div>
        ))}
      </div>
      <div style={{ display: "none" }}>
        {Array.from(new Array(20), (_, i) => (
          <div key={i}>
            <div>cards:</div>
            <img src="/smile.png" />
          </div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        {Array.from(new Array(6), (_, i) => (
          <div key={i}>
            <div>cards:</div>
            <img src="/smile.png" />
          </div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        {Array.from(new Array(6), (_, i) => (
          <div key={i}>
            <div>cards:</div>
            <img src="/smile.png" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default memo(({ data, isConnectable }) => {
  const [text, setText] = useState();

  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => alert("alert")}>Button</button>
      <div>
        Custom Color Picker Node: <strong>{data.color}</strong>
      </div>
      <input
        className="nodrag"
        type="color"
        onChange={data.onChange}
        defaultValue={data.color}
      />
      {cards}
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 10, background: "#555" }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ bottom: 10, top: "auto", background: "#555" }}
        isConnectable={isConnectable}
      />
    </>
  );
});
