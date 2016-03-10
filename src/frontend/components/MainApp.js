import React from 'react'
import Relay from 'react-relay'
import NavBar from './navbar'

class MainApp extends React.Component{

    constructor(props) {
        super(props)
    }

    render() {

        return  <div id="main">
                    <NavBar />
                    <div id="main-container">
                        {this.props.children}
                    </div>
                </div>
    }
}

export default Relay.createContainer(MainApp, {
    fragments: {
        viewer: () => Relay.QL`
          fragment on Viewer {
            id
          }
        `
    }
})

