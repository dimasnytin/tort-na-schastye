window.addEventListener("DOMContentLoaded", () => {
  new WOW().init();
    initComparisons();

    document.querySelectorAll(".select").forEach((select) => {
      NiceSelect.bind(select);
  });


  // Скорость вращения эллипса
  

  const ellipses = document.querySelectorAll(".promo__dashed-ellipse");
  if (ellipses.length > 0) {
    const ellipseSpeed = ellipses[0].getAttribute("data-rotation-speed");
    ellipses.forEach((ellipse) => {
      ellipse.style.animation = `dash ${ellipseSpeed}s linear`;
    });
  }

  // ellipses[0].style.display = "none";

  // плавный скролл к якорю
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute("href");

      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  // --------------------------------- Слайдеры ----------------------------------

  const clothesSwiper = new Swiper(".clothes__swiper", {
    // navigation: {
    //   prevEl: ".reviews__swiper__buttonPrev",
    //   nextEl: ".reviews__swiper__buttonNext",
    // },
    // pagination: {
    //   el: ".reviews__swiper__pagination",
    //   clickable: true,
    // },
    autoHeight: true,
    slidesPerView: "auto",
    // loop: true,
    spaceBetween: 21,
    // mousewheel: {
    //   enabled: true,
    //   eventsTarget: "container",
    // },
    breakpoints: {
      320: {
        centeredSlides: true,
        // initialSlide: 1,
      },
      576: {
        centeredSlides: false,
      },
    },
  });

  const interiorsSwiper = new Swiper(".interiors__swiper", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 21,
    
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      576: {
        centeredSlides: false,
      },
    },
  });

  const makeupSwiper = new Swiper(".makeup__swiper", {
    slidesPerView: "auto",
    autoHeight: true,
    loop: true,
    spaceBetween: 21,
    
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      576: {
        centeredSlides: false,
      },
    },
  });

  const videoReviewsSwiper = new Swiper(".video-reviews__swiper", {
    slidesPerView: "auto",
    autoHeight: true,
    loop: true,
    spaceBetween: 21,
    
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      576: {
        centeredSlides: false,
      },
    },
    on: {
      realIndexChange: function () {
        // console.log("swipe");
        pauseAllVideos();
      },
    },
  });

  const certificateSwiper = new Swiper(".certificate__swiper", {
    slidesPerView: "auto",
    spaceBetween: 21,
    centeredSlides: true,
    loop: true,
    
  });

  const certificateModalSwiper = new Swiper(".certificate__modal-swiper", {
    slidesPerView: "auto",
    spaceBetween: 21,
    centeredSlides: true,
    
    on: {
      activeIndexChange: function (e) {
        exampleCertificateBgChange(e.activeIndex);
      },
    },
  });

  const portfolioSwiper1 = new Swiper("#portfolio-swiper-1", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      576: {
        centeredSlides: false,
      },
    },
    navigation: {
      prevEl: "#portfolio-wiper-prev-1",
      nextEl: "#portfolio-wiper-next-1",
    },
  });

  const portfolioSwiper2 = new Swiper("#portfolio-swiper-2", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      576: {
        centeredSlides: false,
      },
    },
    navigation: {
      prevEl: "#portfolio-wiper-prev-2",
      nextEl: "#portfolio-wiper-next-2",
    },
  });

  const portfolioSwiper3 = new Swiper("#portfolio-swiper-3", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      576: {
        centeredSlides: false,
      },
    },
    navigation: {
      prevEl: "#portfolio-wiper-prev-3",
      nextEl: "#portfolio-wiper-next-3",
    },
  });

  const portfolioSwiper4 = new Swiper("#portfolio-swiper-4", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      576: {
        centeredSlides: false,
      },
    },
    navigation: {
      prevEl: "#portfolio-wiper-prev-4",
      nextEl: "#portfolio-wiper-next-4",
    },
  });

  const portfolioSwiper5 = new Swiper("#portfolio-swiper-5", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      576: {
        centeredSlides: false,
      },
    },
    navigation: {
      prevEl: "#portfolio-wiper-prev-5",
      nextEl: "#portfolio-wiper-next-5",
    },
  });

  const portfolioSwiper6 = new Swiper("#portfolio-swiper-6", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      576: {
        centeredSlides: false,
      },
    },
    navigation: {
      prevEl: "#portfolio-wiper-prev-6",
      nextEl: "#portfolio-wiper-next-6",
    },
  });

  const portfolioSwiper7 = new Swiper("#portfolio-swiper-7", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      576: {
        centeredSlides: false,
      },
    },
    navigation: {
      prevEl: "#portfolio-wiper-prev-7",
      nextEl: "#portfolio-wiper-next-7",
    },
  });

  const portfolioSwiper8 = new Swiper("#portfolio-swiper-8", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      576: {
        centeredSlides: false,
      },
    },
    navigation: {
      prevEl: "#portfolio-wiper-prev-8",
      nextEl: "#portfolio-wiper-next-8",
    },
  });

  const servicesSwiper1 = new Swiper("#services-swiper-1", {
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    
    slidesPerView: "auto",
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      750: {
        centeredSlides: false,
      },
    },
    navigation: {
      prevEl: "#services-swiper-prev-1",
      nextEl: "#services-swiper-next-1",
    },
  });

  const servicesSwiper2 = new Swiper("#services-swiper-2", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      576: {
        centeredSlides: false,
      },
    },
    navigation: {
      prevEl: "#services-swiper-prev-2",
      nextEl: "#services-swiper-next-2",
    },
  });

  const servicesSwiper3 = new Swiper("#services-swiper-3", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      576: {
        centeredSlides: false,
      },
    },
    navigation: {
      prevEl: "#services-swiper-prev-3",
      nextEl: "#services-swiper-next-3",
    },
  });

  const servicesSwiper4 = new Swiper("#services-swiper-4", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      576: {
        centeredSlides: false,
      },
    },
    navigation: {
      prevEl: "#services-swiper-prev-4",
      nextEl: "#services-swiper-next-4",
    },
  });

  const servicesSwiper5 = new Swiper("#services-swiper-5", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      576: {
        centeredSlides: false,
      },
    },
    navigation: {
      prevEl: "#services-swiper-prev-5",
      nextEl: "#services-swiper-next-5",
    },
  });

  const servicesSwiper6 = new Swiper("#services-swiper-6", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      576: {
        centeredSlides: false,
      },
    },
    navigation: {
      prevEl: "#services-swiper-prev-6",
      nextEl: "#services-swiper-next-6",
    },
  });

  const servicesSwiper7 = new Swiper("#services-swiper-7", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      576: {
        centeredSlides: false,
      },
    },
    navigation: {
      prevEl: "#services-swiper-prev-7",
      nextEl: "#services-swiper-next-7",
    },
  });

  const servicesSwiper8 = new Swiper("#services-swiper-8", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      576: {
        centeredSlides: false,
      },
    },
    navigation: {
      prevEl: "#services-swiper-prev-8",
      nextEl: "#services-swiper-next-8",
    },
  });

  const swipersArr = [
    clothesSwiper,
    interiorsSwiper,
    makeupSwiper,
    videoReviewsSwiper,
    certificateSwiper,
    certificateModalSwiper,
    portfolioSwiper1,
    portfolioSwiper2,
    portfolioSwiper3,
    portfolioSwiper4,
    portfolioSwiper5,
    portfolioSwiper6,
    portfolioSwiper7,
    portfolioSwiper8,
    servicesSwiper1,
    servicesSwiper2,
    servicesSwiper3,
    servicesSwiper4,
    servicesSwiper5,
    servicesSwiper6,
    servicesSwiper7,
    servicesSwiper8,
  ];

  // --------------------------- Увеличивающиеся изображения -----------------------------

  Fancybox.bind("[data-fancybox]", {
    on: {
      init: () => {
        swipersArr.forEach((swiper) => {
          swiper.disable();
        });
      },
      destroy: () => {
        swipersArr.forEach((swiper) => {
          swiper.enable();
        });
      },
    },
  });

  // -------------------------------- Сравнение изображений ---------------------------------

  const comparisonImg = document.querySelector(".rates__ready__comp-img-overlay img");

  if (comparisonImg) {
    setTimeout(() => {
      if (window.innerWidth <= 576 && window.innerWidth > 480) {
        const containerWidth = window.getComputedStyle(document.querySelector(".container")).width;
        comparisonImg.setAttribute("width", containerWidth.slice(0, -2));
        // console.log(containerWidth.slice(0, -2));
      } else if (window.innerWidth <= 480) {
        comparisonImg.setAttribute("width", window.innerWidth);
        // console.log(window.innerWidth);
      }
    }, 100);
  }

  function initComparisons() {
    var x, i;
    /*find all elements with an "overlay" class:*/
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
      /*once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function:*/
      compareImages(x[i]);
    }
    function compareImages(img) {
      var slider,
        img,
        clicked = 0,
        w,
        h;
      /*get the width and height of the img element*/
      w = img.offsetWidth;
      h = img.offsetHeight;
      /*set the width of the img element to 50%:*/
      img.style.width = w / 2 + "px";
      /*create slider:*/
      slider = document.querySelector(".img-comp-slider");
      // slider.setAttribute("class", "img-comp-slider");
      /*insert slider*/
      img.parentElement.insertBefore(slider, img);
      /*position the slider in the middle:*/
      slider.style.top = h / 2 - slider.offsetHeight / 2 + "px";
      slider.style.left = w / 2 - slider.offsetWidth / 2 + "px";
      /*execute a function when the mouse button is pressed:*/
      slider.addEventListener("mousedown", slideReady);
      /*and another function when the mouse button is released:*/
      window.addEventListener("mouseup", slideFinish);
      /*or touched (for touch screens:*/
      slider.addEventListener("touchstart", slideReady);
      /*and released (for touch screens:*/
      window.addEventListener("touchend", slideFinish);
      function slideReady(e) {
        /*prevent any other actions that may occur when moving over the image:*/
        e.preventDefault();
        /*the slider is now clicked and ready to move:*/
        clicked = 1;
        /*execute a function when the slider is moved:*/
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }
      function slideFinish() {
        /*the slider is no longer clicked:*/
        clicked = 0;
      }
      function slideMove(e) {
        var pos;
        /*if the slider is no longer clicked, exit this function:*/
        if (clicked == 0) return false;
        /*get the cursor's x position:*/
        pos = getCursorPos(e);
        /*prevent the slider from being positioned outside the image:*/
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        /*execute a function that will resize the overlay image according to the cursor:*/
        slide(pos);
      }
      function getCursorPos(e) {
        var a,
          x = 0;
        e = e.changedTouches ? e.changedTouches[0] : e;
        /*get the x positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x coordinate, relative to the image:*/
        x = e.pageX - a.left;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        return x;
      }
      function slide(x) {
        /*resize the image:*/
        img.style.width = x + "px";
        /*position the slider:*/
        slider.style.left = img.offsetWidth - slider.offsetWidth / 2 + "px";
      }
    }
  }

  // ------------------------------ Запуск видео со съемок -----------------------------------

  const filmingVideoWrapper = document.querySelector(".filming__video-wrapper");
  const filmingVideoIframe = document.querySelector(".filming__video-iframe");

  if (filmingVideoWrapper) {
    filmingVideoWrapper.addEventListener("click", () => {
      filmingVideoWrapper.style.display = "none";
      filmingVideoIframe.style.display = "block";
    });
  }

  // function startFilmingVideo() {
  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement("script");

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player("filming-video", {
      height: "434",
      width: "704",
      videoId: "swiZvVKxfRYllAph",
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    // console.log("change");
  }
  function stopVideo() {
    player.stopVideo();
  }
  // }

  // // --------------------------------- Настройка сертификата ---------------------------------------

  if (document.querySelector(".certificate__example-backgrounds")) {
    const certificateBackgroundImages = document
      .querySelector(".certificate__example-backgrounds")
      .querySelectorAll("img");
    // const certificateTitle = document.querySelector("#certificate-title");
    const certificateDescription = document.querySelector(".certificate__example__description");
    const certificateDescriptions = document.querySelectorAll(".certificate__example__description");
    const certificateDesignSelect = document.querySelector("#certificate-design-select");
    const certificateTextarea = document.querySelector("#certificate-textarea");
    const certificateTextareaMobile = document.querySelector(".certificate__modal__textarea");
    const certificateRateSelect = document.querySelector("#certificate-rate-select");
    const certificateModalExampleImgs = document.querySelectorAll(".certificate__modal__example > img");

    if (window.innerWidth > 576) {
      certificateDesignSelect.addEventListener("change", (e) => {
        displayCurrientCertificateBg(e.target.value);
      });

      function displayCurrientCertificateBg(bgNumber) {
        bgNumber = +bgNumber - 1;
        certificateBackgroundImages.forEach((bgImage, i) => {
          if (i !== +bgNumber) {
            bgImage.style.display = "none";
          } else {
            bgImage.style.display = "block";
          }
        });
      }

      displayCurrientCertificateBg(1);

      certificateTextarea.addEventListener("input", (e) => {
        const value = e.target.value;
        const maxTextLength = certificateDescription.getAttribute("data-max-text-length");

        if (value.length > 0) {
          certificateDescription.textContent = value;

          if (value.length <= 115) {
            certificateDescription.classList.remove("certificate__example__description_medium-text");
            certificateDescription.classList.remove("certificate__example__description_small-text");
          }

          if (value.length > 115 && value.length <= 156) {
            certificateDescription.classList.add("certificate__example__description_medium-text");
            certificateDescription.classList.remove("certificate__example__description_small-text");
          }

          if (value.length > 156) {
            certificateDescription.classList.add("certificate__example__description_small-text");
          }

          if (value.length > maxTextLength) {
            certificateDescription.textContent = value.slice(0, maxTextLength) + "...";
          }
        } else {
          certificateDescription.textContent = "Здесь можно указать текст поздравления";
        }
      });
    } else {
      certificateTextareaMobile.addEventListener("input", (e) => {
        const value = e.target.value;
        const maxTextLength = certificateDescription.getAttribute("data-max-text-length");

        if (value.length > 0) {
          certificateDescriptions.forEach((certificateDescription) => {
            certificateDescription.textContent = value;
          });

          if (value.length <= 115) {
            certificateDescriptions.forEach((certificateDescription) => {
              certificateDescription.classList.remove("certificate__example__description_medium-text");
              certificateDescription.classList.remove("certificate__example__description_small-text");
            });
          } else if (value.length > 115 && value.length <= 156) {
            certificateDescriptions.forEach((certificateDescription) => {
              certificateDescription.classList.add("certificate__example__description_medium-text");
              certificateDescription.classList.remove("certificate__example__description_small-text");
            });
          } else if (value.length > 156) {
            certificateDescriptions.forEach((certificateDescription) => {
              certificateDescription.classList.add("certificate__example__description_small-text");
            });
          } else if (value.length > maxTextLength) {
            certificateDescriptions.forEach((certificateDescription) => {
              certificateDescription.textContent = value.slice(0, maxTextLength) + "...";
            });
          }
        } else {
          certificateDescriptions.forEach((certificateDescription) => {
            certificateDescription.textContent = "Здесь можно указать текст поздравления";
          });
        }
      });
    }

    certificateModalExampleImgs.forEach((img, i) => {
      if (i !== 0) {
        img.classList.add("certificate__modal__example__img_hidden");
      }
    });
  }

  function exampleCertificateBgChange(bgIndex) {
    const certificateModalExampleImgs = document.querySelectorAll(".certificate__modal__example > img");

    certificateModalExampleImgs.forEach((img, i) => {
      if (i !== bgIndex) {
        img.classList.add("certificate__modal__example__img_hidden");
      } else {
        img.classList.remove("certificate__modal__example__img_hidden");
      }
    });
  }

  // ---------------------------------- Календари -----------------------------------------

  let isMobileWidth = window.innerWidth < 576 ? true : false;

  new AirDatepicker("#calendar-date-input", {
    isMobile: isMobileWidth,
    dateFormat(date) {
      return date.toLocaleString("ru", {
        day: "2-digit",
        month: "long",
      });
    },
    onHide(isFinished) {
      if (isFinished) {
        changeModalDateValue();
      }
    },
  });

  new AirDatepicker("#calendar-time-input", {
    timepicker: true,
    onlyTimepicker: true,
    isMobile: isMobileWidth,
    timeFormat: "HH:mm",
    minutesStep: 5,
    onHide(isFinished) {
      if (isFinished) {
        changeModalDateValue();
      }
    },
  });

  // ----------------------------- Видеоотзывы --------------------------------------

  const videoReviewButtonWrappers = document.querySelectorAll(".video-reviews__button-wrapper");
  const reviewVideos = document.querySelectorAll(".video-reviews__video");

  videoReviewButtonWrappers.forEach((buttonWrapper) => {
    buttonWrapper.addEventListener("click", () => {
      startReviewVideo(buttonWrapper);
    });
  });

  function startReviewVideo(buttonWrapper) {
    videoReviewButtonWrappers.forEach((wrapper) => {
      const videoWrapper = wrapper.parentNode.querySelector(".video-reviews__video-wrapper");
      const video = videoWrapper.querySelector("video");

      if (wrapper == buttonWrapper) {
        wrapper.classList.add("video-reviews__button-wrapper_hidden");
        videoWrapper.classList.remove("video-reviews__video-wrapper_hidden");
        video.play();
        createObserver(video);
      } else {
        wrapper.classList.remove("video-reviews__button-wrapper_hidden");
        videoWrapper.classList.add("video-reviews__video-wrapper_hidden");
        video.pause();
      }
    });
  }

  function pauseVideo(video) {
    const videoWrapper = video.parentNode;
    const buttonWrapper = videoWrapper.parentNode.querySelector(".video-reviews__button-wrapper");
    // const video = videoWrapper.querySelector("video");

    buttonWrapper.classList.remove("video-reviews__button-wrapper_hidden");
    videoWrapper.classList.add("video-reviews__video-wrapper_hidden");
    video.pause();
  }

  function pauseAllVideos() {
    reviewVideos.forEach((video) => {
      pauseVideo(video);
    });
  }

  function createObserver(targetElement) {
    if ("IntersectionObserver" in window) {
      let options = {
        root: null, // Использовать viewport как контейнер
        rootMargin: "0px", // Нет отступов
        threshold: 0, // Вызывать callback, как только любой пиксель элемента исчезнет из поля видимости
      };

      // Callback функция, которая вызывается при пересечении
      let observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            // Элемент пропал из видимости
            // console.log("Элемент пропал из видимости:", entry.target);
            pauseVideo(entry.target);
            // Вызывайте здесь свою функцию или выполняйте необходимые действия
          }
        });
      };

      // Создаем наблюдателя с заданными опциями и callback функцией
      let observer = new IntersectionObserver(observerCallback, options);

      // Наблюдаем за целевым элементом
      observer.observe(targetElement);
    } else {
      // Intersection Observer не поддерживается
      // console.log("Intersection Observer не поддерживается в этом браузере.");
    }
  }

  // --------------------------- Lottie анимации ------------------------------------

  lottie.loadAnimation({
    container: document.querySelector("#send-message-anim"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "./../assets/lottie/send-message.json",
  });

  lottie.loadAnimation({
    container: document.querySelector("#bicycle-animation"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "./../assets/lottie/cyclist.json",
  });

  const successAnim = lottie.loadAnimation({
    container: document.querySelector("#thanks-modal-animation"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "./../assets/lottie/success.json",
  });

  // --------------------------- Изменение параметров -----------------------------

  const processBlockItem = document.querySelectorAll(".process__block-item");

  processBlockItem.forEach((item) => {
    item.setAttribute("data-wow-delay", "0");
  });

  // -------------------------- Прочие настройки --------------------------------

  const burgers = document.querySelectorAll(".burger");

  burgers.forEach((item) => {
    item.addEventListener("click", () => {
      toggleBurger(item);
    });
  });

  function toggleBurger(burgerNode) {
    burgerNode.classList.toggle("burger_active");
  }

  const certificateMobileButton = document.querySelector(".certificate__mobile-button");
  const certificateModal = document.querySelector(".certificate__modal");
  const certificateModalClose = document.querySelector(".certificate__modal__close");

  if (certificateMobileButton) {
    certificateMobileButton.addEventListener("click", () => {
      certificateModal.classList.add("modal-visible");
    });

    certificateModalClose.addEventListener("click", () => {
      certificateModal.classList.remove("modal-visible");
    });

    if (window.innerWidth <= 750) {
      const winnersImgs = document.querySelectorAll(".winners__img");

      winnersImgs.forEach((img) => {
        img.setAttribute("data-wow-delay", "0");
      });
    }
  }

  // ---------- sidebar ----------

  const headerHamburger = document.querySelector("#header-hamburger");
  const sidebar = document.querySelector(".sidebar");
  const sidebarClose = document.querySelector(".sidebar__close");
  const sidebarItemLinks = document.querySelectorAll(".sidebar__item__link");
  const shadow = document.querySelector(".shadow");
  const body = document.querySelector("body");

  function openSidebar() {
    sidebar.classList.add("sidebar_opened");
    shadow.classList.add("shadow_visible");
    body.style.overflowY = "hidden";
  }

  function closeSidebar() {
    sidebar.classList.remove("sidebar_opened");
    shadow.classList.remove("shadow_visible");
    body.style.overflowY = "visible";
  }

  headerHamburger.addEventListener("click", () => {
    openSidebar();
  });

  shadow.addEventListener("click", () => {
    closeSidebar();
  });

  sidebarClose.addEventListener("click", () => {
    closeSidebar();
  });

  sidebarItemLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeSidebar();
    });
  });

  // -------- Модальные окна ------------

  const modalCloseButtons = document.querySelectorAll(".modal__close");
  const modals = document.querySelectorAll(".modal");
  const feedbackModals = document.querySelectorAll(".feedback-modal");
  const feedbackModalsForms = document.querySelectorAll(".feedback-modal__form");
  const thanksModal = document.querySelector(".thanks-modal");

  function closeModals() {
    modals.forEach((modal) => {
      modal.classList.remove("modal-visible");
    });
    shadow.classList.remove("shadow_visible");
    body.style.overflowY = "visible";
    successAnim.stop();
  }

  function openModal(modalNode) {
    modalNode.classList.add("modal-visible");
    shadow.classList.add("shadow_visible");
    body.style.overflowY = "hidden";
  }

  // function clearInputs() {
  //   const inputs = document.querySelectorAll(".input");

  //   inputs.forEach(input => {
  //     input.value = null;
  //     console.log(input);
  //   })
  // }

  modalCloseButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
      closeModals();
    });
  });

  shadow.addEventListener("click", () => {
    closeModals();
  });

  feedbackModalsForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputs = form.querySelectorAll('input[type="text"]');
      let isValid = true;
      inputs.forEach((input) => {
        if (input.value === "") {
          input.classList.add("error");
          isValid = false;
        } else {
          input.classList.remove("error");
        }

        if (isValid) {
          closeModals();
          openModal(thanksModal);
          setTimeout(() => {
            successAnim.play();
          }, 100);
          // console.log("closeModals");
        }
      });
    });
  });

  const ratesButtons = document.querySelectorAll(".rates__rate-item__button");
  const welcomeButton = document.querySelector(".welcome__button");
  // const servicesItemButtons = document.querySelectorAll(".services__item__button");
  const ratesFeedbackModal = document.querySelector(".rates__feedback-modal");

  if (welcomeButton) {
    ratesButtons.forEach((button) => {
      button.addEventListener("click", () => {
        openModal(ratesFeedbackModal);
      });
    });

    welcomeButton.addEventListener("click", () => {
      openModal(ratesFeedbackModal);
    });
  }

  const orderCertificateButtons = document.querySelectorAll(".order-certificate");
  const orderCertificateForms = document.querySelectorAll(".certificate__options");
  const orderCertificateModal = document.querySelector(".certificate__feedback-modal");

  orderCertificateButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openModal(orderCertificateModal);
    });
  });

  orderCertificateForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      openModal(orderCertificateModal);
    });
  });

  const calendarCheckButton = document.querySelector(".calendar__button");
  const calendarModal = document.querySelector(".calendar__feedback-modal");
  const calendarDateInput = document.querySelector("#calendar-date-input");
  const calendarTimeInput = document.querySelector("#calendar-time-input");
  const feedbackModalDate = document.querySelector("#feedback-modal-date");

  if (calendarCheckButton) {
    calendarCheckButton.addEventListener("click", () => {
      openModal(calendarModal);
    });
  }

  function changeModalDateValue() {
    feedbackModalDate.textContent = calendarDateInput.value + " " + calendarTimeInput.value;
  }

  //  Валидация форм

  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      const inputs = form.querySelectorAll('input[type="text"]');
      let isValid = true;

      // console.log(inputs);
      inputs.forEach((input) => {
        if (input.value === "") {
          input.classList.add("error");
          isValid = false;
        } else {
          input.classList.remove("error");
          isValid = true;
        }

        if (!isValid) {
          // console.log(!isValid);
          e.preventDefault();
        }
      });
    });

    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach((input) => {
      input.addEventListener("input", function () {
        if (input.value !== "") {
          input.classList.remove("error");
        }
      });
    });
  });
});
