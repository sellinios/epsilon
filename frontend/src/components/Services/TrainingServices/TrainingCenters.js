import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function TrainingCenters() {
  return (
    <div>
      <h1>Our Training Centers</h1>
      <ul>
        <li>
          <Link to="manila">Manila - Veritas Maritime Training Center, The Philippines</Link>
        </li>
        <li>
          <Link to="constanta">Constanta - Veritas Maritime Training Center, Romania</Link>
        </li>
        <li>
          <Link to="odessa">Odessa - Epsilon Maritime Training and Educational Center, Ukraine</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default TrainingCenters;
