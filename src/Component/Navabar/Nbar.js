import React from 'react';

import "./Nbar.css";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Nbar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Form className="d-flex w-50">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Container>
    </Navbar>

    <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="All" id="navbarScrollingDropdown" className='all'>
              <NavDropdown title="Sell Laptop" href="#action3" className='Sl'>

                <NavDropdown title="New Laptops" href="#action3" className='snl'>
                  <NavDropdown.Item href="#action3" className='hp1'>Hp</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='dell1'>Dell</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='apple1'>Apple</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='lenovo1'>Lenovo</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='acer1'>Acer</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='asus1'>Asus</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Used Laptops" href="#action3" className='sul'>
                  <NavDropdown.Item href="#action3" className='hp1'>Hp</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='dell1'>Dell</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='apple1'>Apple</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='lenovo1'>Lenovo</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='acer1'>Acer</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='asus1'>Asus</NavDropdown.Item>
                </NavDropdown>
                
              </NavDropdown>

              <NavDropdown title="Buy Laptop" href="#action3" width="200px" className='Bl'>

                <NavDropdown title="New Laptops" href="#action3" className='bnl'>
                  <NavDropdown.Item href="#action3" className='hp1'>Hp</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='dell1'>Dell</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='apple1'>Apple</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='lenovo1'>Lenovo</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='acer1'>Acer</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='asus1'>Asus</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Refubished Laptops" href="#action3" className='brl'>
                  <NavDropdown.Item href="#action3" className='hp1'>Hp</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='dell1'>Dell</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='apple1'>Apple</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='lenovo1'>Lenovo</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='acer1'>Acer</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='asus1'>Asus</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Used Laptops" href="#action3" className='bul'>
                  <NavDropdown.Item href="#action3" className='hp1'>Hp</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='dell1'>Dell</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='apple1'>Apple</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='lenovo1'>Lenovo</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='acer1'>Acer</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='asus1'>Asus</NavDropdown.Item>
                </NavDropdown>
                
              </NavDropdown>

            </NavDropdown>

            <NavDropdown title="Sell Laptop" href="#action3" className='Sl'>

                <NavDropdown title="New Laptops" href="#action3" className='snl'>
                  <NavDropdown.Item href="#action3" className='hp1'>Hp</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='dell1'>Dell</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='apple1'>Apple</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='lenovo1'>Lenovo</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='acer1'>Acer</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='asus1'>Asus</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Used Laptops" href="#action3" className='sul'>
                  <NavDropdown.Item href="#action3" className='hp1'>Hp</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='dell1'>Dell</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='apple1'>Apple</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='lenovo1'>Lenovo</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='acer1'>Acer</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='asus1'>Asus</NavDropdown.Item>
                </NavDropdown>
                
              </NavDropdown>

              <NavDropdown title="Buy Laptop" href="#action3" width="200px" className='Bl'>

                <NavDropdown title="New Laptops" href="#action3" className='bnl'>
                  <NavDropdown.Item href="#action3" className='hp1'>Hp</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='dell1'>Dell</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='apple1'>Apple</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='lenovo1'>Lenovo</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='acer1'>Acer</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='asus1'>Asus</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Refubished Laptops" href="#action3" className='brl'>
                  <NavDropdown.Item href="#action3" className='hp1'>Hp</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='dell1'>Dell</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='apple1'>Apple</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='lenovo1'>Lenovo</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='acer1'>Acer</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='asus1'>Asus</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Used Laptops" href="#action3" className='bul'>
                  <NavDropdown.Item href="#action3" className='hp1'>Hp</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='dell1'>Dell</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='apple1'>Apple</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='lenovo1'>Lenovo</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='acer1'>Acer</NavDropdown.Item>
                  <NavDropdown.Item href="#action3" className='asus1'>Asus</NavDropdown.Item>
                </NavDropdown>
                
              </NavDropdown>

              <NavDropdown title="Sell Phone" href="#action3" className='Sp'>

                <NavDropdown.Item className='spn'>Top Brands</NavDropdown.Item>
                <NavDropdown.Item className='spn' href="#action3" >Apple</NavDropdown.Item>
                <NavDropdown.Item className='spn' href="#action3" >Xiaomi</NavDropdown.Item>
                <NavDropdown.Item className='spn' href="#action3" >Samsung</NavDropdown.Item>
                <NavDropdown.Item className='spn' href="#action3" >Oneplus</NavDropdown.Item>
                <NavDropdown.Item className='spn' href="#action3" >Poco</NavDropdown.Item>
                <NavDropdown.Item className='spn' href="#action3" >Nokia</NavDropdown.Item>
                
                
                <NavDropdown.Item className='spn' href="#action3" >Top Selling Phones</NavDropdown.Item>
                <NavDropdown.Item className='spn' href="#action3" >Dell</NavDropdown.Item>
                <NavDropdown.Item className='spn' href="#action3" >Apple</NavDropdown.Item>
                <NavDropdown.Item className='spn' href="#action3" >Lenovo</NavDropdown.Item>
                <NavDropdown.Item className='spn' href="#action3" >Acer</NavDropdown.Item>
                <NavDropdown.Item className='spn' href="#action3" >Asus</NavDropdown.Item>
                

                
                
              </NavDropdown>

           

            
    </Nav>
    </>
  );
}

export default Nbar;
