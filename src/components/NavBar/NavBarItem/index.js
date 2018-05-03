import React from "react"
import { Link } from "react-router-dom"
import { Wrapper } from "./components"
import PropTypes from "prop-types"

// export const NavBarItem = props => (
export class NavBarItem extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    children: PropTypes.node,
    route: PropTypes.string
  }
  render() {
    return (
      <Wrapper disabled={this.props.disabled}>
        <Link to={this.props.route}>
          {this.props.icon && <i className={this.props.icon} />}{" "}
          {this.props.children}
        </Link>
      </Wrapper>
    )
  }
}
