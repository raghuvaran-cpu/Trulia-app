import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2">
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-3">
          <h5>About Us</h5>
          <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et lacus nunc. Nulla facilisi.</p>
        </div>
        <div className="col-md-3 mb-3">
          <h5>Links</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">About</a></li>
            <li><a href="#" className="text-white">Services</a></li>
            <li><a href="#" className="text-white">Contact</a></li>
          </ul>
        </div>
        <div className="col-md-3 mb-3">
          <h5>Follow Us</h5>
          <a href="#" className="text-white mr-2"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white mr-2"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="text-center pt-3">
        <p className="mb-0">© 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  </footer>

  )
}

export default Footer
