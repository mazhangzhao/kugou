window.onload = function () {
    var imgs01 = ['https://www.kugou.com/common/images/icon_cmfoot_tme.png',
        'https://www.kugou.com/common/images/icon_cmfoot_i2.png',
        'https://www.kugou.com/common/images/icon_cmfoot_i3.png',
        'https://www.kugou.com/common/images/icon_cmfoot_i4.png',
        'https://www.kugou.com/common/images/icon_cmfoot_i5.png',
        'https://www.kugou.com/common/images/icon_cmfoot_i6.png',
        'https://www.kugou.com/common/images/icon_cmfoot_i7.png',
        'https://www.kugou.com/common/images/icon_cmfoot_i8.png'
    ]
    var imgs02 = [
        'img/icon_cmfoot_tme_blue.png',
        'img/icon_cmfoot_i2_blue.png',
        'img/icon_cmfoot_i3_blue.png',
        'img/icon_cmfoot_i4_blue.png',
        'img/icon_cmfoot_i5_active.png',
        'img/icon_cmfoot_i6_active.png',
        'img/icon_cmfoot_i7_active.png',
        'img/icon_cmfoot_i8_active.png'
    ]

    var ps = [
        '腾讯音乐娱乐集团',
        '腾讯音乐人',
        '酷狗音乐人',
        '星曜推歌',
        '5sing原创音乐',
        '曲库开放计划',
        '听歌识曲',
        '歌叽歌叽'
    ]
    var footerImgul = document.querySelector('#footerImg-ul')
    for (let i = 0; i < imgs01.length; i++) {
        var lis = document.createElement('li');
        lis.innerHTML = '<div class="pic"></div><p class="pictitle">' + ps[i] + '</p>'
        footerImgul.append(lis);
    }
    var pic = document.querySelectorAll('.pic');
    var pictitle = document.querySelectorAll('.pictitle');
    for (let k = 0; k < pic.length; k++) {
        pic[k].style.background = 'url(' + imgs01[k] + ') no-repeat';
        pic[k].style.backgroundSize = '100% 100%'

        pic[k].onmousemove = function () {
            pictitle[k].style.color = '#fff'
            this.style.background = 'url(' + imgs02[k] + ') no-repeat';
            this.style.backgroundSize = '100% 100%'
        }
        pic[k].onmouseout = function () {
            pictitle[k].style.color = '#B1B3B9'
            this.style.background = 'url(' + imgs01[k] + ') no-repeat';
            this.style.backgroundSize = '100% 100%'
        }
    }

    var sideboxul = document.querySelector('.sideboxul')
    var sideboxp = document.querySelectorAll('.sideboxp')
    for (let j = 0; j < sideboxul.children.length; j++) {

        sideboxul.children[j].onmousemove = function () {

            this.children[1].style.color = '#00a9ff';
        }
        sideboxul.children[j].onmouseout = function () {
            for (let i = 0; i < sideboxp.length; i++) {
                sideboxp[i].style.color = '#556677'
            }
        }
    }
    $(window).scroll(function () {


        if ($(window).scrollTop() > 100) {
            $(".sidebox").css('display', 'block');
        } else {
            $(".sidebox").css('display', 'none');
        }
    })
    $("#goBack").click(function () {
        $("html,body").animate({ "scrollTop": "0px" }, 0);
    })


}