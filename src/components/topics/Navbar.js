import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const Navbar = () => {
  let match = useRouteMatch();
  console.log(match);
  return (
    <ul>
      <li>
        <Link to={`${match.url}/topic1`}> Topic1 </Link>
      </li>
      <li>
        <Link to={`${match.url}/topic2`}> Topic2 </Link>
      </li>
      <li>
        <Link to={`${match.url}/topic3`}> Topic3 </Link>
      </li>
    </ul>
  );
};

export default Navbar;
