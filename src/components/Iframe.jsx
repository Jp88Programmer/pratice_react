import React from "react";

const Iframe = () => {
  console.log("🚀 ~ Iframe ~ Iframe:", Iframe)
  
  return (
    <iframe
      id="decentraweb-minting-widget"
      title="Mint your Web3 Subdomain"
      width="100%"
      frameborder="0"
      height="700"
      loading="lazy"
      src="http://192.168.136.115:3000/register-subdomain-widget/yourtld?theme=dark&amp;offset=969696"
    ></iframe>
  );
};

export default Iframe;
