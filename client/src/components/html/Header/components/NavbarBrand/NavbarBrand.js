import React, {Component} from 'react'

 class NavbarBrand extends Component {
  render() {
    return (
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="logo" width="112" height="28" />
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>   
            </a>
        </div>
    )
  }
}
export default NavbarBrand;;