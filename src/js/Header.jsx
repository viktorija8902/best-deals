import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div className="header">
            <div className="logo">
                <img
                    src="images/logo_image.png"
                    srcSet="images/logo_image_2x.png 2x, images/logo_image_3x.png 3x"
                    alt=""
                >
                </img>
            </div>
            <div className="title">
                SnapTravel
            </div>
        </div>
    );
  }
}

export default Header;
