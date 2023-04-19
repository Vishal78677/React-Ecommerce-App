import { Button, Divider } from '@mui/material';
import React, { useState } from 'react';
import './header.css';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  fetchCategoriesData,
  fetchCategoryProducts,
} from '../../reducer/Reducer';
import MenuIcon from '@mui/icons-material/Menu';

const ITEM_HEIGHT = 48;

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const { total_item, cart } = useSelector((state) => state.cartSlice);
  const { categories } = useSelector((state) => state.shopping);
  const [isVisible, setIsVisible] = useState(false);
  const [cateVisible, setCateVisible] = useState(false);
  const [isCateClick, setIsCateClick] = useState(false);

  const [isIconVisible, setIsIconVisible] = useState(false);

  // console.log('🚀 ~ file: Header.jsx:30 ~ Header ~ isVisible:', isVisible);

  const dispatch = useDispatch();
  // console.log('🚀 ~ file: Header.jsx:21 ~ Header ~ categories:', categories);
  // console.log('🚀 ~ file: Header.jsx:20 ~ Header ~ total_item:', total_item
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleCategories = (category) => {
    if (category) {
      dispatch(fetchCategoryProducts(category));
      navigate('/products');
    }
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
    setCateVisible(true);
  };

  const handleClick3 = () => {
    setCateVisible(!cateVisible);
  };

  const handleIconVisible = () => {
    setIsIconVisible(!isIconVisible);
  };

  const handleWidth = () => {
    let Width = 768;

    const getWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (getWidth >= Width) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // console.log(
    //   '🚀 ~ file: Header.jsx:66 ~ handleWidth ~ getWidth:',
    //   getWidth
    // );
  };

  useEffect(() => {
    handleWidth();

    window.addEventListener('resize', handleWidth);
  });

  useEffect(() => {
    dispatch(fetchCategoriesData());
  }, []);

  return (
    <>
      {isIconVisible && (
        <div
          onClick={() => {
            setIsIconVisible(!isIconVisible);
            setIsCateClick(false);
          }}
          className='backGroundBlur'
        ></div>
      )}
      <div className='header'>
        <nav className='navbar-1'>
          <NavLink to='/' className='logo'>
            <h2>
              Shop<span className='red-span'>Express</span>
            </h2>
          </NavLink>
          <div className='tabs'>
            <NavLink to='/'>
              <Button className='btnN'>Home</Button>
            </NavLink>
            <NavLink to='/products'>
              <Button className='btnN'>Products</Button>
            </NavLink>
            <NavLink to='#'>
              <Button
                className='btnN'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                {' '}
                Categories{' '}
              </Button>
            </NavLink>

            <Menu
              id='long-menu'
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              className='scrollB'
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                },
              }}
            >
              {categories?.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === 'Pyxis'}
                  onClick={() => {
                    handleClose();
                    handleCategories(option);
                  }}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>

            <NavLink to='/about'>
              <Button className='btnN'>About</Button>
            </NavLink>
            <NavLink to='/contact'>
              <Button className='btnN'>Contact</Button>
            </NavLink>
          </div>
          <div className='nav-btns'>
            <Link to='/cart'>
              <div>
                <Badge
                  style={{ color: '#14274E' }}
                  className='badge-c'
                  badgeContent={total_item > 0 ? total_item : '0'}
                  color='primary'
                >
                  <span
                    style={{
                      color: 'gray',
                      marginRight: '7px',
                      textTransform: 'capitalize',
                      fontWeight: '400',
                      letterSpacing: '1px',
                    }}
                  >
                    Cart
                  </span>
                  <ShoppingCartIcon
                    style={{ fontSize: '1.8rem', color: 'gray' }}
                  />
                </Badge>
              </div>
            </Link>
            <div>
              <Button id='demo-positioned-button' style={{ fontSize: '1rem' }}>
                <span
                  style={{
                    color: 'gray',
                    marginRight: '7px',
                    textTransform: 'capitalize',
                    fontWeight: '400',
                  }}
                >
                  Account
                </span>
                <AccountCircleIcon
                  style={{
                    color: 'gray',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    fontSize: '1.5rem',
                  }}
                />{' '}
              </Button>
            </div>
          </div>

          {isVisible ? (
            <MenuIcon className='menuIcon' onClick={handleClick2} />
          ) : (
            <MenuIcon className='menuIcon' onClick={handleIconVisible} />
          )}

          {isVisible ? (
            <Menu
              anchorEl={anchorEl2}
              id='account-menu'
              open={open2}
              onClose={handleClose2}
              onClick={handleClose2}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleClose2}>
                <Link to='/cart'>
                  <div style={{ padding: '0.5rem' }}>
                    <Badge
                      style={{ color: '#14274E' }}
                      className='badge-c'
                      badgeContent={total_item > 0 ? total_item : '0'}
                      color='primary'
                    >
                      <span
                        style={{
                          color: 'gray',
                          marginRight: '7px',
                          textTransform: 'capitalize',
                          fontWeight: '400',
                          letterSpacing: '1px',
                          fontSize: '0.9rem',
                        }}
                      >
                        Cart
                      </span>
                      <ShoppingCartIcon
                        style={{ fontSize: '1.8rem', color: 'gray' }}
                      />
                    </Badge>
                  </div>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose2}>
                <Button
                  id='demo-positioned-button'
                  style={{ fontSize: '1rem' }}
                >
                  <span
                    style={{
                      color: 'gray',
                      marginRight: '7px',
                      textTransform: 'capitalize',
                      fontWeight: '300',
                      letterSpacing: '1px',
                      fontSize: '0.9rem',
                    }}
                  >
                    Account
                  </span>
                  <AccountCircleIcon
                    style={{
                      color: 'gray',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      fontSize: '1.5rem',
                    }}
                  />{' '}
                </Button>
              </MenuItem>
            </Menu>
          ) : (
            <>
              <div
                className={`dropDownMenuCon ${!isIconVisible && 'dropDCon'}`}
              >
                <ul>
                  <li>
                    <NavLink to='/'>
                      <Button
                        onClick={() => setIsIconVisible(!isIconVisible)}
                        style={{ color: 'gray', textTransform: 'capitalize' }}
                        className='btnN2'
                      >
                        Home
                      </Button>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/products'>
                      <Button
                        style={{ color: 'gray', textTransform: 'capitalize' }}
                        className='btnN2'
                        onClick={() => setIsIconVisible(!isIconVisible)}
                      >
                        Products
                      </Button>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className='categoriesPO'>
                      <Button
                        onClick={() => setIsCateClick(!isCateClick)}
                        style={{ color: 'gray', textTransform: 'capitalize' }}
                        className='btnN2'
                      >
                        Categories
                      </Button>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to='/about'>
                      <Button
                        style={{ color: 'gray', textTransform: 'capitalize' }}
                        className='btnN2'
                        onClick={() => setIsIconVisible(!isIconVisible)}
                      >
                        About
                      </Button>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/contact'>
                      <Button
                        style={{ color: 'gray', textTransform: 'capitalize' }}
                        className='btnN2'
                        onClick={() => setIsIconVisible(!isIconVisible)}
                      >
                        contact
                      </Button>
                    </NavLink>
                  </li>
                </ul>
                <Divider />
                <div className='infoIcon'>
                  <div>
                    <Link to='/cart'>
                      <div
                        style={{ padding: '0.5rem' }}
                        onClick={() => setIsIconVisible(!isIconVisible)}
                      >
                        <Badge
                          style={{ color: '#14274E' }}
                          className='badge-c'
                          badgeContent={total_item > 0 ? total_item : '0'}
                          color='primary'
                        >
                          <span
                            style={{
                              color: 'gray',
                              marginRight: '7px',
                              textTransform: 'capitalize',
                              fontWeight: '400',
                              letterSpacing: '1px',
                              fontSize: '0.9rem',
                            }}
                          >
                            Cart
                          </span>
                          <ShoppingCartIcon
                            style={{ fontSize: '1.5rem', color: 'gray' }}
                          />
                        </Badge>
                      </div>
                    </Link>
                  </div>
                  <div onClick={() => setIsIconVisible(!isIconVisible)}>
                    <Button
                      id='demo-positioned-button'
                      style={{ fontSize: '1rem' }}
                    >
                      <span
                        style={{
                          color: 'gray',
                          marginRight: '7px',
                          textTransform: 'capitalize',
                          fontWeight: '400',
                          letterSpacing: '1px',
                          fontSize: '0.9rem',
                        }}
                      >
                        Account
                      </span>
                      <AccountCircleIcon
                        style={{
                          color: 'gray',
                          backgroundColor: 'white',
                          borderRadius: '50%',
                          fontSize: '1.5rem',
                        }}
                      />{' '}
                    </Button>
                  </div>
                </div>
              </div>

              {isCateClick && (
                <div className='subCategories'>
                  {categories?.map((option) => (
                    <span
                      key={option}
                      selected={option === 'Pyxis'}
                      onClick={() => {
                        setIsCateClick(false);
                        setIsIconVisible(false);
                        handleCategories(option);
                      }}
                    >
                      {option}
                    </span>
                  ))}
                </div>
              )}
            </>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;
