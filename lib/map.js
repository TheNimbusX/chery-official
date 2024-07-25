
setTimeout(function(){
	var elem = document.createElement('script');
	elem.type = 'text/javascript';
	elem.src = '//api-maps.yandex.ru/2.1/?apikey=1e19dd7d-c3f6-4ded-b4b9-472398a1c919&lang=ru_RU&onload=getYaMap';
	document.getElementsByTagName('body')[0].appendChild(elem);
}, 2000);

let nameTheme = document.querySelector('#map').dataset.theme;

function getYaMap(){
	var myMap = new ymaps.Map("map",{center: [55.575047, 37.589261],zoom: 15});
	ymaps.geocode("МКАД, 33-й километр, 6с6").then(function (res) {
	var coord = res.geoObjects.get(0).geometry.getCoordinates();
	var myPlacemark = new ymaps.Placemark(coord, null,{
		iconLayout: "default#image",
		iconImageHref: "../images/pin.png",
		iconImageSize: [65, 85],
		iconImageOffset: [-56, -126],
	});
	myMap.geoObjects.add(myPlacemark);	
	myMap.setCenter(coord);				
	myMap.geoObjects.add(placemark);
	myMap.controls.remove("geolocationControl"); // удаляем геолокацию
	myMap.controls.remove("searchControl"); // удаляем поиск
	myMap.controls.remove("trafficControl"); // удаляем контроль трафика
	myMap.controls.remove("typeSelector"); // удаляем тип
	myMap.controls.remove("rulerControl"); // удаляем контроль правил
	myMap.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
	});
}