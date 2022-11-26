import React from 'react'
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';



export default function Button() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="search">
        <i class="fa-solid fa-magnifying-glass" onClick={handleShow}></i>
        <Offcanvas show={show} onHide={handleClose} placement="top">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Search</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div class="input-group">
              <div class="" >
                <input type="search" id="form1" class="form-control" />
              </div>
              <button
                type="button"
                style={{
                  position: "absolute",
                  left: 195,
                  padding: 5,
                  border: "2px solid light-gray",
                  borderRadius:4
                }}
              >
                <i class="fas fa-search"></i>
              </button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <Link to="/contact">
        <button className="btn">Join Class Now</button>
      </Link>
    </>
  );
}
