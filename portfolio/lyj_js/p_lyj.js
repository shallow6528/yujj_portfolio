
//메뉴
$("#allMenu").click(function () {
  $(this).toggleClass("open");
  $("#gnb").toggleClass("open"); 
});
$("#gnb a").click(function (e) {
  e.preventDefault();
  var clicka = $(this);
 
  $("body, html").animate(
    {
      //헤더 높이 반영하여 scrollTop 계산
      scrollTop: $(clicka.attr("href")).offset().top ,
    },
    400,
    function () {
      // $("#gnb a").removeClass("act");
      // clicka.addClass("act");
      // 모바일 메뉴 닫기 추가
    $("#allMenu").removeClass("open");
    $("#gnb").removeClass("open");
    } 
  );
});


//커서
class IntersectionObserverList {
  mapping;
  observer;
  constructor() {
    this.mapping = new Map();
    this.observer = new IntersectionObserver(
      (entries) => {
        for (var entry of entries) {
          var callback = this.mapping.get(entry.target);

          callback && callback(entry.isIntersecting);
        }
      },
      {
        rootMargin: "300px 0px 300px 0px",
      }
    );
  }
  add(element, callback) {
    this.mapping.set(element, callback);
    this.observer.observe(element);
  }
  ngOnDestroy() {
    this.mapping.clear();
    this.observer.disconnect();
  }
  remove(element) {
    this.mapping.delete(element);
    this.observer.unobserve(element);
  }
}
const observer = new IntersectionObserverList();

$(window).mousemove(function (e) {
  $(".ring").css(
    "transform",
    `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
  );
});

// $(document).ready(function () {
//   AOS.init(); //aos 실행 객체에 직접 값을 넣은것
//   $(document).ready(function () {
//     "use strict";
//   });
