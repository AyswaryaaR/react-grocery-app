import { useState } from "react";

const CopyPaste = () => {
  const [clipboardData, setClipboardData] = useState<string>("");

  const handleCopy = () => {
    navigator.clipboard
      .writeText("Text to copy")
      .then(() => console.log("Text copied successfully"))
      .catch((err) => console.error("Error copying text: ", err));
  };

  const handlePaste = () => {
    navigator.clipboard
      .readText()
      .then((text) => setClipboardData(text))
      .catch((err) => console.error("Error pasting text: ", err));
  };

  return (
    <div>
      <button onClick={handleCopy}>Copy Text</button>
      <button onClick={handlePaste}>Paste Text</button>
      <div>
        <textarea
          value={clipboardData}
          onChange={(e) => setClipboardData(e.target.value)}
          placeholder="Paste here"
          cols={30}
          rows={10}
        />
      </div>
    </div>
  );
};

export default CopyPaste;
