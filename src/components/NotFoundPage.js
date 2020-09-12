import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        Page Not Found. It's lonely out here, let's &mdash;  <Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;