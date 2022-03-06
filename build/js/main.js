function openBlock() {
  const burgerBtn = document.getElementById("burgerBtn");
  const otherId = document.getElementById("other");
  burgerBtn.classList.toggle("active");

  otherId.classList.toggle("hidden");
  otherId.querySelector(".inner").classList.toggle("active");
  const basketBtn = document.getElementById("basketBtn");
  basketBtn.classList.toggle("active");
}

$(function () {
  $(".nav li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $("#" + $(this).data("id"))
      .addClass("selected")
      .siblings()
      .removeClass("selected");
  });
});

$(function () {
  $(".nav-shop-article li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $("#" + $(this).data("id"))
      .addClass("selected")
      .siblings()
      .removeClass("selected");
  });
});

$(document).ready(function () {
  $("#burgerBtn").click(function () {
    if ($("#other").hasClass("active")) {
      $("#other").fadeOut();
      $("body").removeClass("modal-open");
      $("#other").toggleClass("active");
    } else {
      $("#other").fadeIn();
      $("body").addClass("modal-open");
      $("#other").toggleClass("active");
    }
  });
});

Vue.component("nav-component", {
  template: `<div class="mid"><a class="page__text_w-600 page__link_underline" href="#">Услуги</a><a class="page__text_w-600 page__link_underline" href="#">Портфолио</a><a class="page__text_w-600 page__link_underline" href="#">О компании</a><a class="page__text_w-600 page__link_underline" href="#">Команда</a><a class="page__text_w-600 page__link_underline" href="#">Отзывы</a><a class="page__text_w-600 page__link_underline" href="#">Контакты</a></div>`,
});

Vue.component("lang-component", {
  template: `<div class="right">
  <div class="page__link_underline page__text_w-500">Ru</div>
  <div class="page__text_w-500">/</div>
  <div class="page__link_underline page__text_w-500">En</div>
</div>`,
});

Vue.component("info-component", {
  template: `<div class="info-wrapper">
  <div class="info-wrapper-left"><a class="page__text_b-700 page__link_underline-three" href="#">Услуги</a><a class="page__text_b-400 page__link_underline-three" href="#">Канал продаж</a><a class="page__text_b-400 page__link_underline-three" href="#">Контекстная реклама</a><a class="page__text_b-400 page__link_underline-three" href="#">Интернет-SEO продвижение</a><a class="page__text_b-400 page__link_underline-three" href="#">Управление репутацией</a></div>
  <div class="info-wrapper-mid"><a class="page__text_b-700 page__link_underline-three" href="#">О нас</a><a class="page__text_b-400 page__link_underline-three" href="#">Компания</a><a class="page__text_b-400 page__link_underline-three" href="#">Команда</a><a class="page__text_b-400 page__link_underline-three" href="#">Контакты</a><a class="page__text_b-400 page__link_underline-three" href="#">Новости</a></div>
  <div class="info-wrapper-right"><a class="page__text_b-700 page__link_underline-three" href="#">Клиентам</a><a class="page__text_b-400 page__link_underline-three" href="#">Отзывы</a><a class="page__text_b-400 page__link_underline-three" href="#">Портфолио</a><a class="page__text_b-400 page__link_underline-three" href="#">Услуги</a></div>
</div>`,
});

new Vue({
  el: "#app",
});

google.maps.event.addDomListener(window, "load", init);

function init() {
  var mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(40.67, -73.94),
    styles: [
      {
        featureType: "all",
        elementType: "all",
        stylers: [{ visibility: "on" }],
      },
      {
        featureType: "all",
        elementType: "geometry",
        stylers: [{ visibility: "on" }],
      },
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [{ saturation: 36 }, { color: "#000000" }, { lightness: 40 }],
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [
          { visibility: "on" },
          { color: "#000000" },
          { lightness: 16 },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }],
      },
      {
        featureType: "administrative.country",
        elementType: "geometry",
        stylers: [{ color: "#868686" }, { visibility: "off" }],
      },
      {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [{ visibility: "on" }],
      },
      {
        featureType: "administrative.country",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d2d2d2" }],
      },
      {
        featureType: "administrative.province",
        elementType: "geometry",
        stylers: [{ color: "#676767" }, { visibility: "on" }],
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#848484" }],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ color: "#000000" }, { lightness: 20 }],
      },
      {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [{ color: "#212121" }, { visibility: "on" }],
      },
      {
        featureType: "landscape.man_made",
        elementType: "geometry.fill",
        stylers: [{ visibility: "on" }, { color: "#212121" }],
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry.fill",
        stylers: [{ visibility: "on" }, { color: "#212121" }],
      },
      {
        featureType: "landscape.natural.landcover",
        elementType: "geometry.fill",
        stylers: [{ color: "#212121" }, { visibility: "on" }],
      },
      {
        featureType: "landscape.natural.terrain",
        elementType: "geometry.fill",
        stylers: [{ color: "#212121" }, { visibility: "on" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ lightness: 21 }, { color: "#212121" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#181818" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ visibility: "simplified" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ visibility: "simplified" }, { color: "#3c3c3c" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ lightness: 29 }, { weight: 0.2 }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [
          { color: "#4e4e4e" },
          { visibility: "simplified" },
          { lightness: "-20" },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ visibility: "simplified" }, { color: "#373737" }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [{ visibility: "on" }],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          { lightness: 16 },
          { color: "#313131" },
          { visibility: "simplified" },
        ],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          { color: "#212121" },
          { lightness: 19 },
          { visibility: "off" },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#000000" }, { visibility: "on" }],
      },
    ],
  };

  var mapElement = document.getElementById("map");
  var map = new google.maps.Map(mapElement, mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(40.67, -73.94),
    map: map,
    title: "Snazzy!",
  });
}
