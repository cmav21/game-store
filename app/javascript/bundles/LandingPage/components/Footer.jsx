import React from 'react';

const Footer = () => {
    return(
<footer className="text-white pt-3 pb-3">
	<div className="container d-flex align-items-center justify-content-between">
		<small>Concert 2018. All rights reserved.</small>
		<ul className="list-unstyled d-flex p-0 m-0">
			<li className="p-3">
				<a className="text-white text-decoration-none" href="#">
                              <i className="fab fa-facebook-f"></i>
                         </a>
			</li>
			<li className="p-3">
				<a className="text-white text-decoration-none" href="#">
                              <i className="fab fa-instagram"></i>
                         </a>
			</li>
			<li className="p-3">
				<a className="text-white text-decoration-none" href="#">
                              <i className="fab fa-twitter"></i>
                         </a>
			</li>
		</ul>
	</div>
</footer>
    );
}

export default Footer;