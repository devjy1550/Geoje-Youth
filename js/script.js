// Jquery이용
// $(document).ready()
// $('.inner')
// $('.sw-swiper' a)

$(document).ready(function () {
  // 전체메뉴 보기 기능
  // .more-wrap 저장해서 활용하자.
  let more_wrap = $(".more-wrap");

  // .member-more 저장해서 활용하자.
  let member_more = $(".member-more");
  member_more.click(function () {
    more_wrap.fadeIn(300);
  });
  // .mm-close 를 활용하자.
  let mm_close = $(".mm-close");
  mm_close.click(function () {
    more_wrap.fadeOut(300);
  });

  // 더보기 메뉴 배경을 클릭하면 사라지기
  more_wrap.click(function () {
    more_wrap.fadeOut(300);
  });

  $(".more-menutap").click(function (event) {
    // 클릭 신호(이벤트) 전달 방지
    event.stopPropagation();
  });


  // 모바일메뉴기능
  // .mb-bt를 저장해서 활용하자.
  $(".mb-btn").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("mb-btn-open");
    $(".mb-dim").toggleClass("mb-dim-open");
    $(".mb-wrap").toggleClass("mb-wrap-open");
    //
  });

  // 화면사이즈 체크
  $(window).resize(function () {
    // 화면너비를 계산한다.
    let temp = $(window).width();
    // 1000px 보다 크면
    if (temp > 1000) {
      // 모바일 버튼 기능 초기화
      $(".mb-btn").removeClass("mb-btn-open");
      $(".mb-dim").removeClass("mb-dim-open");
      $(".mb-wrap").removeClass("mb-wrap-open");
      $(".mb-menu>li").height(60);
      $(".mb-mainmenu").removeClass("mb-mainmenu-open");
    }
  }); // 모바일메뉴 펼치기기능
  // 1.모바일메뉴저장

  let mb_mainmenu = $(".mb-mainmenu");
  // 2.모바일서브메뉴 저장
  let mb_submenu = $(".mb-submenu");
  // 3.펼쳐질 서브메뉴의 높이값
  let mb_submenu_high = [];
  // 높이값 계산을 실행
  $.each(mb_submenu, function (index) {
    // 각각의 .mb_submenu로 가서 li의 개수를 파악한다.
    let count = $(this).find("li").length; //length는 숫자(갯수)를 말해준다.
    // 최종결과를 저장 (56*count)
    mb_submenu_high[index] = 56 * count; //56X갯수를 index(순서값)에다가 보관하라는 이야기.
  });
  // console.log(mb_menu_high);

  // 최종결과
  let mb_li = $(".mb-menu > li");
  $.each(mb_mainmenu, function (index) {
    $(this).click(function (e) {
      // 웹브라우저 갱신막기
      e.preventDefault();

      // mb-mainmenu-open 를 toggleClass 한다.
      $(this).toggleClass("mb-mainmenu-open");
      // 만약에 mb-mainmenu-open 이 있으면 펼치고
      // 없으면 닫고
      let active = $(this).hasClass("mb-mainmenu-open");
      if (active) {
        let temp = mb_submenu_high[index];
        mb_li.eq(index).height(temp + 60);
      } else {
        mb_li.eq(index).height(60);
      }
    });
  });
  // 모바일 메뉴 배경 클릭시 사라짐.
  let mb_dim = $(".mb-dim");
  mb_dim.click(function () {
    // 모바일 버튼 기능 초기화
    $(".mb-btn").removeClass("mb-btn-open");
    $(".mb-dim").removeClass("mb-dim-open");
    $(".mb-wrap").removeClass("mb-wrap-open");
    $(".mb-menu>li").height(60);
    $(".mb-mainmenu").removeClass("mb-mainmenu-open");
  });

  $(".mb-btn").removeClass("mb-btn-open");
  //커뮤니티 영역 데이터 연동
  // 이룸소식         :     Array [] 구현
  let infoLinkArr = ["#1", "#2", "#3", "#4"];
  let infoTitleArr = [
    " 6 월 인문학특강[4 차 산업혁명과 청년]",
    "내꿈공간(내 일을 꿈꾸는 청년창업공간) 대관 안내",
    "6 월 취창업 프로그램, NCS 특강 안내♡",
    "5 월 인문학 특강[칸트 철학으로 만나는 인성",
  ];
  let infoDateArr = [
    "2022. 06. 08",
    "2022. 06. 02",
    "2022. 05. 31",
    "2022. 05. 12",
  ];

  let comuList = $(".comu-list");
  let communityOutput = "";

  for (let i = 0; i < infoLinkArr.length; i++) {
    let temp = `
      <li>
        <a href="${infoLinkArr[i]}">${infoTitleArr[i]}</a>
        <span>${infoDateArr[i]}</span>
      </li>
    `;
    communityOutput += temp;
  }

  comuList.html(communityOutput);
  // 청년정책 새소식  : 객체  {} 구현
  let newsData = [
    {
      link: "#1",
      title: "2022 경남 청년 라이브커머스 아카데미 참가자 모집 공고",
      date: "2022.06.27",
    },
    {
      link: "#2",
      title: "청춘다락, 7월 프로그램 참여자 선정 결과(예비명단 포함)",
      date: "2022.06.23",
    },
    {
      link: "#3",
      title: "「2022년 청년, 거제에서 한 달 살아보기」 참여 청년 모집!!",
      date: "2022.06.15",
    },
    {
      link: "#4",
      title: "2022년 거제시 청년 월세 지원사업 선정 결과",
      date: "2022.06.08",
    },
  ];

  let dataNewsDiv = $(".data-news");
  let dataNewsOutput = "";
  for (let i = 0; i < newsData.length; i++) {
    //데이터를 하나씩 가져와서 뜯는다.
    let data = newsData[i];
    let temp = `
    <li>
      <a href="${data.link}">${data.title}</a>
      <span>${data.date}</span>
    </li>
  `;

    dataNewsOutput += temp;
  }
  dataNewsDiv.html(dataNewsOutput);
});

// js이용 : 멀티미디어 요소
window.onload = function () {
  // 비주얼 슬라이드
  let sw_visual = new Swiper(".sw-visual", {
    loop: true,
    speed: 1000,
    effect: "fade",
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sw-visual-pgnt",
      clickable: true,
    },
  });
  // 일시멈춤버튼
  // 현재상태저장
  let slide_now = "ing"; // 이건내가직접정의한것
  $(".sw-visual-bt").click(function () {
    if (slide_now == "ing") {
      // 현재 슬라이드 진행 중이라면
      // 슬라이드를 멈춘다.
      slide_now = "stop";
      sw_visual.autoplay.stop();
      $(this).find(">span").text("play_arrow");
    } else {
      // 현재 슬라이드가 멈췄다.
      // 다시 슬라이드를 진행한다.
      slide_now = "ing";
      sw_visual.autoplay.start();
      $(this).find("span").text("pause");
    }
  });
  new Swiper(".sw-banner", {
    loop: true,
    slidesPerView: 4, //P,V는 무조건 대문자 , 한줄에 6개 나와라는얘기
    spaceBetween: 20, //B는 무조건 대문자 , 배너간의 간격 이야기임
    navigation: {
      prevEl: ".sw-banner-prev",
      nextEl: ".sw-banner-next",
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1400: {
        slidesPerView: 6,
      },
      1260: {
        slidesPerView: 5,
      },
      1000: {
        slidesPerView: 4,
      },
      860: {
        slidesPerView: 3,
      },
    },
  });

  // 바로윗부분 브레이크포인트는 직접숫자조절은 한번 꼭해보길바람.

  // 배너 슬라이드 일시멈춤 버튼
  $(".sw-banner-pause").click(function () {
    // 현재 span 태그 안쪽의 글자를 읽는다.
    let temp = $(this).find("span").text();
    if (temp == "play_arrow") {
      $(this).find("span").text("pause");
      sw_banner.autoplay.stop();
    } else {
      $(this).find("span").text("play_arrow");
      sw_banner.autoplay.start();
    }
  });

  // 화면 위로 이동
  $(".gotop").click(function () {
    $("html").animate({
      scrollTop: 0,
    }); //}, 1000); 이런식으로 1000은 1초란의미 속도지정이된단얘기다.
  });

  //활동 갤러리 함수 작성
  // 자료를 전달을 하면 활동 갤러리 목록에 출력을 한다.
  //(링크, 사진, 날짜 ,제목)
  //특정한 html의 요소에 출력을 해야한다.

  // 출력할 데이터 모음
  let galleryData = [
    {
      link: "#",
      title: "3월 인문학 특강 [우리 삶에 철학이 필요한 이유]",
      date: "2021-12-14",
      pic: "sdafasdfasd.jpg",
    },
    {
      link: "#",
      title: "12월 문화특강 주간 ♡ 크리스마스 입욕제 만들기",
      date: "2021-12-14",
      pic: "tmb_data_file_52_20211214112755_0.jpg",
    },
    {
      link: "#",
      title: "12월 문화특강 주간 ♡ 플레이팅 도마 만들기",
      date: "2021-12-14",
      pic: "tmb_data_file_53_20211214112958_0.jpg",
    },
  ];

  function showGalleryInfo(_tag, _data) {
    //대상을 찾아라
    let who = $(_tag);
    // console.log(who);

    who.attr("href", _data.link); //attribute

    let html = `
    <span class="gl-img"></span>
    <p class="gl-content">
      <span class="glc-title">
      ${_data.title}
      </span>
      <span class="glc-date">
      ${_data.date}
      </span></p>
    `;

    who.html(html);

    // 배경을 넣자.
    let bg = who.find(".gl-img");
    bg.css("background", "url(images/" + _data.pic + ") no-repeat center");
    bg.css("background-size", "cover");
  }

  showGalleryInfo("#gallery-list-01", galleryData[0]);
  showGalleryInfo("#gallery-list-02", galleryData[1]);
  showGalleryInfo("#gallery-list-03", galleryData[2]);

  $("#datepicker").datepicker({
    changeMonth: false,
    autoSize: true,
    firstDay: 0,
    showMonthAfterYear: true,
    dayNames: [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ],
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
    monthNamesShort: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ],
    monthNames: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ],
    // onSelect: function () {
    //   // 월, 년 변경 이벤트
    //   setTimeout(function () {
    //     let datepickerA = $("#datepicker td a");
    //     $.each(datepickerA, function (index, item) {
    //       let now = $(this).attr("data-date");
    //       now = parseInt(now);
    //       if (now < 10) {
    //         $(this).text("0" + now);
    //         $(this).attr("data-date", "0" + now);
    //         console.log("gogo");
    //       }
    //     });
    //   }, 0);
    // },
    // onChangeMonthYear: function () {
    //   // 월, 년 변경 이벤트
    //   setTimeout(function () {
    //     let datepickerA = $("#datepicker td a");
    //     $.each(datepickerA, function (index, item) {
    //       let now = $(this).attr("data-date");
    //       now = parseInt(now);
    //       if (now < 10) {
    //         $(this).text("0" + now);
    //         $(this).attr("data-date", "0" + now);
    //         console.log("gogo");
    //       }
    //     });
    //   }, 0.001);
    // },
  });

  // 날짜 변경해서 밀어넣기
  // let datepickerA = $("#datepicker td a");
  // $.each(datepickerA, function (index, item) {
  //   let now = $(this).attr("data-date");
  //   now = parseInt(now);
  //   if (now < 10) {
  //     $(this).text("0" + now);
  //   }
  // });
};

//   //  ~~~ () 는 ~~~함수, ()는 변수값 이라고 생각해라. 표현자체도 function이네!!
//   $('.sw-visual-bt').click(function () {
//     // $는 찾아라!!라는의미, click을햇을때 작용하고싶은것은 click옆 ()에 다적는다.
//     // 1번 아이콘바꾸기
//     $(this).toggleClass('sw-visual-bt-play');
//     //  $(this)는 $처리를한 최초값
//     // 2번 슬라이드토글시키기
//     // 현재 슬라이드상태
//     let temp = $(this).hasClass('sw-visual-bt-play');
//     if (temp) {
//       // 슬라이더멈추기
//       sw_visual.autoplay.stop();
//     } else {
//       // 슬라이더재생하기
//       sw_visual.autoplay.start();
//     }
//   });

// }

//
