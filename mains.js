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
    nav.toggleClass("active");
    $(".anime").toggleClass("animated");
    $(".manu").toggleClass("manu__none");
    $(".manu__nav").toggleClass("manu__nav__1");
    console.log("navが押されました");
  },
});

$("#foo").slideUp(500).fadeIn(400);

console.log(test);
