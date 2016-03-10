import React from 'react'
import Relay from 'react-relay'

class Profile extends React.Component{

    constructor(props) {
        super(props)
    }

    render() {

        return  <div>
                   Profile
                </div>
    }
}

export default Relay.createContainer(Profile, {
    fragments: {
        viewer: () => Relay.QL`
          fragment on Viewer {
            id
          }
        `
    }
})

