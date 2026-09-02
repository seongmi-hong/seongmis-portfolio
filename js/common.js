$(document).ready(function () {
  // 모바일 GNB 메뉴 초기화
  $(".header").removeClass("is-open");

  // 테마 변경 이미지의 기본 src 저장
  $("[data-dark]").each(function () {
    $(this).data("default-src", $(this).attr("src"));
  });

  // 저장된 테마 불러오기
  if (localStorage.getItem("theme") === "dark") {
    $("html").attr("data-theme", "dark");

    $("[data-dark]").each(function () {
      $(this).attr("src", $(this).attr("data-dark"));
    });
  }

  // 테마 전환
  $(".header__theme-toggle").click(function () {
    if ($("html").attr("data-theme") === "dark") {
      // Light
      $("html").removeAttr("data-theme");
      localStorage.setItem("theme", "light");

      $("[data-dark]").each(function () {
        $(this).attr("src", $(this).data("default-src"));
      });
    } else {
      // Dark
      $("html").attr("data-theme", "dark");
      localStorage.setItem("theme", "dark");

      $("[data-dark]").each(function () {
        $(this).attr("src", $(this).attr("data-dark"));
      });
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

  //화면 진입 애니메이션
  $(".project-detail__item>img").addClass("observe");
  $(".project-detail__summary").addClass("observe");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const $target = $(entry.target);

        if (entry.isIntersecting) {
          $target.addClass("is-visible");
          return;
        }

        // 요소가 화면 아래쪽에 있을 때만 초기화
        if (entry.boundingClientRect.top >= window.innerHeight) {
          $target.removeClass("is-visible");
        }
      });
    },
    {
      threshold: 0,
    },
  );

  $(".observe").each(function () {
    observer.observe(this);
  });
});
