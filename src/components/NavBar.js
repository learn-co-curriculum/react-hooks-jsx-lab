import React from "react";

function NavBar() {
  // update the JSX being returned!
  return (
  <nav>
    <Anchor name = 'about' title ='About'/>
    <Anchor name = 'home' title ='Home' />
  </nav>
  );
}
function Anchor(props){
  return <a href={'#'+props.name}>{props.title}</a>
}

export default NavBar;
