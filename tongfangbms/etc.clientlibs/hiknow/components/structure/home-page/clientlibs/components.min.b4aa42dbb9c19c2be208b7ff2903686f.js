;
$(function () {
    if($(".banner-btn-link").hasClass("video-btn")){
        $(".banner-btn-link.video-btn").addClass("hik-video-trigger")
    }
    function initClickAt() {
        $('.new-banner-full').each(function(){
            (function(self){
                var transitionInterval = $(self).attr('data-transition-interval')
                var bannerId = $(self).attr("id")
                var animationCss = "#" + bannerId +" .swiper-pagination-bullet.swiper-pagination-bullet-active .swiper-carousel-div span {animation: banner-active " + transitionInterval / 1000 + "s linear 1 forwards;}"
                $("style").append(animationCss)
                var $firstSwiperSlide = $(self).find(".swiper-slide").eq(1)
                if ($($firstSwiperSlide).attr("data-color") === 'text-color-white') {
                        $(self).find('.swiper-carousel-div').removeClass('text-color-grey')
                        $(self).find('.swiper-carousel-div').addClass('text-color-white')
                    } else if ($($firstSwiperSlide).attr("data-color") === 'text-color-grey') {
                        $(self).find('.swiper-carousel-div').removeClass('text-color-white')
                        $(self).find('.swiper-carousel-div').addClass('text-color-grey')
                    }
            })(this)
        })
        $.each($('.swiper-pagination-bullet'), function (elem, index) {
            $(this).unbind('click').on('click', function (e) {
                var atModule = 'new_banner_carousel::banner_progress::' + $(this).data('title') + "::new-banner-carousel"
                atModel.doAtEvent(atModule, 'action', e)
            })
        })
    }
    initClickAt();
});

$(document).ready(function () {
  $.each($(".hik-video-trigger"), function(){
    if($(this).attr("data-mobile") == "true" && $(this).attr("data-video-path").indexOf("youtu")==-1){
      $(this).attr("data-internal-video", "true")
    }
  })
  if(getCurrentBreakPoint() == 'MOBILE'){
    $.each($(".super-big-banner-full").find(".text-wrapper, .video-title-cta"),function(){
      if($(this).hasClass("middle-center")){
        $(this).removeClass("middle-center").addClass("left-center")
      }
    })
  }
  // publish模式或者生产环境---解决vh在editor模式下无限计算高度导致高度无限拉长的问题
  if(window.location.href.indexOf("editor.html") > -1){
    $(".super-big-banner-full .swiper-wrapper").css({
      "height": "760px"
    })
  } else {
    if(getCurrentBreakPoint() == 'MOBILE'){
      $(".super-big-banner-full .swiper-wrapper").css({
      "height": "100%"
      })
    } else {
      if($(".super-big-banner-full").find(".banner-carousel-fullscreen").length){
        $(".super-big-banner-full .swiper-wrapper").css({
          "height": "100vh"
        })
      } else {
        $(".super-big-banner-full .swiper-wrapper").css({
          "height": "calc( 100vh - 118px )"
          })
      }
    }
  }
  $(".video-plyer").on("click", function(){
      var player = document.getElementById("mob-play")
      if(player.paused){
        $(this).hide()
        player.play()
       // $(this).hide()
      } else{
        player.pause()
      }
  })
var $loginBanner = $("[data-login-video=true]");
var randomNo;

   $loginBanner.each(function(){
  var _this = $(this);
    randomNo = _this.attr("data-randomNo");
    var id = _this.attr("id");
    var baseUrl = _this.attr("data-baseUrl");
        var ticket = getLoginCookie("ticket");
        if(ticket && ticket!="123"){
            loginUtil.checkLogin(function(){
                $.ajax({
                    type : "GET",
                    url : baseUrl+".json",
                    dataType : "json",
                    success : function(data) {
                        data.randomNo = randomNo;
                        // $("#banner-login-video").html(tmpl("tmpl-login-video",data));

                        var banners = data.banners;
                        for(var i=0; i < banners.length; i++){
                            if(banners[i].isVideo === 'true'){
                                $("#hero-banner-"+randomNo+" .hik-video-trigger[data-index="+i+"][data-mobile='false']").attr("data-video-path", banners[i].videoPath);
                            }
                            if(banners[i].isVideoMobile === 'true'){
                                $("#hero-banner-mobile-"+randomNo+" .hik-video-trigger[data-index="+i+"][data-mobile='true']").attr("data-video-path", banners[i].videoPathMobile);
                            } else if(banners[i].isVideoMobile === 'false' && banners[i].isVideo === 'true'){
                                $("#hero-banner-mobile-"+randomNo+" .hik-video-trigger[data-index="+i+"]").attr("data-video-path", banners[i].videoPath);
                            }
                        }
                    },
                    error : function() {
                        console.log("Banner Video info get failed");
                    }
                });
            });
        }
        //未登录情况下，桌面/移动端播放视频按钮点击事件监听
        $("#"+_this.attr("id")+",#hero-banner-mobile-"+randomNo).find(".explore-btn-link.explore-video-link").on("click",function(){
            var index = $(this).attr("data-index");
            var ticket = getLoginCookie("ticket");
            if(ticket && ticket!="123"){
                loginUtil.checkLogin();
            }else{
                loginUtil.popupLoginConfirmModal();
            }
        });
    })
    if ($('.banner-carousel-wrapper .carousel-inner a[href].explore-btn-link').length > 0
    && $('.banner-carousel-wrapper .carousel-inner a[href].explore-btn-link').attr('href').indexOf('/all-forms/') >= 0) {
    $(".banner-carousel-wrapper .carousel-inner a[href].explore-btn-link").on("click", function () {
        setSubmittedPageUrlCookie("contactUsUrl");
    });
    }
  });

$(document).ready(function() {
    initMultiTabsComp();
});

var initMultiTabsComp = function(){
    var counts = []
    var breakpoint = getCurrentBreakpoint();
    var borderColor = $("body").css('background-color');
    var sWidth = $(".slick-slide").width()
    function bindEvent($comp) {
        var lastScrollLeft = $('.tab-container').scrollLeft(); //
        $('.tab-container').scroll(function() {
            var currentScrollLeft = $(this).scrollLeft(); // Current scroll position
            var self = this
            var $element = $(this);
            var scrollLeft = $element.scrollLeft();
            var scrollWidth = $element[0].scrollWidth;
            var clientWidth = $element.outerWidth();
            if (currentScrollLeft > lastScrollLeft) {
                console.log('Scrolling right');
            } else {
               $(self).addClass('default')
            }
            if (scrollLeft + clientWidth >= scrollWidth) {
                $(self).removeClass('default')
              }
            lastScrollLeft = currentScrollLeft; // Update lastScrollLeft to the current position
          });
        if($comp.find('.content-detail-section').eq(0).find('.card-stream-component').length){
            initCardStream($comp.find('.content-detail-section').eq(0).find('.card-stream-component'));
        }  
        $.each($comp.find('.tabs-wrapper .tab-item'),function(index, elem){
            $(this).find('.content').off().on('click', function(e) {
                
                initHandleMobileScroll($(elem),$(this).parent().parent().parent())
               // initHandleMultiTabMobile($(elem),$(this).parent().parent(),$(this).parent().parent().parent())
                var $tabItem = $(this).parent();
                var index = $tabItem.index();
                var $contentItem = $comp.find('.tabs-content-wrapper .content-detail-section').eq(index);
               // var leftOffset = $(this).parent().offset().left
                $tabItem.addClass('active');
                $tabItem.siblings().removeClass('active');
                $contentItem.siblings().removeClass('active');
                $contentItem.addClass('active');
                $(this).trigger('multi-tabs-change');
                initBorderBottomColor($comp);
                // productshowcase
                if($contentItem.find(".product-showcase").length){
                    initProductShowCaseCarousel(true)
                }
              // multi-scenario
                if($contentItem.find(".multi-scenario-switching-wrapper").length){
                    initMultiScenario($contentItem.find(".multi-scenario-switching-wrapper"), true);
                }
                if($contentItem.find(".interactive-banner-carousel").length){
                    $contentItem.find(".interactive-banner-carousel").each(function () {
                        const $that = $(this);
                       if(window.initSwiper){
                        initSwiper($that);
                       }
                       if(window.toggeleVideo){
                        toggeleVideo($that);
                       }
                    });
                }  
                //card stream
                if($contentItem.find(".card-stream-component").length){
                    initCardStream($contentItem.find(".card-stream-component"));
                    $contentItem.find('.card-video-button').off('click').on('click',function(){
                        var _this = $(this)
                        if($(this).parent().hasClass('pause')){
                            $(this).parent().removeClass('pause')
                        } else{
                            $(this).parent().addClass('pause')
                        }
                        requestAnimationFrame(function(){
                            _this.parents(".card-stream-video").find('.plyr__control.plyr__control--overlaid').click();
                        });
                    });
                }
                // // media wrapper
                // if($contentItem.find(".media-wrapper.section").length){
                //     initMediaWrapper(true);
                // }
                // if($(this).parent().parent().width() - leftOffset<200){
                //     $(this).parent().parent().parent().removeClass("default")
                // } else {
                //     $(this).parent().parent().parent().addClass("default")
                // }
                var item = $(this).parent()
                var container = $(this).parent().parent().parent()
                var itemoffset = item.offset()
                var itemOffsetLeft = itemoffset.left +  container.scrollLeft();
                var centerLeft =  ($(window).width() - item.width()) /2
                // $(this).parent().parent().parent().animate({
                //     "scrollLeft": itemOffsetLeft-centerLeft
                // }, 500)
                // var lastOffsetW = $(this).parent().parent().find(".tab-item").eq(-1).offset().left - $(this).parent().parent().parent().parent().offset().left + $(this).parent().parent().find(".tab-item").eq(-1).width()
                // if(breakpoint === 'DESKTOP' && lastOffsetW>container.width()) {
                //     if(index >=  $(this).parent().parent().find(".tab-item").length -3){
                //         $(".next-btn").hide()
                //     } else {
                //         $(".next-btn").show()
                //     }
                    
                //    // if(index <= 4){
                //  if(itemOffsetLeft-centerLeft<0){
                //         $(".pre-btn").hide().removeClass("show")
                //     } else {
                //         $(".pre-btn").show().addClass("show")
                //     }
                // } else {
                //     $(".pre-btn").hide()
                //     $(".next-btn").hide()
                // }
                if(breakpoint === 'MOBILE'){
                    if(index >=  $(this).parent().parent().find(".tab-item").length -2){
                        $(this).parent().parent().parent().removeClass("default")
                    } else {
                         $(this).parent().parent().parent().addClass("default")
                     }
                }
                if($(".slick-track").length){
                    $.each($(".slick-track"), function(index){
                          var len = $(this).find(".slick-slide").length;
                          var wid = $(this).find(".slick-slide").width();
                          $(this).find(".slick-slide").css({
                            "width": sWidth
                          })
                          $(this).css({
                            "width":  sWidth * len
                         })
                       
                  
                        // var len = $(this).find(".slick-slide").length;
                        // var wid = $(this).find(".slick-slide").width();
                        // var continerWidth = $(window).width()
                        // var cw=313
                        // console.log("widlen",$(window).width())
                        // $(this).css({
                        //     "width":  wid * len
                        // })
                        // if(continerWidth<=1680 && continerWidth>1280){
                        //     cw = 293
                        // } else if(continerWidth<=1280 && continerWidth>992){
                        //     cw = 250
                        // } else if(continerWidth>=1680){
                        //     cw = 313
                        // }
                        // $(this).find(".slick-slide").css({
                        //     "width": 313
                        // })
                    })
                }
                var parentElementElement = $(this).parent().parent().parent().parent().parent().find(".tabs-content-wrapper").find(".content-detail-section.active").find(".swiper-container")
                webpLazyload(true, parentElementElement);
                initCarsouel(parentElementElement);
                initSingleImageLoad($(this).parent().parent().parent().parent().parent().find(".tabs-content-wrapper").find(".content-detail-section.active"));
                 var self = this
                $(window).on('scroll', function () {
                    initSingleImageLoad($(self).parent().parent().parent().parent().parent().find(".tabs-content-wrapper").find(".content-detail-section.active"));
                 })
            });
        })
        var timeout;
        $comp.find('.tabs-wrapper .pre-btn').unbind('click').on('click', function(e) {
            e.stopPropagation();
            clearTimeout(timeout);
            var _this = this
            timeout = setTimeout(function() {
                if (!$comp.find('.tabs-wrapper .pre-btn').hasClass('show')) return;
                var $tabs = $comp.find('.tabs-section');
                var num = $tabs.find('.tab-item').length;
                var tabW = $tabs[0].scrollWidth;
                var step = tabW / num;
                var tabX = $tabs.css("transform").replace(/[^0-9\-,]/g, '').split(',')[4];
                tabX = Math.round(tabX) + step;
                if (tabX > 0) tabX = 0;
                if(tabX === 0) $(this).hide().removeClass('show')
                $tabs.css({ 'transform': 'translateX(' + Math.round(tabX) + 'px)' });
            }, 180);
        });

        $comp.find('.tabs-wrapper .next-btn').unbind('click').on('click', function(e) {
            e.stopPropagation();
            if(!$(this).hasClass('show')) return;
            var $tabs = $comp.find('.tabs-section');
            var num = $tabs.find('.tab-item').length;
            var tabW = $tabs[0].scrollWidth;
            var step = tabW / num;
            var tabX = $tabs.css("transform").replace(/[^0-9\-,]/g,'').split(',')[4];
            var containerW = $comp.find('.tab-container').width();
            tabX = tabX - step;
            if (Math.abs(tabX) > (tabW - containerW)) tabX = containerW - tabW;
            $tabs.css({'transform':'translateX('+Math.round(tabX)+'px)'});
        });

        $comp.find('.tabs-section').on('transitionend', function() {
            initTabArrowBtn($comp);
        })
    }
    function initTabArrowBtn($comp) {
        var containerW = $comp.find('.tab-container').width();
        var $tabs = $comp.find('.tabs-section');
        var $preBtn = $comp.find('.tabs-wrapper .pre-btn');
        var $nextBtn = $comp.find('.tabs-wrapper .next-btn');
        var tabW = $tabs[0].scrollWidth;
        var tabX = $tabs.css("transform").replace(/[^0-9\-,]/g,'').split(',')[4];
        if (tabX == 0) {
            $preBtn.removeClass('show');
        } else {
            if(breakpoint === 'DESKTOP') {
                $preBtn.addClass('show');
            }
        }
        if ((Math.abs(tabX) + 1) >= Math.round(tabW - containerW)) {
            $nextBtn.removeClass('show');
        } else {
            if(breakpoint === 'DESKTOP') {
                $nextBtn.addClass('show');
            }
        }

        if(breakpoint === 'MOBILE') {
            $preBtn.removeClass('show');
            $nextBtn.removeClass('show');
        }
    }

    function initTabPosition($comp) {
        var tabW = 0;
        var $tabs = $comp.find('.tabs-section');
        var containerW = $comp.find('.tab-container').width();
        // ensure that section is there
        if(!$tabs.length) {
          return;
        }
        tabW = $tabs[0].scrollWidth;
        $tabs.css({'transform':'translateX(0)'});

        if (tabW > containerW) {
            setTimeout(function() {
                initTabArrowBtn($comp);
            }, 200);
        }
    }

    function initBorderBottomColor($comp) {
        var $activeTab = $comp.find('.tabs-wrapper .tab-container .tabs-section .tab-item.active');
        if($comp.parent().hasClass('background-color-black')){
            $activeTab.css('border-bottom-color',  '#000');
        } else {
            $activeTab.css('border-bottom-color',  borderColor);
        }
        
    }
    $(".mult-mob-tabs-container-comp").each(function(){
        if($(this).hasClass("background-color-black")){
            $(this).parent().addClass("background-color-black")
        }
        $.each($(this).find(".tabs-section li"), function(i,e){
            $(this).on("click", function(){
                var hrefUrl = ''
                var hrefTarget = ''
                var multiTab = $(this).attr("data-multi-tab")
                if(multiTab.indexOf(" ") == -1){
                    hrefUrl = $(".multi-link-" + $(this).attr("data-multi-tab")).attr("href")
                    hrefTarget = $(".multi-link-" + $(this).attr("data-multi-tab")).attr("target")
                } else {
                  var mutils =  multiTab.split(" ")
                  var allClassNames = ''
                  $.each(mutils, function(i, e){
                    allClassNames+="."+e
                  })
                  hrefUrl = $(allClassNames).attr("href")
                  hrefTarget = $(allClassNames).attr("target")
                }
                setTimeout(function(){
                    window.open(hrefUrl, hrefTarget)
                }, 200)
                //$(".multi-link-" + $(this).attr("data-multi-tab")).trigger("click")
            })
        })
    })
    $('.mult-tabs-container-comp').each(function() {
        var $comp = $(this);
        bindEvent($comp);
        setTimeout(function(){
           $comp.find('.tabs-wrapper .tab-item').eq(0).find(".content").click()  
        })
        initTabPosition($comp);
        initBorderBottomColor($comp);

        var resizeTimer;
        $(window).on('resize', function() {
            if (resizeTimer) {
                clearTimeout(resizeTimer);
            }

            resizeTimer = setTimeout(function() {
                breakpoint = getCurrentBreakpoint();
                initTabPosition($comp);
                initBorderBottomColor($comp);
            }, 50);
        })
    });
};

//multi 轮播处理
function initCarsouel(parentElement){
    $.each($(parentElement), function(){
        $(this).find(".swiper-carousel-div").removeClass("text-color-grey text-color-white").addClass($(this).find(".first-slide").attr("data-color"))
        var self = this
        var bannerId = $(self).attr("id")
        //console.log("this", $(this.$el).find(".swiper-loop-div span").length)
        var newBannerSwiper = new Swiper(this, {
          watchOverflow: true,
          disableScroll: true,
          preloadImages: false,
          loop: $(this).find(".swiper-loop-div span").length>1?true:false,
          noSwiping:  getCurrentBreakPoint() == 'MOBILE' ? false : true,
          autoplay: {
              disableOnInteraction: false
            },
          pagination: {
              clickable :true,
              el: '.swiper-pagination',
              bulletElement : 'li',
              renderBullet: function (index, className) {
                  return '<div class="' + className + '"><div class="swiper-carousel-div"><span class="swiper-carousel-span"></span></div></div>';
              },
          },
          on: {
            transitionStart: function(){
              if(isInViewPort($(self).get(0))){
                  var _self = $(this.$el).find(".swiper-slide-active")
                  var imgSrc = $(_self).find("picture").attr("data-src")
                  var mobImgSrc = $(_self).find("picture").attr("data-mob-src")
                  var imageAltText =  $(_self).find(".banner-info-wrapper .title").find("pre").html() || 'Banner Image Text'
                  console.log("data-color", _self.attr("data-color"))
                  $(this.$el).find(".swiper-carousel-div").removeClass("text-color-grey text-color-white").addClass(_self.attr("data-color"))
                  $.each(_self, function(i,e){
                      $.each($(this).find("source"), function(index,ele){
                        if(!$(this).attr("srcset")){
                          $(this).attr("srcset", $(this).attr("data-srcset"))
                        }  
                      })
                    })
                  if(!$(_self).find("picture").find("img").length){
                    if(getCurrentBreakpoint()!== "MOBILE"){
                        // find("img").attr("src", $(this).find("img").attr("data-src"))
                        if(imgSrc){
                         $(_self).find("picture").append("<img decoding='async' src='"+imgSrc+"' alt='"+imageAltText+"' /> ")
                        }
                      }else{
                          if(mobImgSrc){
                           $(_self).find("picture").append("<img decoding='async' src='"+mobImgSrc+"' alt='"+imageAltText+"' /> ")
                          }
                    }
                  }   
              }    
            }
          },
      });
      $(this).hover(function(){
          newBannerSwiper.autoplay.stop();
          $("#" + bannerId).find(".swiper-pagination-bullet.swiper-pagination-bullet-active .swiper-carousel-div span").addClass("slow")
      },function(){
          newBannerSwiper.autoplay.start();
          $("#" + bannerId).find(".swiper-pagination-bullet.swiper-pagination-bullet-active .swiper-carousel-div span").removeClass("slow")
          $("#" + bannerId).find(".swiper-pagination-bullet.swiper-pagination-bullet-active .swiper-carousel-div span").on("animationend", function(){
           newBannerSwiper.slideNext();
       })
      });
  })
}
// 处理图片加载
function initSingleImageLoad(parentElement){
   $.each($(parentElement).find(".lazy-image-single"), function(){
    var dataOriginal = $(this).attr("data-original")
    if (isInViewPort($(this).get(0))) {
        if(getCurrentBreakPoint() == 'DESKTOP'){
            if($(this).attr("data-src")){
              $(this).attr('src',$(this).attr("data-src"));
             }
            if(dataOriginal){
                $(this).css('background-image', 'url("' + dataOriginal + '")');
            }
        } else {
            var mobOriginal = $(this).attr("data-original-mobile") || $(this).attr("data-original")
              if($(this).attr("data-mob-src")){
                $(this).attr('src',$(this).attr("data-mob-src"));
               } else {
                $(this).attr('src',$(this).attr("data-src"));
               }
               if(mobOriginal){
                $(this).css('background-image', 'url("' + mobOriginal + '")');
             }
        }
    }
   }) 
}




var productCarousel = (function ($) {
  var productCarousel = {};

    function preventDefault(e) {
        e.preventDefault()
    }

    //禁止滚动条滚动
    function disableScroll(element) {
        element.style.overflowPosition = element.style.overflow
        element.style.overflowY = 'scroll'
        element.addEventListener('wheel', preventDefault, { passive: false })
        element.addEventListener('touchmove', preventDefault, { passive: false })
        return preventDefault
    }
    //恢复滚动条滚动
    function enableScroll(element) {
        element.style.overflow = element.style.overflowPosition
        delete element.style.overflowPosition
        element.removeEventListener('wheel', preventDefault)
        element.removeEventListener('touchmove', preventDefault)
    }

    function activeThumbnail() {
        $("#productCarouselThumb .swiper-slide .slide-image").each(function () {
            var $this = $(this);
            var imgIndex = $this.data("index-number");
            if (imgIndex === $('#productCarouselComp .swiper-slide.active .show-image').data('index')) {
                $this.parent('.swiper-slide').addClass('active');
            } else {
                $this.parent('.swiper-slide').removeClass('active');
            }
        });
    }

    // 轮播图片处理
    function productCarouselImage(){
        setTimeout(function(){
            var $fistLazyImage = $(".lazy-carousel .swiper-slide.active").find(".lazy-product")
            $fistLazyImage.lazyload();
        }, 1000)
    }

    function downloadImage(href, downloadName) {
        var image = new Image();
        image.setAttribute('crossOrigin', 'anonymous');
        image.onload = function () {
            var canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            var context = canvas.getContext('2d');
            context.drawImage(image, 0, 0, image.width, image.height);
            canvas.toBlob(function (blob) {
              var url = URL.createObjectURL(blob);
              var a = document.createElement('a');
              a.download = downloadName;
              a.href = url;
              a.click();
              a.remove();
              URL.revokeObjectURL(url);
              canvas.remove();
            });
        }
        image.src = href;
    }
    function bindImageDownload(item, href, downloadName) {
        $(item).unbind("click").on('click', function (e) {
          downloadImage(href, downloadName);
          var productId = $('.tab_stick_bar_container .product_title .product_title_item').text().trim();
          var module = "product_carousel::image_download::" + productId;
          atModel.doAtEvent(module, 'download', e);
        });
    }

  productCarousel.init = function () {
    $(document).ready(function () {
          if(isCN){
            $(".product-carousel-wrap .slide-image").addClass("lazy-product").find("picture").remove()
          }
          if($('.product-carousel-wrap .swiper-slide').length <= 1) {
            $('.product-carousel-wrap .carousel-control').hide()
          }else{
            $('.product-carousel-wrap .carousel-control').show()
          }
          if(getCurrentBreakpoint() == 'MOBILE'){
            var $slideThumb = $('.product-carousel-thumb .swiper-wrapper .swiper-slide');
            if($slideThumb.length > 6){
              $slideThumb.addClass('more-slide');
            }
          }
          if($(".product-carousel-wrap").length) {
            var productCarouselSwiper;
            $.each($(".product-carousel-wrap"), function(){
              productCarouselSwiper = new Swiper( this, {
                slidesPerView: 1,
                direction: 'horizontal',
                speed:0,
                loop: $(this).find(".swiper-slide").length > 1 ? true : false,
                navigation: {
                  nextEl: '.carousel-control-next',
                  prevEl: '.carousel-control-prev',
                },
                on:{
                  slideChangeTransitionStart:function(e){
                    $(this.$el).siblings('.product-carousel-thumb').find('.swiper-slide').eq(this.realIndex).addClass('active').siblings().removeClass('active')
                    var _self = $(this.$el).find(".swiper-slide-active")
                    var imgSrc = $(_self).find("picture").attr("data-src")
                    var mobImgSrc = $(_self).find("picture").attr("data-mob-src")
                    $.each(_self, function(i,e){
                      $(e).find("source").attr("srcset", $(e).attr("data-srcset"))
                    })
                    if(!$(_self).find("picture").find("img").length){
                      if(getCurrentBreakpoint()!== "MOBILE"){
                          $(_self).find("picture").append("<img decoding='async' src='"+imgSrc+"' alt='"+$(".prod_name-content").text()+"'/> ")
                        }else{
                          $(_self).find("picture").append("<img decoding='async' src='"+mobImgSrc+"' alt='"+$(".prod_name-content").text()+"' /> ")
                      }
                    }
                    $(_self).find(".lazy-product").lazyload();
                  },
                  init: function(){
                    if($(this.$el).find(".swiper-slide").length <= 1){
                      $(this.$el).find('.swiper-wrapper').css('transform','unset')
                    }
                  }, 
                }
              });
            })
          }

          $('.product-carousel-wrap .swiper-wrapper .swiper-slide:not(.has-video)').on('click', function(e) {
            var isDesktop = getCurrentBreakpoint()
            if(!isCN){
              window.scrollTo(0,0);
              stickyDescription.stickyProductDescription(false);
            }
            $('.product-preview-wrap').show()
            $('.product-preview-wrap').find('.swiper-wrapper').css('transform','unset')
            var $videoCard = $(this).parent().find('.swiper-slide.has-video')
            var realIndex = $(this).index()
            var htmlElement = document.getElementsByTagName('html')[0]
            $.each($('.product-preview'),function(){
              var $previewWrap = $(this)
              var $downloadBtn = $previewWrap.find('.download-wrap .download-btn')
              var previewWrapSwiper = new Swiper(this, {
                slidesPerView: 1,
                speed: isDesktop ? 0 : 300,
                loop: $(this).find(".swiper-slide").length > 1 ? true : false,
                pagination: {
                  el: isDesktop == 'DESKTOP' ? '' : '.swiper-pagination',
                  type: isDesktop == 'DESKTOP' ? '' : 'fraction',
                },
                navigation: {
                  nextEl: '.carousel-control-next',
                  prevEl: '.carousel-control-prev',
                },
                on: {
                  init: function() {
                    var dataHref = $previewWrap.find('.swiper-slide-active').find('.product-preview-item').attr('data-original');
                    var index = Number($previewWrap.find('.swiper-slide-active').find('.product-preview-item').parent().attr('data-index'))+1
                    if($previewWrap.find('.swiper-slide-active').find('.product-preview-item').parent().attr('data-swiper-slide-index')){
                       index = Number($previewWrap.find('.swiper-slide-active').find('.product-preview-item').parent().attr('data-swiper-slide-index'))+1
                    }
                    var filename = $('.product_description_title .title').text().trim();
                    if($('.sub_product_container').length){
                       filename = $('.sub_product_container').find('.current_selected').find('span').text().trim()
                    }
                    var downloadname = ''
                    if($previewWrap.find('.swiper-slide').length <=1){
                      downloadname = filename +'_image_1.'+getFileExtension(dataHref)
                    } else {
                      downloadname = filename +'_image_'+index+'.'+getFileExtension(dataHref)
                    }
                    if(dataHref.indexOf("/content/dam") > -1){
                        $downloadBtn.attr('href', dataHref)
                        $downloadBtn.attr('download', downloadname)
                        if ($previewWrap.find(".swiper-slide").length <= 1) {
                            $previewWrap.find('.carousel-control').hide()
                        } else {
                            $previewWrap.find('.carousel-control').show()
                        }
                    }else{
                        bindImageDownload($downloadBtn, dataHref +  ".original.png", downloadname);
                    }
                  },
                  slideChangeTransitionEnd: function() {
                    var dataHref = $previewWrap.find('.swiper-slide-active').find('.product-preview-item').attr('data-original');
                    var index = Number($previewWrap.find('.swiper-slide-active').find('.product-preview-item').parent().attr('data-swiper-slide-index'))+1
                    var filename = $('.product_description_title .title').text().trim();
                    if($('.sub_product_container').length){
                       filename = $('.sub_product_container').find('.current_selected').find('span').text().trim()
                    }
                    var downloadname = ''
                    if($previewWrap.find('.swiper-slide').length <=1){
                      downloadname = filename +'_image_1.'+getFileExtension(dataHref)
                    } else {
                      downloadname = filename +'_image_'+index+'.'+getFileExtension(dataHref)
                    }
                    if(dataHref.indexOf("/content/dam") > -1){
                        $downloadBtn.attr('href', dataHref)
                        $downloadBtn.attr('download', downloadname)
                    }else{
                        bindImageDownload($downloadBtn, dataHref + ".original.png", downloadname);
                    }
                  }
                }
              })
              if($videoCard.index() < realIndex && $videoCard.length > 0 &&  $videoCard.length <= 1 ) {
                previewWrapSwiper.slideTo(realIndex - 1)
              } else {
                previewWrapSwiper.slideTo(realIndex)
              }  
              disableScroll(htmlElement);
            })
            $('.product-preview .close-btn').on('click',function(){
              $('.product-preview-wrap').hide()
              enableScroll(htmlElement)
            })
            $.each($('.product-preview .swiper-slide .product-preview-item'),function(){
              $(this).css('background-image','url("' + $(this).attr('data-original') + '")')
            })
          })

          $('.product-preview-wrap .download-wrap .download-btn').unbind("click").on('click',function(e){
            var productId = $('.tab_stick_bar_container .product_title .product_title_item').text().trim();
            var module = "product_carousel::image_download::" + productId;
            atModel.doAtEvent(module, 'download', e);
          });

          $('#productCarouselThumb .swiper-slide').click(function () {
            $(this).addClass('active').siblings().removeClass('active')
            var imageIndex= $(this).find('.slide-image').data('index-number')
            productCarouselSwiper.slideTo(imageIndex + 1)
          });

          activeThumbnail();
          // 轮播图片处理
          productCarouselImage();

          // var $productCarousel = $(".product-carousel-wrap");
          // var $productCarouselThumb = $("#productCarouselThumb");
          var mainSlideCount = $('#productCarouselComp .swiper-slide').length;
          if (mainSlideCount <= 1) {
            $('.product-carousel-wrap').addClass('bot');
          } else {
            $('.product-carousel-wrap').removeClass('bot');
          }

         // 视频如果没有封面取第一个banner做封面
        var firstBanner =  Array.prototype.slice.call($('.show-image')).find(function(item, index){
          return $(item).attr('data-original')
        })
        var firstNBanner = Array.prototype.slice.call($('.number-image')).find(function(item, index){
          return $(item).attr('data-original')
        })
        $.each(Array.prototype.slice.call($('.show-image')), function(index, item){
           if($(item).parent().parent().attr('data-video') === 'true' && !$(item).attr('data-original')){
            $(item).parent().parent('.swiper-slide').next().addClass('hide-image')
            $(item).attr('data-original', $(firstBanner).attr('data-original'))
            $(firstBanner).parent().parent().remove()
           }
         })
         $.each(Array.prototype.slice.call($('.number-image')), function(index, item){
          if($('.show-image').length === 1){
            $(item).parent().parent().hide()
          }
          if($(item).parent().parent().attr('data-video') === 'true'){
            if(!$(item).attr('data-original')){
              $(item).attr('data-original', $(firstBanner).attr('data-original'))
              $(firstNBanner).parent().parent().remove()
            }
          }
        })
      })   
  };

  return productCarousel;
}($));

productCarousel.init();

$(document).ready(function(){
    function addScriptData(){
        if(!$('#productCarouselComp') || $('#productCarouselComp').length <1){
          return;
        }
        var $carouselSlides = $('#productCarouselComp').find('.swiper-slide');
        var mainSlideUrl = null;
        if($carouselSlides.length > 1){
          $.each($carouselSlides, function(index, value){
            if($(value).attr('data-swiper-slide-index') == 0){
              mainSlideUrl = $(value).attr('data-original');
              return false;
            }
          });
        }else{
          mainSlideUrl = $carouselSlides.eq(0).attr('data-original');
        }
        var script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageObject",
          "contentUrl": mainSlideUrl,
          "license": "https://www.tongfangbms.com/en/policies/website-image-copyright-statement",
          "acquireLicensePage": "https://www.tongfangbms.com/en/how-to-use-our-images",
          "creditText": "Hikvision",
          "creator": {
            "@type": "Organization",
            "name": "Hikvision"
          }
        });
        document.querySelector('head').appendChild(script);
    }
    addScriptData();
})
var productSpotlight = (function ($) {
  var productSpotlight = {};

  productSpotlight.productSelector = function (selectedCategory, productSpotlightCarousel) {
    var $productSpotlightCarousel = productSpotlightCarousel;
    var productItems = [];

    var filteredProducts = productItems.filter(function (val) {
      return val.category.toString().toLowerCase() == selectedCategory.toLowerCase();
    });

    $.each(filteredProducts, function (i, val) {
      var $productItemWrapperElement = $('<div class="product-item-wrapper"/>');
      var $productItemElement = $('<div class="product-item"/>');
      var $productImageWrapper = $('<div class="product-item-img-wrapper"/>');
      var $productTag = $('<div class="tag"/>');
      var $productImage = $('<img/>');
      var $productItemInfo = $('<div class="product-item-info"/>');
      var $productTitle = $('<div class="title"/>');
      var $productDescription = $('<div class="description"/>');
      var $addToCompareWrapper = $('<div class="add-to-compare"/>');
      var $addToCompareInput = $('<input type="checkbox" name="addToCompare"/>');
      var $addToCompareLabel = $('<label for="addToCompare"/>');
      var $btnGo = $('<div class="btn-go"/>');

      $productImage.attr('src', val.imageSrc);
      $productTag.text(val.tag);
      $productTag.appendTo($productImageWrapper);
      $productImage.appendTo($productImageWrapper);
      $productTitle.text(val.name).appendTo($productItemInfo);
      $productDescription.text(val.description).appendTo($productItemInfo);
      $addToCompareInput.appendTo($addToCompareWrapper);
      $addToCompareLabel.text('Compare');
      $addToCompareLabel.appendTo($addToCompareWrapper);
      $addToCompareWrapper.appendTo($productItemInfo);
      $btnGo.appendTo($productItemInfo);
      $productImageWrapper.appendTo($productItemElement);
      $productItemInfo.appendTo($productItemElement);
      $productItemElement.appendTo($productItemWrapperElement);
      $productItemWrapperElement.appendTo($productSpotlightCarousel.find('.slideshow'));
    });

    productSpotlight.initCarousel();

  };

  productSpotlight.initCarousel = function (productSpotlightCarousel) {
    var $productSpotlightCarousel = $(productSpotlightCarousel);
    if (!$productSpotlightCarousel) {
      return;
    }
    var interval = $productSpotlightCarousel.attr('data-interval');
    var $dotsContainer = $productSpotlightCarousel.find('.product-carousel-dots');
    var ITEM_COUNT_IN_VIEW = 4;
    var MOBILE_WIDTH = 991;
    var clientWidth = document.body.width || window.innerWidth;
    if (clientWidth > MOBILE_WIDTH) {
      $productSpotlightCarousel.find('.slideshow').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: interval,
        dots: true,
        appendDots: $dotsContainer,
        prevArrow: '<div class="product-carousel-pre-btn slick-pre"></div>',
        nextArrow: '<div class="product-carousel-next-btn slick-next"></div>',
        slidesToShow: ITEM_COUNT_IN_VIEW,
        slidesToScroll: 4
      })
    }
  };

  productSpotlight.initCategorySelector = function (productSpotlightCarousel) {
    var $categorySelector = $('.product-spotlight-wrapper .product-category-dropdown-wrapper');
    var $categoryDropdown = $categorySelector.find('.dropdown');
    var $categorySelectedOption = $categorySelector.find('.selected-option-wrapper .selected-option');

    $categorySelector.find('.dropdown li').on('click', function (e) {
      e.stopPropagation();
      $categorySelectedOption.text($(this).text());
      $categoryDropdown.removeClass('show remove-border');
      $categorySelector.removeClass('remove-border').find('.arrow-icon').removeClass('arrow-up');
      productSpotlight.productSelector($(this).text(), productSpotlightCarousel);
    });

    $categorySelectedOption.on('click', function (e) {
      e.stopPropagation();
      $categoryDropdown.toggleClass('show remove-border');
      $categorySelector.toggleClass('remove-border');
      $categorySelector.find('.arrow-icon').toggleClass('arrow-up');
    });

    $('body').on('click', function () {
      $categoryDropdown.removeClass('show remove-border');
      $categorySelector.removeClass('remove-border').find('.arrow-icon').removeClass('arrow-up');
    });
  };

  productSpotlight.init = function () {
    $(document).ready(function () {
      var $productSpotlightCarousel = $('.product-spotlight-wrapper');

      $.each($productSpotlightCarousel, function (key, val) {
        productSpotlight.initCarousel(val);
        productSpotlight.initCategorySelector(val);
      });

      $(".product-spotlight-container .feature-tag").click(function(e){
        var link = $(this).attr("data-href");
        if(link){
            window.open(link);
        }
        return false;
      });
    });
  };

  return productSpotlight;
}($));

productSpotlight.init();
//use hiknow-v2 new-split-banner.js
;(function ($) {
    /**
     * 2a: 70-30
     * 3: 33-33-33
     * 2b: 30-70
     * 1: 50-50
     * */
    var LAYOUT_CLASS_LIST = ['layout2a', 'layout3', 'layout2b', 'layout1']
    var PROPOSED_WIDTH = 1370
    var MOBILE_WIDTH = 992
    var BASIC_HEIGHT = 400
    var FONT_MIN_RATIO = 12 / 18
    var PADDING_SPACE = 30 * 2
    var MARGIN_SPACE = 25 * 2

    var setSplitBannerSize = function () {
        // 用window.innerWidth会把滚动条的宽度一并计算进来，导致问题，因此这里用document.body.client
        // document.body.clientWidth 有些情况下会报错
        var screenWidth = $('body').width()
        if(document.body&&document.body.clientWidth){
            screenWidth = document.body.clientWidth
        }
        var ratio = screenWidth / PROPOSED_WIDTH
        var respectiveWidth = (screenWidth - PADDING_SPACE - MARGIN_SPACE) / 3
        LAYOUT_CLASS_LIST.forEach(function (cls) {
            $('.split-banner-wrapper').find('.' + cls).each(function () {
                var $carouselWrapper1 = $(this).find('.split-banner-wrapper.carousel1')
                var $carouselWrapper2 = $(this).find('.split-banner-wrapper.carousel2')
                var $carouselWrapper3 = $(this).find('.split-banner-wrapper.carousel3')
                if (screenWidth <= MOBILE_WIDTH || screenWidth >= PROPOSED_WIDTH) {
                    $carouselWrapper1.removeAttr('style')
                    $carouselWrapper2.removeAttr('style')
                    $carouselWrapper3.removeAttr('style')
                    $(this).removeAttr('style')
                    $(this).find('.split-banner-wrapper').each(function () {
                        $(this).find('.split-banner-content__header').removeAttr('style')
                        $(this).find('.split-banner-content__subheader').removeAttr('style')
                        $(this).find('.split-banner-content__item-detail').removeAttr('style')
                    })
                } else {
                    // 992-1370之间不同布局随比例调整宽高
                    $(this).css('height', BASIC_HEIGHT * ratio)
                    $(this).find('.split-banner-wrapper').each(function () {
                        $(this).find('.split-banner-content__header').css('font-size', 24 * Math.max(ratio, FONT_MIN_RATIO))
                        $(this).find('.split-banner-content__subheader').css('font-size', 18 * Math.max(ratio, FONT_MIN_RATIO))
                        $(this).find('.split-banner-content__item-detail').css('font-size', 18 * Math.max(ratio, FONT_MIN_RATIO))
                    })
                    if (cls === 'layout2a') {
                        $carouselWrapper2.css('width', respectiveWidth)
                    }
                    if (cls === 'layout3') {
                        $carouselWrapper1.css('width', respectiveWidth)
                        $carouselWrapper2.css('width', respectiveWidth)
                        $carouselWrapper3.css('width', respectiveWidth)
                    }
                    if (cls === 'layout2b') {
                        $carouselWrapper1.css('width', respectiveWidth)
                    }
                }
            })
        })
    }

    setSplitBannerSize()
    $(window).resize(setSplitBannerSize)
    function BuryingPointFn(element, preModule) {
        var href = $(element).attr('href')
        var lastHrefIndex = lastNode(href);
        $(element).attr('data-at-module', preModule + lastHrefIndex);
    }

    $.each($('.split-banner-carousel'),function(){
        if($(this).prev().hasClass('split-banner-carousel')){
            $(this).css('padding-top','0px');
            window.innerWidth > 991 ? $(this).prev().css('padding-bottom','25px') : false ;
        }
    })

    $('.split-banner-carousel .at-navigation:not(.hik-video-trigger)').on('click',function(){
        var analyticsStr=$(this).attr('data-analytics')
        HiAnalyticsCn.clickDown(analyticsStr)
    })
    if($('.carousel-mob .new-banner-full').length){
        $.each($('.carousel-mob .new-banner-full'), function(){
            new Swiper(this, {
                slidesPerView: 1,
                loop: $(this).find(".swiper-slide").length > 1 ? true : false,
                direction: 'horizontal',
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true
                }
            });
        })
    }
    if($('.split-banner-wrapper').length){
        $.each($('.swiper-wrapper.split-banner .swiper-slide a.at-navigation'), function (index, item) {
            if ($(this).attr('href')) {
                var preModule = $(this).attr('data-at-module')
                BuryingPointFn(item, preModule)
                var ahref = $(this).attr('href')
                var target = $(this).attr('target')
                $(this).on('click', function (e) {
                    e.preventDefault()
                    setTimeout(function () {
                        window.open(ahref, target || '_self')
                    }, 500)
                })
            }
        })
        $.each($('.swiper-wrapper.split-banner .swiper-slide .video-play-btn-center a'), function (index, item) {
            if ($(this).attr('data-video-path')) {
                var preModule = $(this).attr('data-at-module')
                var path = $(this).attr('data-video-path')
                var lastHrefIndex = lastNode(path);
                $(this).attr('data-at-module', preModule + lastHrefIndex);
            }
        })
    }

    // if($('.split-banner-wrapper').length){
    //     $.ajax({
    //         type:"get",
    //         url:"./css/split-banner-css.html", //需要获取的页面内容
    //         async:true,
    //         success:function(data){
    //         console.log('data666', data)
    //         $('head').append(data);
    //       }
    //    })
    // }
})($);
var textGrids = (function ($) {
  var textGrids = {};


  textGrids.init = function () {
    $(document).ready(function () {
      //category-wrapper  category-content为空的时候 隐藏common title
      // var contentsWarp = $('.title-wrapper')
      // $.each(contentsWarp, function(index, item){
      //   var contents = $(this).parent().parent().siblings('.text-link-wrap').find('.main-category')
      //   if(!contents.length){
      //     $(this).hide()
      //   }
      // })
      //Main Category
      var btns = $('.text-link .category-wrapper .category-content .icon-right-arrow .main-category-link');
      $.each(btns, function (key, val) {
        var btnUrlOrg = $(val).attr('href');
        if(!$(val).attr('href')){
            btnUrlOrg = $(val).data('href');
        }else {
           $(val).removeAttr('href')
        }
        if(btnUrlOrg){
            var btnUrl = btnUrlOrg;

            var paths = btnUrlOrg.split('.');
            if (paths > 1) {
              var extension = paths[1];
              if (extension.toLowerCase() != 'html') {
                $(val).removeClass('at-navigation');
                $(val).addClass('at-download');
              }
            }

            btnUrl =  header.checkLoginStatusForDownload(btnUrl, val);
            if(btnUrl !== 'javascript:;'){
              $(val).attr('href', btnUrl);
            } else {
              $(val).removeAttr('href');
            }
            if (btnUrl !== '#download-agreement') {
              $(val).removeAttr('data-toggle');
              $(val).removeClass('at-action');
              if (btnUrl == btnUrlOrg) {
                $(val).removeClass('at-exit');
                $(val).addClass('at-download');
              }else if (btnUrl.toLowerCase().indexOf("javascript")>=0) {
                  $(val).removeClass('at-exit');
                  $(val).addClass('at-download');
              }else{
                  $(val).removeClass('at-download');
                  $(val).addClass('at-exit');
              }
            }
        }
      });

      // Sub Category
      var downloadBtns = $('.text-link .category-wrapper .category-content .icon-right-arrow .text-grid-sub-category-list li a');
      $.each(downloadBtns, function (key, val) {
        var btnUrlOrg = $(val).attr('href');
        if(!$(val).attr('href')){
            btnUrlOrg = $(val).data('href');
        }
          if(btnUrlOrg) {
              var btnUrl = btnUrlOrg;

              var paths = btnUrlOrg.split('.');
              if (paths > 1) {
                  var extension = paths[1];
                  if (extension.toLowerCase() != 'html') {
                      $(val).removeClass('at-navigation');
                      $(val).addClass('at-download');
                  }
              }
              btnUrl = header.checkLoginStatusForDownload(btnUrl, val);
              if(btnUrl !== 'javascript:;'){
                $(val).attr('href', btnUrl);
              } else {
                $(val).removeAttr('href')
              }
              if (btnUrl !== '#download-agreement') {
                  $(val).removeAttr('data-toggle');
                  $(val).removeClass('at-action');
                  if (btnUrl == btnUrlOrg) {
                      $(val).removeClass('at-exit');
                      $(val).addClass('at-download');
                  } else if (btnUrl.toLowerCase().indexOf("javascript") >= 0) {
                      $(val).removeClass('at-exit');
                      $(val).addClass('at-download');
                  } else {
                      $(val).removeClass('at-download');
                      $(val).addClass('at-exit');
                  }
              }
          }
      });
    });
  };

  return textGrids;
}($));
textGrids.init();
$(document).ready(function () {
    HiAnalyticsCn.clickDownLazy('.text-grid-container  a',isCnAnalytics);
});



var textGrid = (function ($) {
    var site = $('meta[name="locale"]').attr('content');
    var textGrid = {};
    textGrid.random = "";
    textGrid.downloadUrl = "";
    textGrid.textGridFormModal;
    textGrid.init = function () {
        $(document).ready(function () {
            var hasInit = {};
            $(".text-grid-form").not('.documentt-form').unbind('click').on("click", function(e){
                var linkPath = $(this).attr("href") || $(this).attr('data-href') || $(this).attr('data-mark');
                if(linkPath && linkPath.indexOf('youtu') !== -1){
                    return
                }
                atDataAnalytic($(this), e);
                var hasForm = $(this).attr("data-has-form");
                var random = $(this).attr("data-randomNo");
                var formTarget =  $(this).attr('data-target')
                textGrid.downloadUrl = $(this).attr("href") || $(this).attr('data-href') || $(this).attr('data-mark');
                textGrid.random = random;
                if (hasForm == "true") {
                    e.stopPropagation();
                    e.preventDefault();
                    $(this).removeAttr('data-href')
                    textGrid.popupInit(random, $(this), formTarget, hasInit[random]);
                    if(!hasInit[random]) {
                        hasInit[random] = true
                    }
                    $('body').addClass('hideScroll');
                } else {
                    if(!isCN && $(this).attr('data-download-checklogin')&&$(this).attr('data-download-checklogin') == "true"){
                        header.checkLoginStatusForDownload(textGrid.downloadUrl, $(this), $(this), "text-grid");
                     } else {
                         if (textGrid.downloadUrl !== '#download-agreement' && hasForm != "true") {
                            e.stopPropagation();
                            e.preventDefault();
                            if(textGrid.downloadUrl){
                                window.open(textGrid.downloadUrl, '_blank')
                            }
                         }
                     } 
                }
            });
            $.each($(".text-grid-form"),function(){
                var linkPath = $(this).attr("href") || $(this).attr('data-href') || $(this).attr('data-mark');
                if(linkPath && linkPath.indexOf('youtu') !== -1){
                    $(this).attr('data-video-path', linkPath)
                    $(this).addClass("hik-video-trigger")
                }
            })

            //国际站开启翻译站点埋点处理,图片去掉下载按钮
            $.each($(".resource-icon-container"),function(){
                var $item = $(this);
                var fileType = $item.attr('data-file-type');
                var hasTranslated = $item.attr('data-has-translated');
                if(fileType === 'png' || fileType === 'jpg' || fileType === 'jpeg'){
                    $item.find('.text-grid-pdp-link').remove();
                    return;
                }
                if(hasTranslated === 'true'){
                    var itemTitle = $item.attr('data-item-title');
                    if(!itemTitle){return;}
                    var translatedTitle = Granite.I18n.get(itemTitle);
                    $item.attr('data-item-title', translatedTitle);
                    $item.find('.text-grid-pdp-link').attr('data-at-module', "text-grid::" + translatedTitle);
                }
            });

            //仅对于国际站产品详情页,对有空格URL进行处理
            $.each($(".text-grid-pdp-link"),function(){
                var itemLink = $(this).attr('data-item-href');
                if(itemLink){
                    $(this).attr('href', itemLink);
                    if(itemLink.indexOf('youtu') !== -1 || itemLink.endsWith('.mp4')){
                        $(this).attr('data-video-path', itemLink);
                        $(this).addClass("hik-video-trigger");
                        if(itemLink.endsWith('.mp4')){
                            $(this).attr('data-internal-video', 'true');
                            $(this).attr('data-ezviz-video', 'false');
                        }else{
                            $(this).attr('data-internal-video', 'false');
                            $(this).attr('data-ezviz-video', 'false');
                        }
                        if (hikPlayer && hikPlayer.Plyr) {
                            hikPlayer.Plyr.init();
                            hikPlayer.Plyr.initForNoModalType();
                        }
                    }
                }
            });

            //国际站agreement埋点处理
            $('.text-grid-pdp-link').unbind('click').on("click", function(e){
                var itemHref = $(this).attr('href');
                var compnentName = 'text-grid';
                var itemLink = $(this).attr('data-link');
                if(itemHref !== '#download-agreement'){
                    return;
                }
                window.compnentName = compnentName;
                var atModule = compnentName + "::" + $(this).data('pre-module') + '::' + lastNode(itemLink).replace('&', '') + atModel.atSpliter + window.location.href.replace('#download-agreement', '')
                atModel.doAtEvent(atModule, 'download', e);
            });

            var userType = $(".needLogin").attr("data-userType");
            var $textGrid = $(".text-grid-wrapper-check");

            if ($textGrid.length > 0 && $(".needLogin").length > 0 && userType != undefined) {
                var runMode = getLoginCookie("wcmmode");
                if (runMode == "edit" || runMode == "preview") {
                    return;
                }
                var hikId = $.cookie("HIKID");
                try {
                    hikId = atob(hikId);
                } catch (error) {
                    console.log("Login Error:" + error);
                }

                $textGrid.each(function () {
                    var mainCategory = $(this).attr("data-mainCategory");
                    var currentPagePath = $(this).attr("data-page-path");
                    var verifyUrl = $(this).attr("data-text-grid");
                    var showTextGridUrl = verifyUrl + ".usertype.json";

                    if (verifyUrl && mainCategory) {

                        $.ajax({
                            type: "GET",
                            url: showTextGridUrl,
                            data: {
                                hikId: hikId,
                                currentPagePath: currentPagePath
                            },
                            success: function (data) {
                                var jsonData = typeof data == "string" ? JSON.parse(data) : data;
                                if (jsonData.code == 200) {
                                    $("[data-text-grid='" + verifyUrl + "']").append($(jsonData.protectedComponent));
                                    // textGrid.init();
                                }
                            }
                        });
                    }

                })
            }

        });
    };

    textGrid.popupInit = function (random, $ele, target, hasInit) {
        var textGridFormModal = $("#text-grid-form-modal-" + random);
        var textGridFormFooter = textGridFormModal.find(".text-grid-form-footer");
        textGrid.textGridFormModal = textGridFormModal;
        var $textGridFormSubmit = textGridFormModal.find('.text-grid-form-submit');
        $textGridFormSubmit.attr("disabled", "disabled");
        var shadowBg = textGridFormModal.next();

        $(".verification img").attr("src", "/bin/hikvision/kaptcha.jpg?site=" + site + "&k=" + new Date().getTime());

        var textGridFormThanksMessage = textGridFormModal.find(".text-grid-form-thanks-message");
        var form = textGridFormModal.find(".text-grid-form-body");
        var textGridFormErrorMessage = textGridFormModal.find(".text-grid-form-error-message");
        var linkHref =  $ele.attr("href") || $ele.attr('data-href') || $ele.attr('data-mark');
        textGridFormModal.find("#text-grid-form-resource-url-" + random).val(document.location.origin + linkHref);

        textGridFormModal.parent().addClass('active');
        shadowBg.addClass("active");


        textGrid.addFormValidation(form);
        
        if(!hasInit) {
            textGrid.initOutlinedInputs(form);
            var countrySelect = textGrid.initCountrySelect(form);
            
            textGrid.autoFillUserInfo($ele, countrySelect);
    
            textGrid.initResetBtn(textGridFormFooter, textGridFormModal, countrySelect);
    
            initCloseBtn(textGridFormModal, textGridFormThanksMessage, textGridFormErrorMessage, shadowBg, random, countrySelect);
        }
        textGrid.validateRequiredMsg(form, textGridFormModal);

        //已登录用户自动填充用户信�

        $textGridFormSubmit.off('click').on('click', function (e) {
            if (form.valid()) {
                showVerifyModal(form, target)
            }
        })
    }

    textGrid.initCountrySelect = function (form) {
        var option = {
            onSelected: function ($ele, $input) {
                var val = $input.data('value');
                var code = $input.data('countryCode');
                $ele.find('input[name="countryCode"]').val(code).trigger('change').trigger('blur');
                $ele.find('input[name="Country"]').val(val).trigger('change').trigger('blur');
            }
        }

        return form.find('.hik-outlined-select').hikSelect(option);
    }

    textGrid.initOutlinedInputs = function (form) {
        form.outlinedFormLabelShrink();
    }

    function requiredCheckboxGroup(form) {
        var findInput = $(form).find(".text-grid-form-check:required");
        var result = true;
        findInput.each(function (key, item) {
            result = ($(item).find("input[type='checkbox']:checked").length > 0);
            if (!result) {
                return false;
            }
        });
        return result;
    }

    function checkRequired(form, submitBtn) {
        var requiredInputs = form.find('input:required');
        var isRequiredInputsFilled = true;
        for (var i = 0; i < requiredInputs.length; i++) {
            if ($(requiredInputs[i]).prop("type") === "checkbox") {
                if ($(requiredInputs[i]).is(":checked") === false) {
                    isRequiredInputsFilled = false;
                }
            } else {
                if ($(requiredInputs[i]).val() == "" || $(requiredInputs[i]).next('.error:visible').length) {
                    isRequiredInputsFilled = false;
                }
            }
        }
        var isRequiredCheckboxFilled = requiredCheckboxGroup(form);
        if (isRequiredInputsFilled && isRequiredCheckboxFilled) {
            submitBtn.removeAttr('disabled');
        } else {
            submitBtn.attr("disabled", "disabled");
        }
    }

    textGrid.validateRequiredMsg = function (form, textGridFormModal) {
        var $requiredInputElements = form.find('input:required');
        var $textGridFormSubmit = textGridFormModal.find('.text-grid-form-submit');

        $requiredInputElements.off('input change keyup').on('input change keyup', function () {
            setTimeout(function () {
                checkRequired(form, $textGridFormSubmit);
            }, 0)
        });

        form.off('change', '.text-grid-form-check input[type="checkbox"]').on('change', '.text-grid-form-check input[type="checkbox"]', function () {
            setTimeout(function () {
                checkRequired(form, $textGridFormSubmit);
            }, 0)
        });
    }

    textGrid.addFormValidation = function (form) {
        $.extend($.validator.messages, {
            required: Granite.I18n.get("This field is required."),
        });

        form.validate({
            focusInvalid: true,
            submitHandler: function (form, evt) {
                console.log('submit');
            },
            invalidHandler: function (event, validator) {
                console.log('invalid');
            },
            errorElement: "em",
            errorPlacement: function (error, element) {
                element.after(error)
            },
            highlight: function (element, errorClass, validClass) {
                if ($(element).parent().hasClass('hik-select-input')) {
                    $(element).parent().parent().parent().addClass('err')
                }
                $(element).siblings('label').addClass('err-lbl');
                $(element).parent().addClass('err');
            },
            unhighlight: function (element, errorClass, validClass) {
                if ($(element).parent().hasClass('hik-select-input')) {
                    $(element).parent().parent().parent().removeClass('err')
                    $(element).siblings('em').hide();
                }
                $(element).siblings('label').removeClass('err-lbl');
                $(element).parent().removeClass('err');
            },
            rules: {
                Email: {
                    required: true,
                    regex: /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                },
            },
            messages: {
                Email: {
                    regex: Granite.I18n.get("Please enter valid email address.")
                }
            }
        });
    }

    textGrid.submitForm = function (form, target) {
        //提交表单
        var currentUrl = window.location.href;
        $("input[name='Submitted_Page__c']").val(currentUrl);
        var action = form[0].action;
        var formData = new FormData(form[0]);
        var headers = getFormHeader(form);
        $.ajax({
            type: 'POST',
            url: action,
            data: formData,
            processData: false,
            contentType: false,
            beforeSend: function (request) {
                if (headers) {
                    $(headers).each(function (index, item) {
                        request.setRequestHeader(item.key, item.value);
                    });
                }
                request.setRequestHeader("KAPTCHA_SESSION_KEY", storeManager.cookie.get("KAPTCHA_SESSION_KEY"));
            }
        }).done(function (data) {
            $(".verification img").attr("src", "/bin/hikvision/kaptcha.jpg?site=" + site + "&k=" + new Date().getTime());
            form.next().find(".text-grid-form-submit").removeClass("loading");
            if (checkResultSuccess(data)) {
                textGrid.submitSuccess(target);
            } else {
                textGrid.showErrorMsg(data.message);
            }
        }).fail(function (resData) {
            $(".verification img").attr("src", "/bin/hikvision/kaptcha.jpg?site=" + site + "&k=" + new Date().getTime());
            form.next().find(".text-grid-form-submit").removeClass("loading");
            var resultBean = null;
            try {
                resultBean = JSON.parse(resData.responseText);
            } catch (error) {
                console.error(error.toString());
            }
            if (resultBean) {
                textGrid.showErrorMsg(resultBean.message);
            } else {
                textGrid.showErrorMsg("Unknown Error occurred!");
            }
        }).complete(function (XMLHttpRequest, status) {
            // for at event
            var module = "text_grid_form::Submit" + atModel.atSpliter + window.location.href;
            atModel.doAtEvent(module, 'action', event);
        });

        // form.find('input[type="submit"]').addClass("loading");
    }

    textGrid.submitSuccess = function (target) {
        var textGridFormModal = $("#text-grid-form-modal-" + textGrid.random);
        var shadowBg = textGridFormModal.next();
        var textGridFormThanksMessage = textGridFormModal.find(".text-grid-form-thanks-message");
        textGridFormModal.find(".text-grid-form-header").hide();
        textGridFormModal.find(".text-grid-form-body").hide();
        textGridFormModal.find(".text-grid-form-footer").hide();
        textGridFormThanksMessage.addClass("active");
        shadowBg.addClass("active");
        setTimeout(function(){
            textGridFormThanksMessage.removeClass("active");
            shadowBg.removeClass("active");
            $("body").removeClass("hideScroll")
            $(".text-grid-form-close").trigger("click")
        }, 1500)
        //表单提交成功后下�
        window.open(textGrid.downloadUrl, target)
        //window.location.href = textGrid.downloadUrl;
    }

    textGrid.autoFillUserInfo = function ($ele, countrySelect) {
        loginUtil.autoFillUserInfoInForm(textGrid.renderUserInfo, $ele, countrySelect);
    }

    textGrid.initResetBtn = function (textGridFormFooter, textGridFormModal, countrySelect) {
        textGridFormFooter.find(".text-grid-form-reset").off('click').on("click", function () {
            resetForm(textGridFormModal, countrySelect);
        });
    }

    textGrid.showErrorMsg = function (text) {
        var content = Granite.I18n.get(text);
        textGrid.textGridFormModal.find(".text-grid-form-error-message").addClass("active");
        textGrid.textGridFormModal.find(".text-grid-form-error-message-text").empty().html(content);
        textGrid.textGridFormModal.next().addClass("active");
    }

    textGrid.renderUserInfo = function (userInfo, $ele, countrySelect) {
        var $textGridContainer = $ele.parents('.text-grid-container');
        $textGridContainer.find('#text-grid-form-first-name-' + textGrid.random).val(userInfo.firstName)
        $textGridContainer.find('#text-grid-form-last-name-' + textGrid.random).val(userInfo.lastName)
        $textGridContainer.find('#text-grid-form-email-' + textGrid.random).val(userInfo.email);
        $textGridContainer.find('#text-grid-form-company-' + textGrid.random).val(userInfo.company);
        $textGridContainer.find('#text-grid-form-post-code-' + textGrid.random).val(userInfo.postcode);
        $textGridContainer.find('#text-grid-form-additional-details-' + textGrid.random).val(userInfo.address);
        countrySelect.changeSelectedVal(userInfo.country);
    }
     
    function atDataAnalytic($this, e) {
        //处理掉 #download-agreement
        var splitCompnent = $this.parent().parent().attr('class').split('-');
        var compnentName = splitCompnent[0] === 'offering' ? splitCompnent[0] : splitCompnent[0] + '-' + splitCompnent[1];
        var linkHref = $this.attr('data-href') || $this.attr('data-link') || $this.attr('data-mark');
        if(!linkHref)
            return;
        window.compnentName = compnentName;
        var atModule = compnentName + '::' + $this.data('pre-module') + '::' + lastNode(linkHref).replace('&', '') + atModel.atSpliter + window.location.href.replace('#download-agreement', '')
        atModel.doAtEvent(atModule, 'download', e);
    }



    function initPuzzleVerification(form, imageData, timer1, target) {
        $("#mpanel4").slideVerify({
            canvasImage: imageData.canvasImage,
            blockImage: imageData.blockImage,
            blockY: imageData.blockY,
            type: 2,
            vOffset: 5,
            vSpace: 5,
            blockSize: {
                width: "40px",
                height: "40px",
            },
            success: function (positionX) {
                createVerification(form,positionX)
                $('.verifyModalWrap').first().hide()
                textGrid.submitForm(form, target)
                clearTimeout(timer1)
            },
        });
        $('.verifyModalWrap .close-Verification').click(function () {
            $('.verifyModalWrap').first().hide()
            clearTimeout(timer1)
        })
    }

    function createVerification(form,val){
        $(form).find('input[name="positionVerification"]').remove()
        var positionVerification = document.createElement('input')
        $(positionVerification).attr('name','positionVerification')
        $(positionVerification).val(val).css('display','none')
        form.append(positionVerification);
    }

    /*
     * show verifyModalWrap
     */
    function showVerifyModal(form, target) {
        var type = getCurrentBreakPoint() =='DESKTOP' ? 'pc': 'mobile'
        var site = $('meta[name="locale"]').attr('content');
        $.ajax({
            type: "get",
            url: "/bin/hikvision/form-secure.image.json?size="+ type + "&site=" + site + "&t=" + new Date().getTime(),
            async: false,
            success: function (res) {
                if (res.code == 0) {
                    $('.verifyModalWrap').first().show();
                    var imageData = res.data
                    var timer1 = setTimeout(function () {
                        $('.verifyModalWrap').first().hide();
                        clearTimeout(timer1)
                    }, 50000)

                    initPuzzleVerification(form, imageData, timer1, target);
                }
            },
        });
    }

    function initCloseBtn(textGridFormModal, textGridFormThanksMessage, textGridFormErrorMessage, shadowBg, random, countrySelect) {
        textGridFormModal.find(".text-grid-form-close").unbind("click").on("click", function () {
            $("#text-grid-form-modal-" + random).parent().removeClass('active');
            textGridFormThanksMessage.removeClass("active");
            textGridFormErrorMessage.removeClass("active");

            resetForm(textGridFormModal, countrySelect);
            activeFormModal();
        });

        textGridFormThanksMessage.find(".text-grid-form-thanks-message-close").unbind("click").on("click", function () {
            $("#text-grid-form-modal-" + random).parent().removeClass('active');
            textGridFormThanksMessage.removeClass("active");

            activeFormModal();
        });


        textGridFormErrorMessage.find(".text-grid-form-error-message-close").unbind("click").on("click", function () {
            textGridFormErrorMessage.removeClass("active");
        });

        function activeFormModal() {
            textGridFormModal.find(".text-grid-form-body").show();
            textGridFormModal.find(".text-grid-form-footer").show();
            textGridFormModal.find(".text-grid-form-header").show();
            shadowBg.removeClass("active");
            $('body').removeClass("hideScroll");
        }
    }

    function resetForm(textGridFormModal, countrySelect) {
        textGridFormModal.find(".text-grid-form-field input[type='text']").val("");
        textGridFormModal.find(".text-grid-form-check input[type='checkbox']").prop("checked", false);
        textGridFormModal.find('.hasVal').removeClass('hasVal');
        textGridFormModal.find('.text-grid-form-submit').attr("disabled", "disabled");
        countrySelect.reset();
    }

    $.each($('.main-category-link'), function (index, item) {
        var atModule = $(this).data('pre-module')
        var $href = $(this).data('link') || $(this).data('href') || $(this).data('item-href') 
        if ($href) {
            $(this).attr('data-at-module', atModule)
            $(this).addClass('cursor')
        }
    })
    return textGrid;
})($);

textGrid.init();

(function (document, $) {
    var inMobile = false;
    var $bannerWrapper = $(".new-split-banner-wrapper");
    var isIpad = true
    

    var isIpadFn = function () {
        isIpad = navigator.appVersion.indexOf('iPad') > -1
    }
    isIpadFn()

    var initClick = function () {
        $bannerWrapper.find(".new-split-banner-col-des-mobile").on("click", function () {
            clickMobile($(this).prev())
        })
    };
    var clickMobile = function (mobile) {
        mobile[0].click()
    };

    var initIEHover = function () {
        var bgIE = $bannerWrapper.find(".public-style") 
        // bgIE.each(function () {
        //     $(this).find("a").css({"background-size":"100%"})
        // })
        if (window.innerWidth > 768) {
            bgIE.each(function () {
                $(this).hover(function(){
                    $(this).find("a").stop().animate({backgroundSize:"115%"})
                },function(){
                    $(this).find("a").stop().animate({backgroundSize:"105%"})
                })
            })
        }else {
            bgIE.each(function () {
                $(this).find("a").css({"background-size":"100%"})
                $(this).unbind('mouseover').unbind('mouseout')
                $(this).hover(function(){
                    $(this).find("a").stop().animate({backgroundSize:"100%"})
                })
            })
        }
        
    }
    $(document).ready(function () {
        initClick();
        initIEHover()
        var publicHover = $bannerWrapper.find(".public-style")
        if(isIpad){
            publicHover.each(function () {
                $(this).hover(function () {
                    $(this).find(".new-split-banner-col-des").css({
                        '-webkit-transform':'translate(0%, 35%)',
                        '-moz-transform': 'translate(0%, 35%)',
                        'transform': 'translate(0%, 35%)',
                        'transition': 'none'
                    })
                    $(this).find("a").css({
                        'background-size':'cover',
                        'transition': 'none'
                    })
                })
            })
        }
        $(window).resize(function () {
            var $bannerWrapper = $(".new-split-banner-wrapper");
            var $newSplitBanners = $bannerWrapper.find(".public-style");
            if (window.innerWidth > 768) {
                initIEHover();
                if (inMobile) {
                    inMobile = false;
                    $newSplitBanners.each(function () {
                        var $banner = $(this);
                        var $this = $banner.find(".bg-box");
                        var originalImage = $this.data('original');
                        replaceWebpOriginal($this)
                       // $this.css('background-image', 'url("' + originalImage + '")');
                    });
                }
            } else {
                initIEHover();
                if (!inMobile) {
                    inMobile = true;
                    $newSplitBanners.each(function () {
                        var $banner = $(this);
                        var $this = $banner.find(".bg-box");
                        var originalImageMobile = $this.data('original-mobile');
                        replaceWebpOriginal($this)
                       // $this.css('background-image', 'url("' + originalImageMobile + '")');
                    });
                }
            }
        });
        $bannerWrapper.find('a.lazy-banner').on('click',function(){
            var analyticsStr=$(this).attr('data-analytics')
            HiAnalyticsCn.clickDown(analyticsStr)         
        })
    });
})(document, $);
var buttonEvents = (function ($) {
  var buttonEvents = {};
  var getUrlRelativePath = function () {
    var url = $('.header-wrapper').attr('data-product-select');
    var arrUrl = url.split("//");

    var start = arrUrl[0].indexOf("/");
    var relUrl = arrUrl[0].substring(start);

    if (relUrl.indexOf("?") != -1) {
      relUrl = relUrl.split("?")[0];
    }
    return relUrl.replace(".html", "");
  };

  function redirect(url) {
    $.ajax({
      type: 'GET',
      url: url,
      data: {
        path: encodeURI(getUrlRelativePath())
      },
    }).done(function (data) {
      if (data && data.path) {
        window.location = data.path;
      } else {
        window.alert("Email confirm has an error, please contact the support!");
      }
    }).fail(function (result) {
      window.alert("Email confirm has an error, please contact the support!");
    });
  }

  buttonEvents.init = function () {
    $(document).ready(function () {
      var emailConfirm = $('.button-cmp').data('emailconfirm');
      var showAgreement = $('.button-cmp').data('showagreement');
      $('.download-agreement-link').on('click',function(e){
        var link=$(this).attr('data-link')
        var pageTitle=$('#header').attr('data-page-title')
        var dataLable= $(this).text();
        if(window.location.href.indexOf('/cn/support/Downloads') > -1){
          var analyticsStr='下载::button::跳出弹窗::[file-link]'+link+'::'+pageTitle
          HiAnalyticsCn.clickDown(analyticsStr)
        } else {
          var atButton = $(this).parent().parent().attr('class').split('-')
          var compnentName = atButton[0] === 'offering'? atButton[0] : atButton[0] + '-' + atButton[1]
          window.compnentName = compnentName
          var atModule = $(this).data('pre-module')+'::' + lastNode($(this).attr('data-href')) + atModel.atSpliter + window.location.href.replace('#download-agreement','')
          atModel.doAtEvent(atModule , 'download', e); 

          var analyticsStr = dataLable+'::button::跳出弹窗::'+lastNode(link)+'::'+pageTitle
          HiAnalyticsCn.clickDown(analyticsStr)
        }
      })
      $('.button-cmp .hiknow-button a:not(.download-agreement-link), .button-cmp .hiknow-view a').on('click',function(){
        var link=$(this).attr('data-href') || $(this).attr('href')
        var pageTitle=$('#header').attr('data-page-title')
        var dataLable= $(this).text();
        var analyticsStr = dataLable+'::button::跳转页面::'+lastNode(link)+'::'+pageTitle
        HiAnalyticsCn.clickDown(analyticsStr);
      })
      if (emailConfirm) {
        var query = window.location.search.substring(1);
        var btnUrl = $('.button-cmp .hiknow-button a').data('href');
        var viewUrl = $('.button-cmp .hiknow-view a').data('href');
        if (btnUrl) {
          if (btnUrl.indexOf('?') >= 0) {
            btnUrl += '&' + query;
          } else {
            btnUrl += '?' + query;
          }
        }
        if (viewUrl) {
          if (viewUrl.indexOf('?') >= 0) {
            viewUrl += '&' + query;
          } else {
            viewUrl += '?' + query;
          }
        }
        $('.button-cmp .hiknow-button a').on('click', function () {
            setSubmittedPageUrlCookie("NewsLetterUrl");
            setSubmittedPageUrlCookie("contactUsUrl");
            $(this).attr('disabled', 'disabled');
            redirect(btnUrl);
        });
        $('.button-cmp .hiknow-view a').on('click', function () {
            setSubmittedPageUrlCookie("NewsLetterUrl");
            setSubmittedPageUrlCookie("contactUsUrl");
          $(this).attr('disabled', 'disabled');
          redirect(viewUrl);
        });

      } else {
        $('.button-cmp .hiknow-button a').on('click', function () {
            setSubmittedPageUrlCookie("NewsLetterUrl");
            setSubmittedPageUrlCookie("contactUsUrl");
        });
        $('.button-cmp .hiknow-view a').on('click', function () {
            setSubmittedPageUrlCookie("NewsLetterUrl");
            setSubmittedPageUrlCookie("contactUsUrl");
        });
        var btns = $('.button-cmp .hiknow-button a, .button-cmp .hiknow-view a');
        $.each(btns, function (key, val) {
          var checkLogin = $(val).data('download-checklogin');
          var checkLoginCn = $(val).data('download-checklogin-cn');
          var btnUrlOrg = $(val).attr('href');
          if (showAgreement || checkLogin || checkLoginCn) {
            var btnUrl = btnUrlOrg;
            btnUrl = header.checkLoginStatusForDownload(btnUrl, val);
            $(val).attr('href', btnUrl);
            if (btnUrl !== '#download-agreement') {
              $(val).removeAttr('data-toggle');
              $(val).removeClass('at-action');
              if (btnUrl == btnUrlOrg) {
                $(val).removeClass('at-exit');
                $(val).addClass('at-download');
              } else if (btnUrl.toLowerCase().indexOf("javascript")>=0) {
                  $(val).removeClass('at-exit');
                  $(val).addClass('at-download');
              } else {
                  $(val).removeClass('at-download');
                  $(val).addClass('at-exit');
              }
            }
          } else {
            var paths = btnUrlOrg.split('.');
            if (paths > 1) {
              var extension = paths[1];
              if (extension.toLowerCase() != 'html') {
                $(val).removeClass('at-navigation');
                $(val).addClass('at-download');
              }
            }
          }
        });
      }
    });
  };
  return buttonEvents;
}($));
buttonEvents.init();

$(document).ready(function() {
  $('.title-wrapper .title-capitalize').each(function() {
      var text = $(this).text().toLowerCase();
      $(this).text(text);
  });
});
var windowWidth = $(window).width();
$(document).ready(function() {
  if ($(window).width() >= 768) {
      initCardCarousel();
      var livePreviewWrapper = $(".live-preview-wrapper")
      livePreviewWrapper.each(function(){
          var tabItems = $(this).find(".live-preview-nav .live-preview-nav-item");
          tabItems.on("click",function(){
              tabItemClick(this);
          });
         if(tabItems.length < 3) {
              $(this).find(".live-preview-nav").addClass("justify-content-center");
         }
      });
  }else {
      initTabCarousel();
  }
  globalSettings.init();
});

var getMatchCarousel = function(dataCarousel) {
    var matchedCarousel;
    $(".live-preview-list .live-preview-item").each(function(){
        if($(this).attr("data-carousel") == dataCarousel) {
            matchedCarousel = $(this);
        }
    });
    return matchedCarousel;
}

var initCardCarousel = function() {

  var activeCardCarousel = $(".live-preview-item.active .live-preview-carousel");
  activeCardCarousel.each(function(){
      var length = $(this).find(".live-preview-carousel-card").length
      if(length > 4){
          if(!$(this).hasClass("slick-slider")) {
              $(this).find(".live-preview-carousel-card").removeClass("col-3");
              toggleCardCarouselSlick($(this), true);
          }
      }
  })
}

var toggleCardCarouselSlick = function(activeCardCarousel,arrows) {

    activeCardCarousel.slick({
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: arrows,
        accessibility: true,
        prevArrow: "<button class='slick-prev slick-arrow live-preview-btn' type='button' style=''><span></span></button>",
        nextArrow: "<button class='slick-next slick-arrow live-preview-btn' type='button' style=''><span></span></button>",
        useCss: true,
        lazyload: "ondemand",
        unslick: true
    });
}

var initTabCarousel = function() {
  $(".live-preview-wrapper").each(function(){
      var livePreviewNav = $(this).find(".live-preview-tab .live-preview-nav");
      var livePreviewNavItems = livePreviewNav.find(".live-preview-nav-item");
      livePreviewNavItems.each(function(){
          var dataCarousel = $(this).attr("data-carousel");
          var matchedCarousel = getMatchCarousel(dataCarousel);
          matchedCarousel.find(".live-preview-carousel-card").removeClass("col-3");
          $(this).find(".live-preview-nav-item-inner").append(matchedCarousel);
      });
      if(livePreviewNavItems.length >1){
          toggleTabCarouselSlick(livePreviewNav);
      }
  });
  var slickSlides = $(".slick-slide");
  slickSlides.each(function(){
    $(this).attr("data-slide-height",$(this).height());
  });
  setTabCarouselHeightForMobile();
}

var toggleTabCarouselSlick = function(livePreviewNav) {
  livePreviewNav.slick({
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      accessibility: true,
      useCss: true,
      prevArrow: "<button class='slick-prev slick-arrow btn live-preview-btn' type='button' style=''><img src='https://ce8375bef864f468685f027588f3cada.r2.cloudflarestorage.com/tongfang-assets/etc/clientlibs/it/resources/icons/icon-prev.png' alt=''></button>",
      nextArrow: "<button class='slick-next slick-arrow btn live-preview-btn' type='button' style=''><img src='https://ce8375bef864f468685f027588f3cada.r2.cloudflarestorage.com/tongfang-assets/etc/clientlibs/it/resources/icons/icon-next.png' alt=''></button>",
      lazyload: "ondemand"
  });

  livePreviewNav.on('afterChange', function() {
      var slickCurrentHeight = livePreviewNav.find(".slick-current").attr("data-slide-height");
      livePreviewNav.find(".slick-track").height(slickCurrentHeight);
  });
}

var tabItemClick = function(item){
  var livePreviewTab = $(item).parents(".live-preview-tab");
  var activeLivePreviewNavItem = livePreviewTab.find(".live-preview-nav .live-preview-nav-item.active");
  if (!$(item).is(activeLivePreviewNavItem)){
      activeLivePreviewNavItem.removeClass("active");
      $(item).addClass("active");
      var dataCarousel = $(item).attr("data-carousel");
      var activeItem = livePreviewTab.next().find(".live-preview-item.active");
      activeItem.removeClass("active");
      activeItem.find(".live-preview-carousel.slick-initialized").each(function(){
          $(this).slick("unslick");
      });
      var matchedCarousel = getMatchCarousel(dataCarousel);
      if (matchedCarousel) {
          matchedCarousel.addClass("active");
          initCardCarousel();
      }
  }
}

var setTabCarouselHeightForMobile = function() {
    $(".live-preview-wrapper").each(function(){
        $(this).find(".slick-track").height($(this).find(".slick-current").attr("data-slide-height"));
    });
}

$(window).resize(function(){
    if($(window).width() >= 768 && windowWidth < 768) {
        $(".live-preview-tab .live-preview-nav.slick-initialized").slick("unslick");
        $(".live-preview-nav-item .live-preview-nav-item-inner .live-preview-item").each(function(){
            $(this).parents(".live-preview-tab").next().append($(this));
            $(this).find(".live-preview-carousel-card").addClass("col-3");
        });
        $(".live-preview-nav .live-preview-nav-item").on("click", function(){
            tabItemClick(this);
        });
        initCardCarousel();
    }

    if($(window).width() < 768 && windowWidth >= 768) {
        $(".live-preview-item.active .live-preview-carousel.slick-initialized").slick("unslick");
        $(".live-preview-nav .live-preview-nav-item").unbind();
        initTabCarousel();
    }
    windowWidth = $(window).width();
})
$(document).ready(function() {
    $('.grid-list-wrapper a').unbind('click').click(function(){
        var target = $(this).attr('target')
        var href= $(this).attr('data-href')
        window.open(href,target)
    })
});

(function (document, $) {
    function initPaddingTop(){
        $.each($('.card-gallery'),function(){
            if($(this).prev().hasClass('card-gallery')){
             //   $(this).find('.card-gallery-wrapper').css('margin-top','0px')
            }
        })
    };
    function addClassforCn(){
        if(JudgeWebLanguage('cn')){
            $('.card-gallery').addClass('cn-card-gallery');
        }
    };
    function openLink(){
        $(".card-gallery-content .hik-video-trigger").click(function (e) {
            e.stopPropagation();
        })
        $(".card-gallery-content").click(function(e){
           if(!$(e.target).parent().attr('href') && !$(e.target).is('a')){
            if($(e.target).is('video') || $(e.target).hasClass('hik-video-trigger') || $(e.target).hasClass('hik-video-wrapper') || $(e.target).hasClass('plyr__control') || $(e.target).hasClass('plyr__controls__item') || !$(e.target).attr('class')) {
                return false;
               } else {
                if(!($(e.target).attr("data-is-jump"))){
                    $(this).parent().find(".btn-link").click()
                    var hasVideo = $(this).find(".icon-play").length > 0;
                    //有链接有视频，点击图片打开视频；有链接无视频，点击图片打开链接
                    if(!(hasVideo && (e.target == $(this).find(".icon-play")[0] || e.target == $(this).find(".content-img")[0]))){
                        var link = $(this).attr("data-href");
                        var target = $(this).attr("data-target");
                        if(link){
                            var title = atModel.getTitle(event.currentTarget);
                          //  atModel.doAtEvent(title, 'navigation', e);
                            if (target=="_blank") {
                                window.open(link);
                            } else {
                                window.location.href = link;
                            }
                        }
                    }
                }
               }
           } 
        });
        $('.card-gallery-content-desc').on('click',function(e){
            console.log('description...')
            e.stopPropagation()
            var href=$(this).parent().attr('data-href')
            var target=$(this).parent().attr('data-target')
            if(href){
                window.open(href, target)
            }
        })
    }

    $(window).resize(function () {
        $(".card-gallery").each(function(){
            $(this).find(".card-gallery-content").each(function(){
                $(this).removeAttr("style");
            });
        });
        // setCardHeight();
    });
    var pageTitle=$("#header").attr('data-page-title')
    $('.card-gallery .card-gallery-content-desc a').unbind().on('click',function(e){
            e.stopPropagation()
            e.preventDefault()
            var ahref = $(this).data('href') || $(this).attr('href')
            if(ahref && !_.startsWith(ahref ,'http') && $(this).attr('target') != '_blank'){
              setTimeout(function() {
                window.open(ahref, '_self')
              }, 500)
            } else if(ahref) {
              setTimeout(function() {
                window.open(ahref, '_blank')
              }, 500)
            }
            var analyticsData=$(this).text()+"::Card Gallery::跳转页面::[complete-link]"+$(this).attr('href')+"::"+pageTitle
            HiAnalyticsCn.clickDown( analyticsData)
    })
    $('.card-gallery .card-gallery-content').unbind('click').on('click',function(){
            var href=$(this).attr('data-href')
            var analyticsStr=$(this).attr('data-analytics')
            href ? HiAnalyticsCn.clickDown( analyticsStr) : false;
    })

    //统一每行card gallery的高度
    // function setCardHeight(){
    //     $(".card-gallery").each(function(){
    //         var height;
    //         $(this).find(".card-gallery-content").each(function(){
    //             $(this).height('auto');
    //             var h = $(this).height();
    //             if(height){
    //                 height = height > h ? height :h;

    //             }else{
    //                 height = h;
    //             }
    //         });
            
    //         $(this).find(".card-gallery-content").each(function(){
    //             $(this).height(height);
    //         });
    //     });
    // }
    
    //无链接无交互
    function initCATHover() {
        $.each($('.card-gallery-wrapper-check'),function(){
          $.each($(this).find('.card-gallery-content'), function(){
            if(!$(this).attr('data-href')){
                $(this).addClass('no-link');
                $(this).find('.card-gallery-content-img').addClass('no-link')
            } else {
                var currentHref = $(this).attr("data-href")
                if(currentHref && currentHref.indexOf("http") > -1 && currentHref.indexOf(window.location.host) < 0){
                   $(this).attr("rel", "nofollow")
                }
            }
            // 处理视频封面图
            if($(this).find(".card-gallery-content-img") && $(this).find(".card-gallery-content-img").find("a").hasClass("hik-video-trigger")){
                var $videoTrigger = $(this).find(".card-gallery-content-img").find("a")
                var $playerBtn = $videoTrigger.find('.player-btn')
                var currentHref = $playerBtn.attr("data-video-path")  // 从player-btn获取视频路径
                var isInternalVideo = $playerBtn.attr('data-internal-video') === 'true'
                var poster = $playerBtn.attr('data-poster')
                // 如果是外部视频(YouTube)且没有配置封面图
                if(!isInternalVideo && currentHref && !poster) {
                    var videoId = currentHref.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i)?.[1];
                    if(videoId) {
                        var thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                        console.log('video-thumbnailUrl', thumbnailUrl)
                        $videoTrigger.css('background-image', 'url("' + thumbnailUrl + '")');
                    }
                }
                
                if(currentHref && currentHref.indexOf("http") > -1 && currentHref.indexOf(window.location.host) < 0){
                    $videoTrigger.attr("rel", "nofollow")
                }
            }
            
            // 点击按钮弹出视频弹窗播放视频
            $('.player-btn').off().on('click', function(e){
                e.stopPropagation();
                var video = $(this).attr('data-video-path')
                var isInternalVideo = $(this).attr('data-internal-video') === 'true'
                $('html').addClass('overflow-prevent')
                initVideoModal(video, !isInternalVideo)
            })
          })
        })  
    }
    function initLazyImage(){
        $.each($(".card-gallery").find(".lazy-image-single"), function(){
           if(!$(this).closest(".content-detail-section").length){
            if($(this).is('div')){
                $(this).css('background-image', 'url("' + $(this).attr("data-original") + '")');
            } else {
                if(getCurrentBreakPoint() != "MOBILE"){
                    $(this).attr('src', $(this).attr("data-src"));
                } else {
                    var mobImage = $(this).attr("data-src") || $(this).attr("data-mob-src")
                    $(this).attr('src', mobImage);
                }
            }
           }
        })
      }
    function initMouseHideCardBorder(){
        $.each($('.card-gallery-content.hide-card-border'), function(){
            var self = this
            $(this).find('.card-gallery-content-img,.card-gallery-content-title,.card-gallery-content-desc').hover(function(){
               $(self).addClass('active_black') 
            },function(){
                $(self).removeClass('active_black') 
            })
        })
         $.each($('.card-gallery-content'), function(){
            var maxLength = 0;
            var longestLi = null;
            var textLength = $(this).text().length;

                // 比较并更新最大长度和对应li元素
                if (textLength > maxLength) {
                    maxLength = textLength;
                    longestLi = $(this);
                }
         })
    }  
    $(document).ready(function(){
        initPaddingTop();
        addClassforCn();
        // setTimeout(setCardHeight, 1000);
        // hoverLearnMore()
        openLink();
        initCATHover();
        initMouseHideCardBorder();
        initLazyImage();
        // $('.mult-tabs-container-comp').on('multi-tabs-change', function() {
        //     setCardHeight();
        // });
        $('.card-gallery-modal').on('show.bs.modal', function (e) {
            e.stopPropagation();
        })
        var userType = $(".needLogin").attr("data-userType");
        var cardGallery = $(".card-gallery-wrapper-check");
        if(cardGallery.length > 0 && $(".needLogin").length > 0 && userType != undefined){
            var runMode = getLoginCookie("wcmmode");
            if(runMode == "edit" || runMode =="preview"){
                return;
            }
            var hikId = $.cookie("HIKID");
            try {
                hikId = atob(hikId);
            } catch (error) {
                console.log("Login Error:" + error);
            }
            cardGallery.each(function(){
                var thisCardPath = $(this).attr("data-card-gallery");
                var currentPagePath = $(this).attr("data-page-path");
                var showCardGalleryUrl = thisCardPath + ".usertype.json";
                if(thisCardPath){
                    $.ajax({
                        type: "GET",
                        url: showCardGalleryUrl,
                        data: {
                            hikId: hikId,
                            currentPagePath: currentPagePath
                        },
                        success: function(data){
                            var jsonData = typeof data=="string" ? JSON.parse(data):data;
                            if(jsonData.code == 200){
                                $("[data-card-gallery='"+thisCardPath+"']").append($(unescape(jsonData.protectedComponent)));
                                openLink();
                            }
                        }
                    });
                }

            })

        }
    })
})(document, $);


var productComparisonBottom = (function ($) {
  var productComparisonBottom = {};
  var compareContBox =  '<div class="compare-contbox"></div>';
  $('body').append(compareContBox);
  productComparisonBottom.getCurrentBreakpoint = function () {
    var contentValue = window.getComputedStyle(
      document.querySelector('.compare-contbox'),'::before'
    ).getPropertyValue('content');
    return contentValue.replace(/\"/g, '');
  };

  productComparisonBottom.addProductToCompare = Granite.I18n.get("Up to 4 products")
  productComparisonBottom.closeCompareBar = function () {
    $(".compare-cont").slideUp();
    var compareArrary = productComparisonBottom.getCompareArray();
    if(compareArrary.length > 0) {
      $("#compareBtm-2").show(800);
    } else {
      $("#compareBtm-2").css("display", "none");
    }
  };
  productComparisonBottom.clearCompareData = function () {
    $('html').removeClass('overflow-prevent');
    productComparisonBottom.setCompareArray([]);
    
    var emptyDesktop = '<div class="empty-cont active-compare-cont"><div class="add-item">' + productComparisonBottom.addProductToCompare + '</div></div>';
    var emptyMobile = '<div class="add-item">' + productComparisonBottom.addProductToCompare + '</div>';
    var html = productComparisonBottom.getCurrentBreakpoint() == 'DESKTOP' ? emptyDesktop : emptyMobile;
    var itemParentNode = productComparisonBottom.getCurrentBreakpoint() == 'DESKTOP' ? '.compare-content > .compare-items-cont' : '.compare-cont > .compare-items-cont';

    $(itemParentNode).empty();
    $(itemParentNode).append('<div class="compare-item" id="item-1">'+ html +'</div>');
    $(itemParentNode).append('<div class="compare-item" id="item-2">'+ html +'</div>');
    $(itemParentNode).append('<div class="compare-item" id="item-3">'+ html +'</div>');
    $(itemParentNode).append('<div class="compare-item" id="item-4">'+ html +'</div>');
    $(".comp-count").text(0);

    $('.compare-btn').addClass('disabled');
    $('.compare-btn').attr('data-at-module', "compare");

    compareTriggers.forEach(function (value) {
      if ($(value).is("input") && ($(value).attr('type') === 'checkbox')) {
        $(value + ':checked').trigger('click');
        $(value + ':checked').prop('checked', false);
        if(!$(".product_description_compare .add-to-compare-chk").is(":checked")){
          $(".product_add_compare-btn").show();
          $(".product_added_compare-btn").hide();
        }
      }
    });
    
    if(productComparisonBottom.getCurrentBreakpoint() == 'MOBILE'){
      $('.compare-cont .compare-items-cont').css('display', 'none');
      productComparisonBottom.removeLayout();
      $(".compare-cont").slideToggle('slow');
    }
  };
  productComparisonBottom.setCompareArray = function (compareArrary) {
    if (window.localStorage) {
      localStorage.setItem('compare-products', JSON.stringify(compareArrary));
    }
  };
  productComparisonBottom.getCompareArray = function () {
    if (window.localStorage) {
      var compareArrary = JSON.parse(localStorage.getItem('compare-products'));
      if (!compareArrary)
        compareArrary = [];
      return compareArrary;
    }
    return [];
  };
  var oHtml = "<div id='toast-to' ><img src='https://ce8375bef864f468685f027588f3cada.r2.cloudflarestorage.com/tongfang-assets/etc/clientlibs/it/resources/icons/toast.png'/>Exceeds the maximum number of options</div>"
  productComparisonBottom.addCompareDataItem = function (productUrl, event) {
    var compareArrary = productComparisonBottom.getCompareArray();
    var title = $(event.currentTarget).data('at-module');
    if (!isNull(title)) {
      title = title.split(' ').join('_');
      title = title + atModel.atSpliter + window.location.href;
    } else {
      var titles = productUrl.replace(/\.html/, '').split('/');
      title = titles.pop();
      if (isNull(title)) {
        title = titles.pop();
      }
      title = "product spotlight::compare::" + title + atModel.atSpliter + window.location.href;
    }
    // at event
    atModel.doAtEvent(title, 'action', event);

    // todo max length of compare array should add to a config
    if (compareArrary.length == 4) {
      // pop message max compare count
      var parentBody = $(window.parent.document.body);
      $(parentBody).append(oHtml);
      setTimeout(function () {
        parentBody.find("#toast-to").remove();
      }, 3000);
      // $(this).prop('checked', false);
      $(event.target).prop('checked', false);
      if(!$(".product_description_compare .add-to-compare-chk").is(":checked")){
        $(".product_add_compare-btn").show();
        $(".product_added_compare-btn").hide();
      }
      return;
    }
    var index = compareArrary.findIndex(function (item) {
      return item.productUrl === productUrl;
    });
    // get product properties form pis system into local storage for compare
    $.getJSON(productUrl.replace(".html", ".model.json"), function (json) {
      json.productUrl = productUrl;
      if (index >= 0) {
        compareArrary[index] = json;
      } else {
        compareArrary.push(json);
      }
      productComparisonBottom.setCompareArray(compareArrary);
      productComparisonBottom.renderCompareDataItem(compareArrary.length, json, index);
      var module = $('.compare-btn').attr('data-at-module');
      if (compareArrary.length === 1) {
        $('.compare-btn').attr('data-at-module', module + atModel.atSpliter + json.productNo);
      } else {
        $('.compare-btn').attr('data-at-module', module + "|" + json.productNo);
      }
    });
  };
  productComparisonBottom.renderCompareDataItem = function (index, productModel, isSame) {
    var same = isSame + 1;
    if (isSame >= 0) {
      $(".compare-cont #item-" + same).empty();
    } else {
      $(".compare-cont #item-" + index).empty();
    }
    // 图片大小转换pc用319x319 mobile用140x100
    var pImage = productModel.productImage
    if(productModel.productImage){
      if(getCurrentBreakpoint()== 'DESKTOP'){
        pImage = productModel.productImage.replace(/1280.1280/g, '319.319')
      } else {
        pImage = productModel.productImage.replace(/1280.1280/g, '140.100')
      }
    }
    var itemDesktop = 
      '<div class="item-cont" style="background: #FFF url(\'' + pImage + '\') no-repeat center;background-size: auto 88px;">' + 
        '<div class="item-title">' + productModel.productNo + '</div>' +
        '<div class="close-item" data-product-url="' + productModel.productUrl + '">' +
          '<div  class="remove-items" id="remove-item-1" data-at-module="compare_bottom::compare::remove' + productModel.productNo + '" >' +
            '<img src="https://ce8375bef864f468685f027588f3cada.r2.cloudflarestorage.com/tongfang-assets/etc/clientlibs/it/resources/icons/close-defaults-1.svg" alt="Close">' +
          '</div >' +
        '</div>' +
     '</div>';

    var itemMobile = 
      '<div class="item-cont" style="background: #FFF url(\'' + pImage + '\') no-repeat center;background-size: contain;"></div>' +
      '<div class="item-title">' + productModel.productNo + '</div>' +
      '<div class="close-item" data-product-url="' + productModel.productUrl + '">' +
        '<div  class="remove-items" id="remove-item-1" data-at-module="compare_bottom::compare::remove' + productModel.productNo + '" >' +
          '<img src="https://ce8375bef864f468685f027588f3cada.r2.cloudflarestorage.com/tongfang-assets/etc/clientlibs/it/resources/icons/close-defaults-1.svg" alt="Close">' +
        '</div >' +
      '</div>';


      if (isSame >= 0) {
        $(".compare-cont #item-" + same).append(getCurrentBreakpoint() == 'DESKTOP' ? itemDesktop : itemMobile);
      } else {
        $(".compare-cont #item-" + index).append(getCurrentBreakpoint() == 'DESKTOP' ? itemDesktop : itemMobile);
      }


    $('.comp-count').text(index);
    $('.compare-btn').removeClass('disabled');
  };

  productComparisonBottom.removeCompareDataItem = function (productKey, event) {

    var title = $(event.currentTarget).data('at-module');
    if (!isNull(title)) {
      title = title.split(' ').join('_');
      title = title + "::remove::" + window.location.href;
    } else {
      var titles = productKey.replace(/\.html/, '').split('/');
      title = titles.pop();
      if (isNull(title)) {
        title = titles.pop();
      }
      title = "product spotlight::compare::remove" + title + atModel.atSpliter + window.location.href;
    }
    // at event
    atModel.doAtEvent(title, 'action', event);

    // product key is pis url
    var compareArrary = productComparisonBottom.getCompareArray();
    var index = compareArrary.findIndex(function (item) {
      return item.productUrl === productKey;
    });
    if (index >= 0) {
      var module = $('.compare-btn').attr('data-at-module');
      $('.compare-btn').attr('data-at-module', module.replace("|" + compareArrary[index].productNo, ""));

      compareArrary.splice(index, 1);
      productComparisonBottom.setCompareArray(compareArrary);
      productComparisonBottom.initCompareData();
    }
  };
  productComparisonBottom.initCompareData = function () {
    var compareData = productComparisonBottom.getCompareArray();
    compareData.forEach(function (value, index) {
      productComparisonBottom.renderCompareDataItem(index + 1, value);
      $('input[data-product-url="' + value.productUrl + '"]').prop('checked', true);
      if($(".product_description_compare .add-to-compare-chk").is(":checked")){
          $(".product_add_compare-btn").hide();
          $(".product_added_compare-btn").show();
      }

      var module = $('.compare-btn').attr('data-at-module');
      if (index === 0) {
        $('.compare-btn').attr('data-at-module', module + atModel.atSpliter + compareData[index].productNo);
      } else {
        $('.compare-btn').attr('data-at-module', module + "|" + compareData[index].productNo);
      }
    });
    for ((i = compareData.length + 1); i <= 4; i++) {
      $(".compare-cont #item-" + i).empty();
      $(".compare-cont #item-" + i).append($('.compare-item-empty').html());
    }
    $('.comp-count').text(compareData.length);
    if (compareData.length === 0) {
      $('.compare-btn').addClass('disabled');
      if(productComparisonBottom.getCurrentBreakpoint() == 'MOBILE'){
        $('.compare-cont .compare-items-cont').css('display', 'none');
        $('.compare-cont .compare-items-cont').removeClass('active');
        $('html').removeClass('overflow-prevent');
        productComparisonBottom.removeLayout();
        $(".compare-cont").slideUp('slow');
      }
    } else {
      $('.compare-btn').removeClass('disabled');
    }
  };
  productComparisonBottom.renderCompareBottom = function (isShow) {
    var compareCont = $('.compare-cont');
    if (compareCont.length === 0) {
      var compartPath = $(".header-wrapper").attr('data-compare');

      var compareDesktop =
        '<div class="compare-cont">' +
          '<div class="compare-content">' +
            '<div class="compare-items-cont">' +
              '<div class="compare-item" id="item-1">' +
                  '<div class="empty-cont active-compare-cont">' +
                    '<div class="add-item"></div>' +
                  '</div>' +
              '</div>' +
              '<div class="compare-item" id="item-2">' +
                  '<div class="empty-cont active-compare-cont">' +
                    '<div class="add-item">' + productComparisonBottom.addProductToCompare + '</div>' +
                  '</div>' +
              '</div>' +
              '<div class="compare-item" id="item-3">' +
                  '<div class="empty-cont active-compare-cont">' +
                    '<div class="add-item">' + productComparisonBottom.addProductToCompare + '</div>' +
                  '</div>' +
              '</div>' +
              '<div class="compare-item" id="item-4">' +
                  '<div class="empty-cont active-compare-cont">' +
                    '<div class="add-item">' + productComparisonBottom.addProductToCompare + '</div>' +
                  '</div>' +
              '</div>' +
            '</div>' +
            '<div class="compare-btn-wrapper">' +
              '<div class="comp-clear-btn">' +
                '<div class="clear-all-btn">' + Granite.I18n.get("Clear All") + '</div>' +
              '</div>' +
              '<a class="compare-btn at-navigation" data-at-module="compare" href="' + compartPath + '" target="_blank">' +
                '<div class="comp-btn-text compare-products">' + Granite.I18n.get("Compare") + '</div>' +
                '<div class="comp-count">2</div>' +
              '</a>' +
            '</div>' +
          '</div>' +
          '<div class="close-compare-tab" id="closeCompare">' +
            '<img src="https://ce8375bef864f468685f027588f3cada.r2.cloudflarestorage.com/tongfang-assets/etc/clientlibs/it/resources/icons/close-defaults-big-1.svg" alt="Close" id="">' +
          '</div>' +
          '<div class="compare-item-empty">' +
            '<div class="empty-cont active-compare-cont">' +
              '<div class="add-item">' + productComparisonBottom.addProductToCompare + '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="compare-btn-cont" id="compareBtm-2">' +
          '<div class="compare-btn">' +
            '<div class="comp-count">2</div>' +
            '<div class="comp-btn-text compare-list">' + Granite.I18n.get("Compare") + '</div>' +
          '</div>' + 
        '</div>';

      var compareMobile = 
        '<div class="compare-cont">' +
          '<div class="compare-items-cont">' +
            '<div class="compare-item" id="item-1">' +
                '<div class="empty-cont active-compare-cont">' +
                  '<div class="add-item">1111111</div>' +
                '</div>' +
            '</div>' +
            '<div class="compare-item" id="item-2">' +
              '<div class="add-item">' + productComparisonBottom.addProductToCompare + '</div>' +
            '</div>' +
            '<div class="compare-item" id="item-3">' +
              '<div class="add-item">' + productComparisonBottom.addProductToCompare + '</div>' +
            '</div>' +
            '<div class="compare-item" id="item-4">' +
              '<div class="add-item">' + productComparisonBottom.addProductToCompare + '</div>' +
            '</div>' +
          '</div>' +
          '<div class="compare-mobile-bar">' + 
            '<div class="compare-bar-sum-container">' +
              '<div class="compare-bar-sum">' + 
                Granite.I18n.get("Compare Products") + ' ('+  '<span class="compare-bar-active-product comp-count">0</span>' + '/4)' +
              '</div>' +
              '<div class="compare-view-detail">' + Granite.I18n.get("View Details") + '</div>' +
            '</div>' +
            '<div class="compare-btn-wrapper">' +
              '<a class="compare-btn at-navigation" data-at-module="compare" href="' + compartPath + '" target="_blank">' +
                '<div class="comp-btn-text compare-products">' + Granite.I18n.get("Compare") + '</div>' +
              '</a>' +
              '<div class="comp-clear-btn">' +
                '<div class="clear-all-btn">' + Granite.I18n.get("Clear All") + '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="compare-item-empty">' +
            '<div class="add-item">' + productComparisonBottom.addProductToCompare + '</div>' +
          '</div>' +
        '</div>';


      // console.log(productComparisonBottom.getCurrentBreakpoint());
      var html = productComparisonBottom.getCurrentBreakpoint() == 'DESKTOP' ? compareDesktop : compareMobile;

      $('body').append(html);

      $(".compare-cont").css("display", "none");
      $("#compareBtm-2").css("display", "none");

      // for events
      $("body").on("click", ".compare-cont #closeCompare", productComparisonBottom.closeCompareBar);
      $("body").on("click", ".compare-btn-cont#compareBtm-2", function () {
        $(".compare-cont").slideToggle("slow");
        $(".compare-cont").show(800);
        if(productComparisonBottom.getCurrentBreakpoint() == 'DESKTOP') $(".compare-cont").css("display", "block");
        $(".compare-btn-cont#compareBtm-2").hide();
      });

      $("body").on("click", ".compare-cont .compare-item .close-item", function (e) {
        var productUrl = $(this).attr('data-product-url');
        // $('input[data-product-url="' + productUrl + '"]').trigger('click');
        $('input[data-product-url="' + productUrl + '"]').prop('checked', false);
        if(!$(".product_description_compare .add-to-compare-chk").is(":checked")){
          $(".product_add_compare-btn").show();
          $(".product_added_compare-btn").hide();
        }
        productComparisonBottom.removeCompareDataItem(productUrl, e);
      });
      $("body").on("click", ".compare-cont .comp-clear-btn", productComparisonBottom.clearCompareData);
      productComparisonBottom.viewAllMobile();
      productComparisonBottom.initCompareData();
    }
    if (isShow && $(".compare-cont").css("display") !== "block") {
      $(".compare-cont").slideToggle("slow");
      $(".compare-cont").show(500);
      if(productComparisonBottom.getCurrentBreakpoint() == 'DESKTOP') $(".compare-cont").css("display", "block");
      $(".compare-btn-cont#compareBtm-2").hide();
    }
  };

  productComparisonBottom.viewAllMobile = function () {
    $('.compare-mobile-bar .compare-view-detail').on('click', function(e){
      e.stopPropagation();
      $(this).toggleClass('expand');
      if (!$('.compare-items-cont').hasClass("active") ){
        $('html').addClass('overflow-prevent');
        $('.compare-items-cont').addClass('active');
        $('.compare-cont .compare-items-cont').slideDown('fast');
        $('body').append('<div class="layout compare"></div>');
      } else {
        $('.compare-items-cont').removeClass('active');
        $('.compare-cont .compare-items-cont').slideUp('fast');
        $('body .layout').remove();
        $('.compare-view-detail').removeClass('expand');
        $('html').removeClass('overflow-prevent');
      }
      $('.layout.compare').on('click', function() {
        $('.compare-cont .compare-items-cont').slideUp('fast');
        $('body .layout').remove();
        $('.compare-view-detail').removeClass('expand');
        $('html').removeClass('overflow-prevent');
        $('.compare-items-cont').removeClass("active")
      })
    })
  }

  productComparisonBottom.initComparetEvent = function (comparetTriggerItem) {
    $(comparetTriggerItem).removeAttr('onclick');
    $(comparetTriggerItem).unbind("click").click(function (e) {
      e.stopPropagation();
      productComparisonBottom.renderCompareBottom(true);
      var productUrl = $(this).attr('data-product-url');
      var isAdd = true;
      // if event target is checkbox checked state is add
      // if not checkbox should add attribute data-isadd
      if ($(this).is("input") && ($(this).attr('type') === 'checkbox')) {
        isAdd = $(this).is(":checked");
      } else {
        isAdd = $(this).attr('data-isadd');
      }
      if (productUrl) {
        if (isAdd) {
          $(this).prop('checked', true);
          productComparisonBottom.addCompareDataItem(productUrl, e);
        } else {
          productComparisonBottom.removeCompareDataItem(productUrl, e);
        }
      }
    });
  };

  productComparisonBottom.removeLayout = function () {
    $('body .layout').remove();
    $('.compare-view-detail').removeClass('expand');
  }

  productComparisonBottom.handleMobileViewCompare = function () {
    var contactUsBtnContent = $(".btn-content .contact-us-btn-content");
    var compareBtnContent = $(".compare-btn-cont");
    if (contactUsBtnContent.length != 0) {
      if ($(window).width() <= 1024) {
        contactUsBtnContent.after(compareBtnContent);
      } else {
        $(".compare-cont").after(compareBtnContent);
      }
    }
  };

  productComparisonBottom.init = function (comparetTriggerItem) {
    $(document).ready(function () {
      productComparisonBottom.renderCompareBottom();
      productComparisonBottom.initComparetEvent(comparetTriggerItem);
      productComparisonBottom.handleMobileViewCompare();
    });

    $(window).resize(function () {
      productComparisonBottom.handleMobileViewCompare();
    });
  };

  return productComparisonBottom;
})($);

var compareTriggers = [".add-to-compare-chk"];
for (var i = 0; i < compareTriggers.length; i++) {
  productComparisonBottom.init(compareTriggers[i]);
};

;
(function (document, $) {
  window.initsmallCombinationMobileLayout = function($widgetcombination){
    if($(window).width()<=991){
      if($widgetcombination.hasClass("widget-combination-small")){
        $.each($widgetcombination, function(){
          var $widgetCombinationWrapper = $(this)
          if($widgetCombinationWrapper.hasClass("widget-combination-small")){
          var verticalHtmls = []
          var horizontalHtmls = []
          var squareHtmls = [] 
          $.each($widgetCombinationWrapper.find(".widget-combination-list").find(".widget-combination-card"), function(index, item){ 
          var itemTxt = $(item).attr("data-title") ? $(item).attr("data-title").trim(): '';
          var itemHtml = $(item).html()
          var mobOriginal = $(item).attr("data-original-mobile")
          $(item).empty()
          if(itemHtml && !mobOriginal){
            $(item).append(itemHtml)
          }
          $(item).append(htmlElementNode("div", ['widget-title', $(item).attr("data-titleAlign"), $(item).attr("data-titleColor")],itemTxt))
          if($(item).hasClass("widget-vertical")){
            verticalHtmls.push($(item).attr("order", index))
          } else if($(item).hasClass("widget-horizontal")) {
            verticalHtmls.push($(item).attr('order', index))
          } else if($(item).hasClass("widget-square")) {
            squareHtmls.push($(item).removeClass("widget-combination-card").addClass("widget-combination-item").addClass("scroll-lazy-image").attr('order', index))
          }
          }) 
          countSmallPositionMobile(verticalHtmls,horizontalHtmls,squareHtmls, $(this).find('.widget-combination-list'))
          setTimeoutMobWidget($widgetCombinationWrapper)
          }
        })
      }
    }
  }
  initsmallCombinationMobileLayout($('.widget-combination-wrapper'))
   // 创建html元素
   function htmlElementNode(element,classNames, content){
    var oDivs = document.createElement(element)  
    oDivs.className = classNames.join(" ")
    oDivs.innerHTML = content
    return oDivs
  }
  function setTimeoutMobWidget($widgetCombinationWrapper){
    var indexD = 0
    setTimeout(function() {
      $.each($widgetCombinationWrapper.find(".widget-swiper"), function(){
        var $swiper = $(this)
        var $index = 0
        var $cIndex = $swiper.parent().find('.widget-swiper-pagination').find('.swiper-pagination-bullet.swiper-pagination-bullet-active').index()
        // 先检查是否存在旧的 Swiper 实例并销毁
        if (this.swiper) {
          this.swiper.destroy(true, true)
        }
        var smallSwipper = new Swiper(this, {
          slidesPerView: "auto",
          loop: false,
          spaceBetween: 15,
          touchEventsTarget: 'container',
          simulateTouch: true,
          pagination: {
            clickable: true,
            el: $swiper.parent().find('.widget-swiper-pagination'),
            bulletElement: 'li',
          },
          on: {
            init: function() {
              setTimeout(function() {
                $.each($(".widget-combination-item"), function(){
                  $(this).on("click", function(){
                    if($(this).data("href")){
                    window.open($(this).data("href"), '_self')
                  }
                  })
               })
                smallSwipper.update();
              }, 100);
            },
            touchEnd: function(event){
              var touch = event && event.changedTouches ? event.changedTouches[0] : null;
              if (touch) {
                var pageX = touch.pageX;
                if (pageX < 200 && pageX > 0) {
                  indexD++;
                } else if (pageX <= 0) {
                  indexD = 1;
                } else {
                  indexD = indexD < 0 ? indexD : indexD--;
                }
              }

              if($(event.target).hasClass('swiper-slide')){
                $index = $(event.target).index();
                if($index === 1 && $(event.target).parent().offset().left>-300){
                  $index = -1;
                }
                if($index === 0 && $(event.target).parent().offset().left>100){
                  $index = -1;
                }
              } else {
                if($(event.target).parent().offset().left>0){
                  $index = 0;
                }
              }
              
              $swiper.parent().find('.widget-swiper-pagination')
                .find('.swiper-pagination-bullet')
                .removeClass('swiper-pagination-bullet-active')
                .eq($index + 1)
                .addClass('swiper-pagination-bullet-active');
            }
          }
        })
      })
    }, 300);
  }
    // small style  mobile布局修改
    function countSmallPositionMobile(verticalHtmls,horizontalHtmls,squareHtmls, parentElement){
      var verticalAndHorizontalArrs = []
     // $(parentElement).empty()
      console.log('verticalHtmls', verticalHtmls)
      $.each(verticalHtmls,function(index,item){
        if($(item).attr("data-item-index") < 6){
          $(item).addClass("swiper-slide").removeClass("widget-combination-card").addClass("widget-combination-item").addClass("scroll-lazy-image")
          $(item).attr("index", index)
          $(parentElement).append($(item))
          verticalAndHorizontalArrs.push(item)
        }
      })  
      var lastItem = $(parentElement).find(".widget-combination-item").last()
        var renderSqueryHtmls = splitSquareHtmls(squareHtmls)
        $.each(renderSqueryHtmls, function(index,es){
            if(index<3-verticalAndHorizontalArrs.length){
              var currentSquare = squareFlexWapperConnections(es, index)
                $(parentElement).append($(currentSquare))
                if(lastItem.length){
                  if($(currentSquare).attr("order")>$(lastItem).attr("order")){
                    $(lastItem).after($(currentSquare))
                    lastItem = currentSquare
                   } else {
                    $(lastItem).after($(currentSquare))
                    lastItem = currentSquare
                   }
                } else {
                  $(parentElement).append($(currentSquare).attr('index', '3'))
                }
            }
        })
    }
  // 将所有的square元素分成每一组处理成被flex-wapper包裹的html元素集合
  function squareFlexWapperConnections(elements, index){
    var $currentDivElement = $("<div class='swiper-slide widget-combination-item' index='"+index+"' order='"+elements[0].attr("order")+"'></div>")
     $.each(elements, function(index, element){
      $currentDivElement.append(element)
     })
     return $currentDivElement
   }
  // 将所有的square元素分成两两一组
  function splitSquareHtmls (widgets){
      var widgetGroups = []; 
       $.each(widgets, function(index, widget) { 
        if (index % 2 === 0) { 
          widgetGroups.push(widgets.slice(index, index + 2)); 
        } 
     });
    return widgetGroups
  }
})(document, $)

$(function () {
  if($('.swiper-container.small-banner-full-carousel').length){
    $.each($('.swiper-container.small-banner-full-carousel'), function(){
      if($(this).parent().parent().parent().hasClass("content-detail-section")){
        return false;
      }
      var self = this
      var bannerId = $(self).attr("id")
      var thinBannerSwiper = new Swiper(this, {
        watchOverflow: true,
        disableScroll: true,
        loop: $(this.$el).find(".thin-loop-div span").length>1 ? true:false,
        noSwiping:  getCurrentBreakPoint() == 'MOBILE' ? false : true,
        autoplay: true,
        pagination: {
            clickable :true,
            el: '.swiper-pagination',
            bulletElement : 'li',
            renderBullet: function (index, className) {
                return '<div class="' + className + '"><div class="swiper-carousel-div"><span class="swiper-carousel-span"></span></div></div>';
            },
        },
        on: {
          transitionStart: function(){
            if(isInViewPort($(self).get(0))){
              var _self = $(this.$el).find(".swiper-slide-active")
              var imgSrc = $(_self).find("picture").attr("data-src")
              var mobImgSrc = $(_self).find("picture").attr("data-mob-src")
              var imageAltText =  $(_self).find(".text-wrapper .small-banner-full__item--title").html() || 'Thin Banner Image Text'
              $(".swiper-carousel-div").removeClass("text-color-grey text-color-white").addClass(_self.attr("data-color"))
              $.each(_self, function(i,e){
                $(e).find("source").attr("srcset", $(e).attr("data-srcset"))
              })
              if(!$(_self).find("picture").find("img").length){
                if(getCurrentBreakpoint()!== "MOBILE"){
                  // find("img").attr("src", $(this).find("img").attr("data-src"))
                  if(imgSrc){
                   $(_self).find("picture").append("<img decoding='async' src='"+imgSrc+"' alt='"+imageAltText+"' /> ")
                  }
                }else{
                    if(mobImgSrc){
                     $(_self).find("picture").append("<img decoding='async' src='"+mobImgSrc+"' alt='"+imageAltText+"' /> ")
                    }
              }
              }
            }
          }
      }
      });
      $(this).hover(function(){
        thinBannerSwiper.autoplay.stop();
        $("#" + bannerId).find(".swiper-pagination-bullet.swiper-pagination-bullet-active .swiper-carousel-div span").addClass("slow")
    },function(){
        thinBannerSwiper.autoplay.start();
        $("#" + bannerId).find(".swiper-pagination-bullet.swiper-pagination-bullet-active .swiper-carousel-div span").removeClass("slow")
    });
    })
  }
  var $targetButton = $('.small-banner-full__item--button').parent()
  $targetButton.on('click', function(e){
    var url = $(this).attr("href");
    var currentUrl = window.location.href;
    var dataModule = $(this).data('at-module')
    atModel.doAtEvent(dataModule + '::' + currentUrl, 'navigation', e)
        if(url.indexOf('software-apply-trial') > -1){
            setLoginCookie("applyTrialUrl", currentUrl);
        }
        if(url){
          var buttonText=$(this).find("button").text()
          var linkStr= url.indexOf('/content/dam') > -1 ? '下载::[file-link]' + url : '跳转页面::[complete-link]'+ url
          var analyticsStr =buttonText+"::Thin Banner Carousel::"+linkStr +"::"+$("#header").attr('data-page-title')
          HiAnalyticsCn.clickDown(analyticsStr); 
        }

  })
})
;
(function (document, $) {
    // 将初始化逻辑抽取为全局函数
    window.initCardStream = function($elements) {
        var isDesktop = getCurrentBreakPoint() == "DESKTOP"

        $elements.each(function() {
            var $cardStreamComp = $(this);
            // if(getCookie('wcmmode') == "edit"){
            //     $(this).css({
            //         height: '100%'
            //     })
            // }
            if($cardStreamComp.length){
                var cardWidth = ($(window).innerHeight() - ($(window).innerWidth() < 1440 ? 250 : 400)) * 1.776
                var contentWidth =  $(window).innerWidth() < 1370 ? $(window).innerWidth() - 30 : 1310
                var slideNum = (contentWidth / (cardWidth + 30)) < 1 ? 1 : (contentWidth / (cardWidth + 50))
                var space = $(window).innerWidth() < 1370 ? 50 : 60;

                if(isDesktop && $cardStreamComp.attr('data-editPage') != 'edit'){
                    $cardStreamComp.parent().css('height',+ $cardStreamComp.height() + $cardStreamComp.find('.card-stream-item').length * 500 +"px") 
                }
                 // 先检查是否存在旧的 Swiper 实例并销毁
                 if(getCurrentBreakPoint()!=='DESKTOP'){
                    var $cardStreamWrapper = $cardStreamComp.find('.card-stream-wrapper')
                    var oldSwiper = $cardStreamWrapper[0].swiper;
                    if (oldSwiper) {
                        oldSwiper.destroy(true, true);
                    }
                 }
                var $cardStreamWrapper = $cardStreamComp.find('.card-stream-wrapper')
                var cardStreamSwiper =  new Swiper($cardStreamWrapper, {
                    slidesPerView: isDesktop ? slideNum : ($(window).width() - 30) / 315,
                    spaceBetween: isDesktop ? space : 15,
                    allowTouchMove: isDesktop ? false : true,
                    loop: false,
                    watchOverflow: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: isDesktop ? false : true
                    },
                    normalizeSlideIndex: false,
                    on: {
                        slideChangeTransitionEnd: function(){ 
                            $(this.$el).find('.plyr__control--overlaid.plyr__control--pressed').click();
                            $(this.$el).find('.swiper-slide').eq(this.activeIndex).find('.plyr__control.plyr__control--overlaid').click();
                             $(this.$el).find('.swiper-slide').eq(this.activeIndex).siblings().find('.card-stream-video').addClass('pause')
                             $(this.$el).find('.swiper-slide').eq(this.activeIndex).find('.card-stream-video').removeClass('pause')
                        },
                    }
                });
                
                onScroll($cardStreamComp, cardStreamSwiper)
                
                $cardStreamComp.find('.card-stream-video-button,.card-stream-mob-video-button')
                    .off('click')
                    .on('click', function() {
                        if(getCurrentBreakPoint() === 'DESKTOP'){
                            if($(this).parent().hasClass('play')){
                                $(this).next('.card-video-button').trigger('click')
                                window.$checkedVideo = $(this).next('.card-video-button')
                            } else {
                                window.$checkedVideo = null
                            }
                        }  else {
                            if( $(this).parent().find('.card-stream-video').hasClass('play')){
                                $(this).parent().find('.card-stream-video').find('.card-video-button').trigger('click')
                                window.$checkedVideo =  $(this).parent().find('.card-stream-video').find('.card-video-button')
                            } else {
                                window.$checkedVideo = null
                            }
                        }
                        var video = $(this).attr('data-video-path')
                        var isYoutube = $(this).attr('data-internal-video') === 'false'
                        initVideoModal(video, isYoutube, )
                        $('html').addClass('overflow-prevent')
                    })

                $cardStreamComp.find('.card-video-button').off('click').on('click',function(){
                   if($(this).parent().hasClass('pause')){
                    $(this).parent().removeClass('pause')
                   }else{
                    $(this).parent().addClass('pause')
                   } 
                    $(this).parents(".card-stream-video").find('.plyr__control.plyr__control--overlaid').click();
                });
            }
            bindVideoClick($cardStreamComp);
        });
    }

    // document.ready时初始化页面上已存在的card-stream组件
    $(document).ready(function () {
        initCardStream($('.card-stream-component'));
    });

    function onScroll($comp,cardStreamSwiper){
        $(window).scroll(function(){
            checkIfSticky($comp.parent(),$comp,cardStreamSwiper)
        })
    }
    function checkIfSticky($pageWapper,$comp,cardStreamSwiper){
        if (!$pageWapper.length) return;
        if (getCurrentBreakpoint() != 'DESKTOP') return
        if (getPostion($pageWapper, 'top') < 0) {
            var listBtmTop = getPostion($pageWapper, 'top') + getPostion($pageWapper, 'height');
            if (listBtmTop - $comp.outerHeight() > 0) {
                $comp.css('top', 0);
                var num = $comp.find('.card-stream-item').length
                var scrollSlide = (getPostion($pageWapper, 'height') - getPostion($comp, 'height')) / num
                var index = parseInt(($(window).scrollTop() - $pageWapper.offset().top ) / scrollSlide) 
                cardStreamSwiper.slideTo(index,500)
            } else {
                $comp.css('top', listBtmTop - $comp.outerHeight());
            }
            stickyFilterList(true,$pageWapper,$comp)
        } else {
            stickyFilterList(false,$pageWapper,$comp)
        }
    }

    function getPostion($ele, pos) {
        if (!$ele || $ele.length === 0)
            return;
        return $ele[0].getBoundingClientRect()[pos];
    }

    function stickyFilterList(isSticky,$pageWapper,$compContent) {
        if (isSticky) {
            $pageWapper.addClass('sticky');
        } else {
            $pageWapper.removeClass('sticky');
            $compContent.css('top', '');
        }
    }

    function bindVideoClick($cardStreamComp) {
        // 创建一个观察器实例
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length) {
                    const videos = $cardStreamComp.find('.card-stream-video video');
                    if (videos.length) {
                        console.log('Found videos after DOM mutation:', videos.length);
                        observer.disconnect(); // 停止观察
                        
                        videos.each(function(index, ele) {
                            // 预加载设置
                            $(this).attr('preload', 'metadata');
                            // 错误处理
                            $(this).on('error', function(e) {
                                console.log('Video error:', e);
                                $(this).closest('.card-stream-video').addClass('error');
                            });
                            
                            // 使用 loadedmetadata 事件确保视频已准备好
                            $(this).on('loadedmetadata', function() {
                                $(this).on('play', function() {
                                    // 在播放前暂停其他视频
                                    videos.not(this).each(function() {
                                        this.pause();
                                    });
                                    $(this).closest('.card-stream-video').addClass('play').removeClass('pause').removeClass('ended');
                                }).on('pause', function() {
                                    $(this).closest('.card-stream-video').addClass('pause').removeClass('play').removeClass('ended');
                                }).on('ended', function() {
                                    $(this).closest('.card-stream-video').addClass('ended').removeClass('play').removeClass('pause');
                                });
                            });
                    
                            var _this = this;
                            // 使用 requestAnimationFrame 来优化滚动性能
                            var scrollTimeout;
                            function checkVideoState() {
                                if(getCurrentBreakPoint()!=='MOBILE'){
                                    var isInContentDetail = $(_this).closest('.content-detail-section').length > 0;
                                    
                                    if (isInContentDetail) {
                                        if (index !== 0) {
                                            _this.pause();
                                            $(_this).closest('.card-stream-video').addClass('ended').removeClass('play').removeClass('pause');
                                        }
                                    } else {
                                        if (!isElementInViewport($(_this).closest('.card-stream-video').get(0))) {
                                            _this.pause();
                                            $(_this).closest('.card-stream-video').addClass('ended').removeClass('play').removeClass('pause');
                                        } 
                                        if(!$(_this).closest('.swiper-slide').hasClass('swiper-slide-active')){
                                            _this.pause();
                                            $(_this).closest('.card-stream-video').addClass('ended').removeClass('play').removeClass('pause');
                                        }
                                    }
                                } else {
                                    if (index !==0) {
                                        _this.pause();
                                        $(_this).closest('.card-stream-video').addClass('ended').removeClass('play').removeClass('pause');
                                    } 
                                }
                            }
                            
                            // 优化滚动检查
                            $(window).on('scroll', function() {
                                if (scrollTimeout) {
                                    window.cancelAnimationFrame(scrollTimeout);
                                }
                                scrollTimeout = window.requestAnimationFrame(checkVideoState);
                            });
                            
                            // 初始检查
                            checkVideoState();
                        });
                    }
                }
            });
        });

        // 配置观察选项
        const config = { 
            childList: true,
            subtree: true
        };

        // 开始观察
        observer.observe($cardStreamComp[0], config);

        // 设置一个超时
        setTimeout(function() {
            observer.disconnect();
        }, 5000);
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function isSafari() {
        var userAgent = navigator.userAgent.toLowerCase();
        return userAgent.indexOf('safari') !== -1 && userAgent.indexOf('chrome') === -1;
    }
})(document, $);

;
(function (document, $) {
    $(document).ready(function () {
        var $elements = []
        $.each($('.multi-scenario-switching-wrapper'), function(){
           if(!$(this).parent().parent().parent().hasClass('content-detail-section')){
            $elements.push($(this))
           } 
        }) 
        initMultiScenario($elements);
    });
})(document, $);
$(document).ready(function() {
    initTextOverImageComp();
});
var initTextOverImageComp = function() {
    var currentBreakPoint = getCurrentBreakPoint();

    function showVideo($comp, breakPoint) {
        var $videoContainer = $comp.find('.text-over-image-video-box');
        var $video = $comp.find('video');
        if($videoContainer.length) {
            var $desktopVideo = $video.attr('data-pc-vd');
            var deskHasVideo = $videoContainer.attr('data-pc-hasVideo');
            var $mobileVideo = $video.attr('data-mobile-vd');
            var mobileHasVideo = $videoContainer.attr('data-mob-hasVideo');
            if(breakPoint === 'DESKTOP' && $desktopVideo && deskHasVideo === 'true') {
                $comp.find('.img-box').hide();
                $videoContainer.show();
                toggeleVideo($videoContainer);
                return;
            }

            if(breakPoint !== 'DESKTOP' && $mobileVideo && mobileHasVideo === 'true') {
                $comp.find('.img-box').hide();
                $videoContainer.show();
                toggeleVideo($videoContainer);
                return;
            }
            $videoContainer.hide();
            $comp.find('.img-box').show();
        }else{
            $comp.find('.img-box').show();
            $videoContainer.hide();
        }
    }

    function updateTitle($comp, breakPoint) {
        if(breakPoint !== 'DESKTOP')return;
        var title = $comp.find('.desktop .title');
        var isAnchor = title.attr('data-isAnchor');
        if(isAnchor==='true'){
            title.addClass('product-spotlight-header-wrapper');
        }
    }
    function updateImageSrc($comp, breakPoint) {
        var $urlData = $comp.find('.img-box');
        var $desktopList = $comp.find('.text-list.desktop');
        var $mobileList = $comp.find('.text-list.mobile');
        var path;

        if (breakPoint !== 'DESKTOP') {
            path = $urlData.attr('data-mobile-img');
            $desktopList.removeClass('active');
            $mobileList.addClass('active');
        } else {
            path = $urlData.attr('data-desktop-img');
            $desktopList.addClass('active');
            $mobileList.removeClass('active');
        }
       if(!$comp.parent().parent().parent().hasClass("content-detail-section")){
        $comp.find('.bg-img').attr('src',path);
       }
    }

    function updateCTAWidth($comp) {
        $comp.find('.cta-link').each(function() {
            var $parent = $(this).closest('.text-container');
            var titleWidth = $parent.find('.title')[0].style.width;
            var descriptionWidth =  $parent.find('.description')[0].style.width;
            var maxWidth = titleWidth > descriptionWidth ? titleWidth : descriptionWidth;
            $(this).css('max-width', maxWidth);
        });
    }

    $('.text-over-image-comp').each(function() {
        var $comp = $(this);
        updateImageSrc($comp, currentBreakPoint);
        showVideo($comp, currentBreakPoint);
        updateTitle($comp, currentBreakPoint);
        updateCTAWidth($comp);
    });

    $(window).on('resize',function() {
        setTimeout(function() {
            var newBreakPoint = getCurrentBreakPoint();
            if (newBreakPoint !== currentBreakPoint) {
                currentBreakPoint = newBreakPoint;
                $('.text-over-image-comp').each(function() {
                    var $comp = $(this);
                    updateImageSrc($comp, newBreakPoint);
                    showVideo($comp, newBreakPoint);
                });
            }
        },0)
    });
};

$(document).ready(function() {
    $.each($('.newsroom-hero-banner-box'), function(){
        var isRTL = $('body').hasClass('rtl')
        var _this = this
        $(this).find('.newsroom-hero-banner-swiper-wrapper').slick({
            rtl:isRTL,
            dots:false,
            arrows:false,
            autoplay:true,
            autoplaySpeed:4500,
        });
        var total = $(this).attr("data-size");
        appendDots(this, Number(total));
        bindEvents(this);
        animateSlide(this);
        heddenDot(this);
        checkWidths();
        $(window).resize(checkWidths);
        $(this).find('.newsroom-hero-banner-swiper-wrapper').on('afterChange', function(event, slick, currentSlide) {
            $(_this).find('li button').stop();
            $(_this).find('li button').css('width', 0);
            $(_this).find('li').removeClass('slick-active');
            $(_this).find('li').eq(currentSlide).addClass('slick-active');
            animateSlide(_this);
        });
    
        $(this).find('.newsroom-hero-banner-swiper-slide').on('mouseover', function() {
            stopAnimation(_this);
        });
    
        $(this).find('.newsroom-hero-banner-swiper-slide').on('mouseleave', function() {
            animateSlide(_this);
        });
    }) 
    function animateSlide(ele) {
        $(ele).find('.slick-active button').stop().animate({
            width: '100%'
        }, 4500, 'linear', function() {
            $(ele).find('li button').css('width', 0);
        });
    }

    function stopAnimation(ele) {
        var $button = $(ele).find('.slick-active button');
        $button.stop();
        var width =  $button.width();
        $button.css('width', width);
    }

    function jumpAuthorLink() {
        $('.newsroom-hero-banner-swiper-slide-news-Author-right').on('click',function (event) {
            event.preventDefault();
            event.stopPropagation();
            var dataAuthor = $(this).attr('data-value');
            var dataName = "newsroom_hero_banner::blog_author::" + $(this).attr('data-name');
            atModel.doAtEvent(dataName, 'navigation', event);
            window.location.href = dataAuthor;
        })
    }

    function jumpTopicLink($target) {
        $('.newsroom-hero-banner-swiper-slide-news-bottom-right span').on('click',function (event) {
            event.preventDefault();
            event.stopPropagation();
            var dataTopic = $(this).attr('data-value');
            var hrefTopic = $target.attr('data-path');
            var href = hrefTopic + '?pageType=blog'+'&topic=' + dataTopic;
            atModel.doAtEvent('newsroom_hero_banner::blog_topic::' + dataTopic, 'action', event);
            window.location.href = href;
        })
    }

    function heddenDot(ele) {
        var dotLength = $(ele).find('.newsroom-hero-banner-swiper-wrapper').find('.newsroom-hero-banner-swiper-slide').length;
        if(dotLength === 1){
            $(ele).find('li').css('width', 0);
        }
    }

    function appendDots(elements, total) {
        if(!$(elements).find('.newsroom-hero-banner-swiper-wrapper').find('.slick-dots').length && total > 1){
            var html = '<ul class="slick-dots" style="" role="tablist">';
            for (var index = 1; index < total + 1; index++) {
                html += '<li role="presentation" class="' + (index === 1 ? 'slick-active' : '') + '" data-index="' + index + '"><button type="button" tabindex="-1"></button></li>'
            }
            html += '</ul>';
            $(elements).find('.newsroom-hero-banner-swiper-wrapper').append(html);
        };
    }

    function bindEvents(ele) {
        $(ele).find('.newsroom-hero-banner-swiper-wrapper').on('click', '.slick-dots li', function() {
            var index = $(this).attr('data-index');
            var currentSlide = $(ele).find('.newsroom-hero-banner-box .newsroom-hero-banner-swiper-wrapper').slick('slickCurrentSlide');
            if (index - 1 !== currentSlide) {
                $(ele).find('.newsroom-hero-banner-swiper-wrapper').slick('slickGoTo', index - 1);
            }
        });
    }

    function getIsVideo($target) {
        var $bannerBox = $target.find('.newsroom-hero-banner-swiper-slide-bgc');
        $bannerBox.on('click',function (event) { 
           var $videoBtn = $(this).find('.video-play-btn-center');
           if ($videoBtn.length) {
            var isVideo = $videoBtn.data('is-video');
            if (isVideo) {
                event.preventDefault();
            }
           }
        })
    }
    // youtubeImage
    function getYouTubeBeImg($target) {
        var $youTubeBox = $target.find('.newsroom-hero-banner-swiper-slide-bgc.slide-youtobevideo');
        $youTubeBox.each(function(){
            var videoPath = $(this).find('.hik-video-trigger').attr('data-video-path');
            if(videoPath){
                var youtubeVideoId = getVideoId(videoPath,'v');
                var youtubeImage =location.protocol + '//img.youtube.com/vi/' +youtubeVideoId+ '/0.jpg';
                $(this).find('.newsroom-hero-banner-swiper-slide-img-a').css('background-image','url('+youtubeImage+')')
            }
        })
    }
    jumpAuthorLink();

    function checkWidths() {
        var isRTL = $('body').hasClass('rtl')
        
        if (isRTL) {
            let checkTimer = setInterval(() => {
                if ($('.newsroom-hero-banner-swiper-slide-news-top').length) {
                    window.clearInterval(checkTimer);
                    checkTimer = null
                    $('.newsroom-hero-banner-swiper-slide-news-top').each(function() {
                        var $container = $(this);
                        var containerWidth = $container.width();
                        var elementAuthor = $container.find('.newsroom-hero-banner-swiper-slide-news-Author');
                        var elementDate = $container.find('.newsroom-hero-banner-swiper-slide-news-data');
                        var totalWidth = 0;
            
                        if (elementAuthor) {
                            var $temp = $('<span>').css({
                                'visibility': 'hidden',
                                'font-size': elementAuthor.css('font-size'),
                                'font-family': elementAuthor.css('font-family')
                            }).text(elementAuthor.text());
                            $('body').append($temp);
                            var textWidth = $temp.width();
                            
                            $temp.remove();
                            
                            totalWidth += textWidth;
                        }
            
                        if (elementDate) {
                            var $temp = $('<span>').css({
                                'visibility': 'hidden',
                                'font-size': elementDate.css('font-size'),
                                'font-family': elementDate.css('font-family')
                            }).text(elementDate.text());
                            $('body').append($temp);
                            var textWidth = $temp.width();
                            
                            $temp.remove();
                            
                            totalWidth += textWidth;
                        }

                        if (totalWidth >= containerWidth) {
                            if (!$container.hasClass('newsroom-hero-banner-swiper-slide-news-top-block')) {
                                $container.addClass('newsroom-hero-banner-swiper-slide-news-top-block');
                            }
                            if (elementAuthor) {
                                if (!elementAuthor.hasClass('newsroom-hero-banner-swiper-slide-news-Author-block')) {
                                    elementAuthor.addClass('newsroom-hero-banner-swiper-slide-news-Author-block');
                                }
                            }
                            if (elementDate) {
                                if (!elementDate.hasClass('newsroom-hero-banner-swiper-slide-news-data-block')) {
                                    elementDate.addClass('newsroom-hero-banner-swiper-slide-news-data-block');
                                }
                            }
                        } else {
                            if ($container.hasClass('newsroom-hero-banner-swiper-slide-news-top-block')) {
                                $container.removeClass('newsroom-hero-banner-swiper-slide-news-top-block');
                            }
                            if (elementAuthor) {
                                if (elementAuthor.hasClass('newsroom-hero-banner-swiper-slide-news-Author-block')) {
                                    elementAuthor.removeClass('newsroom-hero-banner-swiper-slide-news-Author-block');
                                }
                            }
                            if (elementDate) {
                                if (elementDate.hasClass('newsroom-hero-banner-swiper-slide-news-data-block')) {
                                    elementDate.removeClass('newsroom-hero-banner-swiper-slide-news-data-block');
                                }
                            }
                        }
                    });
                }
            }, 100)
        }
    }

    $('.newsroom-hero-banner-box').each(function () {
        const $target = $(this);
        jumpTopicLink($target);
        getIsVideo($target)
        getYouTubeBeImg($target)
    })
  });
$(document).ready(function () {
    //slick化
    function dogSlick() {
        var isRTL = $('body').hasClass('rtl')
        $('.newsroom-hero-banner-success-mob').slick({
            rtl:isRTL,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
        })
    }
    dogSlick()
    $('.contenttext-mob-act').css('animation-fill-mode','forwards')
    $('.newsroom-hero-banner-success-mob').on('afterChange',function(){
        $('.newsroom-hero-banner-success-contenttext-mob').css('animation','')
        $('.slick-active').find('.newsroom-hero-banner-success-contenttext-mob').css('animation','showtext .5s linear')
        $('.newsroom-hero-banner-success-contenttext-mob').css('animation-fill-mode','forwards')
    })
    //页面初始化加载
    $('.newsroom-hero-banner-success-item').mouseover(function () {
        //图片容器
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        //蒙层
        $('.mantle').removeClass('mantle')
        $($(this).children().children()[1]).addClass('mantle')
        //文字
        $('.newsroom-hero-banner-success-contenttext').css('z-index','-1')
        $($(this).children().children().children()[2]).css('z-index','')
    })

    // $('.newsroom-hero-banner-success').each(function () {
    //     $comp = $(this);
    // })

})
$(document).ready(function () {
    $('.interactive-banner-carousel').each(function () {
        if(!$(this).parent().parent().parent().hasClass("content-detail-section")){
            const $that = $(this);
            initSwiper($that);
            toggeleVideo($that);
        }
    });
});
;
(function (document, $) {
    var imageCardTooltipList = (function ($) {
        var $comp = '';
        var _window = $(window);
        var appearLayerTimer = null;
        var updateCardProgress = function (cardComp) {
            var isRTL = $('body').hasClass('rtl');
            const $cardWrapper = $(cardComp).find('.image-cardTooltip-wrapper');
            const $cardContent = $(cardComp).find('.image-cardTooltip-content');
            const scrollY = _window.scrollTop();
            const containerTop = $(cardComp).offset().top;
            const containerHeight = $(cardComp).outerHeight() - $cardWrapper.outerHeight();
            const cardTotalWidth = $cardContent.outerWidth() - $(cardComp).outerWidth();
            if (scrollY >= containerTop && scrollY < containerTop + containerHeight) {
                // 计算横向滚动进度 (0到1)
                let progress = (scrollY - containerTop) / containerHeight;
                progress = progress > 1 ? 1 : progress;
                progress  = progress < 0.1 ? 0 : progress;
                
                if (cardTotalWidth > 0) {
                    // 横向移动卡片
                    if (isRTL) {
                        const translateX = progress * cardTotalWidth + 'px';
                        $cardContent.css('transform', 'translateX(' + translateX + ')');
                    } else {
                        const translateX = -progress * cardTotalWidth + 'px';
                        $cardContent.css('transform', 'translateX(' + translateX + ')');
                    }
                }
            } else if (scrollY < containerTop || scrollY > containerTop + containerHeight) {
                if (scrollY < containerTop) {
                    $cardContent.css('transform', 'translateX(' + 0 + 'px)');
                } else {
                    if (isRTL) {
                        $cardContent.css('transform', 'translateX(' + cardTotalWidth + 'px)');  
                    } else {
                        $cardContent.css('transform', 'translateX(' + (-cardTotalWidth) + 'px)');  
                    }
                }
            }
        }

        var initClickEvent = function (cardComp) {
            $(cardComp).find('.image-cardTooltip-item .image-cardTooltip-link').off().on('click', function (e) {
                var _hrefUrl = $(this).attr('data-href');
                if (_hrefUrl) {
                    var atModule = 'image_card_tooltip::link_button' + "::" + lastNode($(this).attr('data-href')) + '::' + window.location.href;
                    atModel.doAtEvent(atModule, 'navigation', e);
                    window.open(_hrefUrl);
                }
            })
        }

        var init = function () {
            $(document).ready(function () {
                $comp = $(".image-cardTooltip-comp");
                if (!$comp.length) {
                    return;
                }
                var currentBreakpoint = getCurrentBreakpoint();
                var isRTL = $('body').hasClass('rtl');
                if (currentBreakpoint === 'DESKTOP') {
                    $('body')[0].style.overflow = 'visible';
                    _window.on('scroll', function(e) {
                        const scrollY = _window.scrollTop();
                        for (let j = 0; j < $comp.length; j++) {
                            let cardCompInner = $comp[j];
                            const containerTop = $(cardCompInner).offset().top;
                            let $cardContentInner = $(cardCompInner).find('.image-cardTooltip-content');
                            let cardDetailInner = $cardContentInner[0];
                            if (cardDetailInner.offsetWidth > cardCompInner.offsetWidth && scrollY >= containerTop && scrollY < containerTop + $(cardCompInner).outerHeight()) {
                                updateCardProgress(cardCompInner); 
                            }
                        }
                    })
                }
                for (let i = 0; i < $comp.length; i++) {
                    let cardComp = $comp[i];
                    let $cardContent = $(cardComp).find('.image-cardTooltip-content');
                    
                    let cardDetail = $cardContent[0];
                    const lessCard = $cardContent.find('.image-cardTooltip-item').length < 5;
                    const edit = cardComp.getAttribute('data-editPage') ? true : false;
                    if (currentBreakpoint === 'DESKTOP') {
                        // 卡片宽度不支持滑动
                        if (cardDetail.offsetWidth <= cardComp.offsetWidth && !edit) {
                                cardComp.style.height = '100vh';
                                cardDetail.style.marginLeft = 0;
                                cardDetail.style.marginRight = 0;
                        }
                        // 卡片数量少于5，父元素高度设为200vh
                        if (lessCard && cardDetail.offsetWidth > cardComp.offsetWidth && !edit) {
                            cardComp.style.height = '200vh';
                        }
                        if (cardDetail.offsetWidth > cardComp.offsetWidth) {
                            updateCardProgress(cardComp); 
                        }
                        $(cardComp).find('.image-cardTooltip-content .image-cardTooltip-item').each(function (index, element) {
                            $(element).on('mouseenter', function() {
                                if (appearLayerTimer) {
                                    window.clearTimeout(appearLayerTimer);
                                    appearLayerTimer = null;
                                }
                                appearLayerTimer = window.setTimeout(function() {
                                    $(element).find('.image-cardTooltip-container').addClass('active');
                                    $(element).find('.image-cardTooltip-info').addClass('active');
                                }, 300)
                            });

                            $(element).on('mouseleave', function() {
                                $(element).find('.image-cardTooltip-container').removeClass('active');
                                $(element).find('.image-cardTooltip-info').removeClass('active');
                                if (appearLayerTimer) {
                                    window.clearTimeout(appearLayerTimer);
                                    appearLayerTimer = null;
                                }
                            });
                        })
                        $(cardComp).find('.image-cardTooltip-content .image-cardTooltip-item .image-cardTooltip-info .image-cardTooltip-arrow').each(function (index, element) {
                            $(element).on('mouseenter', function() {
                                $(element).addClass('active');
                            });

                            $(element).on('mouseleave', function() {
                                $(element).removeClass('active');
                            });
                        })
                        // true展示在首页时为全屏（默认），false展示在非首页时为导航栏边距保持相同
                        if (cardDetail.getAttribute('data-imageCardTooltip-useHomepage') === 'false') {
                            const header = $('.global-header .header-wrap')[0];
                            const computedStyle = window.getComputedStyle(header);
                            const paddingLeft = computedStyle.paddingLeft;
                            const marginLeft = computedStyle.marginLeft;
                            let totalLeftPadding = 0;
                            totalLeftPadding = parseInt(paddingLeft.split('px')[0]) + parseInt(marginLeft.split('px')[0]);
                            cardDetail.style.paddingLeft = totalLeftPadding + 'px';
                            cardDetail.style.paddingRight = totalLeftPadding + 'px';
                            _window.on('resize', function(e) {
                                let paddingLeft = computedStyle.paddingLeft;
                                let marginLeft = computedStyle.marginLeft;
                                let totalLeftPadding = 0;
                                totalLeftPadding = parseInt(paddingLeft.split('px')[0]) + parseInt(marginLeft.split('px')[0]);
                                cardDetail.style.paddingLeft = totalLeftPadding + 'px';
                                cardDetail.style.paddingRight = totalLeftPadding + 'px';
                            })
                        } else {
                            if ($('body').outerWidth() > 1680) {
                                let paddingLeft = ($('body').outerWidth() - 1620) / 2;
                                cardDetail.style.paddingLeft = paddingLeft + 'px';
                                cardDetail.style.paddingRight = paddingLeft + 'px';
                            }
                            _window.on('resize', function(e) {
                                if ($('body').outerWidth() > 1680) {
                                    let paddingLeft = ($('body').outerWidth() - 1620) / 2;
                                    cardDetail.style.paddingLeft = paddingLeft + 'px';
                                    cardDetail.style.paddingRight = paddingLeft + 'px';
                                }
                            })
                        }
                    } else {
                        let $tempContent = $(cardComp).find('.image-cardTooltip-wrapper');
                        let $content = $tempContent.find('.image-cardTooltip-content');
                        let startX = 0;
                        let transformTotal = 0; // 总偏移量
                        let maxTransform = $content.outerWidth() - $tempContent.outerWidth(); // 最大偏移量
                        if (maxTransform > 0) {
                            const accelerationFactor = 1.8; // 加速因子，值越大，滑动越快
                            $content.on('touchstart', function(e) {
                                startX = e.originalEvent.touches[0].pageX;
                            });
                            $content.on('touchmove', function(e) {
                                const moveX = e.originalEvent.touches[0].pageX - startX;
                                if (Math.abs(moveX) > 10) {
                                    let adjustedMoveX = moveX * accelerationFactor; // 根据加速因子调整移动距离
                                    transformTotal += adjustedMoveX;
                                    if (isRTL) {
                                        if (transformTotal < 0) {
                                            transformTotal = 0;
                                        }
                                    } else {
                                        if (transformTotal > 0) {
                                            transformTotal = 0;
                                        }
                                    }
                                    if (Math.abs(transformTotal) > maxTransform) {
                                        if (isRTL) {
                                            transformTotal = maxTransform;
                                        } else {
                                            transformTotal = -maxTransform;
                                        }
                                    }
                                    $(this).css({
                                        transform: `translateX(${transformTotal}px)`
                                    });
                                    startX = e.originalEvent.touches[0].pageX;
                                }
                            });
                        }
                    }
                    initClickEvent(cardComp);
                }
            })
        };
        return {
          init: init
        };
    })($);

    imageCardTooltipList.init();
})(document, $);

;
(function (document, $) {
    var titleViewMore = (function ($) {
        var $comp = '';

        var initClickEvent = function (titleViewMoreComp) {
            $(titleViewMoreComp).find('.viewMore-content').off().on('click', function (e) {
                var _hrefUrl = $(this).attr('data-href');
                if (_hrefUrl) {
                    var atModule = 'title_with_view_more::view_more_button' + "::" + lastNode($(this).attr('data-href')) + '::' + window.location.href;
                    atModel.doAtEvent(atModule, 'navigation', e);
                    window.open(_hrefUrl);
                }
            })
        }

        var init = function () {
            $(document).ready(function () {
                $comp = $(".title-with-view-more").not(".aem-GridColumn");
                if (!$comp.length) {
                    return;
                }
                for (let i = 0; i < $comp.length; i++) {
                    var currentBreakpoint = getCurrentBreakpoint();
                
                    const titleViewMoreComp = $comp[i];
                    const $content = $($comp[i]).find('.title-viewMore');
                    var titleViewMoreContent = $content[0];
                    if (titleViewMoreComp.getAttribute('data-titleViewMore-backgroundColor') && titleViewMoreComp.getAttribute('data-titleViewMore-backgroundColor').split('-')[2] === 'black') {
                        titleViewMoreComp.classList.add('title-with-view-more-blackClass');
                    }

                    if (currentBreakpoint === 'DESKTOP') {
                        if (titleViewMoreContent.getAttribute('data-titleViewMore-useHomepage') === 'false') {
                            titleViewMoreContent.classList.add('title-viewMore-noHomepage');
                        }
                    }

                    initClickEvent(titleViewMoreComp);
                }
            })
        };
        return {
          init: init
        };
    })($);

    titleViewMore.init();
})(document, $);

/*! iFrame Resizer (iframeSizer.min.js ) - v3.6.5 - 2019-02-03
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2019 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function(a){"use strict";function b(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function c(a,b,c){"addEventListener"in window?a.addEventListener(b,c,!1):"attachEvent"in window&&a.attachEvent("on"+b,c)}function d(a,b,c){"removeEventListener"in window?a.removeEventListener(b,c,!1):"detachEvent"in window&&a.detachEvent("on"+b,c)}function e(){var a,b=["moz","webkit","o","ms"];for(a=0;a<b.length&&!Q;a+=1)Q=window[b[a]+"RequestAnimationFrame"];Q||i("setup","RequestAnimationFrame not supported")}function f(a){var b="Host page: "+a;return window.top!==window.self&&(b=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+a:"Nested host page: "+a),b}function g(a){return N+"["+f(a)+"]"}function h(a){return S[a]?S[a].log:J}function i(a,b){l("log",a,b,h(a))}function j(a,b){l("info",a,b,h(a))}function k(a,b){l("warn",a,b,!0)}function l(a,b,c,d){!0===d&&"object"==typeof window.console&&console[a](g(b),c)}function m(a){function b(){function a(){u(T),r(V),I("resizedCallback",T)}f("Height"),f("Width"),v(a,T,"init")}function e(){var a=R.substr(O).split(":");return{iframe:S[a[0]]&&S[a[0]].iframe,id:a[0],height:a[1],width:a[2],type:a[3]}}function f(a){var b=Number(S[V]["max"+a]),c=Number(S[V]["min"+a]),d=a.toLowerCase(),e=Number(T[d]);i(V,"Checking "+d+" is in range "+c+"-"+b),e<c&&(e=c,i(V,"Set "+d+" to min value")),e>b&&(e=b,i(V,"Set "+d+" to max value")),T[d]=""+e}function g(){function b(){function a(){var a=0,b=!1;for(i(V,"Checking connection is from allowed list of origins: "+d);a<d.length;a++)if(d[a]===c){b=!0;break}return b}function b(){var a=S[V]&&S[V].remoteHost;return i(V,"Checking connection is from: "+a),c===a}return d.constructor===Array?a():b()}var c=a.origin,d=S[V]&&S[V].checkOrigin;if(d&&""+c!="null"&&!b())throw new Error("Unexpected message received from: "+c+" for "+T.iframe.id+". Message was: "+a.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function h(){return N===(""+R).substr(0,O)&&R.substr(O).split(":")[0]in S}function l(){var a=T.type in{true:1,false:1,undefined:1};return a&&i(V,"Ignoring init message from meta parent page"),a}function m(a){return R.substr(R.indexOf(":")+M+a)}function o(a){i(V,"MessageCallback passed: {iframe: "+T.iframe.id+", message: "+a+"}"),I("messageCallback",{iframe:T.iframe,message:JSON.parse(a)}),i(V,"--")}function y(){var a=document.body.getBoundingClientRect(),b=T.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:b.height,iframeWidth:b.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(b.top-a.top,10),offsetLeft:parseInt(b.left-a.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset})}function z(a,b){function c(){w("Send Page Info","pageInfo:"+y(),a,b)}A(c,32,b)}function B(){function a(a,c){function d(){S[f]?z(S[f].iframe,f):b()}["scroll","resize"].forEach(function(b){i(f,a+b+" listener for sendPageInfo"),c(window,b,d)})}function b(){a("Remove ",d)}function e(){a("Add ",c)}var f=V;e(),S[f]&&(S[f].stopPageInfo=b)}function C(){S[V]&&S[V].stopPageInfo&&(S[V].stopPageInfo(),delete S[V].stopPageInfo)}function D(){var a=!0;return null===T.iframe&&(k(V,"IFrame ("+T.id+") not found"),a=!1),a}function E(a){var b=a.getBoundingClientRect();return q(V),{x:Math.floor(Number(b.left)+Number(P.x)),y:Math.floor(Number(b.top)+Number(P.y))}}function F(a){function b(){P=f,G(),i(V,"--")}function c(){return{x:Number(T.width)+e.x,y:Number(T.height)+e.y}}function d(){window.parentIFrame?window.parentIFrame["scrollTo"+(a?"Offset":"")](f.x,f.y):k(V,"Unable to scroll to requested position, window.parentIFrame not found")}var e=a?E(T.iframe):{x:0,y:0},f=c();i(V,"Reposition requested from iFrame (offset x:"+e.x+" y:"+e.y+")"),window.top!==window.self?d():b()}function G(){!1!==I("scrollCallback",P)?r(V):s()}function H(a){function b(){var a=E(f);i(V,"Moving to in page link (#"+d+") at x: "+a.x+" y: "+a.y),P={x:a.x,y:a.y},G(),i(V,"--")}function c(){window.parentIFrame?window.parentIFrame.moveToAnchor(d):i(V,"In page link #"+d+" not found and window.parentIFrame not found")}var d=a.split("#")[1]||"",e=decodeURIComponent(d),f=document.getElementById(e)||document.getElementsByName(e)[0];f?b():window.top!==window.self?c():i(V,"In page link #"+d+" not found")}function I(a,b){return n(V,a,b)}function J(){switch(S[V]&&S[V].firstRun&&Q(),T.type){case"close":S[V].closeRequestCallback?n(V,"closeRequestCallback",S[V].iframe):p(T.iframe);break;case"message":o(m(6));break;case"scrollTo":F(!1);break;case"scrollToOffset":F(!0);break;case"pageInfo":z(S[V]&&S[V].iframe,V),B();break;case"pageInfoStop":C();break;case"inPageLink":H(m(9));break;case"reset":t(T);break;case"init":b(),I("initCallback",T.iframe);break;default:b()}}function K(a){var b=!0;return S[a]||(b=!1,k(T.type+" No settings for "+a+". Message was: "+R)),b}function L(){for(var a in S)w("iFrame requested init",x(a),document.getElementById(a),a)}function Q(){S[V]&&(S[V].firstRun=!1)}var R=a.data,T={},V=null;"[iFrameResizerChild]Ready"===R?L():h()?(T=e(),V=U=T.id,S[V]&&(S[V].loaded=!0),!l()&&K(V)&&(i(V,"Received: "+R),D()&&g()&&J())):j(V,"Ignored: "+R)}function n(a,b,c){var d=null,e=null;if(S[a]){if("function"!=typeof(d=S[a][b]))throw new TypeError(b+" on iFrame["+a+"] is not a function");e=d(c)}return e}function o(a){var b=a.id;delete S[b]}function p(a){var b=a.id;i(b,"Removing iFrame: "+b);try{a.parentNode&&a.parentNode.removeChild(a)}catch(c){}n(b,"closedCallback",b),i(b,"--"),o(a)}function q(b){null===P&&(P={x:window.pageXOffset!==a?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==a?window.pageYOffset:document.documentElement.scrollTop},i(b,"Get page position: "+P.x+","+P.y))}function r(a){null!==P&&(window.scrollTo(P.x,P.y),i(a,"Set page position: "+P.x+","+P.y),s())}function s(){P=null}function t(a){function b(){u(a),w("reset","reset",a.iframe,a.id)}i(a.id,"Size reset requested by "+("init"===a.type?"host page":"iFrame")),q(a.id),v(b,a,"reset")}function u(a){function b(b){if(!a.id)return void i("undefined","messageData id not set");a.iframe.style[b]=a[b]+"px",i(a.id,"IFrame ("+e+") "+b+" set to "+a[b]+"px")}function c(b){K||"0"!==a[b]||(K=!0,i(e,"Hidden iFrame detected, creating visibility listener"),B())}function d(a){b(a),c(a)}var e=a.iframe.id;S[e]&&(S[e].sizeHeight&&d("height"),S[e].sizeWidth&&d("width"))}function v(a,b,c){c!==b.type&&Q?(i(b.id,"Requesting animation frame"),Q(a)):a()}function w(a,b,c,d,e){function f(){var e=S[d]&&S[d].targetOrigin;i(d,"["+a+"] Sending msg to iframe["+d+"] ("+b+") targetOrigin: "+e),c.contentWindow.postMessage(N+b,e)}function g(){k(d,"["+a+"] IFrame("+d+") not found")}function h(){c&&"contentWindow"in c&&null!==c.contentWindow?f():g()}function j(){function a(){!S[d]||S[d].loaded||l||(l=!0,k(d,"IFrame has not responded within "+S[d].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}e&&S[d]&&S[d].warningTimeout&&(S[d].msgTimeout=setTimeout(a,S[d].warningTimeout))}var l=!1;d=d||c.id,S[d]&&(h(),j())}function x(a){return a+":"+S[a].bodyMarginV1+":"+S[a].sizeWidth+":"+S[a].log+":"+S[a].interval+":"+S[a].enablePublicMethods+":"+S[a].autoResize+":"+S[a].bodyMargin+":"+S[a].heightCalculationMethod+":"+S[a].bodyBackground+":"+S[a].bodyPadding+":"+S[a].tolerance+":"+S[a].inPageLinks+":"+S[a].resizeFrom+":"+S[a].widthCalculationMethod}function y(d,e){function f(){function a(a){1/0!==S[z][a]&&0!==S[z][a]&&(d.style[a]=S[z][a]+"px",i(z,"Set "+a+" = "+S[z][a]+"px"))}function b(a){if(S[z]["min"+a]>S[z]["max"+a])throw new Error("Value for min"+a+" can not be greater than max"+a)}b("Height"),b("Width"),a("maxHeight"),a("minHeight"),a("maxWidth"),a("minWidth")}function g(){var a=e&&e.id||V.id+I++;return null!==document.getElementById(a)&&(a+=I++),a}function h(a){return U=a,""===a&&(d.id=a=g(),J=(e||{}).log,U=a,i(a,"Added missing iframe ID: "+a+" ("+d.src+")")),a}function j(){switch(i(z,"IFrame scrolling "+(S[z]&&S[z].scrolling?"enabled":"disabled")+" for "+z),d.style.overflow=!1===(S[z]&&S[z].scrolling)?"hidden":"auto",S[z]&&S[z].scrolling){case"omit":break;case!0:d.scrolling="yes";break;case!1:d.scrolling="no";break;default:d.scrolling=S[z]?S[z].scrolling:"no"}}function l(){"number"!=typeof(S[z]&&S[z].bodyMargin)&&"0"!==(S[z]&&S[z].bodyMargin)||(S[z].bodyMarginV1=S[z].bodyMargin,S[z].bodyMargin=S[z].bodyMargin+"px")}function m(){var a=S[z]&&S[z].firstRun,b=S[z]&&S[z].heightCalculationMethod in R;!a&&b&&t({iframe:d,height:0,width:0,type:"init"})}function n(){Function.prototype.bind&&S[z]&&(S[z].iframe.iFrameResizer={close:p.bind(null,S[z].iframe),removeListeners:o.bind(null,S[z].iframe),resize:w.bind(null,"Window resize","resize",S[z].iframe),moveToAnchor:function(a){w("Move to anchor","moveToAnchor:"+a,S[z].iframe,z)},sendMessage:function(a){a=JSON.stringify(a),w("Send Message","message:"+a,S[z].iframe,z)}})}function q(e){function f(){w("iFrame.onload",e,d,a,!0),m()}function g(a){if(d.parentNode){new a(function(a){a.forEach(function(a){Array.prototype.slice.call(a.removedNodes).forEach(function(a){a===d&&p(d)})})}).observe(d.parentNode,{childList:!0})}}var h=b();h&&g(h),c(d,"load",f),w("init",e,d,a,!0)}function r(a){if("object"!=typeof a)throw new TypeError("Options is not an object")}function s(a){for(var b in V)V.hasOwnProperty(b)&&(S[z][b]=a.hasOwnProperty(b)?a[b]:V[b])}function u(a){return""===a||"file://"===a?"*":a}function v(a){a=a||{},S[z]={firstRun:!0,iframe:d,remoteHost:d.src.split("/").slice(0,3).join("/")},r(a),s(a),S[z]&&(S[z].targetOrigin=!0===S[z].checkOrigin?u(S[z].remoteHost):"*")}function y(){return z in S&&"iFrameResizer"in d}var z=h(d.id);y()?k(z,"Ignored iFrame, already setup."):(v(e),j(),f(),l(),q(x(z)),n())}function z(a,b){null===T&&(T=setTimeout(function(){T=null,a()},b))}function A(a,b,c){W[c]||(W[c]=setTimeout(function(){W[c]=null,a()},b))}function B(){function a(){function a(a){function b(b){return"0px"===(S[a]&&S[a].iframe.style[b])}function c(a){return null!==a.offsetParent}S[a]&&c(S[a].iframe)&&(b("height")||b("width"))&&w("Visibility change","resize",S[a].iframe,a)}for(var b in S)a(b)}function c(b){i("window","Mutation observed: "+b[0].target+" "+b[0].type),z(a,16)}function d(){var a=document.querySelector("body"),b={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};new e(c).observe(a,b)}var e=b();e&&d()}function C(a){function b(){E("Window "+a,"resize")}i("window","Trigger event: "+a),z(b,16)}function D(){function a(){E("Tab Visable","resize")}"hidden"!==document.visibilityState&&(i("document","Trigger event: Visiblity change"),z(a,16))}function E(a,b){function c(a){return S[a]&&"parent"===S[a].resizeFrom&&S[a].autoResize&&!S[a].firstRun}for(var d in S)c(d)&&w(a,b,document.getElementById(d),d)}function F(){c(window,"message",m),c(window,"resize",function(){C("resize")}),c(document,"visibilitychange",D),c(document,"-webkit-visibilitychange",D),c(window,"focusin",function(){C("focus")}),c(window,"focus",function(){C("focus")})}function G(){function b(a,b){function c(){if(!b.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==b.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+b.tagName+">")}b&&(c(),y(b,a),d.push(b))}function c(a){a&&a.enablePublicMethods&&k("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}var d;return e(),F(),function(e,f){switch(d=[],c(e),typeof f){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(f||"iframe"),b.bind(a,e));break;case"object":b(e,f);break;default:throw new TypeError("Unexpected data type ("+typeof f+")")}return d}}function H(a){a.fn?a.fn.iFrameResize||(a.fn.iFrameResize=function(a){function b(b,c){y(c,a)}return this.filter("iframe").each(b).end()}):j("","Unable to bind to jQuery, it is not fully loaded.")}if("undefined"!=typeof window){var I=0,J=!1,K=!1,L="message",M=L.length,N="[iFrameSizer]",O=N.length,P=null,Q=window.requestAnimationFrame,R={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},S={},T=null,U="Host Page",V={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",closedCallback:function(){},initCallback:function(){},messageCallback:function(){k("MessageCallback function not defined")},resizedCallback:function(){},scrollCallback:function(){return!0}},W={};window.jQuery&&H(window.jQuery),"function"==typeof define&&define.amd?define([],G):"object"==typeof module&&"object"==typeof module.exports&&(module.exports=G()),window.iFrameResize3=window.iFrameResize=window.iFrameResize||G()}}();
//# sourceMappingURL=iframeResizer.map
;
(function (document, $) {
    var multiMediaSwitch = (function($) {
    var multiMediaSwitch = {};
    var $comp = '';
    var _window = $(window);
    var initClickEvent = function () {
        $comp.find('.multiMedia-content__button').off().on('click', function (e) {
            var name = $(this).attr('data-name');
            var _hrefUrl = $(this).attr('data-href');
            
            if (_hrefUrl) {
                var atModule = 'multi_media_switch::' + name + "::" + lastNode($(this).attr('data-href')) + '::' + window.location.href;
                atModel.doAtEvent(atModule, 'navigation', e);
                window.open(_hrefUrl);
            }
        })
    }

    var debounce = function (func, throttleTime, debounceTime) {
        let lastExec = 0;
        let timer = null;
        
        return function() {
          const context = this;
          const args = arguments;
          const now = Date.now();
          
          if (now - lastExec >= throttleTime) {
            func.apply(context, args);
            lastExec = now;
          }
          
          clearTimeout(timer);
          timer = setTimeout(() => {
            if (now - lastExec >= throttleTime) {
              func.apply(context, args);
            }
            lastExec = Date.now();
          }, debounceTime);
        };
    }

    multiMediaSwitch.init = function() {
      $(document).ready(function() {
          $comp = $(".multi-mediaSwitch-comp");
          if (!$comp.length) {
              return;
          }
          var isRTL = $('body').hasClass('rtl');
          const currentBreakpoint = getCurrentBreakpoint();
          const $videoContainer = $comp.find('.mediaSwitch-video-warp');
          if ($videoContainer.length) {
              $.each($videoContainer, function () {
                  var videoLink = $(this).attr('data-video-path')
                  var $video = $('<video class="new-mediaSwitch-video-auto" loop muted autoplay removeControl mobileAutoPlayEnable playsinline />').append('<source src="' + videoLink + '">');
                  $(this).append($video);
              })
          }

          if (currentBreakpoint === 'DESKTOP') {
              _window.on('resize', debounce(function(e) {
                  for (let k = 0; k < $comp.length; k++) {
                      const $items = $($comp[k]).find(".multi-mediaSwitch-wrapper .carousel-inner .carousel-item");
                      let maxHeight = 0;
                      for (let j = 0; j < $items.length; j++) {
                          const originalDisplay = $items[j].style.display;
                          $items[j].style.display = 'block';
                          const $itemCon = $($items[j]).find('.image-wrapper, .content-wrapper');
                          for (let i = 0; i < $itemCon.length; i++) {
                            const height = $itemCon[i].clientHeight;
                            maxHeight = Math.max(maxHeight, height);
                          }
                          $items[j].style.display = originalDisplay;
                      }
                      for (let j = 0; j < $items.length; j++) {
                          $items[j].style.height = maxHeight + 'px';
                      }
                  }
              }, 300, 500))
          }

          for (let k = 0; k < $comp.length; k++) {
              if ($comp[k].getAttribute('data-multiMediaSwitch-backgroundColor') && $comp[k].getAttribute('data-multiMediaSwitch-backgroundColor').split('-')[2] === 'black') {
                  $comp[k].classList.add('multi-mediaSwitch-comp-black');
              }
              const $items = $($comp[k]).find(".multi-mediaSwitch-wrapper .carousel-inner .carousel-item");
              // 动态给每个配置组件wrapper赋值ID，避免重复
              const $mediaSwitchWrapper = $($comp[k]).find(".multi-mediaSwitch-wrapper");
              let currentId = $mediaSwitchWrapper.attr('id');
              let newId = currentId + '_' + k;
              $mediaSwitchWrapper.attr('id', newId);
              // 动态给每个配置组件的指引器li赋值ID
              const $firstIndicators = $($comp[k]).find(".multi-mediaSwitch-wrapper .carousel-indicators li");
              $firstIndicators.each(function(index, element) {
                  var $currentElement = $(element);
                  let currentId = $currentElement.attr('data-target');
                  let newId = currentId + '_' + k;
                  $currentElement.attr('data-target', newId);
              });
              // 移除多余的carousel-controller
              if ($items.length <= 1) {
                  const $carouselController = $($comp[k]).find(".multi-mediaSwitch-wrapper .carousel-controller");
                  $carouselController.remove();
              }
              if (isRTL) {
                  $($comp[k]).find(".multi-mediaSwitch-wrapper .carousel-inner").empty();
                  for (let j = $items.length - 1; j >= 0; j--) {
                      $($comp[k]).find(".multi-mediaSwitch-wrapper .carousel-inner")[0].appendChild($items[j])
                  }
                  const $indicators = $($comp[k]).find(".multi-mediaSwitch-wrapper .carousel-indicators li");
                  $indicators.each(function(index, element) {
                      var $currentElement = $(element);
                      $currentElement.attr('data-slide-to', $indicators.length - index - 1);
                  });
                  $($comp[k]).find(".multi-mediaSwitch-wrapper .carousel-indicators").empty();
                  for (let j = $indicators.length - 1; j >= 0; j--) {
                      $($comp[k]).find(".multi-mediaSwitch-wrapper .carousel-indicators")[0].appendChild($indicators[j])
                  }
                  $($comp[k]).find(".multi-mediaSwitch-wrapper .carousel-controller .next-button").addClass('disabled');
              } else {
                  $($comp[k]).find(".multi-mediaSwitch-wrapper .carousel-controller .prev-button").addClass('disabled');
              }
              
              if (currentBreakpoint === 'DESKTOP') {
                  if ($comp[k].getAttribute('data-multiMediaSwitch-useHomepage') === 'false') {
                      $comp[k].classList.add('multi-mediaSwitch-wrapper-noHomepage');
                  }
                  let maxHeight = 0;
                  for (let j = 0; j < $items.length; j++) {
                      const originalDisplay = $items[j].style.display;
                      $items[j].style.display = 'block';
                      const $itemCon = $($items[j]).find('.image-wrapper, .content-wrapper');
                      for (let i = 0; i < $itemCon.length; i++) {
                        const height = $itemCon[i].clientHeight;
                        maxHeight = Math.max(maxHeight, height);
                      }
                      $items[j].style.display = originalDisplay;
                  }
                  for (let j = 0; j < $items.length; j++) {
                      $items[j].style.height = maxHeight + 'px';
                  }
              } else {
                  let maxHeight = 0;
                  for (let j = 0; j < $items.length; j++) {
                      const originalDisplay = $items[j].style.display;
                      $items[j].style.display = 'block';
                      const $con = $($items[j]).find('.image-wrapper, .content-wrapper');
                      let totalHeight = 0;
                      for (let i = 0; i < $con.length; i++) {
                          const height = $con[i].clientHeight;
                          totalHeight += height;
                      }
                      maxHeight = Math.max(maxHeight, totalHeight + 15);
                      $items[j].style.display = originalDisplay;
                  }
                  for (let j = 0; j < $items.length; j++) {
                      $items[j].style.height = maxHeight + 'px';
                  }
                  $($comp[k]).find(".multi-mediaSwitch-wrapper .carousel-indicators li").on('click', function(e) {
                      e.preventDefault();
                      e.stopPropagation();
                  });
              }
              if ($items.length == 1) {
                  $($comp[k]).find(".multi-mediaSwitch-wrapper .carousel-controller .carousel-indicators").hide();
              } else {
                  $($comp[k]).find(".multi-mediaSwitch-wrapper .carousel-controller .carousel-indicators").show();
              }

              const $multiMediaSwitchWrapper = $($comp[k]).find(".multi-mediaSwitch-wrapper");
              $multiMediaSwitchWrapper.carousel({
                  interval: false
              });

              let changeBtnDisabled = function (btn, i) {
                  if (btn === 'prev-button') {
                      $($multiMediaSwitchWrapper[i]).find('.prev-button').addClass('disabled');
                      $($multiMediaSwitchWrapper[i]).find('.next-button').removeClass('disabled');
                  } else if (btn === 'next-button') {
                      $($multiMediaSwitchWrapper[i]).find('.next-button').addClass('disabled');
                      $($multiMediaSwitchWrapper[i]).find('.prev-button').removeClass('disabled');
                  } else {
                      $($multiMediaSwitchWrapper[i]).find('.prev-button, .next-button').removeClass('disabled');
                  }
              }

              for (let i = 0; i < $multiMediaSwitchWrapper.length; i++) {
                const carouselItemsLength = $($multiMediaSwitchWrapper[i]).find(".carousel-item").length;
                if (carouselItemsLength == 1) {
                  $($multiMediaSwitchWrapper[i]).find(".carousel-indicators").hide();
                } else {
                  $($multiMediaSwitchWrapper[i]).find(".carousel-indicators").show();
                }
                
                $($multiMediaSwitchWrapper[i]).find('.prev-button').on('click', function (e) {
                    if (!$(this).hasClass('disabled')) {
                        $multiMediaSwitchWrapper.carousel("prev");
                    }
                });
                $($multiMediaSwitchWrapper[i]).find('.next-button').on('click', function (e) {
                    if (!$(this).hasClass('disabled')) {
                        $multiMediaSwitchWrapper.carousel("next");
                    }
                });
                $($multiMediaSwitchWrapper[i]).on('slide.bs.carousel', function (e) {
                    const direction = e.direction;
                    if (e.from === 0 && direction === 'right') {
                        e.preventDefault();
                        return;
                    } else if (e.from === carouselItemsLength - 1 && direction === 'left') {
                        e.preventDefault();
                        return;
                    }
                    if (e.to === 0) {
                        changeBtnDisabled('prev-button', i);
                    } else if (e.to === carouselItemsLength - 1) {
                        changeBtnDisabled('next-button', i);
                    } else {
                        changeBtnDisabled('', i);
                    }
                });
              }
          }
          initClickEvent();
      });
    };

    return multiMediaSwitch;
  })($);

  multiMediaSwitch.init();
})(document, $);

;
var newsCarousel = (function($) {
  var newsCarousel = {};
  var $comp = '';
  var _window = $(window);
  var loadLazyImage = function(element) {
    if(isInViewPort($(element).get(0))){
        var isDesktop = getCurrentBreakPoint() == "DESKTOP";
        var activeItem = $(element).find(".swiper-slide-active");
        var currentIndex = activeItem.index();
        var totalSlides = $(element).find(".swiper-slide").length;
        var prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        var nextIndex = (currentIndex + 1) % totalSlides;
        var prevSlide = $(element).find(".swiper-slide").eq(prevIndex);
        var nextSlide = $(element).find(".swiper-slide").eq(nextIndex);
        let itemList = totalSlides === 1 ? [activeItem] : [activeItem, prevSlide, nextSlide];
        itemList.forEach(function(item) {
            if (isDesktop) {
                if (!$(item).find(".show-imageVideo-PC .show-image").find("img").length) {
                    let imgSrc = $(item).find(".show-imageVideo-PC .show-image").attr("data-src");
                    if (imgSrc) {
                        $(item).find(".show-imageVideo-PC .show-image").append("<img src='" + imgSrc + "' alt='' /> ");
                    }
                    if ($(item).find(".show-imageVideo-PC .video-show").length) {
                        $(item.find('.show-imageVideo-PC .show-image')).css('opacity', '0');
                    }
                }
            } else {
                if (!$(item).find(".show-imageVideo-MOBILE .show-image").find("img").length) {
                    let imgSrc = $(item).find(".show-imageVideo-MOBILE .show-image").attr("data-src");
                    if (imgSrc) {
                       $(item).find(".show-imageVideo-MOBILE .show-image").append("<img src='" + imgSrc + "' alt='' /> "); 
                    }
                }
            }
        })
    } 
  }

  newsCarousel.init = function() {
    $(document).ready(function() {
        $comp = $(".news-carousel-comp");
        if (!$comp.length) {
            return;
        }
        var isDesktop = getCurrentBreakPoint() == "DESKTOP";
        $comp.each(function() {
            var $newsCarouselComp = $(this);
            if($newsCarouselComp.length){
                var $swiperContainer = $newsCarouselComp.find('.swiper-container');
                // 先检查是否存在旧的 Swiper 实例并销毁
                if(getCurrentBreakPoint()!=='DESKTOP'){
                    var oldSwiper = $swiperContainer[0].swiper;
                    if (oldSwiper) {
                        oldSwiper.destroy(true, true);
                    }
                }
                const $slides = $newsCarouselComp.find('.swiper-slide');
                if ($slides.length <= 1) {
                    $swiperContainer.addClass('single-slide');
                }
                var swiperContainerSwiper =  new Swiper($swiperContainer, {
                    loop: $slides.length > 1,
                    speed: 800,
                    pagination: {
                      el: '.swiper-pagination',
                      clickable: true
                    },
                    navigation: {
                      nextEl: '.next-button-con',
                      prevEl: '.prev-button-con'
                    },
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    spaceBetween: isDesktop ? 40 : 15,
                    threshold: 30,
                    on: {
                        transitionStart: function () {
                            loadLazyImage($swiperContainer);
                            $swiperContainer.find('.video-show').each((index, video) => {
                                if (video.closest('.swiper-slide').classList.contains('swiper-slide-active')) {
                                    if ($(video).closest('.show-imageVideo-PC').find('.video-control').hasClass('video-control-play')) {
                                        $(video).closest('.show-imageVideo-PC').find('.video-control').removeClass('video-control-play');
                                    }
                                    video.play();
                                    video.addEventListener('ended', () => {
                                        $(video.closest('.show-imageVideo-PC')).find('.video-control').addClass('video-control-play');
                                        $(video.closest('.show-imageVideo-PC')).find('.show-image').css('opacity', '1');
                                    });
                                    return;
                                } else {
                                    $(video.closest('.show-imageVideo-PC')).find('.show-image').css('opacity', '0');
                                    video.pause();
                                    video.currentTime = 0;
                                }
                            });
                        }
                    }
                });
                _window.on('scroll', function(e) {
                    loadLazyImage($swiperContainer);
                })
                $swiperContainer.find('.swiper-content').each(function(index, swiperItem) {
                    $(swiperItem).on('click', function(e) {
                        var _hrefUrl = $(this).attr('data-href');
                        if (_hrefUrl) {
                            var atModule = '	news_carousel_component::news_link' + "::" + lastNode($(this).attr('data-href')) + '::' + window.location.href;
                            atModel.doAtEvent(atModule, 'navigation', e);
                            window.open(_hrefUrl);
                        }
                    })
                })
                $swiperContainer.find('.video-control').each(function(index, control) {
                    $(control).on('click', function(e) {
                        e.stopPropagation();
                        let videoSrc = '';
                        if ($(control).hasClass('video-control-play')) {
                            $(control.closest('.show-imageVideo-PC')).find('.video-show').each((index1, video) => {
                                $(video).find('source').each((index2, source) => {
                                    videoSrc = source.getAttribute('src');
                                })
                                $(video.closest('.show-imageVideo-PC')).find('.show-image').css('opacity', '0');
                                $(control).removeClass('video-control-play');
                                video.play();
                            });
                        } else {
                            $(control.closest('.show-imageVideo-PC')).find('.video-show').each((index1, video) => {
                                $(video).find('source').each((index2, source) => {
                                    videoSrc = source.getAttribute('src');
                                })
                                $(control).addClass('video-control-play');
                                video.pause();
                            });
                        }
                        let videoName = lastNode(videoSrc).split('.')[0];
                        var atModule = 'news_carousel_component::video_button::' + (videoName) + '::' + window.location.href;;
                        atModel.doAtEvent(atModule, 'action', e);
                    })
                })
            }
        })
    });
  };
  return newsCarousel;
})($);

newsCarousel.init();
;(function (document, $) {
  var textMaskA = $('.text-mask').find('.href-a')
  textMaskA.off().on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    var _this = this
    if($(_this).parent().hasClass('no-des') && $(_this).parent().hasClass('no-href')){
      return;
    }
    if(getCurrentBreakpoint() !== 'DESKTOP'){
    if($(_this).parent().hasClass('expand')){
        if(!$(e.target).hasClass('title')){
          if($(_this).attr('data-href') && $(_this).attr('data-href')!==':;'){
            var atModule = $(this).data('at-module') + lastNode($(this).attr('data-href')) + atModel.atSpliter + window.location.href
            console.log('click', atModule)
            atModel.doAtEvent(atModule , 'navigation', e); 
            setTimeout(function(){
                window.open($(_this).attr('data-href'), '_blank')
            }, 200)
        }
        } else {
          $(e.target).parent().parent().removeClass('expand')
          $(e.target).parent().parent().prev('.filter-mask').removeClass('expand')
        }
      } else {
        var atModule = 'company_snapshot::mobile_expand::' + $(this).parent().find('.title').text().trim() + atModel.atSpliter + window.location.href
        atModel.doAtEvent(atModule , 'navigation', e); 
        console.log('click', atModule)
        $(_this).parent().addClass('expand').addClass('animate')
        $(_this).parent().prev('.filter-mask').addClass('expand')
      }
    } else {
        if($(_this).attr('data-href') && $(_this).attr('data-href')!==':;'){
          var atModule = $(this).data('at-module') + lastNode($(this).attr('data-href')) + atModel.atSpliter + window.location.href
          console.log('click', atModule)
          atModel.doAtEvent(atModule , 'navigation', e); 
          setTimeout(function(){
              window.open($(_this).attr('data-href'), '_blank')
          }, 200)
         }
    }
  })
  $('.text-mask').on('click', function(e){
    e.stopPropagation();
    var atModule = 'company_snapshot::mobile_expand::' + $(this).find('.title').text().trim() +atModel.atSpliter + window.location.href
    atModel.doAtEvent(atModule , 'navigation', e); 
    console.log('expand', atModule)
    if(!$(this).parent().hasClass('expand')){
      $(this).addClass('expand').addClass('animate')
      $(this).prev('.filter-mask').addClass('expand').addClass('animate')
    }
  })
  $('.mobile-see-more').off().on("click", function(e){
    e.stopPropagation();
    if($(this).parent().hasClass('expand')){
      $(this).parent().removeClass('expand')
      $(this).parent().prev('.filter-mask').removeClass('expand')
    } else {
      $(this).parent().addClass('expand').addClass('animate')
      $(this).parent().prev('.filter-mask').addClass('expand')
      var atModule = 'company_snapshot::mobile_expand::' + $(this).parent().find('.title').text().trim() +atModel.atSpliter + window.location.href
      console.log('expand', atModule)
      atModel.doAtEvent(atModule , 'navigation', e); 
    }
  })
  $('.see-href').off().on('click', function(e){
    e.stopPropagation()
    var _href = $(this).parent().find('.text-mask').find('.href-a').attr('data-href')
    var atModule = 'company_snapshot::link_button::' + lastNode($(this).parent().find('.text-mask').find('.href-a').attr('data-href')) +atModel.atSpliter + window.location.href
    console.log('see-href', atModule)
    atModel.doAtEvent(atModule , 'navigation', e); 
    window.open(_href, '_blank')
  })
  var appearLayerTimer = null;
  $('.company-snapshot-box ').find('.snapshot-item').each(function (index, element) {
     $(element).on('mouseenter', function() {
       if (appearLayerTimer) {
           window.clearTimeout(appearLayerTimer);
           appearLayerTimer = null;
        }
        if(getCurrentBreakpoint() !== 'DESKTOP' || ($(element).hasClass('no-des')&&$(element).hasClass('no-href'))) return;
        appearLayerTimer = window.setTimeout(function() {
          $(element).addClass('activeHover');
            $(element).addClass('activeHover');
          }, 300)
        });

        $(element).on('mouseleave', function() {
          $(element).removeClass('activeHover');
            $(element).removeClass('activeHover');
              if (appearLayerTimer) {
                window.clearTimeout(appearLayerTimer);
              appearLayerTimer = null;
         }
      });
  })
})(document, $);
;
var newsPromotion = (function($) {
  var newsPromotion = {};
  var $comp = '';
  var initClickEvent = function () {
      $comp.find('.news-promotion-mainNews, .news-promotion-otherNews .otherNews-item').off().on('click', function (e) {
          var _hrefUrl = $(this).attr('data-href');
          if (_hrefUrl) {
              var atModule = 'news_promotion_component::news_link' + "::" + lastNode($(this).attr('data-href')) + '::' + window.location.href;
              atModel.doAtEvent(atModule, 'navigation', e);
              window.open(_hrefUrl);
          }
      })
  }

  newsPromotion.init = function() {
    $(document).ready(function() {
        $comp = $(".news-promotion-comp");
        if (!$comp.length) {
            return;
        }
        var isDesktop = getCurrentBreakPoint() == "DESKTOP";
        if (isDesktop) {
          for (let k = 0; k < $comp.length; k++) {
              if ($comp[k].getAttribute('data-newsPromotion-useHomepage') === 'false') {
                  $($comp[k]).find('.news-promotion-wrapper').each(function (index, wrapper) {
                    wrapper.classList.add('news-promotion-wrapper-noHomepage');
                  })
              }
          }
        }
        initClickEvent();
    });
  };
  return newsPromotion;
})($);

newsPromotion.init();

