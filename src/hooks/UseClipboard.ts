import { useState } from "react";

type UseClipboard = {
  clipboardData: ClipboardItems;
  pasteFromClipboard: () => void;
};

const useClipboard = (): UseClipboard => {
  const [clipboardData, setClipboardData] = useState<ClipboardItems>([]);

  const pasteFromClipboard = () => {
    navigator.clipboard
      .read()
      .then((text) => setClipboardData(text))
      .catch((err) => console.error("Error pasting text from clipboard:", err));
  };

  return { clipboardData, pasteFromClipboard };
};

export default useClipboard;
