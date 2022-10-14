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




    var imgs = ['https://www.kugou.com/ts/Public/static/img/zt/bn0006.jpg',
        'https://www.kugou.com/ts/Public/static/img/zt/bn0002.jpg',
        'https://www.kugou.com/ts/Public/static/img/zt/bn0001.jpg', '	https://www.kugou.com/ts/Public/static/img/zt/bn0003.jpg', 'https://www.kugou.com/ts/Public/static/img/zt/bn0004.jpg', 'https://www.kugou.com/ts/Public/static/img/zt/bn0005.jpg']
    function Shuffling(times) {
        this.index = 0
        this.leftBtn = document.querySelector('.leftBtn')
        this.rightBtn = document.querySelector('.rightBtn')
        this.shuffling = document.querySelector('.shuffling')
        this.imgItems = null
        this.btnList = document.querySelector('.btnList')
        this.shufflingWidth = this.shuffling.offsetWidth
        this.circle = []
        this.autoPlay01 = null
        this.init()
        this.auto(times)
        this.stopSetInterval()
        this.starSetInterval(times)
        this.leftBtn.onclick = () => {
            this.leftClick()
        }
        this.rightBtn.onclick = () => {
            this.rightClick()
        }
    }
    //初始化公共方法

    //创建小圆点
    Shuffling.prototype.init = function () {
        imgs.forEach(() => {
            this.circle = document.createElement('div')
            this.circle.innerHTML = `<div class="circle"></div>`
            this.btnList.appendChild(this.circle)
        })

        // 第一个小圆点变红
        document.querySelector('.circle').classList.add('active')
        this.circle = document.querySelectorAll('.circle')
        for (let i = 0; i < this.circle.length; i++) {
            this.circle[i].onmouseover = () => {
                this.index = i
                this.changeActive()
                this.shuffling.style.background = `url(${imgs[this.index]})`
                this.shuffling.style.backgroundPosition = `center top`
                this.shuffling.style.backgroundRepeat = `no-repeat`
            }
        }

    }

    Shuffling.prototype.leftClick = function () {
        if (this.index === 0) {
            this.index = imgs.length - 1
        } else {
            this.index -= 1
        }
        this.changeActive()
        this.shuffling.style.background = `url(${imgs[this.index]})`
        this.shuffling.style.backgroundPosition = `center top`
        this.shuffling.style.backgroundRepeat = `no-repeat`

    }
    Shuffling.prototype.rightClick = function () {
        if (this.index === imgs.length - 1) {
            this.index = 0
        } else {
            this.index += 1
        }
        this.changeActive()
        this.shuffling.style.background = `url(${imgs[this.index]})`
        this.shuffling.style.backgroundPosition = `center top`
        this.shuffling.style.backgroundRepeat = `no-repeat`
    }



    Shuffling.prototype.changeActive = function () {
        for (let i = 0; i < this.circle.length; i++) {
            this.circle[i].classList.remove('active')
        }

        this.circle[this.index].classList.add('active')
    }

    Shuffling.prototype.auto = function (times) {
        // console.log(1);
        this.autoPlay01 = setInterval(() => {
            this.rightClick()
        }, times)
    }
    Shuffling.prototype.stopSetInterval = function () {

        this.shuffling.onmouseover = () => {
            this.leftBtn.style.display = 'block'
            this.rightBtn.style.display = 'block'
            clearInterval(this.autoPlay01)
            this.autoPlay01 = null
        }
    }
    Shuffling.prototype.starSetInterval = function (times) {
        this.shuffling.onmouseout = () => {
            this.leftBtn.style.display = 'none'
            this.rightBtn.style.display = 'none'
            this.auto(times)
        }
    }
    let shuffling_listen = new Shuffling(3000)
}