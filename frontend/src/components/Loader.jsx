import { useEffect, useState } from "react";
import "../styles/loader.css";

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (!loading) return null;

  return (
    <div id="loader">
      <div className="spinner"></div>
    </div>
  );
}

export default Loader;