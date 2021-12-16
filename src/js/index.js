import "./import/modules";
import $ from "jquery";
import slick from 'slick-slider';

document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('body').classList.toggle('nav-active');
    document.querySelector('.burger span').classList.toggle('active');
  });

  $('.slick-slider').slick();



  