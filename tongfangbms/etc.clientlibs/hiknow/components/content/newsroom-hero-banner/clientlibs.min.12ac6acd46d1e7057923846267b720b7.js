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
