import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  return (
    <div>
      <div className="sweet-loading">
        <HashLoader color="#000" loading={loading} css={override} size={80} />
      </div>
    </div>
  );
}

export default Loader;
