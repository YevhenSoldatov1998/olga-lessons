import React from 'react';
import {Typography} from "../../components/modules";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Typography><Link to='/characters/graphql'>Graphql implementation</Link></Typography>
      <Typography><Link to='/characters/rest'>Rest implementation</Link></Typography>
    </div>
  );
};

export default Home;