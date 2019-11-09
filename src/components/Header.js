import React from 'react';

function Header() {
  return (
    <div id="header">
      <h1>
        <img alt="logo facebook" src="https://i.imgur.com/KDIDiSE.png" />
      </h1>

      <div>
        <p>Meu perfil</p>
        <i className="material-icons">account_circle</i>
      </div>
    </div>
  );
}

export default Header;
