import React from 'react'
import Relay from 'react-relay'

class MainApp extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            latitude: "",
            longitude: "",
            initialZoom: 4,
            mapCenterLat: 30.04442,
            mapCenterLng: 31.235712
        }
    }

    componentDidMount() {
        this.prepareMapRender()
    }

    prepareMapRender() {

        var styleArray = [
            {
                featureType: "all",
                stylers: [
                    { saturation: -80 }
                ]
            },{
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [
                    { hue: "#00ffee" },
                    { saturation: 50 }
                ]
            },{
                featureType: "poi.business",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }
        ]

        var mapContainer = document.getElementById('map');
        var map = new google.maps.Map(mapContainer, {
            center: {lat: this.state.mapCenterLat, lng: this.state.mapCenterLng},
            streetViewControl: false,
            disableDefaultUI: true,
            zoom: this.state.initialZoom
        })

        map.setOptions({styles: styleArray })

        this.setState({map: map});
    }

    render() {

        console.log("Main app render: " + this.props.viewer.id);

        return  <div id="map">
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

