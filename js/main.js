$(document).ready(function () {
  $(".contact__copy").click(function () {
    const email = $(".contact__email a").text().trim();

    navigator.clipboard.writeText(email).then(function () {
      $(".contact__copy-message").text("복사되었습니다.");

      setTimeout(function () {
        $(".contact__copy-message").text("");
      }, 2000);
    });
  });
});
