ScrollReveal({reset: true, delay: 150}).reveal('.reveal');

let colors = [
	'#b6e4da',
	'#fcdbe4',
	'#bde7f3',
	'#f5d0c5',
	'#f88b8b',
	'#ace5c2'
];

$('#main-background').each(function(){
	var options = {
	  "animate": true,
	  "patternWidth": 247.74,
	  "patternHeight": 128.87,
	  "grainOpacity": 0.10,
	  "grainDensity": 0.7,
	  "grainWidth": 1,
	  "grainHeight": 1
	}

	grained("#main-background", options);

	let randomColor = colors[Math.floor(Math.random() * colors.length)];
	$(this).css('background-color', randomColor);
});


$(".picture.face").mouseover(function() {
  $(".picture.face").css('display', 'none');
  $(".picture.head").css('display', 'block');
});

$(".picture.face").mouseover(function() {
  $(".picture.face").css('display', 'none');
  $(".picture.head").css('display', 'block');
});

$( ".picture.head" ).mouseout(function() {
  $(".picture.head").css('display', 'none');
  $(".picture.face").css('display', 'block');
});


/*GET IN API*/
let datas = [];

datas.push({
	keywords: ['PHP', 'MySQL'],
	title: 'Mathieu Keuk',
	description:  'The Photograph',
	background : '#c84977',
	img : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/110131/3.jpeg',
	link : 'http://www.mathieukeuk.com'
});

datas.push({
	keywords: ['Javascript', 'Socket.io'],
	title: 'Wajicoin',
	description: 'Convert your crypto currency and keep an eye on it',
	background: '#db5944',
	img : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/110131/4.jpeg',
	link : 'https://wajisan.eu/wajicoin/'	
});


datas.push({
	keywords: ['NodeJS'],
	title: 'Wajichat',
	description: 'Chat online with everyone !',
	background: '#e2c142',
	img : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/110131/5.jpeg',
	link : 'https://wajisan.eu/chat/'	
});

/* API END*/
var generatedSliderItems = '<div class="slider__inner">';

datas.forEach(function(item){
	var itemHtml = '<div class="slider__slide"><a class="slider__slide__image" href="#" style="background-image:url('+item.img+')"></a>';
	itemHtml += '<div class="slider__slide__content" data-background="'+item.background+'" style="background-color:'+item.background+';">';
	itemHtml += '<div class="slider__slide__content__categories">';
	if (item.keywords.length > 0){
		var it = item.keywords.length;
		item.keywords.forEach(function(i){
			itemHtml += i;
			if (it > 1)
				itemHtml += ', ';
			it--;
		})
	}
	itemHtml += '</div><h3>'+item.title+'</h3><p>'+item.description+'</p>';
	itemHtml += '<a href="'+item.link+'" target="_blank" class="read-more">Check It <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/110131/chev.png"></a></div></div>';
	generatedSliderItems += itemHtml;
});

generatedSliderItems += '</div>';
$('.slider').append(generatedSliderItems);