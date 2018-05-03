import React, { Component } from 'react'
import { NavBarItem } from './NavBarItem'
import { Wrapper, Spacer, Logo } from './components'

export default class NavBar extends Component {
  render() {
    const { items } = this.props
    return (
      <React.Fragment>
        <Wrapper>
          <Logo src="images/logo_magma.png" alt="logo" />
          {items.map(element => {
            return (
              <NavBarItem
                key={element.title}
                route={element.route || '#'}
                icon={element.icon}
                disabled={element.disabled}
              >
                {element.title}
              </NavBarItem>
            )
          })}
        </Wrapper>
        <Spacer />
      </React.Fragment>
    )
  }
}
