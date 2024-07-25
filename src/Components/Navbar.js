import {
  Navbar,
  Nav,
  Button,
  Dropdown,
  Modal,
  Collapse,
  BImg,
} from 'bootstrap-4-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import JobType from './JobType';
import ModalComponent from './ModalComponent';
import chicoLogo from '../Images/chico-logo.png';

function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => setIsModalOpen(false);
  const handleOpen = () => setIsModalOpen(true);

  const bootstrap_icon =
    'https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg';

  return (
    <Navbar expand='lg' light bg='light'>
      <Navbar.Brand href='/'>
        <BImg
          src={chicoLogo}
          width='30'
          height='30'
          display='inline-block'
          align='top'
          mr='1'
        />
        Chico Construction
      </Navbar.Brand>
      <Navbar.Toggler target='#navbarSupportedContent' />
      <Collapse navbar id='navbarSupportedContent'>
        <Navbar.Nav mr='auto'>
          <Nav.Item active>
            <Nav.Link href='/'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/'>Link</Nav.Link>
          </Nav.Item>
        </Navbar.Nav>
        {/* <Link to='/quote'>
					>
				</Link> */}
        {/* <a href='/quote' class='btn' role='button'>
					FrF
				</a> */}
        {/* <a href='/quote' class='btn' role='button'>
					<Button bg='primary' text='white'>
						Free Quote
					</Button>
				</a> */}
        {/* <Button bg='primary' text='white'>
					Free Quote
				</Button> */}
        <div>
          {/* Button trigger Modal */}
          <Button
            primary
            data-toggle='modal'
            data-target='#exampleModal'
            onClick={handleOpen}
          >
            Free Quote
          </Button>

          {/* Modal */}
          <ModalComponent
            isModalOpen={isModalOpen}
            handleClose={handleClose}
            handleOpen={handleOpen}
          />
        </div>
      </Collapse>
    </Navbar>
  );
  // }
}

export default Navigation;
