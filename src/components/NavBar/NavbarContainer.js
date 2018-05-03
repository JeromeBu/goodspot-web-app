import React from "react"
import NavBar from "."

export class NavBarContainer extends React.Component {
  render() {
    const infoForItems = [
      { icon: "fas fa-tachometer-alt", title: "dashboard", route: "/" },
      { icon: "fa fa-globe", title: "Carte", route: "/map" },
      { icon: "fas fa-sliders-h", title: "Administration" },
      { icon: "fab fa-gg", title: "BlockChain", disabled: true },
      { icon: "fas fa-sign-out-alt", title: "Déconnexion" },
      { icon: "fas fa-power-off", title: "Login", route: "/login" },
      { title: "Sign Up", route: "/sign_up" }
    ]
    return <NavBar items={infoForItems} />
  }
}
