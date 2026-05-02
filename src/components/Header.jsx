import React from "react";

function Header({ name, Name }) {
  const blogName = name ?? Name;

  return (
    <header>
      <h1>{blogName}</h1>
    </header>
  );
}

export default Header;
