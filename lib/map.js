
setTimeout(function(){
	var elem = document.createElement('script');
	elem.type = 'text/javascript';
	elem.src = '//api-maps.yandex.ru/2.1/?apikey=1e19dd7d-c3f6-4ded-b4b9-472398a1c919&lang=ru_RU&onload=getYaMap';
	document.getElementsByTagName('body')[0].appendChild(elem);
}, 2000);

let nameTheme = document.querySelector('#map').dataset.theme;

function getYaMap(){
	var myMap = new ymaps.Map("map",{center: [55.628937, 37.469853],zoom: 18});
	ymaps.geocode("МКАД, 44-й километр, 1Вс2").then(function (res) {
	var coord = res.geoObjects.get(0).geometry.getCoordinates();
	var myPlacemark = new ymaps.Placemark(coord, null,{
		iconLayout: 'default#image',
		iconImageHref: `../themes/${nameTheme}/assets/img/pin.svg`,
		iconImageSize: [135, 71],
		iconImageOffset: [-55, -70]
	});
	myMap.geoObjects.add(myPlacemark);	
	myMap.setCenter(coord);				
	});
}