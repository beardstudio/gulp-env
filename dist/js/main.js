function setDDdesktop(e){void 0===e.selectmenu("instance")&&e.selectmenu()}function setDDmobile(e){void 0!=e.selectmenu("instance")&&e.selectmenu("destroy"),e.addClass("select-mobile-custom")}function setDDMdesktop(e){void 0===e.selectmenu("instance")&&e.attr("multiple",!0)}function setDDMmobile(e){void 0!=e.selectmenu("instance")&&e.selectmenu("destroy"),e.removeAttr("multiple")}var phone=768,windowWidth=$(window).width(),lang=$("html").attr("lang"),body=$("body"),selectmenuMultiple_home=$(".multiselect select"),selectmenu_step2=$("#known");$(document).ready(function(){new Swiper(".swiper-container",{pagination:".swiper-pagination",nextButton:".swiper-button-next",prevButton:".swiper-button-prev",slidesPerView:1,paginationClickable:!0,spaceBetween:1,loop:!0});windowWidth>phone?setDDMdesktop(selectmenuMultiple_home):setDDMmobile(selectmenuMultiple_home),$("input[type=range]").on("input",function(e){var t=e.target.min,n=e.target.max,i=e.target.value;$(e.target).css({backgroundSize:100*(i-t)/(n-t)+"% 100%"})}).trigger("input");var e=$(".input-range"),t=$(".range-value");t.html(e.attr("value")+" km"),e.on("input",function(){t.html(this.value+" km")}),$(function(){var e=["Anderlecht","Auderghem","Berchem-Sainte-Agathe","Ville de Bruxelles","Etterbeek","Evere","Forest","Ganshoren","Ixelles","Jette","Koekelberg","Molenbeek-Saint-Jean","Saint-Gilles","Saint-Josse-ten-Noode","Schaerbeek","Uccle","Watermael-Boitsfort","Woluwe-Saint-Lambert","Woluwe-Saint-Pierre"];$("#city").autocomplete({source:e})}),$("#datepicker").datepicker({beforeShowDay:$.datepicker.noWeekends,firstDay:1}),windowWidth>phone?setDDdesktop(selectmenu_step2):setDDmobile(selectmenu_step2)}),$(window).resize(function(){windowWidth=$(this).width(),windowWidth>phone?setDDMdesktop(selectmenuMultiple_home):setDDMmobile(selectmenuMultiple_home),windowWidth>phone?setDDdesktop(selectmenu_step2):setDDmobile(selectmenu_step2)});