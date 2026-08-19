$(document).ready(function () {
  // 모바일 GNB 메뉴 초기화
  $(".header").removeClass("is-open");

  // 저장된 테마 불러오기
  if (localStorage.getItem("theme") === "dark") {
    $("html").attr("data-theme", "dark");
    $(".hero__visual img").attr("src", "./images/main/hero-dark.svg");
  }

  // 테마 전환
  $(".header__theme-toggle").click(function () {
    if ($("html").attr("data-theme") === "dark") {
      $("html").removeAttr("data-theme");
      localStorage.setItem("theme", "light");

      $(".hero__visual img").attr("src", "./images/main/hero.svg");
      $(".hero__scroll img").attr("src", "./images/main/scroll-arrow.svg");
      $(".detail-bt img").attr("src", "/images/common/detail-arrow.svg");
    } else {
      $("html").attr("data-theme", "dark");
      localStorage.setItem("theme", "dark");

      $(".hero__visual img").attr("src", "./images/main/hero-dark.svg");
      $(".hero__scroll img").attr("src", "./images/main/scroll-arrow-dark.svg");
      $(".detail-bt img").attr("src", "/images/common/detail-arrow-dark.svg");
    }
  });

  // 모바일 GNB 메뉴 열기 / 닫기
  $(".header__menu-toggle").click(function () {
    $(".header").toggleClass("is-open");
  });

  // 메뉴 선택 시 닫기
  $(".header__nav a").click(function () {
    $(".header").removeClass("is-open");
  });

  // 모바일 영역을 벗어나면 GNB 메뉴 닫기
  $(window).resize(function () {
    if ($(window).width() > 767) {
      $(".header").removeClass("is-open");
    }
  });
});
