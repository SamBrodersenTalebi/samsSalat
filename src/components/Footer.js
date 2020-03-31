import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='main-footer'>
        <div className='container-fluid'>
          <div className='row'>
            {/* Column 1 */}
            <div className='col-md-6 col-xs-12 center'>
              <h5 class='footer-header'>Kontakt</h5>
              <ul className='list-unstyled'>
                <li>
                  <span>Addresse:</span> Torvet 7, 8700 Horsens
                </li>
                <li>
                  <span>Tlf:</span> 75 61 04 04
                </li>
                <li>
                  <span>Mail:</span> samssalat@gmail.com
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className='col-md-6 col-xs-12 center'>
              <h5 class='footer-header'>Åbningstider</h5>
              <ul className='list-unstyled'>
                <li>
                  <span>Mandag-Torsdag:</span> 10:30 - 17:00
                </li>
                <li>
                  <span>Fredag:</span> 10:30 - 17:00
                </li>
                <li>
                  <span>Lørdag og Søndag:</span> Lukket
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bootom*/}
          <div className='footer-bootom center'>
            <p className='text-xs-center'>
              &copy;{new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
