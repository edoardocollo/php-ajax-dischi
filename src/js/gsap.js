import { gsap } from "gsap";
//
//   let rotation3D = function(){
//       gsap.to('.card',{
//         color:'red',
//         duration: 1,
//       });
//     };
const target = $('.card_wrap');

target.on('mouseenter', rotate3D);
function rotate3D(){
  console.log('ciao');
  gsap.to($(this).find('.card') ,{
    rotationY: -180,
    duration: 1,
    delay: .5,
  });
  gsap.to($(this).find('.card h2'),{
    display: 'none',
    duration: 0.3,
    delay: .5,
  });
  gsap.to($(this).find('.card h3'),{
    display: 'none',
    duration: 0.3,
    delay: .5,

  });
  gsap.to($(this).find('.card h4'),{
    display: 'none',
    duration: 0.3,
    delay: .5,
  });
  gsap.to($(this).find('.card img'),{
    display: 'none',
    duration: 0.3,
    delay: .5,
  });

}
target.on('mouseleave', rotate3Dreverse);
function rotate3Dreverse(){
  console.log('ciao');
  gsap.to($(this).find('.card') ,{
    rotationY: 0,
    duration: 1,
    delay: 1,
  });
  gsap.to($(this).find('.card h2'),{
    display: 'block',
    duration: 0.3,
    delay: 1.3,
  });
  gsap.to($(this).find('.card h3'),{
    display: 'block',
    duration: 0.3,
    delay: 1.3,

  });
  gsap.to($(this).find('.card h4'),{
    display: 'block',
    duration: 0.3,
    delay: 1.3,
  });
  gsap.to($(this).find('.card img'),{
    display: 'block',
    duration: 0.3,
    delay: 1.3,
  });

}
