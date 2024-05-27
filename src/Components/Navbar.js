import React from "react";
import { Navbar } from "flowbite-react";

function Component() {
  return (
    <Navbar fluid rounded style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2%'}}>
      <Navbar.Brand href="/">
        <img src="https://flowbite-react.com/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React x To Do List</span>
      </Navbar.Brand>
    </Navbar>
  );
}

export default Component;
