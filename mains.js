let test = $("#a");
let sample = $("#b");
let nav = $(".nav");

test.on({
  click: function () {
    // $("h1").hide();
    $(".a").slideUp();
    console.log("ボタンが押されました");
  },
});

sample.on({
  click: function () {
    $(".b").toggleClass("c");
    console.log("ボタンが押されました");
  },
});

nav.on({
  click: function () {
    $(".nav").toggleClass("active");
    console.log("navが押されました");
  },
});

console.log(test);
