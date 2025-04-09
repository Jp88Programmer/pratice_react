import axios from "axios";
import React, { useState } from "react";
import DomainItem from "./DomainItem";
// const NAMELIX_URL = "https://namelix.com/app/load2.php";
// const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";
const localUrl = "http://localhost:3002/proxy";
const DomainSugg = () => {
  const [keyword, setKeyword] = useState("");
  const [styles, setStyles] = useState("");
  const [lengths, setLengths] = useState("");
  const [domainNames, setDomainNaes] = useState([]);
  const [isLoading, setIsLoding] = useState(false);

  const handleSelectChange = (event) => {
    setStyles(event.target.value);
  };
  const handleSelectLengthChange = (event) => {
    setLengths(event.target.value);
  };

  async function getDomainSuggestion() {
    setDomainNaes([]);
    const postData = {
      keywords: keyword,
      styles: styles,
      lengths: lengths,
    };

    console.log(
      "🚀 ~ file: DomainSugg.jsx:27 ~ getDomainSuggestion ~ postData:",
      postData
    );
    try {
      setIsLoding(true);
      const response = await axios.post(localUrl, postData);
      console.log(
        "🚀 ~ file: DomainSugg.jsx:23 ~ getDomainSuggestion ~ response:",
        response
      );
      setDomainNaes(response?.data);
      setIsLoding(false);
    } catch (error) {
      console.log(
        "🚀 ~ file: DomainSugg.jsx:41 ~ getDomainSuggestion ~ error:",
        JSON.stringify(error)
      );
      setIsLoding(false);
    }
  }
  return (
    <div>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <select id="dropdown" value={styles} onChange={handleSelectChange}>
        <option value="brandable">Brandable</option>
        <option value="multiword">Multiword</option>
        <option value="wordmix">Wordmix</option>
      </select>
      <select id="dropdown" value={lengths} onChange={handleSelectLengthChange}>
        <option value="short">short</option>
        <option value="medium">medium</option>
        <option value="long">long</option>
      </select>
      <button onClick={getDomainSuggestion}>Search</button>

      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "20px",
              margin: "20px",
            }}
          >
            {domainNames.map((domain) => {
              return <DomainItem domain={domain} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default DomainSugg;
