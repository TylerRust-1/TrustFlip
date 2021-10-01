import React, { useEffect, useState } from 'react';
import { Items } from 'oldschooljs';
import { Worlds } from 'oldschooljs';
import { Row, Col } from "react-bootstrap";


export const Middle: React.FunctionComponent = () => {
    const WorldOne = Worlds.get(301);
    return(
      <div>
        {WorldOne}
      </div>
      )
  }