import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import './contact.css';

const Contact = () => {
  return (
    <>
      <div className='main_div'>
        <h1>Contact us</h1>
        <div className='map_sec'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d49157.91166573523!2d72.5416723654576!3d23.687268782181626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1673112329538!5m2!1sen!2sin'
            width={600}
            height={480}
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
        <div className='contact'>
          <div className='left_con'>
            <h2>Contact us</h2>
            <p style={{ color: 'gray' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
              nostrum fugiat iste ratione, ducimus optio explicabo sunt omnis
              error aperiam eius. Eos, accusantium atque. Ab tempore natus
              voluptatum non facere perspiciatis sit? Inventore doloremque
              temporibus recusandae quas quae modi enim?
            </p>
            <div className='con_details'>
              <div className='manage_details'>
                <div className='icon-addr'>
                  <PlaceIcon className='icon-1' />
                </div>
                <div>
                  <h3 className='h3-style'>Address</h3>
                  <p>30 Beer Tunnel, Avenue 15th, Randall District, India.</p>
                </div>
              </div>
              <div className='manage_details'>
                <div className='icon-addr'>
                  <AccessTimeIcon className='icon-1' />
                </div>
                <div>
                  <h3 className='h3-style'>Opening Hours</h3>
                  <p>
                    Monday to Friday: 8:00AM - 8:00PM <br /> Saturday & Sunday:
                    10:00AM -6:00PM{' '}
                  </p>
                </div>
              </div>
              <div className='manage_details'>
                <div className='icon-addr'>
                  <PhoneIcon className='icon-1' />
                </div>
                <div>
                  <h3 className='h3-style'>Phone</h3>
                  <p>
                    Mobile: +91 85245561755 <br /> Fax: +91 7576557888
                  </p>
                </div>
              </div>
              <div className='manage_details'>
                <div className='icon-addr'>
                  <EmailIcon className='icon-1' />
                </div>
                <div>
                  <h3 className='h3-style'>Email</h3>
                  <p>helloxyz7867@shop.io</p>
                </div>
              </div>
            </div>
          </div>
          <div className='right_con'>
            <h2>Get in touch</h2>
            <form action='#' className='form_con'>
              <input type='text' placeholder='Enter Your Name' />
              <input type='text' placeholder='Enter Your Email' />
              <input type='text' placeholder='Enter Your Phone' />
              <textarea
                name=''
                id=''
                cols='30'
                rows='10'
                placeholder='Your Message'
                style={{ height: '6rem' }}
              ></textarea>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
