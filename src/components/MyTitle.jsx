import React from 'react';
import { Helmet } from 'react-helmet';
import LogoImage from '../images/eliteLogo/EliteW.png'; 

const MyTitle = () => {
  return (
    <div>
      <Helmet>
        <title>
          <img src={LogoImage} alt="Logo" style={{ width: 30, height: 30 }} />
          {' New Title Logo'}
        </title>
      </Helmet>
      {/* Rest of your component */}
    </div>
  );
};

export default MyTitle;
