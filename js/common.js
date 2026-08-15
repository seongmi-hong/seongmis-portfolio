$(document).ready(function () {
  $(".header__theme-toggle").click(function () {
    if ($("html").attr("data-theme") === "dark") {
      $("html").removeAttr("data-theme");
    } else {
      $("html").attr("data-theme", "dark");
    }
  });

  $(".header__menu-toggle").click(function () {
    $(".header").toggleClass("is-open");
  });
});
