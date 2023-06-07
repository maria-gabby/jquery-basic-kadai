$(function() {
    // 色が変わる（赤色に変化）
    $("#change-color").click(function() {
      $("#target").css("color", "red");
    });
  
    // 文字が切り替わる（「こんにちは！」から「Hello World!」に変化）
    $("#change-text").click(function() {
      $("#target").text("Hello World!");
    });
  
    // フェードアウトで文字が消える
    $("#fade-out").click(function() {
      $("#target").fadeOut();
    });
  
    // フェードインで文字が現れる
    $("#fade-in").click(function() {
      $("#target").fadeIn();
    });
  });
  