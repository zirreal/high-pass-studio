document.addEventListener("DOMContentLoaded", function () {
    ymaps.ready(init);
    function init() {
      var myMap = new ymaps.Map("map", {
        center: [55.76985909073123, 37.62518804855096],
        zoom: 14,
        controls: ['zoomControl'],
      });
      var myGeoObject = new ymaps.GeoObject({
        geometry: {
          type: "Point",
          coordinates: [55.76983447551241, 37.63818804824046],
        },
      });
  
      var myPlacemark = new ymaps.Placemark(
        [55.76983447551241, 37.63818804824046],
        {},
        {
          iconLayout: "default#image",
          iconImageHref: "./img/map.svg",
          iconImageSize: [12, 12],
          iconImageOffset: [-3, -30],
          draggable: true,
        }
      );
  
      myPlacemark.events.add("dragend", function (e) {
        var thisPlacemark = e.get("target");
        var coords = thisPlacemark.geometry.getCoordinates();
        thisPlacemark.properties.set("balloonContent", coords);
      });
  
      myMap.geoObjects.add(myPlacemark);
    }
  });
