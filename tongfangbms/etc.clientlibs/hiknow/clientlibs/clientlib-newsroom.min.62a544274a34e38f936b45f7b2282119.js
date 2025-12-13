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
;
(function (document, $) {
    var placeholder = {"All": Granite.I18n.get("Search"), "blog": Granite.I18n.get("Search blog"), "news": Granite.I18n.get("Search news"), "stories": Granite.I18n.get("Search stories"),"displayStory": Granite.I18n.get("Search stories")};
    var pageType = {"All": Granite.I18n.get("Type"), "blog": Granite.I18n.get("Blog"), "news": Granite.I18n.get("Latest News"), "stories": Granite.I18n.get("Success Stories"),"displayStory": Granite.I18n.get("Success Stories")};
    var types = {"blog": "blog", "news": "news", "stories": "stories", "other": "other","displayStory": "displayStory"};
    var allType = {"type": "Type", "topic": "Topic", "year": "Year", "industry": "Industry", "application": "Application", "location": "Location"};

    function initDropdown($comp) {
        $comp.find('.newsroom-dropdown-item').on('click', function(e){
            e.stopPropagation();
            var $this = $(this);
            var $type = $this.find('.newsroom-dropdown-type');
            var $list = $this.find('.newsroom-dropdown-list');
            closeSearch($comp);
            retractDropdown($list[0]);
            $list.slideToggle('fast', function () {
                if ($(this).is(':visible')) {
                    $(this).addClass('active');
                    $type.addClass('collpse');
                } else {
                    $(this).removeClass('active');
                    $type.removeClass('collpse');
                }
            });
        })

        $comp.find('.newsroom-dropdown-item .newsroom-dropdown-list').on('click', function(e){
            e.stopPropagation();
        })
    }

    var getQueryString = function (name) {
        var url = new URL(location.href);
        return url.searchParams.get(name);
    }

    function changeURLParams(type, data) {
        if(type == allType['topic'] && getQueryString('topic')) {
            setQueryString('topic', data);
        } else if(type == allType['year'] && getQueryString('year')) {
            setQueryString('year', data);
        } else if(type == allType['industry'] && getQueryString('industry')) {
            setQueryString('industry', data);
        } else if(type == allType['application'] && getQueryString('application')) {
            setQueryString('application', data);
        } else if(type == allType['location'] && getQueryString('location')) {
            setQueryString('location', data);
        }
    }

    function changeSearchPlaceholder($comp, current) {
        var $divPlaceholder = $comp.find('.newsroom-search-placeholder');
        var $input = $comp.find('input.newsroom-search');
        var content = '';
        switch(current) {
            case types['blog']:
                content = placeholder['blog'];
                break;
            case types['news']:
                content = placeholder['news'];
                break;
            case types['stories']:
                content = placeholder['stories'];
                break;
            case types['displayStory']:
                content = placeholder['stories'];
                break;
            default:
                content = placeholder['All'];
                break;
        }

        $divPlaceholder.html(content);
        $input.attr('placeholder', content);
    }

    function changeActive($item) {
        var $parent =  $item.closest('.newsroom-dropdown-list');
        var $type = $item.closest('.newsroom-dropdown-item').find('.newsroom-dropdown-type');
        var $group = $item.closest('.newsroom-group');
        $parent.find('.newsroom-dropdown-primary, .newsroom-dropdown-sub').removeClass('active');
        $item.addClass('active');
        $parent.removeClass('active');
        if($group.hasClass('types') || $item.data('value') === 'All') {
            $type.removeClass('active');
        } else {
            $type.addClass('active');
        }
    }

    function bindClickDropdown($comp) {
        $comp.find('.newsroom-group:not(".types") .newsroom-dropdown-item .newsroom-dropdown-primary').on('click', function(e){
            e.stopPropagation();
            var href = $comp.data('path');
            var compType = $comp.data('type');
            var template = $comp.data('template-type');
            var $this = $(this);
            var val = $this.data('value');
            var $list = $this.closest('.newsroom-dropdown-list');
            var type = $this.closest('.newsroom-dropdown-item').find('.newsroom-dropdown-type').data('type');
            changeActive($this);

            if(template == types['other']) {
                var linkParams = '';
                linkParams = '?pageType='+ compType + '&' + type.toLowerCase() + '=' + val;

                window.location.href = href + linkParams;
            } else {
                getSelectValue($comp, type, val);
                changeURLParams(type, $(this).data('value'));
            }
            $list.slideUp('fast', function (e) {
                $(this).removeClass('active');
                $(this).closest('.newsroom-dropdown-item').find('.newsroom-dropdown-type').removeClass('collpse');
            });
        })
    }

    function bindSubClickDropdown($comp) {
        var $subList = $comp.find('.newsroom-dropdown-item .newsroom-dropdown-sub');
        if($subList.length > 0) {
            $subList.on('click', function(e) {
                e.stopPropagation();
                var type = $comp.data('type');
                var href = $comp.find('.newsroom-filter-title').attr('href');
                var $this = $(this);
                var $parent = $this.closest('.newsroom-dropdown-list');
                var $type = $this.closest('.newsroom-dropdown-item').find('.newsroom-dropdown-type');
                var template = $comp.data('template-type');

                $parent.find('.newsroom-dropdown-primary, .newsroom-dropdown-sub').siblings().removeClass('active');
                $this.addClass('active');
                $type.addClass('active');
                if(template == types['other']) {
                    var linkParams = href + '?pageType='+ type + '&topic=' + $(this).data('value');
                    window.location.href = linkParams;
                } else {
                    getSelectValue($comp);
                    changeURLParams($type.data('type'), $(this).data('value'));
                }
                $parent.slideUp('fast', function (e) {
                    $(this).removeClass('active');
                    $(this).closest('.newsroom-dropdown-item').find('.newsroom-dropdown-type').removeClass('collpse');
                });
            })
        }
    }

    function getAllData($allActiveDropdown) {
        var activeValue = {};
        $allActiveDropdown.find('.newsroom-dropdown-primary.active, .newsroom-dropdown-sub.active').each(function (){
            var type = $(this).closest('.newsroom-dropdown-item').find('.newsroom-dropdown-type').data('type');
            activeValue[type] = $(this).data('value');
        });

        return activeValue;
    }

    function getSelectValue($comp, itemType, val) {
        var type = $comp.data('type');
        var $allActiveDropdown = $comp.find('.newsroom-group.active .newsroom-dropdown-item');
        var activeValue = getAllData($allActiveDropdown);
        var param = {};
        if(type === 'archiveList') {
            if(activeValue[allType['type']] === types['blog']) {
                param = {type: types['blog'], topic: activeValue[allType['topic']] ? activeValue[allType['topic']] : 'All'};
            } else if(activeValue[allType['type']] === types['news']) {
                param = {type: types['news'], topic: activeValue[allType['topic']] ? activeValue[allType['topic']] : 'All', year: activeValue[allType['year']] ? activeValue[allType['year']] : 'All'};
            } else if(activeValue[allType['type']] === types['stories']) {
                param = {type: types['stories'], industry: activeValue[allType['industry']] ? activeValue[allType['industry']] : 'All', application: activeValue[allType['application']] ? activeValue[allType['application']] : 'All', location: activeValue[allType['location']] ? activeValue[allType['location']] : 'All'};
            } else if(activeValue[allType['type']] === types['displayStory']) {
                param = {type: types['displayStory'],topic: activeValue[allType['topic']] ? activeValue[allType['topic']] : 'All',location: activeValue[allType['location']] ? activeValue[allType['location']] : 'All'};
            }
            else {
                param = {type: 'All'};
            }
            $('.newsroom-archive-list-wrapper').trigger('filterNewsroomArchiveList', param);
        } else {
            if(type === 'blog') {
                param = {topic: activeValue[allType['topic']] ? activeValue[allType['topic']] : 'All', itemType: itemType, currentVal: val};
            } else if(type === 'news') {
                param = {topic: activeValue[allType['topic']] ? activeValue[allType['topic']] : 'All', year: activeValue[allType['year']] ? activeValue[allType['year']] : 'All', itemType: itemType, currentVal: val};
            } else if(type === 'stories') {
                param = {industry: activeValue[allType['industry']] ? activeValue[allType['industry']] : 'All', application: activeValue[allType['application']] ? activeValue[allType['application']] : 'All', location: activeValue[allType['location']] ? activeValue[allType['location']] : 'All', itemType: itemType, currentVal: val};
            } else if(type === 'displayStory') {
                param = {topic: activeValue[allType['topic']] ? activeValue[allType['topic']] : 'All', location: activeValue[allType['location']] ? activeValue[allType['location']] : 'All', itemType: itemType, currentVal: val};

            }

            $('.newsroom-landing-list-wrapper').trigger('filterNewsroomCardList', param);
        }
    }

    function clearUrlParams() {
        setQueryString('topic');
        setQueryString('year');
        setQueryString('industry');
        setQueryString('application');
        setQueryString('location');
    }

    function bindShowDropdown($comp) {
        var $types = $comp.find('.newsroom-group.types');
        var $allItems = $comp.find('.newsroom-group:not(".types")');
        var $blog = $comp.find('.newsroom-group.blog');
        var $news = $comp.find('.newsroom-group.news');
        var $stories = $comp.find('.newsroom-group.stories');
        var $displayStory = $comp.find('.newsroom-group.displayStory');
        if($types.hasClass('active')) {
            $types.find('.newsroom-dropdown-primary').on('click', function(){
                var $this = $(this);
                var val = $this.data('value');
                var $list = $this.closest('.newsroom-dropdown-list');
                var $curentType = $this.closest('.newsroom-dropdown-item').find('.newsroom-dropdown-type');
                changeActive($this);
                changeSearchPlaceholder($comp, $this.data('value'));
                clearSelected($comp);
                $allItems.removeClass('active');
                if(val === types['blog']) {
                    $blog.addClass('active');
                }else if(val === types['news']) {
                    $news.addClass('active');
                }else if(val === types['stories']) {
                    $stories.addClass('active');
                } else if(val === types['displayStory']) {
                    $displayStory.addClass('active');
                }
                else {
                    $types.addClass('active');
                }
                var value = pageType[$this.data('value')];
                $curentType.html(value);
                getSelectValue($comp);
                if(getQueryString('pageType')) {
                    clearUrlParams();
                    if(val == types['blog']) {
                        setQueryString('topic', 'All');
                        setQueryString('type', val);
                    } else if(val == types['news']){
                        setQueryString('topic', 'All');
                        setQueryString('year', 'All');
                        setQueryString('type', val);
                    } else if(val == types['stories']) {
                        setQueryString('industry', 'All');
                        setQueryString('application', 'All');
                        setQueryString('location', 'All');
                        setQueryString('type', val);
                    } else if(val == types['displayStory']) {
                        setQueryString('topic', 'All');
                        setQueryString('location', 'All');
                        setQueryString('type', val);
                    } else {
                        setQueryString('type', 'All');
                    }
                }

                $list.slideToggle('fast', function () {
                    if ($(this).is(':visible')) {
                        $(this).addClass('active');
                        $curentType.addClass('collpse');
                    } else {
                        $(this).removeClass('active');
                        $curentType.removeClass('collpse');
                    }
                });
            })
        }
    }

    function clearSelected($comp) {
        var $exceptType = $comp.find('.newsroom-group:not(".types")');
        var $list = $exceptType.find('.newsroom-dropdown-list');
        $exceptType.find('.newsroom-dropdown-type').removeClass('active');
        $exceptType.find('.newsroom-dropdown-primary, .newsroom-dropdown-sub').siblings().removeClass('active');
        $list.find('.newsroom-dropdown-primary').each(function() {
            if($(this).data('value') == 'All') {
                $(this).addClass('active');
            }
        });

        $list.find('.newsroom-dropdown-sub').each(function() {
            var $list = $(this).closest('.newsroom-dropdown-list');
            if($(this).data('value') == 'All' && $list.find('.newsroom-dropdown-primary').length <= 0) {
                $(this).addClass('active');
            }
        });
    }

    function retractDropdown(current) {
        var $allDropdown = $('.newsroom-dropdown-list.active');
        var $otherDropdowm = $allDropdown.filter(function (index, dpd) {
            var $dpd = $(dpd)
            if ($dpd.length && $dpd[0] !== current) {
                return $dpd
            }
        })
        $('body .layout').remove();
        $('body').removeClass('overflow-prevent');

        $otherDropdowm.slideUp('fast', function (e) {
            $(this).removeClass('active');
            $(this).closest('.newsroom-dropdown-item').find('.newsroom-dropdown-type').removeClass('collpse');
        });
    }

    function showSearchInput($comp) {
        var $searchWrapper = $comp.find('.newsroom-search-wrapper');
        var $searchClose = $comp.find('.newsroom-search-clear-btn');
        var $searchInput = $comp.find('input.newsroom-search');

        $searchInput.on('keydown', function(e) {
            e.stopPropagation();

            if(e.keyCode == '13') {
                var template = $comp.data('template-type');
                var type = $comp.data('type');
                var href = $comp.find('.newsroom-filter-title').attr('href');
                var value = $(this).val();
                var atHead = 'newsroom_filter_bar::search::';
                var tagType = $comp.find('.newsroom-group.types .newsroom-dropdown-primary.active').data('value');
                if(!value) closeSearch($comp);
                clearSelected($comp);
                clearUrlParams();
                if(getQueryString('s')) {
                    setQueryString('s', value)
                } else {
                    setQueryString('pageType');
                    setQueryString('type');
                }
                $('body .layout').remove();
                $('body').removeClass('overflow-prevent');
                $searchInput.trigger('blur');
                if(template == types['other']) {
                    atModel.doAtEvent(atHead + value, 'search', e);
                    window.location.href = href + '?pageType=' + type + '&s=' + value;
                } else {
                    if(type !== 'archiveList') {
                        $('.newsroom-landing-list-wrapper').trigger('searchNewsroomCardList', value);
                    } else {
                        var param = {};
                        if(tagType === types['blog']) {
                            param = {type: tagType, topic: getQueryString('topic') || 'All'}
                        } else if(tagType === types['news']) {
                            param = {type: tagType, topic: getQueryString('topic') || 'All', year: getQueryString('year') || 'All'}
                        } else if(tagType === types['stories']) {
                            param = {type: tagType, industry: getQueryString('industry') || 'All', application: getQueryString('application') || 'All', location: getQueryString('location') || 'All'}
                        } else if(tagType === types['displayStory']) {
                            param = {type: tagType, topic: getQueryString('topic') || 'All',location: getQueryString('location') || 'All'}
                        }
                        $('.newsroom-archive-list-wrapper').trigger('searchNewsroomArchiveList', {value: value, param: param});
                    }
                    atModel.doAtEvent(atHead + value, 'search', e);
                }
            }
        })

        $searchInput.on('click focus', function(e) {
            e.stopPropagation();

            $('body .layout').remove();
            $('body').removeClass('overflow-prevent');
            var top = $('.newsroom-filter-bar').offset().top + $('.newsroom-filter-bar').height() + 'px';
            $('body').append(`<div class="layout" style="top: ${top}"></div>`);
            $('body').addClass('overflow-prevent');
            $('.layout').on('click', function() {
                closeSearch($comp);
                $('body').removeClass('overflow-prevent');
            })
        })

        $searchWrapper.on('click', function(e) {
            e.stopPropagation();

            var $form = $(this).closest('.newsroom-search-container').find('.newsroom-search-form');
            $(this).addClass('inactive');
            $form.addClass('active')
            retractDropdown();
            $searchInput.trigger('focus');
        })

        $searchClose.on('click', function() {
            var $parent = $(this).closest('.newsroom-search-container');
            closeSearch($parent);
        })
    }

    function closeSearch($comp) {
        var $wrapper = $comp.find('.newsroom-search-wrapper');
        var $formContainer = $comp.find('.newsroom-search-form');

        $wrapper.removeClass('inactive');
        $formContainer.removeClass('active');
    }

    function initFilterBar($comp) {
        var type = $comp.data('type');
        if(getQueryString('pageType')) {
            var item = '.newsroom-group.'+ getQueryString('pageType');
            if(getQueryString('s')) {
                $comp.find('input.newsroom-search').val(getQueryString('s'));
            }
            if(getQueryString('pageType') === 'blog' && type === 'blog') {

                $comp.find(item +' .newsroom-dropdown-primary,'+ item +' .newsroom-dropdown-sub').each(function() {
                    if(getQueryString('topic') && $(this).data('value') === getQueryString('topic') ) {
                        changeActive($(this));
                    }
                })
            } else if(getQueryString('pageType') === 'news' && type === 'news') {
                $comp.find(item + ' .newsroom-dropdown-item').each(function() {
                    var $this = $(this);
                    var itemType = $this.find('.newsroom-dropdown-type').data('type');
                    if(itemType === allType['topic']) {
                        $this.find('.newsroom-dropdown-primary').each(function() {
                            if(getQueryString('topic') && $(this).data('value') === getQueryString('topic')) {
                                changeActive($(this));
                            }
                        })
                    } else if (itemType === allType['year']) {
                        $this.find('.newsroom-dropdown-primary').each(function() {
                            if(getQueryString('year') && $(this).data('value').toString() === getQueryString('year').toString()) {
                                changeActive($(this));
                            }
                        })
                    }
                })
            } else if(getQueryString('pageType') === 'stories' && type === 'stories') {
                $comp.find(item + ' .newsroom-dropdown-item').each(function() {
                    var $this = $(this);
                    var itemType = $this.find('.newsroom-dropdown-type').data('type');
                    if(itemType === allType['industry']) {
                        $this.find('.newsroom-dropdown-primary').each(function() {
                            if(getQueryString('industry') && $(this).data('value') === getQueryString('industry')) {
                                changeActive($(this));
                            }
                        })
                    } else if (itemType === allType['application']) {
                        $this.find('.newsroom-dropdown-primary').each(function() {
                            if(getQueryString('application') && $(this).data('value') === getQueryString('application')) {
                                changeActive($(this));
                            }
                        })
                    } else if (itemType === allType['location']) {
                        $this.find('.newsroom-dropdown-primary').each(function() {
                            if(getQueryString('location') && $(this).data('value') === getQueryString('location')) {
                                changeActive($(this));
                            }
                        })
                    }
                })
            } else if ((getQueryString('pageType') === 'displayStory' && type === 'displayStory')) {
                $comp.find(item + ' .newsroom-dropdown-item').each(function() {
                    var $this = $(this);
                    var itemType = $this.find('.newsroom-dropdown-type').data('type');
                    if(itemType === allType['topic']) {
                        $this.find('.newsroom-dropdown-primary').each(function() {
                            if(getQueryString('topic') && $(this).data('value') === getQueryString('topic')) {
                                changeActive($(this));
                            }
                        })
                    } else if (itemType === allType['location']) {
                        $this.find('.newsroom-dropdown-primary').each(function() {
                            if(getQueryString('location') && $(this).data('value').toString() === getQueryString('location').toString()) {
                                changeActive($(this));
                            }
                        })
                    }
                })
            }
            else if(getQueryString('pageType') === 'archiveList' && type === 'archiveList') {
                var $type = $comp.find('.newsroom-group.types');
                if(getQueryString('type')) {
                    $type.find('.newsroom-dropdown-primary').each(function() {
                        if($(this).data('value') === getQueryString('type') ) {
                            var $this = $(this);
                            var $selectType = $this.closest('.newsroom-dropdown-item').find('.newsroom-dropdown-type');
                            var $group = $comp.find('.newsroom-group.' + $(this).data('value'));
                            $group.addClass('active');
                            changeSearchPlaceholder($comp, $this.data('value'));
                            $selectType.html(pageType[$this.data('value')]);
                            changeActive($this);
                        }
                    })

                    if(getQueryString('type') === types['blog']) {
                        var $blog = $comp.find('.newsroom-group.blog');
                        $blog.addClass('active');

                        $blog.find('.newsroom-dropdown-primary, .newsroom-dropdown-sub').each(function() {
                            if(getQueryString('topic') && $(this).data('value') === getQueryString('topic') ) {
                                changeActive($(this));
                            }
                        })
                    } else if(getQueryString('type') === types['news']) {
                        var $news = $comp.find('.newsroom-group.news');
                        $news.addClass('active');

                        $news.find('.newsroom-dropdown-item').each(function() {
                            var $this = $(this);
                            var itemType = $this.find('.newsroom-dropdown-type').data('type');
                            if(itemType === allType['topic']) {
                                $this.find('.newsroom-dropdown-primary').each(function() {
                                    if(getQueryString('topic') && $(this).data('value') === getQueryString('topic')) {
                                        changeActive($(this));
                                    }
                                })
                            } else if (itemType === allType['year']) {
                                $this.find('.newsroom-dropdown-primary').each(function() {
                                    if(getQueryString('year') && $(this).data('value').toString() === getQueryString('year').toString()) {
                                        changeActive($(this));
                                    }
                                })
                            }
                        })
                    } else if(getQueryString('type') === types['stories']) {
                        var $stories = $comp.find('.newsroom-group.stories');
                        $stories.addClass('active');

                        $stories.find('.newsroom-dropdown-item').each(function() {
                            var $this = $(this);
                            var itemType = $this.find('.newsroom-dropdown-type').data('type');
                            if(itemType === allType['industry']) {
                                $this.find('.newsroom-dropdown-primary').each(function() {
                                    if(getQueryString('industry') && $(this).data('value') === getQueryString('industry')) {
                                        changeActive($(this));
                                    }
                                })
                            } else if (itemType === allType['application']) {
                                $this.find('.newsroom-dropdown-primary').each(function() {
                                    if(getQueryString('application') && $(this).data('value') === getQueryString('application')) {
                                        changeActive($(this));
                                    }
                                })
                            } else if (itemType === allType['location']) {
                                $this.find('.newsroom-dropdown-primary').each(function() {
                                    if(getQueryString('location') && $(this).data('value') === getQueryString('location')) {
                                        changeActive($(this));
                                    }
                                })
                            }
                        })
                    } else if(getQueryString('type') === types['displayStory']){
                        var $displayStory = $comp.find('.newsroom-group.displayStory');
                        $displayStory.addClass('active');

                        $displayStory.find('.newsroom-dropdown-item').each(function() {
                            var $this = $(this);
                            var itemType = $this.find('.newsroom-dropdown-type').data('type');
                            if(itemType === allType['topic']) {
                                $this.find('.newsroom-dropdown-primary').each(function() {
                                    if(getQueryString('topic') && $(this).data('value') === getQueryString('topic')) {
                                        changeActive($(this));
                                    }
                                })
                            } else if (itemType === allType['location']) {
                                $this.find('.newsroom-dropdown-primary').each(function() {
                                    if(getQueryString('location') && $(this).data('value') === getQueryString('location')) {
                                        changeActive($(this));
                                    }
                                })
                            }
                        })
                    }
                }
            }
        }
    }

    function hideUselessOptions($comp, data) {
        var type = $comp.data('type');
        var option = '';
        switch(type) {
            case types['stories'] :
                option = 'stories';
                break;
            case types['news']:
                option = 'news';
                break;
            case types['displayStory'] :
                option = 'displayStory';
                break;
            default:
                option = '';
                break;
        }
        if(option) {
            $comp.find('.newsroom-dropdown-container .newsroom-group.'+ option +' .newsroom-dropdown-item').each(function() {
                var $parent = $(this);
                var currentType = $parent.find('.newsroom-dropdown-type').data('type');
                if(data.type != currentType || data.value == 'All') {
                    $parent.find('.newsroom-dropdown-list .newsroom-dropdown-primary').each(function() {
                        var thisType = $(this).data('value').toString();
                        $(this).removeClass('only-useless');
                        if(data[currentType.toLowerCase()].indexOf(thisType) == -1 && thisType != 'All') {
                            $(this).addClass('only-useless');
                        }
                    })
                }
                if (option == 'displayStory') {
                    if ($parent.find('.newsroom-dropdown-sub-list .newsroom-dropdown-primary').length) {
                        $parent.find('.newsroom-dropdown-sub-list').each(function () {
                            if ($(this).find('.newsroom-dropdown-primary:not(".only-useless")').length == 0) {
                                $(this).find('.newsroom-dropdown-title').hide();
                            } else {
                                $(this).find('.newsroom-dropdown-title').show();
                            }
                        })
                    }
                }
            })
        }

    }

    function resetSelect($comp) {
        $comp.find('.newsroom-reset-btn-pc').on('click', function() {
            $comp.find('input.newsroom-search').val('');
            clearUrlParams();
            closeSearch($comp);
            clearSelected($comp);
            setQueryString('type');
            setQueryString('pageType');
            setQueryString('s');
            var param = {reset: 'reset'};
            $comp.find('.newsroom-dropdown-item .newsroom-dropdown-list .newsroom-dropdown-primary').removeClass('only-useless');
            $('.newsroom-landing-list-wrapper').trigger('filterNewsroomCardList', param);
        })
    }

    $(document).ready(function() {
        $('body').on('click', function () {
            retractDropdown();
        });

        $('.newsroom-filter-bar-wrapper').each(function() {
            var $comp = $(this);
            initDropdown($comp);
            bindClickDropdown($comp);
            bindSubClickDropdown($comp);
            bindShowDropdown($comp);
            showSearchInput($comp);
            initFilterBar($comp);
            resetSelect($comp);
            $comp.on('hideUselessOption', function(event, data) {
                hideUselessOptions($comp, data);
            });
        })
    })

})(document, $);
;
(function (document, $) {
    var breakpoint = getCurrentBreakpoint();
    var placeholder = {"All": Granite.I18n.get("Search"), "blog": Granite.I18n.get("Search blog"), "news": Granite.I18n.get("Search news"), "stories": Granite.I18n.get("Search stories")};
    var types = {"blog": "blog", "news": "news", "stories": "stories", "other": "other","displayStory": "displayStory"};
    var allType = {"type": "Type", "topic": "Topic", "year": "Year", "industry": "Industry", "application": "Application", "location": "Location"};
    var currentActiveValue = {};
    function showSearch($comp) {
        $comp.find('.newsroom-filter-search-icon').on('click', function(e) {
            e.stopPropagation();
            $comp.find('.newsroom-filter-mobile-wrapper').slideUp('fast', function () {
                $(this).removeClass('active');
            });
            $comp.find('.newsroom-search-mobile-wrapper').slideToggle('fast', function () {
                if ($(this).is(':visible')) {
                    $(this).addClass('active');
                    $(this).find('.newsroom-mobile-search').val() ? $(this).find('.newsroom-mobile-search').trigger('focus'): '';
                    valueReset($comp);
                    showLayout();
                } else {
                    $(this).removeClass('active');
                    $('body .filter-layout').remove();
                    $('body').removeClass('overflow-prevent');
                }
            });
        })
    }

    function hideSearch($comp) {
        $comp.find('.newsroom-search-clear-btn').on('click', function(e) {
            e.stopPropagation();
            $comp.find('.newsroom-search-mobile-wrapper').slideToggle('fast', function () {
                $(this).removeClass('active');
                    $('body .filter-layout').remove();
                    $('body').removeClass('overflow-prevent');
            });
        })
    }

    function showFilter($comp) {
        $comp.find('.newsroom-filter-select-icon').on('click', function(e) {
            e.stopPropagation();
            $comp.find('.newsroom-search-mobile-wrapper').slideUp('fast', function () {
                $(this).removeClass('active');
            });
            $comp.find('.newsroom-filter-mobile-wrapper').slideToggle('fast', function () {
                if ($(this).is(':visible')) {
                    $(this).addClass('active');
                    currentActiveValue = getActiveValue($comp);
                    showLayout();
                } else {
                    $(this).removeClass('active');
                    $('body .filter-layout').remove();
                    $('body').removeClass('overflow-prevent');
                    valueReset($comp);
                }
            });
        })
    }

    var getQueryString = function (name) {
        var url = new URL(location.href);
        return url.searchParams.get(name);
    }

    function changeURLParams(type, data) {
        if(type == allType['topic'] && getQueryString('topic')) {
            setQueryString('topic', data);
        } else if(type == allType['year'] && getQueryString('year')) {
            setQueryString('year', data);
        } else if(type == allType['industry'] && getQueryString('industry')) {
            setQueryString('industry', data);
        } else if(type == allType['application'] && getQueryString('application')) {
            setQueryString('application', data);
        } else if(type == allType['location'] && getQueryString('location')) {
            setQueryString('location', data);
        }
    }

    function changeActive($item) {
        var currentTitle =  $item.closest('.newsroom-filter-box').find('.newsroom-filter-title .newsroom-filter-desc');
        $item.closest('.newsroom-filter-items').find('.newsroom-filter-item').removeClass('active');
        $item.closest('.newsroom-filter-items').find('.newsroom-filter-primary-item').siblings().removeClass('active');
        $item.addClass('active');
        if ($item.hasClass('first-all')) {
            currentTitle.text($item.closest('.newsroom-filter-items').attr('data-type'));
        } else if ($item.attr('data-value') == 'displayStory' || $item.attr('data-value') == 'news' || $item.attr('data-value') == 'blog' || $item.attr('data-value') == 'stories') {
            currentTitle.text($item.text());
        }
        else {
            currentTitle.text($item.attr('data-value'));
        }
    }

    function bindClickEvent($comp) {
        $comp.find('.newsroom-mobile-group:not(".types") .newsroom-filter-item, .newsroom-filter-primary-item').on('click', function() {
            var $this = $(this);
            changeActive($this);
            $(this).closest('.newsroom-filter-box').find('.newsroom-filter-items').slideToggle('fast', function () {
                $(this).closest('.newsroom-filter-box').toggleClass('active');
            })

        })
    }

    function stopPropagations($comp) {
        $comp.find('.newsroom-filter-mobile-wrapper').on('click', function(e) { e.stopPropagation(); })
    }

    function mobileSearch($comp) {
        var $input = $comp.find('input.newsroom-mobile-search');
        $input.on('click', function(e){
            e.stopPropagation();
        })

        $input.on('keydown', function(e) {
            e.stopPropagation();

            if(e.keyCode == '13') {
                var template = $comp.data('template-type');
                var type = $comp.data('type');
                var value = $(this).val();
                var href = $comp.find('.newsroom-filter-title').attr('href');
                var atHead = 'newsroom_filter_bar::search::';
                var tagType = $comp.find('.newsroom-mobile-group.types .newsroom-filter-item.active').data('value');
                var fiterTitle = $comp.find('.newsroom-filter-box .newsroom-filter-desc');
                clearUrlParams();
                if(getQueryString('s')) {
                    setQueryString('s', value)
                } else {
                    setQueryString('pageType');
                    setQueryString('type');
                }
                clearSelected($comp);
                closeFilter();
                currentActiveValue = getActiveValue($comp);
                if(template == types['other']) {
                    atModel.doAtEvent(atHead + value, 'search', e);
                    window.location.href = href + '?pageType=' + type + '&s=' + value;
                } else {
                    if(type !== 'archiveList') {
                        $comp.find('.newsroom-filter-select-icon').removeClass('active');
                        $('.newsroom-landing-list-wrapper').trigger('searchNewsroomCardList', value);
                    } else {
                        var param = {};
                        if(tagType === types['blog']) {
                            param = {type: tagType, topic: getQueryString('topic') || 'All'}
                        } else if(tagType === types['news']) {
                            param = {type: tagType, topic: getQueryString('topic') || 'All', year: getQueryString('year') || 'All'}
                        } else if(tagType === types['stories']) {
                            param = {type: tagType, industry: getQueryString('industry') || 'All', application: getQueryString('application') || 'All', location: getQueryString('location') || 'All'}
                        } else if(tagType === types['displayStory']) {
                            param = {type: tagType, topic: getQueryString('topic') || 'All', location: getQueryString('location') || 'All'}
                        }
                        $('.newsroom-archive-list-wrapper').trigger('searchNewsroomArchiveList', {value: value, param: param});

                    }
                    fiterTitle.each(function (index,ele) {
                        if ($(ele).data('type') == 'Type') return
                        $(ele).text($(ele).data('type'));
                    })
                    atModel.doAtEvent(atHead + value, 'search', e);
                }
            }
        })
    }

    function showLayout() {
        $('body .filter-layout').remove();
        $('body').addClass('overflow-prevent');
        $('body').append('<div class="filter-layout"></div>');
    }

    function clearSelected($comp, isClear = false) {
        var $exceptType = $comp.find('.newsroom-mobile-group:not(".types")');
        if(isClear) $exceptType.removeClass('active');
        $exceptType.find('.newsroom-filter-item, .newsroom-filter-primary-item').removeClass('active');
    }

    function changePlaceholder($comp, current) {
        var $input = $comp.find('input.newsroom-mobile-search');
        var content = '';
        switch(current) {
            case types['blog']:
                content = placeholder['blog'];
                break;
            case types['news']:
                content = placeholder['news'];
                break;
            case types['stories']:
                content = placeholder['stories'];
                break;
            case types['displayStory']:
                content = placeholder['stories'];
                break;
            default:
                content = placeholder['All'];
                break;
        }

        $input.attr('placeholder', content);
    }

    function bindListClick($comp) {
        var $types = $comp.find('.newsroom-mobile-group.types');
        var $blog = $comp.find('.newsroom-mobile-group.blog');
        var $news = $comp.find('.newsroom-mobile-group.news');
        var $stories = $comp.find('.newsroom-mobile-group.stories');
        var $displayStory  = $comp.find('.newsroom-mobile-group.displayStory');
        if($types.hasClass('active')) {
            $comp.find('.newsroom-mobile-group.types .newsroom-filter-item').on('click', function() {
                var $this = $(this);
                var currentTitle =  $this.closest('.newsroom-filter-box').find('.newsroom-filter-title .newsroom-filter-desc');
                var val = $this.data('value');
                $this.siblings().removeClass('active');
                $this.addClass('active');
                clearSelected($comp, true);
                $this.closest('.newsroom-filter-items').slideToggle('fast', function () {
                    $(this).closest('.newsroom-filter-box').toggleClass('active');
                });
                $types.find('.newsroom-filter-items').removeClass('line');
                if(val === types['blog']) {
                    $this.closest('.newsroom-filter-items').addClass('line');
                    $blog.addClass('active');
                    currentTitle.text($this.text());
                }else if(val === types['news']) {
                    $news.addClass('active');
                    currentTitle.text($this.text());
                }else if(val === types['stories']) {
                    $stories.addClass('active');
                    currentTitle.text($this.text());
                } else if(val === types['displayStory']) {
                    $displayStory.addClass('active');
                    currentTitle.text($this.text());
                }
                else {
                    currentTitle.text($this.closest('.newsroom-filter-items').attr('data-type'));
                    $this.removeClass('line');
                    $types.addClass('active');
                }
            })
        }
    }

    function changeStatus($comp, param) {
        var $active = $comp.find('.newsroom-filter-select-icon');
        var isActive = false;
        for(var i in param) {
            if(param[i] !== 'All') {
                isActive = true;
                break;
            } else {
                isActive = false;
            }
        }

        isActive ? $active.addClass('active'): $active.removeClass('active');
    }

    function resetSelect($comp) {
        $comp.find('.newsroom-reset-btn').on('click', function() {
            var type = $comp.data('type');
            var fiterTitle = $comp.find('.newsroom-filter-box .newsroom-filter-desc');
            $comp.find('input.newsroom-mobile-search').val('');
            $comp.find('.newsroom-filter-select-icon').removeClass('active');
            closeFilter();
            clearUrlParams();
            setQueryString('type');
            setQueryString('pageType');
            setQueryString('s');
            fiterTitle.each(function (index,ele) {
                $(ele).text($(ele).data('type'));
            })
            $comp.find('.newsroom-filter-box .newsroom-filter-items').each(function (index,ele) {
                $(ele).closest('.newsroom-filter-box').removeClass('active');
                $(ele).hide();
            })
            firstFilterItem($comp);
            var param = {reset: 'reset'};

            if(type == 'archiveList') {
                var $types = $comp.find('.newsroom-mobile-group.types');
                $types.find('.newsroom-filter-item').removeClass('active')
                $types.find('.newsroom-filter-items').removeClass('line');
                $types.find('.newsroom-filter-item:first').addClass('active');
                clearSelected($comp, true);
                changePlaceholder($comp, 'All');
                currentActiveValue = getActiveValue($comp);
                $comp.find('.newsroom-mobile-group.types').find('.newsroom-filter-item, .newsroom-filter-primary-item').removeClass('active');;
                $('.newsroom-archive-list-wrapper').trigger('filterNewsroomArchiveList', param);
            } else {
                clearSelected($comp);
                currentActiveValue = getActiveValue($comp);
                $('.newsroom-landing-list-wrapper').trigger('filterNewsroomCardList', param);
            }
        })
    }

    function doAtModule(param, e, $comp){
        //submit埋点
        var type = $comp.data('type');
        var atSubmit = 'newsroom_filter_bar::submit' + (type == 'archiveList' ? ((param.type ? "::" : "") + param.type) : '');
        if(param.type === types['blog']) {
            atSubmit = atSubmit + (param.topic != 'All' ? "::" : "") + (param.topic != 'All' ? param.topic : "");
        } else if(param.type === types['news']) {
            atSubmit = atSubmit + (param.topic != 'All' ? "::" : "") + (param.topic != 'All' ? param.topic : "") + ((param.year != 'All' && param.topic != 'All')  ? ";" : ((param.year != 'All' && param.topic == 'All') ? "::" : "")) + (param.year != 'All' ? param.year : "");
        } else if(param.type === types['stories']) {
            atSubmit = atSubmit + (param.industry != 'All' ? "::" : "") + (param.industry != 'All' ? param.industry : "")
                + ((param.location != 'All' && param.industry != 'All') ? ";" : ((param.location != 'All' && param.industry == 'All') ? "::" : "")) + (param.location != 'All' ? param.location : "")
                + ((param.application != 'All' && (param.industry != 'All' || param.location != 'All')) ? ";" : ((param.application != 'All' && param.industry == 'All' && param.location == 'All') ? "::" : "")) + (param.application != 'All' ? param.application : "");
        } else if(param.type === types['displayStory']) {
            atSubmit = atSubmit + (param.topic != 'All' ? "::" : "") + (param.topic != 'All' ? param.topic : "") + ((param.location != 'All' && param.topic != 'All')  ? ";" : ((param.topic != 'All' && param.location == 'All') ? "::" : "")) + (param.location != 'All' ? param.location : "");
        }
        atModel.doAtEvent(atSubmit, 'action', e);
    }

    function getActiveValue($comp) {
        var $allActiveSelect = $comp.find('.newsroom-mobile-group.active .newsroom-filter-items');
        var activeValue = {};

        $allActiveSelect.find('.newsroom-filter-item.active, .newsroom-filter-primary-item.active').each(function (){
            var type = $(this).closest('.newsroom-filter-items').data('type');
            activeValue[type] = $(this).data('value');
        });

        return activeValue;
    }

    function clearUrlParams() {
        setQueryString('topic');
        setQueryString('year');
        setQueryString('industry');
        setQueryString('application');
        setQueryString('location');
    }

    function submitSelect($comp) {
        $comp.find('.newsroom-submit-btn').on('click', function(e) {
            var type = $comp.data('type');
            var activeValue = getActiveValue($comp);
            var param = {}, activeParam = {};
            var href = $comp.find('.newsroom-filter-title').attr('href');
            var template = $comp.data('template-type');
            currentActiveValue = getActiveValue($comp);

            if(type === 'archiveList') {
                if(template == types['other']) {
                    var linkParams = '';
                    if(activeValue[allType['type']] === types['blog']) {
                        param = {type: types['blog'], topic: activeValue[allType['topic']] || 'All'};
                        linkParams = '?pageType='+ type + '&type=' + activeValue[allType['type']] + (activeValue[allType['topic']] && activeValue[allType['topic']] != 'All' ? '&topic=' + activeValue[allType['topic']] : '');
                    } else if(activeValue[allType['type']] === types['news']) {
                        param = {type: types['news'], topic: activeValue[allType['topic']] || 'All', year: activeValue[allType['year']] || 'All'};
                        linkParams = '?pageType='+ type + '&type=' + activeValue[allType['type']] + (activeValue[allType['topic']] && activeValue[allType['topic']] != 'All'  ? '&topic=' + activeValue[allType['topic']] : '') + (activeValue[allType['year']] && activeValue[allType['year']] != 'All'  ? '&year=' + activeValue[allType['year']] : '');
                    } else if(activeValue[allType['type']] === types['stories']) {
                        param = {type: types['stories'], industry: activeValue[allType['industry']] || 'All', application: activeValue[allType['application']] || 'All', location: activeValue[allType['location']] || 'All'};
                        linkParams = '?pageType='+ type + '&type=' + activeValue[allType['type']] + (activeValue[allType['industry']] && activeValue[allType['industry']] != 'All'  ? '&industry=' + activeValue[allType['industry']] : '') + (activeValue[allType['application']] && activeValue[allType['application']] != 'All'  ? '&application=' + activeValue[allType['application']] : '') + (activeValue[allType['location']] && activeValue[allType['location']] != 'All'  ? '&location=' + activeValue[allType['location']] : '');
                    } else {
                        param = {type: 'All'};
                        linkParams = '?pageType='+ type + '&type=All';
                    }
                    doAtModule(param, e, $comp);
                    window.location.href = href + linkParams;
                } else {
                    if(activeValue[allType['type']] === types['blog']) {
                        param = {type: types['blog'], topic: activeValue[allType['topic']] || 'All'};
                        if(getQueryString('pageType')) {
                            setQueryString('topic', activeValue[allType['topic']] || 'All');
                            setQueryString('type', activeValue[allType['type']]);
                            setQueryString('year');
                        }
                        setQueryString('application');
                        setQueryString('industry');
                        setQueryString('location');
                    } else if(activeValue[allType['type']] === types['news']) {
                        param = {type: types['news'], topic: activeValue[allType['topic']] || 'All', year: activeValue[allType['year']] || 'All'};
                        if(getQueryString('pageType')) {
                            setQueryString('topic', activeValue[allType['topic']] || 'All');
                            setQueryString('year', activeValue[allType['year']] || 'All');
                            setQueryString('type', activeValue[allType['type']]);
                        }
                        setQueryString('application');
                        setQueryString('industry');
                        setQueryString('location');
                    } else if(activeValue[allType['type']] === types['stories']) {
                        param = {type: types['stories'], industry: activeValue[allType['industry']] || 'All', application: activeValue[allType['application']] || 'All', location: activeValue[allType['location']] || 'All'};
                        if(getQueryString('pageType')) {
                            setQueryString('industry', activeValue[allType['industry']] || 'All');
                            setQueryString('application', activeValue[allType['application']] || 'All');
                            setQueryString('location', activeValue[allType['location']] || 'All');
                            setQueryString('type', activeValue[allType['type']]);
                        }
                        setQueryString('year');
                        setQueryString('topic');
                    } else if(activeValue[allType['type']] === types['displayStory']) {
                        param = {type: types['displayStory'], topic: activeValue[allType['topic']] || 'All', location: activeValue[allType['location']] || 'All'};
                        if(getQueryString('pageType')) {
                            setQueryString('topic', activeValue[allType['topic']] || 'All');
                            setQueryString('location', activeValue[allType['location']] || 'All');
                        }
                        setQueryString('topic');
                        setQueryString('location');
                    }
                    else {
                        param = {type: 'All'};
                        clearUrlParams();
                        if(getQueryString('type')) setQueryString('type', 'All');
                    }
                    changePlaceholder($comp, activeValue[allType['type']]);
                    changeStatus($comp, param);
                    doAtModule(param, e, $comp);
                    closeFilter();
                    $('.newsroom-archive-list-wrapper').trigger('filterNewsroomArchiveList', param);
                }
            } else {
                if(template == types['other']) {
                    var linkParams = '';
                    if(type === 'blog') {
                        param = {type: types['blog'], topic: activeValue[allType['topic']] || 'All'};
                        linkParams = '?pageType='+ type + (activeValue[allType['topic']] && activeValue[allType['topic']] != 'All' ? ('&topic=' + activeValue[allType['topic']]) : '');
                    } else if(type === 'news') {
                        param = {type: types['news'], topic: activeValue[allType['topic']] || 'All', year: activeValue[allType['year']] || 'All'};
                        linkParams = '?pageType='+ type + (activeValue[allType['topic']] && activeValue[allType['topic']] != 'All' ? '&topic=' + activeValue[allType['topic']] : '') + (activeValue[allType['year']] && activeValue[allType['year']] != 'All' ? '&year=' + activeValue[allType['year']] : '');
                    } else if(type === 'stories') {
                        param = {type: types['stories'], industry: activeValue[allType['industry']] || 'All', application: activeValue[allType['application']] || 'All', location: activeValue[allType['location']] || 'All'};
                        linkParams = '?pageType='+ type + (activeValue[allType['industry']] && activeValue[allType['industry']] != 'All' ? '&industry=' + activeValue[allType['industry']] : '') + (activeValue[allType['application']] && activeValue[allType['application']] != 'All' ? '&application=' + activeValue[allType['application']] : '') + (activeValue[allType['location']] && activeValue[allType['location']] != 'All' ? '&location=' + activeValue[allType['location']] : '');
                    } else if(type === 'displayStory') {
                        param = {type: types['displayStory'], topic: activeValue[allType['topic']] || 'All',  location: activeValue[allType['location']] || 'All'};
                        linkParams = '?pageType='+ type + (activeValue[allType['topic']] && activeValue[allType['topic']] != 'All' ? '&topic=' + activeValue[allType['topic']] : '') + (activeValue[allType['location']] && activeValue[allType['location']] != 'All' ? '&location=' + activeValue[allType['location']] : '');
                    }
                    doAtModule(param, e, $comp);
                    window.location.href = href + linkParams;
                } else {
                    if(type === 'blog') {
                        var val = activeValue[allType['topic']] || 'All'
                        param = {type: types['blog'], topic: activeValue[allType['topic']] || 'All'};
                        activeParam = {topic: activeValue[allType['topic']] || 'All'};
                        changeURLParams(allType['topic'], val);
                    } else if(type === 'news') {
                        param = {type: types['news'], topic: activeValue[allType['topic']] || 'All', year: activeValue[allType['year']] || 'All'};
                        activeParam = {topic: activeValue[allType['topic']] || 'All', year: activeValue[allType['year']] || 'All'};
                        Object.keys(activeValue).forEach(item => {
                            if(item == allType['topic']) {
                                changeURLParams(allType['topic'], activeValue[item] || 'All');
                            }
                            if(item == allType['year']) {
                                changeURLParams(allType['year'], activeValue[item] || 'All');
                            }
                        });
                    } else if(type === 'stories') {
                        param = {type: types['stories'], industry: activeValue[allType['industry']] || 'All', application: activeValue[allType['application']] || 'All', location: activeValue[allType['location']] || 'All'};
                        activeParam = {industry: activeValue[allType['industry']] || 'All', application: activeValue[allType['application']] || 'All', location: activeValue[allType['location']] || 'All'}
                        Object.keys(activeValue).forEach(item => {
                            if(item == allType['industry']) {
                                changeURLParams(allType['industry'], activeValue[item] || 'All');
                            }
                            if(item == allType['application']) {
                                changeURLParams(allType['application'], activeValue[item] || 'All');
                            }
                            if(item == allType['location']) {
                                changeURLParams(allType['location'], activeValue[item] || 'All');
                            }
                        });
                    } else if(type === 'displayStory') {
                        param = {type: types['displayStory'], topic: activeValue[allType['topic']] || 'All', location: activeValue[allType['location']] || 'All'};
                        activeParam = {topic: activeValue[allType['topic']] || 'All', location: activeValue[allType['location']] || 'All'};
                        Object.keys(activeValue).forEach(item => {
                            if(item == allType['topic']) {
                                changeURLParams(allType['topic'], activeValue[item] || 'All');
                            }
                            if(item == allType['location']) {
                                changeURLParams(allType['location'], activeValue[item] || 'All');
                            }
                        });
                    }
                    changeStatus($comp, activeParam);
                    doAtModule(param, e, $comp);
                    closeFilter();
                    $('.newsroom-landing-list-wrapper').trigger('filterNewsroomCardList', param);
                }
            }
        })
    }

    function closeFilter() {
        $('.newsroom-search-mobile-wrapper, .newsroom-filter-mobile-wrapper').slideUp('fast', function () {
            $(this).removeClass('active');
        });
        $('body').removeClass('overflow-prevent');
        $('body .filter-layout').remove();
    }

    function initFilterBar($comp) {
        var type = $comp.data('type');

        if(getQueryString('pageType')) {
            var item = '.newsroom-mobile-group.'+ getQueryString('pageType');
            if(getQueryString('s')) {
                $comp.find('input.newsroom-mobile-search').val(getQueryString('s'));
            }
            if(getQueryString('pageType') === 'blog' && type === 'blog') {
                $comp.find(item +' .newsroom-filter-primary-item, ' + item + ' .newsroom-filter-item').each(function() {
                    if(getQueryString('topic') && $(this).data('value') === getQueryString('topic') ) {
                        changeActive($(this));
                        $comp.find('.newsroom-filter-select-icon').addClass('active');
                    }
                })
            } else if(getQueryString('pageType') === 'news' && type === 'news') {
                $comp.find(item + ' .newsroom-filter-items').each(function() {
                    var $this = $(this);
                    var itemType = $this.data('type');
                    if(itemType === allType['topic']) {
                        $this.find('.newsroom-filter-item').each(function() {
                            if(getQueryString('topic') && $(this).data('value') === getQueryString('topic')) {
                                changeActive($(this));
                                $comp.find('.newsroom-filter-select-icon').addClass('active');
                            }
                        })
                    } else if (itemType === allType['year']) {
                        $this.find('.newsroom-filter-item').each(function() {
                            if(getQueryString('year') && $(this).data('value').toString() === getQueryString('year').toString()) {
                                changeActive($(this));
                                $comp.find('.newsroom-filter-select-icon').addClass('active');
                            }
                        })
                    }
                })
            } else if(getQueryString('pageType') === 'stories' && type === 'stories') {
                $comp.find(item + ' .newsroom-filter-items').each(function() {
                    var $this = $(this);
                    var itemType = $this.data('type');
                    if(itemType === allType['industry']) {
                        $this.find('.newsroom-filter-item').each(function() {
                            if(getQueryString('industry') && $(this).data('value') === getQueryString('industry')) {
                                changeActive($(this));
                                $comp.find('.newsroom-filter-select-icon').addClass('active');
                            }
                        })
                    } else if (itemType === allType['application']) {
                        $this.find('.newsroom-filter-item').each(function() {
                            if(getQueryString('application') && $(this).data('value') === getQueryString('application')) {
                                changeActive($(this));
                                $comp.find('.newsroom-filter-select-icon').addClass('active');
                            }
                        })
                    } else if (itemType === allType['location']) {
                        $this.find('.newsroom-filter-item').each(function() {
                            if( getQueryString('location') && $(this).data('value') === getQueryString('location')) {
                                changeActive($(this));
                                $comp.find('.newsroom-filter-select-icon').addClass('active');
                            }
                        })
                    }
                })
            }else if(getQueryString('pageType') === 'displayStory' && type === 'displayStory') {
                $comp.find(item + ' .newsroom-filter-items').each(function() {
                    var $this = $(this);
                    var itemType = $this.data('type');
                    if(itemType === allType['topic']) {
                        $this.find('.newsroom-filter-primary-item, .newsroom-filter-item').each(function() {
                            if(getQueryString('topic') && $(this).data('value') === getQueryString('topic')) {
                                changeActive($(this));
                                $comp.find('.newsroom-filter-select-icon').addClass('active');
                            }
                        })
                    } else if (itemType === allType['location']) {
                        $this.find('.newsroom-filter-item').each(function() {
                            if(getQueryString('location') && $(this).data('value').toString() === getQueryString('location').toString()) {
                                changeActive($(this));
                                $comp.find('.newsroom-filter-select-icon').addClass('active');
                            }
                        })
                    }
                })
            }
            else if(getQueryString('pageType') === 'archiveList' && type === 'archiveList') {
                var $type = $comp.find('.newsroom-mobile-group.types');
                if(getQueryString('type')) {
                    $type.find('.newsroom-filter-item').each(function() {
                        var $current = $(this);
                        if(getQueryString('type') == types['blog']) $current.closest('.newsroom-filter-items').addClass('line');

                        if($current.data('value') === getQueryString('type') ) {
                            changeActive($current);
                            changePlaceholder($comp, $current.data('value'));
                            if(getQueryString('type') != 'All') $comp.find('.newsroom-filter-select-icon').addClass('active');
                        }
                    })

                    if(getQueryString('type') === types['blog']) {
                        var $blog = $comp.find('.newsroom-mobile-group.blog');
                        $blog.addClass('active');
                        $blog.find('.newsroom-filter-primary-item, .newsroom-filter-item').each(function() {
                            if(getQueryString('topic') && $(this).data('value') === getQueryString('topic') ) {
                                changeActive($(this));
                                $comp.find('.newsroom-filter-select-icon').addClass('active');
                            }
                        })
                    } else if(getQueryString('type') === types['news']) {
                        var $news = $comp.find('.newsroom-mobile-group.news');
                        $news.addClass('active');

                        $news.find('.newsroom-filter-items').each(function() {
                            var $this = $(this);
                            var itemType = $this.data('type');
                            if(itemType === allType['topic']) {
                                $this.find('.newsroom-filter-item').each(function() {
                                    if(getQueryString('topic') && $(this).data('value') === getQueryString('topic')) {
                                        changeActive($(this));
                                        $comp.find('.newsroom-filter-select-icon').addClass('active');
                                    }
                                })
                            } else if (itemType === allType['year']) {
                                $this.find('.newsroom-filter-item').each(function() {
                                    if(getQueryString('year') && $(this).data('value').toString() === getQueryString('year').toString()) {
                                        changeActive($(this));
                                        $comp.find('.newsroom-filter-select-icon').addClass('active');
                                    }
                                })
                            }
                        })
                    } else if(getQueryString('type') === types['stories']) {
                        var $stories = $comp.find('.newsroom-mobile-group.stories');
                        $stories.addClass('active');

                        $stories.find('.newsroom-filter-items').each(function() {
                            var $this = $(this);
                            var itemType = $this.data('type');
                            if(itemType === allType['industry']) {
                                $this.find('.newsroom-filter-item').each(function() {
                                    if(getQueryString('industry') && $(this).data('value') === getQueryString('industry')) {
                                        changeActive($(this));
                                        $comp.find('.newsroom-filter-select-icon').addClass('active');
                                    }
                                })
                            } else if (itemType === allType['application']) {
                                $this.find('.newsroom-filter-item').each(function() {
                                    if(getQueryString('application') && $(this).data('value') === getQueryString('application')) {
                                        changeActive($(this));
                                        $comp.find('.newsroom-filter-select-icon').addClass('active');
                                    }
                                })
                            } else if (itemType === allType['location']) {
                                $this.find('.newsroom-filter-item').each(function() {
                                    if( getQueryString('location') && $(this).data('value') === getQueryString('location')) {
                                        changeActive($(this));
                                        $comp.find('.newsroom-filter-select-icon').addClass('active');
                                    }
                                })
                            }
                        })
                    }  else if(getQueryString('type') === types['displayStory']) {
                        var $displayStory = $comp.find('.newsroom-mobile-group.displayStory');
                        $displayStory.addClass('active');

                        $displayStory.find('.newsroom-filter-items').each(function() {
                            var $this = $(this);
                            var itemType = $this.data('type');
                            if(itemType === allType['topic']) {
                                $this.find('.newsroom-filter-primary-item, .newsroom-filter-item').each(function() {
                                    if(getQueryString('topic') && $(this).data('value') === getQueryString('topic')) {
                                        changeActive($(this));
                                        $comp.find('.newsroom-filter-select-icon').addClass('active');
                                    }
                                })
                            } else if (itemType === allType['location']) {
                                $this.find('.newsroom-filter-item').each(function() {
                                    if(getQueryString('location') && $(this).data('value').toString() === getQueryString('location').toString()) {
                                        changeActive($(this));
                                        $comp.find('.newsroom-filter-select-icon').addClass('active');
                                    }
                                })
                            }
                        })
                    }
                }
            }
        }
    }

    function valueReset($comp) {
        var $allActiveSelect = $comp.find('.newsroom-mobile-group.active .newsroom-filter-items');

        $allActiveSelect.find('.newsroom-filter-item, .newsroom-filter-primary-item').each(function (){
            var $this = $(this);
            var type = $this.closest('.newsroom-filter-items').data('type');
            var primaryLen = $this.closest('.newsroom-filter-items').find('.newsroom-filter-primary-item').length;
            var subLen = $this.closest('.newsroom-filter-items').find('.newsroom-filter-item').length;
            var count = primaryLen + subLen;
            if(count < 2) {
                $this.closest('.newsroom-filter-items').find('.newsroom-filter-item').removeClass('active');
                $this.closest('.newsroom-filter-items').find('.newsroom-filter-primary-item').removeClass('active');
            }
            Object.keys(currentActiveValue).forEach(function(item) {
                if(item == type && $this.data('value') == currentActiveValue[item]) {
                    if(item == allType['type']){
                        if(currentActiveValue[item] == 'All') {
                            $comp.find('.newsroom-mobile-group:not(.types)').removeClass('active');
                            $this.closest('.newsroom-filter-items').removeClass('line');
                        } else if(currentActiveValue[item] == types['blog']) {
                            $this.closest('.newsroom-filter-items').addClass('line');
                            $comp.find('.newsroom-mobile-group.blog').addClass('active');
                            $comp.find('.newsroom-mobile-group.news').removeClass('active');
                            $comp.find('.newsroom-mobile-group.stories').removeClass('active');
                            $comp.find('.newsroom-mobile-group.displayStory').removeClass('active');
                        } else if(currentActiveValue[item] == types['news']) {
                            $comp.find('.newsroom-mobile-group.news').addClass('active');
                            $comp.find('.newsroom-mobile-group.blog').removeClass('active');
                            $comp.find('.newsroom-mobile-group.stories').removeClass('active');
                            $comp.find('.newsroom-mobile-group.displayStory').removeClass('active');
                        } else if(currentActiveValue[item] == types['stories']) {
                            $comp.find('.newsroom-mobile-group.stories').addClass('active');
                            $comp.find('.newsroom-mobile-group.blog').removeClass('active');
                            $comp.find('.newsroom-mobile-group.news').removeClass('active');
                            $comp.find('.newsroom-mobile-group.displayStory').removeClass('active');
                        } else if(currentActiveValue[item] == types['displayStory']) {
                            $comp.find('.newsroom-mobile-group.displayStory').addClass('active');
                            $comp.find('.newsroom-mobile-group.blog').removeClass('active');
                            $comp.find('.newsroom-mobile-group.news').removeClass('active');
                            $comp.find('.newsroom-mobile-group.stories').removeClass('active');
                        }
                    }
                    changeActive($this);
                }
            })
        })
    }

    //判断首项展开
    function firstFilterItem($comp) {
        $comp.find('.newsroom-mobile-group').children().first().addClass('active');
        $comp.find('.newsroom-mobile-group').children().first().find('.newsroom-filter-items').show();
    }

    $(document).ready(function() {

        $('.newsroom-filter-group-container .newsroom-mobile-group .newsroom-filter-box .newsroom-filter-title').on('click', function () {
            $(this).closest('.newsroom-filter-box').find('.newsroom-filter-items').slideToggle('fast', function () {
                $(this).closest('.newsroom-filter-box').toggleClass('active');
            })
        });

        $('body').on('click', function () {
            valueReset($('.newsroom-filter-bar-mobile-wrapper'));
            closeFilter();
        });

        $('.newsroom-filter-bar-mobile-wrapper').each(function() {
            var $comp = $(this);
            showSearch($comp);
            showFilter($comp);
            stopPropagations($comp);
            mobileSearch($comp);
            bindClickEvent($comp);
            bindListClick($comp);
            resetSelect($comp);
            submitSelect($comp);
            initFilterBar($comp);
            firstFilterItem($comp);
            $(window).resize(function() {
                var currentBreakpoint  =  getCurrentBreakpoint();
                if (breakpoint !== currentBreakpoint) {
                    breakpoint = currentBreakpoint;
                }
            });
        })

        $('.newsroom-filter-bar-mobile-wrapper').each(function() {
            var $seaComp = $(this);
            hideSearch($seaComp);
        })
    })
})(document, $);
;
(function (document, $) {
    var breakpoint = getCurrentBreakpoint();
    var allCards = [], searchCards = [];
    var filter = {}, search = '', isSearch = false;
    var types = {"blog": "blog", "news": "news", "stories": "stories", "displayStory": "displayStory"};

    var url = "/bin/hikvision/newsroomInfo";
    function getAllInfo($comp) {
        var resource = $comp.attr('data-card-list');
        $('.loading-wrap').show();
        $.ajax({
            type: 'POST',
            url: url + ".card.json",
            data: {
                resource: resource
            },
            success: function(res) {
                allCards = res;
                var list = res;
                var type = $comp.attr('data-type');
                getTagFromCards($comp, res);
                if(breakpoint === 'DESKTOP') {
                    type === types['news'] ? list = res.length > 4 ? res.slice(4, 10): [] : list;
                    initCardFromUrl($comp, type === types['news'] ? list : list.slice(0, 12), res.length > 4);
                } else {
                    hideBigCard($comp, true);
                    initCardFromUrl($comp, list.slice(0, 10));
                }
                setTimeout(function(){
                    $('.loading-wrap').hide();
                }, 500)
            },
            error: function() {
                console.log('get info failed');
                setTimeout(function(){
                    $('.loading-wrap').hide();
                }, 500)
            }
        });
    }

    function noRepeat(arr, item) {
        if(arr.indexOf(item) == -1) {
            return item;
        }
    }

    function getTagFromCards($comp, cards, itemType, currentVal) {
        var type = $comp.attr('data-type');
        var allTag = {type: itemType, value: currentVal}, year = [], topic = [], application = [], industry = [], location = [];

        cards.forEach(function(card) {
            if(type == types['news']) {
                noRepeat(year, card.year) ? year.push(noRepeat(year, card.year)) : '';
                card.topicForFilter.forEach(function(item) {
                    noRepeat(topic, item) ? topic.push(noRepeat(topic, item)) : '';
                })
            } else if(type == types['stories'] ) {
                noRepeat(industry, card.industry) ? industry.push(noRepeat(industry, card.industry)) : '';
                noRepeat(location, card.location) ? location.push(noRepeat(location, card.location)) : '';
                card.application.forEach(function(item) {
                    noRepeat(application, item) ? application.push(noRepeat(application, item)) : '';
                })
            } else if(type == types['displayStory'] ) {
                noRepeat(location, card.location) ? location.push(noRepeat(location, card.location)) : '';
                card.topicForFilter.forEach(function(item) {
                    noRepeat(topic, item) ? topic.push(noRepeat(topic, item)) : '';
                })
            }
        })
        if(type == types['news']) {
            allTag['year'] = year;
            allTag['topic'] = topic;
        } else if(type == types['stories'] ) {
            allTag['application'] = application;
            allTag['industry'] = industry;
            allTag['location'] = location;
        } else if(type == types['displayStory'] ) {
            allTag['topic'] = topic;
            allTag['location'] = location;
        }
        $('.newsroom-filter-bar-wrapper').trigger('hideUselessOption', allTag);
    }

    function initCard($comp, res, isShow = true) {
        var $blankPage = $comp.find('.newsroom-card-blank-page');
        var $viewAll = $comp.find('.newsroom-card-view-all');
        $comp.find('.newsroom-card-small-container').empty();

        if(res.length === 0 && isShow) {
            $blankPage.addClass('active');
            $viewAll.addClass('inactive');
        } else {
            $blankPage.removeClass('active');
            $viewAll.removeClass('inactive');
            var html = '';

            res.forEach(function(item) {
                html += renderCard($comp, item);
            })
            $comp.find('.newsroom-card-small-container').append(html);
            hikPlayer.Plyr.init();
            getYouTubeBeImg($comp);
            invokeLazyLoad($comp);
            bindCardATEvent($comp);
            bindAuthorClickEvent($comp);
            bindTopicClickEvent($comp);
            getIsVideo($comp);
        }
    }

    function invokeLazyLoad($comp) {
        $comp.find('.lazy').lazyload();
    };

    function renderCard($comp, item) {
        var isRTL = $('body').hasClass('rtl')
        var type = $comp.attr('data-type');
        var genre = '', topic = '', bottom = '' , rating = '';
        if(type === types['news']) {
            genre = '<div class="newsroom-card-genre active">'+ Granite.I18n.get(item.newsType) +'</div>';
            bottom = item.date ? '<div class="newsroom-card-time active">'+ item.date +'</div>': '';
        } else if(type === types['stories']) {
            genre = item.industry ? '<div class="newsroom-card-genre active">'+ item.industry +'</div>': '';
            bottom = item.location ? '<div class="newsroom-card-time active">'+ item.location +'</div>': '';
        } else if(type === types['displayStory']) {
            genre = item.topicTag ? '<div class="newsroom-card-genre active">'+ item.topicTag +'</div>': '';
            bottom = item.location ? '<div class="newsroom-card-time active">'+ item.location +'</div>': '';
        }

        if(type === types['blog']) {
            var author = item.author ? '<span class="newsroom-card-desc">' + Granite.I18n.get("By") +' <span class="newsroom-card-link" data-url="'+ item.authorPath +'" data-at-author-last-child="'+ item.atAuthorLastChild +'">'+ item.author +'</span></span>' : '';
            var date = item.date ? '<span class="newsroom-card-desc">'+ item.date +' </span>' : '';
            var authorContainer = !item.author && !item.date ? '' : '<div class="newsroom-card-desc-container">' + author + date + '</div>';
            var topics = '';
            if(type === types['blog'] && item.topic.length > 0) {
                item.topic.forEach(function(item) {
                    topics +='<span class="newsroom-card-topic" data-value="'+ item +'">'+ item +'</span><span class="newsroom-card-topic-comma">' + (isRTL ? ' ,' : ', ') + '</span>';
                })
            }
            var topicContainer = '<div class="newsroom-card-topic-container">' +
                '<span class="newsroom-card-desc">' + Granite.I18n.get("Topic:") +'</span>'+ topics +
                '</div>';
            var topicItem  = item.topic.length > 0 ? topicContainer : '';

            topic= '<div class="newsroom-card-wrapper active">' + authorContainer + topicItem + '</div>';
        }
        var video = item.newsroomVideo ?
            '<div class="video-play-btn-center"  data-is-video="'+ (item.newsroomVideo ? 'true' : 'false') +'">' +
            '<div class="hik-video-trigger at-navigation"  data-internal-video="'+ (item.internalVideoLink ? 'true' : 'false') +
            '" data-ezviz-video="false" data-video-path="' + item.newsroomVideo +'">' +
            '<span class="video-play-btn" style="display:block;width: 58px;height: 42px;">' +
            '</span>' +
            '</div>' +
            '</div>' : '';

        if (item.rating == 'recommend') {
            rating ='<div class="newsroom-card-recommend-box">' +
                '<div class="recommend">' +
                '</div>' +
                '</div>'
        } else if (item.rating == 'highlyRecommend') {
            rating ='<div class="newsroom-card-recommend-box">' +
                '<div class="highly-recommend">'+
                '<div class="recommend">' +
                '</div>' +
                '<div class="recommend">' +
                '</div>' +
                '</div>' +
                '</div>'
        } else {
            rating = '';
        }
        return '<a class="newsroom-card" href="'+ item.detailPath +'" data-at-last-child="'+ item.atLastChild +'">' +
            '<div class="newsroom-card-img-container '+ (item.internalVideoLink ? '' : 'slide-youtobevideo') +'">' +
            '<div class="newsroom-card-img lazy '+ (item.newsroomVideo ? 'change-cursor' : '') +'" data-original="'+ item.thumbnail +'"></div>' +
            video +
            '</div>' +
            '<div class="newsroom-card-content">' +
            '<div class="newsroom-card-title-wrapper">' +
            '<div class="newsroom-card-title-box">'+
            genre +
            rating +
            '</div>'+
            '<h3 class="newsroom-card-title">'+ item.title +'</h3>' +
            '</div>' +
            topic +
            bottom +
            '</div>' +
            '</a>'
    }

    function bindCardATEvent($comp) {
        $comp.find('.newsroom-card-small-container .newsroom-card').on('click', function(e) {
            var type = $comp.data('type');
            var atHead = '';
            var lastChild = $(this).data('at-last-child');

            if(type === types['blog']) {
                atHead = 'newsroom_card_list::blog_card::'
            } else if(type === types['news']) {
                atHead = 'newsroom_card_list::news_card::'
            } else {
                atHead = 'newsroom_card_list::story_card::'
            }

            atModel.doAtEvent(atHead + lastChild, 'navigation', e);
        })
    }

    function bindAuthorClickEvent($comp) {
        $comp.find('.newsroom-card-small-container .newsroom-card-link').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            var link = $(this).data('url');
            var lastChild = $(this).data('at-author-last-child');
            atModel.doAtEvent('newsroom_card_list::blog_author::' + lastChild, 'navigation', e);
            window.location.href = link;
        })
    }

    function bindTopicClickEvent($comp) {
        $comp.find('.newsroom-card-small-container .newsroom-card-topic').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            var link = $comp.data('path');
            var val = $(this).data('value');
            var type = $comp.data('type');
            atModel.doAtEvent('newsroom_card_list::blog_topic::' + val, 'action', e);
            window.location.href = link + '?pageType='+ type +'&topic=' + val;
        })
    }

    function hideBigCard($comp, isShow) {
        var $bigCard = $comp.find('.newsroom-card-big-container')
        isShow ? $bigCard.removeClass('active') : $bigCard.addClass('active');
    }

    function searchCardList($comp, data) {
        var resource = $comp.attr('data-card-list');
        $('.loading-wrap').show();
        isShowHeroBanner(false);
        hideBigCard($comp, true);

        $.ajax({
            type: 'POST',
            url: url + ".card.json",
            data: {
                s: data,
                resource: resource
            },
            success: function(res) {
                searchCards = res;
                getTagFromCards($comp, res);
                isSearch = true;
                initCard($comp, breakpoint == 'DESKTOP' ? res.slice(0, 12) : res.slice(0, 10));
                setTimeout(function(){
                    $('.loading-wrap').hide();
                }, 500)

            },
            error: function() {
                console.log('get info failed');
                setTimeout(function(){
                    $('.loading-wrap').hide();
                }, 500)
            }
        });
    }

    function isShowHeroBanner(isShow) {
        if(isShow) {
            $('.newsroom-hero-banner-wrapper').css('visibility', 'visible');
            $('.newsroom-hero-banner-wrapper').css('height', 'auto');
        } else {
            $('.newsroom-hero-banner-wrapper').css('visibility', 'hidden');
            $('.newsroom-hero-banner-wrapper').css('height', '0');
        }
    }

    function filterCardList($comp, data) {
        $('.loading-wrap').show();
        isShowHeroBanner(false);
        hideBigCard($comp, true);
        var type = $comp.data('type');
        if (data['reset']) {
            searchCards = [];
            isSearch = false;
            getTagFromCards($comp, allCards);
            if(getCurrentBreakpoint() == 'DESKTOP') {
                type === types['news'] ? hideBigCard($comp, false) : hideBigCard($comp, true);;
                initCard($comp, type === types['news'] ? allCards.slice(4, 10) : allCards.slice(0, 12));
            } else {
                hideBigCard($comp, true);
                initCard($comp, allCards.slice(0, 10));
            }
            isShowHeroBanner(true);
            setTimeout(function(){
                $('.loading-wrap').hide();
            }, 500)
            return;
        }

        var list = isSearch ? searchCards : allCards;
        var arr = [], copyArr = []; //arr仅用于显示，copyArr用于对筛选项完整的处理
        if(type === types['blog']) {
            var blogTopic = data.topic;
            if (blogTopic === 'All') {
                arr = list;
                copyArr = list;
                if(arr.toString() !== searchCards.toString()) isShowHeroBanner(true);
            } else {
                list.forEach(function(item) {
                    if(item.topicForFilter.indexOf(blogTopic) !== -1) {
                        arr.push(item);
                        copyArr.push(item);
                    }
                })
            }
        }else if(type === types['news']) {
            var topic = data.topic;
            var year = data.year;

            if(topic === 'All') {
                if(year === 'All') {
                    if(breakpoint === 'DESKTOP') {
                        if(list.toString() === searchCards.toString()) {
                            arr = list;
                        } else {
                            hideBigCard($comp, false);
                            arr = list.slice(4, 10);
                        }
                    } else {
                        arr = list;
                    }
                    copyArr = list;
                    if(list.toString() !== searchCards.toString()) isShowHeroBanner(true);
                } else {
                    list.forEach(function(item) {
                        if(item.year.indexOf(year) !== -1) {
                            arr.push(item);
                            copyArr.push(item);
                        }
                    })
                }
            } else {
                if(year === 'All') {
                    list.forEach(function(item) {
                        if(item.topic.indexOf(topic) !== -1) {
                            arr.push(item);
                            copyArr.push(item);
                        }
                    })
                } else {
                    list.forEach(function(item) {
                        if(item.year.indexOf(year) !== -1 && item.topic.indexOf(topic) !== -1) {
                            arr.push(item);
                            copyArr.push(item);
                        }
                    })
                }
            }
        }else if(type === types['stories']) {
            var industry = data.industry;
            var location = data.location;
            var application = data.application;
            if(industry === 'All') {
                if(location === 'All') {
                    if(application === 'All') {
                        copyArr = list;
                        arr = list;
                        if(arr.toString() !== searchCards.toString()) isShowHeroBanner(true);
                    } else {
                        list.forEach(function(item) {
                            if(item.application.indexOf(application) !== -1) {
                                arr.push(item);
                                copyArr.push(item);
                            }
                        })
                    }
                } else {
                    if(application === 'All') {
                        list.forEach(function(item) {
                            if(item.location.indexOf(location) !== -1) {
                                arr.push(item);
                                copyArr.push(item);
                            }
                        })
                    } else {
                        list.forEach(function(item) {
                            if(item.application.indexOf(application) !== -1 && item.location.indexOf(location) !== -1) {
                                arr.push(item);
                                copyArr.push(item);
                            }
                        })
                    }
                }
            } else {
                if(location === 'All') {
                    if(application === 'All') {
                        list.forEach(function(item) {
                            if(item.industry.indexOf(industry) !== -1) {
                                arr.push(item);
                                copyArr.push(item);
                            }
                        })
                    } else {
                        list.forEach(function(item) {
                            if(item.industry.indexOf(industry) !== -1 && item.application.indexOf(application) !== -1) {
                                arr.push(item);
                                copyArr.push(item);
                            }
                        })
                    }
                } else {
                    if(application === 'All') {
                        list.forEach(function(item) {
                            if(item.industry.indexOf(industry) !== -1 && item.location.indexOf(location) !== -1) {
                                arr.push(item);
                                copyArr.push(item);
                            }
                        })
                    } else {
                        list.forEach(function(item) {
                            if(item.industry.indexOf(industry) !== -1 && item.location.indexOf(location) !== -1 && item.application.indexOf(application) !== -1) {
                                arr.push(item);
                                copyArr.push(item);
                            }
                        })
                    }
                }
            }
        } else if (type === types['displayStory']) {
            var topic = data.topic;
            var location = data.location;

            if(location === 'All') {
                if(topic === 'All') {
                    arr = list;
                    copyArr = list;
                    if(arr.toString() !== searchCards.toString()) isShowHeroBanner(true);
                } else {
                    list.forEach(function(item) {
                        if(item.topicForFilter.indexOf(topic) !== -1) {
                            arr.push(item);
                            copyArr.push(item);
                        }
                    })
                }
            } else {
                if(topic === 'All') {
                    list.forEach(function(item) {
                        if(item.location.indexOf(location) !== -1) {
                            arr.push(item);
                            copyArr.push(item);
                        }
                    })
                } else {
                    list.forEach(function(item) {
                        if(item.topicForFilter.indexOf(topic) !== -1 && item.location.indexOf(location) !== -1) {
                            arr.push(item);
                            copyArr.push(item);
                        }
                    })
                }
            }
        }

        getTagFromCards($comp, copyArr, data.itemType, data.currentVal);

        if(breakpoint === 'DESKTOP') {
            initCard($comp, arr.slice(0, 12));
        } else {
            initCard($comp, arr.slice(0, 10));
        }

        setTimeout(function(){
            $('.loading-wrap').hide();
        }, 500)
    }

    function bindViewAllClick($comp) {
        $comp.find('.newsroom-card-view-all .view-all-btn').on('click', function() {
            var path = $comp.data('archive-url');
            var type = $comp.data('type');
            var onlyOne = $comp.data('only');
            var onlyData = $comp.data('one');
            var isNewTab = $(this).data('new-tab');
            var href = path + '?pageType=archiveList';
            if(search) {
                href += '&s=' + search;
            }
            if(type === types['blog']) {
                href += '&type='+ type + (filter.topic && filter.topic != 'All' ? ('&topic=' + filter.topic) : '')
            } else if(type === types['news']) {
                href += '&type='+ type + (filter.topic && filter.topic != 'All' ? ('&topic=' + filter.topic) : '') + (filter.year && filter.year != 'All' ? ('&year=' + filter.year) : '')
            } else if(type === types['stories']) {
                if(onlyOne) {
                    href += '&type='+ type + (filter.industry && filter.industry != 'All' ? ('&industry=' + filter.industry) : '') + '&application=' + onlyData + (filter.location && filter.location != 'All' ? ('&location=' + filter.location) : '');
                } else {
                    href += '&type='+ type + (filter.industry && filter.industry != 'All' ? ('&industry=' + filter.industry) : '') + (filter.application && filter.application != 'All' ? ('&application=' + filter.application) : '') + (filter.location && filter.location != 'All' ? ('&location=' + filter.location) : '');
                }
            } else if (type === types['displayStory']){
                href += '&type='+ type + (filter.topic && filter.topic != 'All' ? ('&topic=' + filter.topic) : '') + (filter.location && filter.location != 'All' ? ('&location=' + filter.location) : '');
            }

            window.open(href, isNewTab);
        })
    }

    var getQueryString = function (name) {
        var url = new URL(location.href);
        return url.searchParams.get(name);
    }

    function initCardFromUrl($comp, list, isShow) {
        var type = $comp.data('type');
        if(getQueryString('pageType')) {
            if(getQueryString('s')) {
                search = getQueryString('s');
                searchCardList($comp, getQueryString('s'));
                return;
            }
            if(getQueryString('pageType') === types['blog'] && type === types['blog']) {
                filter = {topic: getQueryString('topic') || 'All'}
                filterCardList($comp, filter)
            } else if(getQueryString('pageType') === types['news'] && type === types['news']) {
                filter = {topic: getQueryString('topic') || 'All', year: getQueryString('year') || 'All'}
                filterCardList($comp, filter)
            } else if(getQueryString('pageType') === types['stories'] && type === types['stories']) {
                filter = {industry: getQueryString('industry') || 'All', application: getQueryString('application') || 'All', location: getQueryString('location') || 'All'}
                filterCardList($comp, filter)
            } else if(getQueryString('pageType') === types['displayStory'] && type === types['displayStory']) {
                filter = {topic: getQueryString('topic') || 'All',location: getQueryString('location') || 'All'}
                filterCardList($comp, filter)
            }
        } else {
            initCard($comp, list, isShow);
        }
    }

    function getIsVideo($comp) {
        var $cardBox = $comp.find('.newsroom-card-img-container');
        $cardBox.on('click',function (event) {
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
    function getYouTubeBeImg($comp) {
        var $youTubeBox = $comp.find('.newsroom-card-img-container.slide-youtobevideo');
        $youTubeBox.each(function(){
            var videoPath = $(this).find('.hik-video-trigger').attr('data-video-path');
            if(videoPath){
                var youtubeVideoId = getVideoId(videoPath,'v');
                var youtubeImage =location.protocol + '//img.youtube.com/vi/' +youtubeVideoId+ '/0.jpg';
                var cardImgBox = $(this).find('.newsroom-card-img');
                cardImgBox.css('background-image','url('+youtubeImage+')');
                if (cardImgBox.attr('data-original')) {
                    cardImgBox.attr('data-original',youtubeImage);

                }
            }
        })
    }

    function checkWidths() {
        var isRTL = $('body').hasClass('rtl')
        
        if (isRTL) {
            let checkTimer = setInterval(() => {
                if ($('.newsroom-card-desc-container').length) {
                    window.clearInterval(checkTimer);
                    checkTimer = null
                    $('.newsroom-card-desc-container').each(function() {
                        var $container = $(this);
                        var containerWidth = $container.width();
                        var elements = $container.find('.newsroom-card-desc');
                        var totalWidth = 0;
            
                        elements.each(function() {
                            var $temp = $('<span>').css({
                                'visibility': 'hidden',
                                'font-size': $(this).css('font-size'),
                                'font-family': $(this).css('font-family')
                            }).text($(this).text());
                            $('body').append($temp);
                            var textWidth = $temp.width();
                            
                            $temp.remove();
                            
                            totalWidth += textWidth;
                        });
                        totalWidth += elements.length > 1 ? 24 : 0;
                        if (totalWidth >= containerWidth) {
                            if (!$container.hasClass('newsroom-card-desc-container-block')) {
                                $container.addClass('newsroom-card-desc-container-block');
                            }
                            elements.each(function() {
                                var $element = $(this);
                                if (!$element.hasClass('newsroom-card-desc-block')) {
                                    $element.addClass('newsroom-card-desc-block');
                                }
                            });
                        } else {
                            if ($container.hasClass('newsroom-card-desc-container-block')) {
                                $container.removeClass('newsroom-card-desc-container-block');
                            }
                            elements.each(function() {
                                var $element = $(this);
                                if ($element.hasClass('newsroom-card-desc-block')) {
                                    $element.removeClass('newsroom-card-desc-block');
                                }
                            });
                        }
                    });
                }
            }, 100)
        }
    }

    $(document).ready(function () {
        $('.newsroom-landing-list-wrapper').each(function () {
            var $comp = $(this);

            $comp.on('filterNewsroomCardList', function (event, data) {
                filter = data;
                filterCardList($comp, data);
            });

            $comp.on('searchNewsroomCardList', function (event, data) {
                search = data;
                filter = {};
                searchCardList($comp, data);
            });
            getAllInfo($comp);
            bindViewAllClick($comp);
            $(window).resize(function () {
                var currentBreakpoint = getCurrentBreakpoint();
                if (breakpoint !== currentBreakpoint) {
                    breakpoint = currentBreakpoint;
                }
                checkWidths();
            });
            var currentHref = $(this).attr("data-archive-url")
            if (currentHref && currentHref.indexOf("http") > -1 && currentHref.indexOf(window.location.host) < 0) {
                $(this).attr("rel", "nofollow")
            }
            checkWidths();
        })

    });
})(document, $);
;
(function (document, $) {
    var breakpoint = getCurrentBreakpoint();
    var allCards=[], searchCards=[], filterCards=[], sumOfCount, currentCount = 10, isSearch = false;
    var types = {"blog": "blog", "news": "news", "stories": "stories","displayStory": "displayStory"};
    var tags = {"topic": "topic", "year": "year", "industry": "industry", "application": "application", "location": "location"};
    var url = "/bin/hikvision/newsroomInfo";

    function getArchiveList($comp) {
        var resource = $comp.attr('data-card-list');
        $('.loading-wrap').show();
        $.ajax({
            type: 'POST',
            url: url + ".archive.json",
            data: {
                resource: resource,
                type: 'all'
            },
            success: function(res) {
                allCards = res;
                sumOfCount = res.length;
                isShowViewMore($comp, res.length);
                initCardFromUrl($comp, res);
                setTimeout(function(){
                    $('.loading-wrap').hide()
                }, 500)
            },
            error: function() {
                console.log('get info failed');
                setTimeout(function(){
                    $('.loading-wrap').hide()
                }, 500)
            }
        });
    }

    function initCard($comp, res) {
        var $blankPage = $comp.find('.newsroom-card-blank-page');
        $comp.find('.newsroom-archive-list-container').empty();

        if(res.length == 0) {
            $blankPage.addClass('active');
        } else {
            $blankPage.removeClass('active');
            var html = '';

            res.forEach(function(item) {
                html += renderCard(item);
            })

            $comp.find('.newsroom-archive-list-container').append(html);
            invokeLazyLoad($comp);
            bindTipATEvent($comp);
            bindCardATEvent($comp);
            bindAuthorATEvent($comp);
        }
        updateDesktopPagination($comp);
        checkWidths();
    }

    function renderCard(item) {
        var isRTL = $('body').hasClass('rtl')
        var topics = '';

        if(item.type !== types['stories']  && item.topic.length > 0) {
            let comma = isRTL ? ' ,' : ', '
            item.topic.forEach(function(item) {
                topics += '<span class="newsroom-archive-tip" data-value="'+ item +'" data-type="'+ tags['topic'] +'">'+ item +'</span><span class="newsroom-archive-tip-comma">' + comma + '</span>';
            })  
        }
        var blogAndNews = item.topic.length > 0 ? (isRTL ? '<div class="newsroom-archive-desc newsroom-archive-desc-rtl active"><span class="newsroom-archive-flag">' +
            Granite.I18n.get("Topic:") + ' </span>' + topics + '</div>' : '<div class="newsroom-archive-desc active"><span class="newsroom-archive-flag">' +
            Granite.I18n.get("Topic:") + ' </span>' + topics + '</div>')
            : '';

        var displayStoryTopic = item.topicTag ? (isRTL ? '<div class="newsroom-archive-desc newsroom-archive-desc-rtl active">' + '<span class="newsroom-archive-flag">' + Granite.I18n.get("Topic:") + ' </span>' +
            '<span class="newsroom-archive-tip" data-value="'+ item.topicTag +'" data-type="'+ tags['topic'] +'">' + item.topicTag + '</span>' + '</div>' : '<div class="newsroom-archive-desc active">' + '<span class="newsroom-archive-flag">' + Granite.I18n.get("Topic:") + ' </span>' +
            '<span class="newsroom-archive-tip" data-value="'+ item.topicTag +'" data-type="'+ tags['topic'] +'">' + item.topicTag + '</span>' + '</div>') 
            : '';
        var industry = item.industry ? (isRTL ? '<div class="newsroom-archive-desc active"><span class="newsroom-archive-tip" data-value="'+item.industry+'" data-type="'+ tags['industry'] +'">'+item.industry+'</span>' + 
            '<span class="newsroom-archive-flag">' + Granite.I18n.get("Industry:") + ' </span></div>' : '<div class="newsroom-archive-desc active">' + '<span class="newsroom-archive-flag">' + Granite.I18n.get("Industry:") + ' </span>' +
            '<span class="newsroom-archive-tip" data-value="'+item.industry+'" data-type="'+ tags['industry'] +'">'+item.industry+'</span>' + '</div>')
             : '';
        var location = item.location ? (isRTL ? '<div class="newsroom-archive-desc active"><span class="newsroom-archive-tip" data-value="'+item.location+'" data-type="'+ tags['location'] +'">'+item.location+'</span>' + 
            '<span class="newsroom-archive-flag">' + Granite.I18n.get("Location:") + ' </span></div>' : '<div class="newsroom-archive-desc active"><span class="newsroom-archive-flag">' + Granite.I18n.get("Location:") + ' </span>' +
            '<span class="newsroom-archive-tip" data-value="'+item.location+'" data-type="'+ tags['location'] +'">'+item.location+'</span></div>')
            : '';
        var application = item.application.length > 0 ? (isRTL ? '<div class="newsroom-archive-desc newsroom-archive-desc-rtl active"><span class="newsroom-archive-flag">' + Granite.I18n.get("Application:") + ' </span>' +
            '<span class="newsroom-archive-tip" data-value="'+item.application+'" data-type="'+ tags['application'] +'">'+item.application+'</span></div>' : '<div class="newsroom-archive-desc active"><span class="newsroom-archive-flag">' + Granite.I18n.get("Application:") + ' </span>' +
            '<span class="newsroom-archive-tip" data-value="'+item.application+'" data-type="'+ tags['application'] +'">'+item.application+'</span></div>')
            : '';
        
        var stories = isRTL ? application + location + industry : industry + location + application;


        var author = item.author && item.type == types['blog'] ? '<div class="newsroom-archive-desc active">' + Granite.I18n.get("By") + '<span class="newsroom-archive-link" data-url="'+ item.authorPath +'" data-at-author-last-child="'+ item.atAuthorLastChild +'">'+ item.author +'</span></div>' : '';

        var date = item.date ? '<div class="newsroom-archive-desc active">'+ item.date +'</div>' : '';
        var bottom;

        if (item.type == types['stories']) {
            bottom = stories;

        } else if (item.type == types['displayStory']) {

            bottom = displayStoryTopic + location;
        } else {

            bottom = blogAndNews;
        }

        var title = item.type == types['blog'] ? '<h2 class="newsroom-archive-title blog">'+ item.title +'</h2>' : '<h2 class="newsroom-archive-title">'+ item.title +'</h2>'

        var archiveItem =   '<a class="newsroom-archive-item" href="'+ item.detailPath + '" data-at-last-child="'+ item.atLastChild +'">' +
            '<div class="newsroom-archive-img-container">' +
            '<div class="newsroom-archive-img lazy" data-original="'+ item.thumbnail +'"></div>' +
            '</div>' +
            '<div class="newsroom-archive-content">' +
            '<div class="newsroom-archive-type" data-type="'+ item.type + '">'+ Granite.I18n.get(item.displayType) +'</div>' + title +
            '<div class="newsroom-archive-wrapper">' + (isRTL ? bottom + date + author : author + date + bottom) + '</div>' +
            '</div>' +
            '</a>';

        return archiveItem;
    }

    function invokeLazyLoad($comp) {
        $comp.find('.lazy').lazyload();
    };

    function filterArchiveList($comp, data) {
        $('.loading-wrap').show();
        if (data['reset']) {
            sumOfCount = allCards.length;
            isShowViewMore($comp, allCards.length);
            searchCards = [];
            filterCards = [];
            currentCount = 10;
            isSearch = false;
            initCard($comp, breakpoint == 'DESKTOP' ? allCards: allCards.slice(0, 10));

            setTimeout(function(){
                $('.loading-wrap').hide();
            }, 3000)
            return;
        }
        var type = data.type;
        var list = isSearch ? searchCards : allCards;

        var arr = [], typeList = [];
        if(type ==  types['blog'] ) {
            var blogTopic = data.topic;

            list.forEach(function(item) {
                if(item.type.indexOf(type) !== -1) {
                    typeList.push(item);
                }
            })

            if (blogTopic == 'All') {
                arr = typeList;
            } else {
                typeList.forEach(function(item) {
                    if(item.topicForFilter.indexOf(blogTopic) !== -1) {
                        arr.push(item);
                    }
                })
            }

        }else if(type ==  types['news'] ) {
            var topic = data.topic;
            var year = data.year;

            list.forEach(function(item) {
                if(item.type.indexOf(type) !== -1) {
                    typeList.push(item);
                }
            })

            if(topic == 'All') {
                if(year == 'All') {
                    arr = typeList;
                } else {
                    typeList.forEach(function(item) {
                        if(item.year.indexOf(year) !== -1) {
                            arr.push(item);
                        }
                    })
                }
            } else {
                if(year == 'All') {
                    typeList.forEach(function(item) {
                        if(item.topic.indexOf(topic) !== -1) {
                            arr.push(item);
                        }
                    })
                } else {
                    typeList.forEach(function(item) {
                        if(item.year.indexOf(year) !== -1 && item.topic.indexOf(topic) !== -1) {
                            arr.push(item);
                        }
                    })
                }
            }
        }else if(type ==  types['stories'] ) {
            var industry = data.industry;
            var location = data.location;
            var application = data.application;

            list.forEach(function(item) {
                if(item.type.indexOf(type) !== -1) {
                    typeList.push(item);
                }
            })

            if(industry == 'All') {
                if(location == 'All') {
                    if(application == 'All') {
                        typeList.forEach(function(item) {
                            if(item.type.indexOf(type) !== -1) {
                                arr.push(item);
                            }
                        })
                    } else {
                        typeList.forEach(function(item) {
                            if(item.application.indexOf(application) !== -1) {
                                arr.push(item);
                            }
                        })
                    }
                } else {
                    if(application == 'All') {
                        typeList.forEach(function(item) {
                            if(item.location.indexOf(location) !== -1) {
                                arr.push(item);
                            }
                        })
                    } else {
                        typeList.forEach(function(item) {
                            if(item.application.indexOf(application) !== -1 && item.location.indexOf(location) !== -1) {
                                arr.push(item);
                            }
                        })
                    }
                }
            } else {
                if(location == 'All') {
                    if(application == 'All') {
                        typeList.forEach(function(item) {
                            if(item.industry.indexOf(industry) !== -1) {
                                arr.push(item);
                            }
                        })
                    } else {
                        typeList.forEach(function(item) {
                            if(item.industry.indexOf(industry) !== -1 && item.application.indexOf(application) !== -1) {
                                arr.push(item);
                            }
                        })
                    }
                } else {
                    if(application == 'All') {
                        typeList.forEach(function(item) {
                            if(item.industry.indexOf(industry) !== -1 && item.location.indexOf(location) !== -1) {
                                arr.push(item);
                            }
                        })
                    } else {
                        typeList.forEach(function(item) {
                            if(item.industry.indexOf(industry) !== -1 && item.location.indexOf(location) !== -1 && item.application.indexOf(application) !== -1) {
                                arr.push(item);
                            }
                        })
                    }
                }
            }
        }  else if (type === types['displayStory']) {
            var topic = data.topic;
            var location = data.location;
            list.forEach(function(item) {
                if(item.type.indexOf(type) !== -1) {
                    typeList.push(item);
                }
            })

            if(location === 'All') {
                if(topic === 'All') {
                    arr = typeList;
                } else {
                    typeList.forEach(function(item) {
                        if(item.topicForFilter.indexOf(topic) !== -1) {
                            arr.push(item);
                        }
                    })
                }
            } else {
                if(topic === 'All') {
                    typeList.forEach(function(item) {
                        if(item.location.indexOf(location) !== -1) {
                            arr.push(item);
                        }
                    })
                } else {
                    typeList.forEach(function(item) {
                        if(item.topicForFilter.indexOf(topic) !== -1 && item.location.indexOf(location) !== -1) {
                            arr.push(item);
                        }
                    })
                }
            }
        }
        else {
            arr = list;
        }

        sumOfCount = arr.length;
        isShowViewMore($comp, arr.length);
        filterCards = arr;
        initCard($comp, breakpoint == 'DESKTOP' ? arr: arr.slice(0, 10));

        setTimeout(function(){
            $('.loading-wrap').hide();
        }, 3000)
    }

    function searchArchiveList($comp, data, param) {
        $('.loading-wrap').show();
        var resource = $comp.attr('data-search-list');

        $.ajax({
            type: 'POST',
            url: url + ".archive.json",
            data: {
                resource: resource,
                s: data,
            },
            success: function(res) {
                filterCards = [];
                searchCards = res;
                sumOfCount = res.length;
                isSearch = true;
                isShowViewMore($comp, res.length);
                if(param) {
                    filterArchiveList($comp, param);
                } else {
                    initCard($comp, breakpoint == 'DESKTOP' ? res: res.slice(0, 10));
                }
                setTimeout(function(){
                    $('.loading-wrap').hide()
                }, 500)

            },
            error: function() {
                console.log('get info failed');
                setTimeout(function(){
                    $('.loading-wrap').hide()
                }, 500)
            }
        });
    }

    var getQueryString = function (name) {
        var url = new URL(location.href);
        return url.searchParams.get(name);
    }

    function initCardFromUrl($comp, list) {
        var type = getQueryString('type');
        var param  = {};
        if(getQueryString('pageType')) {
            if(type == types['blog']) {
                param = {type: type, topic: getQueryString('topic') || 'All'};
            }else if(type ==  types['news'] ) {
                param = {type: type, topic: getQueryString('topic') || 'All', year: getQueryString('year') || 'All'};
            } else if(type ==  types['stories'] ) {
                param = {type: type, industry: getQueryString('industry') || 'All', application: getQueryString('application') || 'All', location: getQueryString('location') || 'All'};
            } else if (type ==  types['displayStory']){
                param = {type: type, topic: getQueryString('topic') || 'All', location: getQueryString('location') || 'All'};
            }

            if(getQueryString('s')) {
                searchArchiveList($comp, getQueryString('s'), param);
                return;
            }

            if(type ==  'All') {
                initCard($comp, breakpoint == 'DESKTOP' ? list: list.slice(0, 10));
            } else {
                filterArchiveList($comp, param);
            }
        } else {
            initCard($comp, breakpoint == 'DESKTOP' ? list: list.slice(0, 10));
        }
    }

    function viewMore($comp) {
        $comp.find('.newsroom-archive-view-more .view-more-content').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            let arr = []
            if(searchCards.length > 0) {
                if(filterCards.length > 0) {
                    arr = filterCards;
                } else {
                    arr = searchCards;
                }
            } else {
                if(filterCards.length > 0) {
                    arr = filterCards;
                } else {
                    arr = allCards;
                }
            }
            displayTenATime($comp, arr);
            checkWidths();
        })
    }

    function displayTenATime($comp, arr) {
        var $btn = $comp.find('.newsroom-archive-view-more');
        var range = currentCount + 10;
        var html = '';
        if(range >= arr.length) {
            range = arr.length;
            $btn.addClass('inactive');
        }
        for(var i = currentCount; i < range; i++) {
            html += renderCard(arr[i]);
        }
        currentCount += 10;
        $comp.find('.newsroom-archive-list-container').append(html);
        invokeLazyLoad($comp);
        bindTipATEvent($comp);
        bindCardATEvent($comp);
        bindAuthorATEvent($comp);
    }

    function isShowViewMore($comp, count) {
        var $btn = $comp.find('.newsroom-archive-view-more');
        count > 10 ? $btn.removeClass('inactive'): $btn.addClass('inactive');
    }

    function destroyPagination($comp) {
        var $pagination = $comp.find('.pagination-section');
        if($pagination.hasClass('pagination-initialized')) {
            $pagination.jPages('destroy');
            $pagination.removeClass('pagination-initialized');
        }
    }

    function updateDesktopPagination($comp) {
        var containerID = $comp.find('.newsroom-archive-list-container').attr('id');
        var $pagination = $comp.find('.pagination-section');
        var perPage = parseInt($pagination.attr('data-num'));

        if(!(sumOfCount > perPage)) {
            destroyPagination($comp);
            $comp.find('.newsroom-archive-pagination').removeClass('active');
            return;
        }

        destroyPagination($comp);
        $pagination.jPages({
            containerID: containerID,
            perPage: perPage,
            previous: "",
            next: "",
            keyBrowse: true,
            animation: "slideInRight",
            minHeight: false,
            callback: function (pages, items) {
                invokeLazyLoad($comp);
                $('html,body').animate({scrollTop: '0px'}, 500);
            },
        });
        $pagination.addClass('pagination-initialized');
        $comp.find('.newsroom-archive-pagination').addClass('active');
    }

    function bindPaginationEvent($comp) {
        $comp.find('.item-num-for-page select.number-select').selectpicker({});

        $comp.find('.item-num-for-page select.number-select').on('loaded.bs.select', function() {
            $(this).parent().find('button').attr('title', '');
        });

        $comp.find('.item-num-for-page select.number-select').on('changed.bs.select', function() {
            var numberVal = $(this).val();
            $(this).parent().find('button').attr('title', '');
            $comp.find('.pagination-section').attr('data-num', numberVal);
            updateDesktopPagination($comp);
            invokeLazyLoad($comp);
        });

        $comp.find('.newsroom-archive-pagination .pagination-section').on('click', function() {
            checkWidths();
        });
    }

    function bindAuthorATEvent($comp) {
        $comp.find('.newsroom-archive-link').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            var link = $(this).data('url');
            var lastChild = $(this).data('at-author-last-child');
            atModel.doAtEvent('newsroom_archive_list::blog_author::' + lastChild, 'navigation', e);
            window.location.href = link;
        })
    }

    function bindCardATEvent($comp) {
        $comp.find('.newsroom-archive-item').on('click', function(e){
            e.stopPropagation();
            var currentCardType = $(this).find('.newsroom-archive-type').data('type');
            var atHead = '';
            var lastChild = $(this).data('at-last-child');
            if(currentCardType == types['stories']) {
                atHead = 'newsroom_archive_list::story_archive_list::'
            } else {
                atHead = 'newsroom_archive_list::'+ currentCardType +'_archive_list::'
            }

            atModel.doAtEvent(atHead + lastChild, 'navigation', e);
        })
    }

    function bindTipATEvent($comp) {
        $comp.find('.newsroom-archive-tip').on('click', function(e){
            e.stopPropagation();
            e.preventDefault();
            var link = $comp.data('path');
            var type = $comp.data('type');
            var currentCardType = $(this).closest('.newsroom-archive-content').find('.newsroom-archive-type').data('type');
            var currentTagType = $(this).data('type');
            var val = $(this).data('value');
            var atHead = '';
            var linkParams = '';
            if(currentCardType == types['stories']) {
                atHead = 'newsroom_archive_list::story_tag::';
            } else {
                atHead = 'newsroom_archive_list::'+ currentCardType +'_topic::';
            }

            linkParams = '?pageType='+ type + '&type=' + currentCardType + '&' + currentTagType + '=' + val;
            atModel.doAtEvent(atHead + val, 'action', e);
            window.location.href = link + linkParams;
        })
    }

    function checkWidths() {
        var isRTL = $('body').hasClass('rtl');
        
        if (isRTL) {
            let checkTimer = setInterval(() => {
                if ($('.newsroom-archive-wrapper').length) {
                    clearInterval(checkTimer);
                    checkTimer = null;
                    $('.newsroom-archive-wrapper').each(function() {
                        var $container = $(this);
                        var containerWidth = $container.width();
                        var elements = $container.find('.newsroom-archive-desc');
                        var totalWidth = 0;
                        totalWidth = calAllTextWidth(elements);
                        if (totalWidth >= containerWidth - 2) {
                            if (!$container.hasClass('newsroom-archive-wrapper-calBlock')) {
                                $container.addClass('newsroom-archive-wrapper-calBlock');
                            }
                            addRemoveElementsClass(elements, 'add');
                        } else {
                            if ($container.hasClass('newsroom-archive-wrapper-calBlock')) {
                                $container.removeClass('newsroom-archive-wrapper-calBlock');
                            }
                            addRemoveElementsClass(elements, 'remove');
                        }
                    });
                }
            }, 100)
        }
    }

    function calTextWidth(text) {
        let textTemp = text.text();
        var $temp = $('<span>').css({
            'visibility': 'hidden',
            'font-size': text.css('font-size'),
            'font-family': text.css('font-family')
            }).html(textTemp.replace(/\s/g, '&nbsp;'));
            $('body').append($temp);
        var textWidth = $temp.width();
        $temp.remove();
        return textWidth;
    }

    // 计算所有文本元素的宽度
    function calAllTextWidth(elements) {
        var totalWidth = 0;
        var index = 0;
        var isDesktop = getCurrentBreakPoint() == "DESKTOP";
        elements.each(function() {
            if (!$(this).hasClass('newsroom-archive-desc-rtl')) {
                totalWidth += calTextWidth($(this));
                if ($(this).text().includes('Location:') || $(this).text().includes('Industry:')) {
                    totalWidth += 8
                } else if ($(this).text().includes('By')) {
                    totalWidth += 4
                }
                index < 1 ? index++ : totalWidth += (isDesktop ? 31 : 21);
            } else {
                if (!isDesktop) {
                    if (!$(this).hasClass('newsroom-archive-desc-block')) {
                        $(this).addClass('newsroom-archive-desc-block');
                    }
                } else {
                    totalWidth += calTextWidth($(this));
                    totalWidth += 8;
                    index < 1 ? index++ : totalWidth += (isDesktop ? 31 : 21);
                }
            }
        });
        return totalWidth;
    }

    // 给相应要素添加或者移除类
    function addRemoveElementsClass(elements, type) {
        var isDesktop = getCurrentBreakPoint() == "DESKTOP";
        if (type == 'add') {
            elements.each(function() {
                var $element = $(this);
                if (!$element.hasClass('newsroom-archive-desc-rtl')) {
                    if (!isDesktop && !$element.hasClass('newsroom-archive-desc-calBlock')) {
                        $element.addClass('newsroom-archive-desc-calBlock');
                    }
                } else {
                    if (isDesktop && !$element.hasClass('newsroom-archive-desc-block')) {
                        $element.addClass('newsroom-archive-desc-block');
                    }
                }
            });
        } else {
            elements.each(function() {
                var $element = $(this);
                if (!$element.hasClass('newsroom-archive-desc-rtl')) {
                    if ($element.hasClass('newsroom-archive-desc-calBlock')) {
                        $element.removeClass('newsroom-archive-desc-calBlock');
                    }
                } else {
                    if (isDesktop) {
                        if ($element.hasClass('newsroom-archive-desc-block')) {
                            $element.removeClass('newsroom-archive-desc-block');
                        }
                    }
                }
            });
        }
    }

    $(document).ready(function () {
        $('.newsroom-archive-list-wrapper').each(function () {
            var $comp = $(this);
            getArchiveList($comp);
            bindPaginationEvent($comp);
            $comp.on('filterNewsroomArchiveList', function (event, data) {
                // filter = data;
                currentCount = 10;
                filterArchiveList($comp, data);
            });

            $comp.on('searchNewsroomArchiveList', function (event, data) {
                // search = data;
                currentCount = 10;
                searchArchiveList($comp, data.value, data.param);
            });

            viewMore($comp);

            $(window).on('resize', function () {
                var currentBreakpoint = getCurrentBreakpoint();
                if (breakpoint !== currentBreakpoint) {
                    breakpoint = currentBreakpoint;
                }
                checkWidths();
            });
        })
    });
})(document, $);
$(document).ready(function() {
    function jumpTopicLink($target) {
        $('.newsroom-card-topic').on('click',function (event) {
            event.preventDefault();
            event.stopPropagation();
            var dataTopic = $(this).attr('data-value');
            var hrefTopic = $target.attr('data-path');
            var href = hrefTopic + '?pageType=blog'+'&topic=' + dataTopic;
            atModel.doAtEvent('newsroom_blog_author::blog_topic::' + dataTopic, 'action', event);
            window.location.href = href;
        })
    }

    function bindCardATEvent($target) {
        $target.find('.blog-author-box-bottom-container .newsroom-card').on('click', function(e) {
            var atHead = 'newsroom_blog_author::blog_card::'
            var lastChild = $(this).data('at-last-child');

            atModel.doAtEvent(atHead + lastChild, 'navigation', e);
        })
    }

    $('.blog-author-box').each(function () {
        const $target = $(this);
        jumpTopicLink($target);
        bindCardATEvent($target);
        checkWidths();
    })

    function checkWidths() {
        var isRTL = $('body').hasClass('rtl')
        if (isRTL) {
            $('.newsroom-card-desc-container').each(function() {
                var $container = $(this);
                
                var containerWidth = $container.width();
                
    
                var elements = $container.find('.newsroom-card-desc');
                var totalWidth = 0;
    
                elements.each(function() {
                    var $temp = $('<span>').css({
                        'visibility': 'hidden',
                        'font-size': $(this).css('font-size'),
                        'font-family': $(this).css('font-family')
                    }).text($(this).text());
                    $('body').append($temp);
                    var textWidth = $temp.width();
                    
                    $temp.remove();
                    
                    totalWidth += textWidth;
                });
                
                totalWidth += elements.length > 1 ? 24 : 0;
    
                if (totalWidth >= containerWidth) {
                    if (!$container.hasClass('newsroom-card-desc-container-block')) {
                        $container.addClass('newsroom-card-desc-container-block');
                    }
                    elements.each(function() {
                        var $element = $(this);
                        if (!$element.hasClass('newsroom-card-desc-block')) {
                            $element.addClass('newsroom-card-desc-block');
                        }
                    });
                } else {
                    if ($container.hasClass('newsroom-card-desc-container-block')) {
                        $container.removeClass('newsroom-card-desc-container-block');
                    }
                    elements.each(function() {
                        var $element = $(this);
                        if ($element.hasClass('newsroom-card-desc-block')) {
                            $element.removeClass('newsroom-card-desc-block');
                        }
                    });
                }
            });
        }
    }

    $(window).resize(checkWidths);

})
$(document).ready(function() {
    function jumpAuthorLink($target) {
        $target.find('.newsroom-related-links-card-right-application-author-right').on('click',function (event) {
            event.preventDefault();
            event.stopPropagation();
            var dataTopic = $(this).attr('data-value');
            var hrefTopic = $(this).attr('data-path');
            atModel.doAtEvent('newsroom_related_links::blog_author::' + dataTopic, 'navigation', event);
            window.location.href = hrefTopic;
        })
    }

    $('.newsroom-related-links-box').each(function () {
        var $target = $(this);
        jumpAuthorLink($target);
        checkWidths();
    })

    function checkWidths() {
        var isRTL = $('body').hasClass('rtl')
        if (isRTL) {
            $('.newsroom-related-links-card-right-application-author-box').each(function() {
                var $container = $(this);
                
                var containerWidth = $container.width();
                
                var elementAuthor = $container.find('.newsroom-related-links-card-right-application-author');
                var elementDate = $container.find('.newsroom-related-links-card-right-data');
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
                    if (!$container.hasClass('newsroom-related-links-card-right-application-author-box-block')) {
                        $container.addClass('newsroom-related-links-card-right-application-author-box-block');
                    }
                    if (elementAuthor) {
                        if (!elementAuthor.hasClass('newsroom-related-links-card-right-application-author-block')) {
                            elementAuthor.addClass('newsroom-related-links-card-right-application-author-block');
                        }
                    }
                    if (elementDate) {
                        if (!elementDate.hasClass('newsroom-related-links-card-right-data-block')) {
                            elementDate.addClass('newsroom-related-links-card-right-data-block');
                        }
                    }
                } else {
                    if ($container.hasClass('newsroom-related-links-card-right-application-author-box-block')) {
                        $container.removeClass('newsroom-related-links-card-right-application-author-box-block');
                    }
                    if (elementAuthor) {
                        if (elementAuthor.hasClass('newsroom-related-links-card-right-application-author-block')) {
                            elementAuthor.removeClass('newsroom-related-links-card-right-application-author-block');
                        }
                    }
                    if (elementDate) {
                        if (elementDate.hasClass('newsroom-related-links-card-right-data-block')) {
                            elementDate.removeClass('newsroom-related-links-card-right-data-block');
                        }
                    }
                }
            });
        }
    }

    $(window).resize(checkWidths);
})
$(document).ready(function() {


    function jumpTagLink($target) {

        $target.find('.newsroom-topic-content').on('click',function (event) {
            var pageType = $target.attr('data-type')
            var tagType = $(this).attr('data-type');
            var dataValue = $(this).attr('data-value');
            var href = $('.newsroom-filter-bar-wrapper').data('path')+"?pageType=" + pageType + "&" + tagType + '=' + dataValue;
            atModel.doAtEvent('newsroom_tag::' + pageType + '::' + dataValue, 'action', event);
            window.location.href = href;
        })
    }


    $('.newsroom-topic-box').each(function () {
        const $target = $(this);
        jumpTagLink($target)
    })
})
;$(function () {
    // WhatsApp分享
  //  var wathsAppShareUrl = 'https://web.whatsapp.com/send?';
  var wathsAppShareUrl = 'https://api.whatsapp.com/send?';
    var wathAppShareText = encodeURIComponent($('.title').find('h1').text()); // 获取标题并编码
    var link = encodeURIComponent(location.href); // 获取当前页面的链接并编码
    $.each($('.newsroom-socialshare-content'), function(){
        if($(this).hasClass('wathsapp')){
            $(this).off().on('click', function(e){
                // 取消a的href跳转
                e.preventDefault();
                // 获取自定义分享链接，如果没有则使用当前页面链接
                var shareLink = $(this).attr('data-share-url') || link;
                var _href = wathsAppShareUrl + 'text=' + wathAppShareText + '%20' + shareLink;
                //移动端的时候修改分享地址使用wathsapp app打开
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    _href = 'whatsapp://send?text=' + wathAppShareText + '%20' + shareLink;
                }
              // 如果没有安装WhatsApp，上面的点击事件不会有任何反应
                window.open(_href, '_blank');
            })
        }
    })
})

