import React from 'react';
import 'src/index.css';

export const Top: React.FunctionComponent = () => {
    return(
      <div style = {styles.container}>
        <h1>TrustFlip</h1>
        <h2><a href ="https://github.com/strrules105/TrustFlip">Github Repository</a></h2>
      </div>
    );
  };

  const styles = {
    container: {
      width: "60%",
      padding: "30px 90px",
      margin: "50px auto",
      background: "tan",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }
