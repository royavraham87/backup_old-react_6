import React from 'react'

const Navbar = () => {
  return (
    <div>Navbar
      <Link to="/">home</Link> |{" "}
      <Link to="/about">about</Link> |{" "}
      <Link to="/alpha">alpha</Link> |{" "}
      <Link to="/beta">beta</Link> |{" "}
      <Link to="/gama">gama</Link> |{" "}
      <Link to="/delta">delta</Link> |{" "}
      <Link to="/epsilon">epsilon</Link> |{" "}
      <Link to="/Departsments/Products/:id">products</Link>

    </div>
  )
}

export default Navbar