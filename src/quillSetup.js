// src/quillSetup.js
import Quill from "quill";
if (typeof window !== "undefined") {
  window.Quill = Quill;
}
export default Quill;
