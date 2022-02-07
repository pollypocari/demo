// multi language js
// https://codepen.io/erikkjon88/pen/MGWzwV
var arrLang = {
  "en": {
    "quizResponse": "15K response",
    "quizTitle": "Hey Cuspers, It's Time To Figure Out Your Generation, Once And For All",
    "quizDesc": "So, we've all heard about Gen Z calling out millennials for being uncool, and the older generation fighting back. But if you're a cusper, you might be feeling a little conflicted. Luckily, this quiz will sort you into the right generation so you know which side to take!",
    "q1Title": "Want to buy tomorrow's hot pot dishes, what would you do?",
    "q1Option1": "Go to the supermarket to buy hot pot ingredients",
    "q1Option2": "Order directly online",
    "q2Title": "When a friend asks you to describe the taste of vegetables...",
    "q2Option1": "Describe the taste carefully",
    "q2Option2": "Describe the taste roughly",
    "q3Title": "You grow too many vegetables, what do you do:",
    "q3Option1": "Share with neighbors for free",
    "q3Option2": "Cook it and invite friends to eat at home",
    "q4Title": "When shopping for snacks, what do you do:",
    "q4Option1": "Buy the serving size and buy it tomorrow when I want it",
    "q4Option2": "Buy multiple days quantity at once",
    "q5Title": "When a friend invites you to dinner, but brings someone you don't know, you feel:",
    "q5Option1": "It doesn't matter",
    "q5Option2": "Feel inconvenient, uncomfortable",
  },
  "zh-tw": {
    "quizResponse": "15K 網友實測",
    "quizTitle": "「蔬菜MBTI」測驗！測出你的真實性格、朋友類型，準到起雞皮",
    "quizDesc": "韓網瘋傳超療癒的「蔬菜版MBTI測驗」，5道題不僅能測出你的代表蔬菜，還能知道你和哪個蔬菜合得來、合不來，除了測試結果超準，還非常可愛有趣！趕緊跟著測測看！",
    "q1Title": "要買明後天要吃的火鍋蔬菜，你會？",
    "q1Option1": "久違的出門，順便去超市買火鍋料",
    "q1Option2": "嫌麻煩，直接網路下單",
    "q2Title": "朋友請你描述蔬菜的味道時...",
    "q2Option1": "深思熟慮之後，仔細地描述味道與口感",
    "q2Option2": "隨意講講",
    "q3Title": "菜園蔬菜種得太多了，你會：",
    "q3Option1": "免費分享給鄰居",
    "q3Option2": "煮成料理找朋友來家裡吃",
    "q4Title": "買零食時，你是：",
    "q4Option1": "只吃今天的量，明天想吃的時候再去買",
    "q4Option2": "一次買足「好幾天」的份量",
    "q5Title": "朋友約你吃飯，但帶了你不認識的人，你會覺得：",
    "q5Option1": "無所謂，就這樣吧！",
    "q5Option2": "感到不方便、不自在",
  }
};

$(document).ready(function() {
  var lang = "en";
  $(".lang").each(function(index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

$(".translate").click(function() {
  $('html,body').animate({scrollTop: 0},0);
  var lang = $(this).attr("id");
  $(".lang").each(function(index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});



// Anchor to next question
// https://codepen.io/kasap-victor/pen/rNVRxPM
$("#q1 .quizOption-item").click(function() {
  $(this).addClass('selected')
  $(this).siblings().removeClass('selected')
  $("#q1 .quizOption-item").not(this).addClass('unselected')
  $("#q1 .quizOption-item").not(this).siblings().removeClass('unselected')
  $('html,body').delay(450).animate({
    scrollTop: $("#q2").offset().top - 32}, 'slow');
});

$("#q2 .quizOption-item").click(function() {
  $(this).addClass('selected')
  $(this).siblings().removeClass('selected')
  $("#q2 .quizOption-item").not(this).addClass('unselected')
  $("#q2 .quizOption-item").not(this).siblings().removeClass('unselected')
  $('html,body').delay(450).animate({
    scrollTop: $("#q3").offset().top - 32}, 'slow');
});

$("#q3 .quizOption-item").click(function() {
  $(this).addClass('selected')
  $(this).siblings().removeClass('selected')
  $("#q3 .quizOption-item").not(this).addClass('unselected')
  $("#q3 .quizOption-item").not(this).siblings().removeClass('unselected')
  $('html,body').delay(450).animate({
    scrollTop: $("#q4").offset().top - 32}, 'slow');
});

$("#q4 .quizOption-item").click(function() {
  $(this).addClass('selected')
  $(this).siblings().removeClass('selected')
  $("#q4 .quizOption-item").not(this).addClass('unselected')
  $("#q4 .quizOption-item").not(this).siblings().removeClass('unselected')
  $('html,body').delay(450).animate({
    scrollTop: $("#q5").offset().top - 32}, 'slow');
});

$("#q5 .quizOption-item").click(function() {
  $(this).addClass('selected')
  $(this).siblings().removeClass('selected')
  $("#q5 .quizOption-item").not(this).addClass('unselected')
  $("#q5 .quizOption-item").not(this).siblings().removeClass('unselected')
});



// Random colors
// https://stackoverflow.com/questions/21289681/set-random-background-colors-for-multiple-divs
var colors = ["orange", "purple", "blue"]
var randomColor = Math.floor(Math.random()*colors.length);

$(".quizOption-item-plain").each(function () {
  $(this).addClass(colors[randomColor]);
  randomColor = (randomColor + 1) % colors.length;
});



// Parallax scroll
// https://codepen.io/webmadewell/pen/EqwxEJ
$(document).ready(function() {
  $(window).on("load scroll", function() {
    var parallaxElement = $(".deco-parallax"),
        parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function() {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
            windowTop = $(window).scrollTop(),
            elementTop = currentElement.offset().top,
            elementHeight = currentElement.height(),
            viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
            scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * -0.15 + "px, 0)"
        });
      }
    });
  });
});
