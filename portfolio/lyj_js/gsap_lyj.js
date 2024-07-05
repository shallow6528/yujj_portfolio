// section01 메인 글씨 split-type 사용하기
const targets = gsap.utils.toArray(".split");
        
targets.forEach(target => {
    let SplitClient = new SplitType(target, {type: "lines, words, chars"});
    let lines = SplitClient.lines;
    let words = SplitClient.words;
    let chars = SplitClient.chars;

        gsap.from(chars, {
            yPercent: 100,
            autoAlpha: 0,
            duration: 1,
            ease: "back.out",
            stagger: {
                amount: 1,
                from : "random"
            },
            scrollTrigger: {
                trigger: target,
                start: "top bottom",
                end: "+=400",
                markers: false
            }
    });
});

// section 01 핀 고정
const panel = document.querySelector(".section1");

ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false
});


// section 03 ~ 04 텍스트 애니메이션
const section04 = gsap.timeline();
section04.from(".section4 .t1", {xPercent: 133}, "text")
    .from(".section4 .t2", {xPercent: -133}, "text")
    .from(".section4 .t3", {xPercent: 133}, "text")
    .from(".section4 .t4", {xPercent: -133}, "text")
section04.to(".section4 .t1", {xPercent: 0}, "text")
    .to(".section4 .t2", {xPercent: 0}, "text")
    .to(".section4 .t3", {xPercent: 0}, "text")
    .to(".section4 .t4", {xPercent: 0}, "text")
ScrollTrigger.create({
    animation: section04,
    trigger: ".section4",
    start: "top top",
    end: "+=3000",
    scrub: true,
    pin: true,
    //anticipatePin: pin효과 자연스럽게 연출
    anticipatePin: 1
});

// 헤더 메뉴
let links = gsap.utils.toArray("#gnb li a");

links.forEach(link => {
    let element = document.querySelector(link.getAttribute("href")),
    
    linkST = ScrollTrigger.create({
        trigger: element,
        //top top 시 page_2 위치 못잡아서 top center로 해둠
        start: "top center"
    });

    ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
        onToggle: self => setActive(link)
    });

    link.addEventListener("click", e => {
        e.preventDefault();
        gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
    });
});

function setActive(link) {
    links.forEach(el => el.classList.remove("active"));
    link.classList.add("active");
}
