import React from 'react'
import Relay from 'react-relay'

class Map extends React.Component{

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

    drawRectangle(map) {

        var rectangle = new google.maps.Rectangle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            bounds: {
                north: 33.685,
                south: 33.671,
                east: -116.234,
                west: -116.251
            }
        });
    }

    render() {

        this.drawRectangle(this.state.map)

        return  <div id="map"></div>
    }
}

export default Relay.createContainer(Map, {
    fragments: {
        viewer: () => Relay.QL`
          fragment on Viewer {
            id
          }
        `
    }
})