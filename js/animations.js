
$(document).ready(function(){

$(".lips").click(function(){ 
   var tl = anime.timeline({
    duration: 500
  });
  
  tl.add({
  targets: '.left-div',
  backgroundColor: '#CBAC8F',
  height: '100vh', // -> from '28px' to '100%',
  easing: 'linear',
  direction: 'alternate',
  loop: false
  })
    .add({
    targets:'body',
    backgroundColor:'#CBAC8F'
  })
  .add({
    targets:'.left-div',
    height:'0px',
  });
 });

$(".eyes").click(function(){ 
  var tl2 = anime.timeline ({
    duration:500
  });
  
  tl2.add({
     targets: '.left-div',
  backgroundColor: '#86664D',
  height: '100vh', // -> from '28px' to '100%',
  easing: 'linear',
  direction: 'alternate',
  loop: false
  })
    .add({
    targets:'body',
    backgroundColor:'#86664D'
  })
  .add({
    targets:'.left-div',
    height:'0px'
  });
});

$(".face").click(function(){ 
  var tl2 = anime.timeline ({
    duration:500
  });
  
  tl2.add({
     targets: '.left-div',
  backgroundColor: '#a0755f',
  height: '100vh', // -> from '28px' to '100%',
  easing: 'linear',
  direction: 'alternate',
  loop: false
  })
    .add({
    targets:'body',
    backgroundColor:'#a0755f'
  })
  .add({
    targets:'.left-div',
    height:'0px'
  });
});
	
$(".skin").click(function(){ 
  var tl2 = anime.timeline ({
    duration:500
  });
  
  tl2.add({
     targets: '.left-div',
  backgroundColor: '#493109',
  height: '100vh', // -> from '28px' to '100%',
  easing: 'linear',
  direction: 'alternate',
  loop: false
  })
    .add({
    targets:'body',
    backgroundColor:'#493109'
  })
  .add({
    targets:'.left-div',
    height:'0px'
  });
});
	
$(".best").click(function(){ 
  var tl2 = anime.timeline ({
    duration:500
  });
  
  tl2.add({
     targets: '.left-div',
  backgroundColor: '#c88770',
  height: '100vh', // -> from '28px' to '100%',
  easing: 'linear',
  direction: 'alternate',
  loop: false
  })
    .add({
    targets:'body',
    backgroundColor:'#c88770'
  })
  .add({
    targets:'.left-div',
    height:'0px'
  });
});
	
$(".navbar-brand").click(function(){ 
  var tl2 = anime.timeline ({
    duration:500
  });
  
  tl2.add({
     targets: '.left-div',
  backgroundColor: '#ddcecd',
  height: '100vh', // -> from '28px' to '100%',
  easing: 'linear',
  direction: 'alternate',
  loop: false
  })
    .add({
    targets:'body',
    backgroundColor:'#ddcecd'
  })
  .add({
    targets:'.left-div',
    height:'0px'
  });
});
});