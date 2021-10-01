import React, { useEffect, useState } from 'react';

export const Top: React.FunctionComponent = () => {
    return(
      <div style = {styles.container}>
        <h1>TrustFlip</h1>
        <h2><a href ="https://github.com/strrules105/TrustFlip">Github Repository</a></h2>
      </div>
    )
  }

  const styles = {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      
      background: 'rgb(122, 121, 120)',
      width: "60%",
      color: 'black',    
    } 
  }
