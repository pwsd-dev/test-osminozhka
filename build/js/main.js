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

  // - fixme
  //     $("#burgerBtn").click(function () {
  //         $("#other").fadeOut();
  //     });
});
