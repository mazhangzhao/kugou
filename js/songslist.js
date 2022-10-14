var imgs = [
    'https://imge.kugou.com/temppic/20130807/20130807185439172736.png'
    , 'https://imge.kugou.com/temppic/20130807/20130807185450567609.png',
    '	https://imge.kugou.com/stdmusic/20220616/20220616161505213395.png',
    'https://imge.kugou.com/stdmusic/20210715/20210715144943932835.png',
    'https://imge.kugou.com/stdmusic/20210812/20210812161153622405.jpg',
    'https://imge.kugou.com/stdmusic/20160119/20160119110054378246.jpg',
    'https://imge.kugou.com/stdmusic/20171120/20171120102326715438.jpg',
    'https://imge.kugou.com/stdmusic/20171120/20171120103438764503.jpg',
    'https://imge.kugou.com/stdmusic/20211105/20211105172151561567.jpg',
    'https://imge.kugou.com/stdmusic/20171120/20171120102536373818.jpg',
    'https://imge.kugou.com/stdmusic/20171120/20171120102907761563.jpg',
    'https://imge.kugou.com/stdmusic/20171120/20171120103030215744.jpg',
    'https://imge.kugou.com/temppic/20131025/20131025103853305845.png',
    'https://imge.kugou.com/stdmusic/20180712/20180712154428939457.jpg',
    'https://imge.kugou.com/stdmusic/20180712/20180712154305100613.jpg',
    'https://imge.kugou.com/stdmusic/20201026/20201026180913877597.jpg',
    'https://imge.kugou.com/stdmusic/20200609/20200609184322487369.jpg',
    'https://imge.kugou.com/stdmusic/20180621/20180621155507253271.jpg',
    'https://imge.kugou.com/stdmusic/20180621/20180621155507253271.jpg',
    'https://imge.kugou.com/stdmusic/20180712/20180712154557980729.jpg',
    'https://imge.kugou.com/stdmusic/20210125/20210125160907140082.jpg',
    'https://imge.kugou.com/stdmusic/20190801/20190801115748248000.jpg',
    'https://imge.kugou.com/stdmusic/20210302/20210302114441977539.jpg',
    'https://imge.kugou.com/stdmusic/20210302/20210302114555612565.jpg',
    'https://imge.kugou.com/stdmusic/20210302/20210302114555612565.jpg',
    'https://imge.kugou.com/temppic/20130807/20130807192258314669.png',
    'https://imge.kugou.com/stdmusic/20161013/20161013180833243081.png',
    'https://imge.kugou.com/stdmusic/20151222/20151222142442217161.png',
    'https://imge.kugou.com/stdmusic/20191021/20191021150400166514.jpg',
    'https://imge.kugou.com/stdmusic/20200318/20200318163047812478.jpg',
    'https://imge.kugou.com/stdmusic/20200318/20200318163430982962.jpg',
    'https://imge.kugou.com/stdmusic/20201023/20201023152224902599.jpg',
    'https://imge.kugou.com/stdmusic/20160225/20160225152602639310.png',
    'https://imge.kugou.com/stdmusic/20190402/20190402180217270286.jpg'


]
var songsTypeListLiSpan = document.querySelectorAll('.songsTypeList-liSpan')

for (let i = 0; i < songsTypeListLiSpan.length; i++) {
    songsTypeListLiSpan[i].style.background = 'url(' + imgs[i] + ') no-repeat'
}

var mainAsideContent_i = document.querySelector('.mainAsideContent-i')
var flag01 = true
var flag02 = true
var flag03 = true
$(".mainAsideContent-titleBox").eq(0).click(function () {
    $(".songsTypeList").eq(0).stop().slideToggle(500);
    var f1 = animation(0, flag01)
    flag01 = f1()
})
$(".mainAsideContent-titleBox").eq(1).click(function () {
    $(".songsTypeList").eq(1).stop().slideToggle(500);
    // animation(1)
    var f2 = animation(1, flag02)
    flag02 = f2()
})
$(".mainAsideContent-titleBox").eq(2).click(function () {
    $(".songsTypeList").eq(2).stop().slideToggle(500);
    // animation(2)
    var f3 = animation(2, flag03)
    flag03 = f3()
})

function animation(a, flag01) {
    var flag = true;
    if (flag01) {
        setTimeout(function () {

            $(".mainAsideContent-i").eq(a).css({ 'transform': 'rotate(' + 180 + 'deg)' });

        }, 500)
        function returnFlag() {
            flag = false
            return flag
        }


    } else {
        setTimeout(function () {
            $(".mainAsideContent-i").eq(a).css({ 'transform': 'rotate(' + 0 + 'deg)' });

        }, 500)
        function returnFlag() {
            flag = true
            return flag

        }
    }
    return returnFlag;
}

// var strongs = document.querySelectorAll('strong')
// strongs.forEach((element, index) => {
//     strongs[index].innerText = index + 1
// });


let songList = [{
    songName: '侠',
    songer: '时代少年团',
    songTime: '3:35'
}, {
    songName: '飘向北方(Live)',
    songer: '尤长靖、那吾克热 - NW',
    songTime: '4:18'
}, {
    songName: '再也没爱过',
    songer: '何深彰',
    songTime: '3:51'
}, {
    songName: '传奇(格桑花版)',
    songer: '一壶酒馆',
    songTime: '4:12'
}, {
    songName: 'Just Say Hello(甘草片版)',
    songer: '甘草片r',
    songTime: '3:55'
}, {
    songName: '红蔷薇白玫瑰',
    songer: 'G.E.M.邓紫棋',
    songTime: '4:42'
}, {
    songName: '不要忘记我爱你',
    songer: '张碧晨',
    songTime: '3:45'
}, {
    songName: '爱人错过',
    songer: '告五人',
    songTime: '4:52'
}, {
    songName: '把回忆拼好给你',
    songer: 'cici_',
    songTime: '3:24'
}, {
    songName: '带我去找夜生活',
    songer: '告五人',
    songTime: '5:00'
}, {
    songName: '江湖之间',
    songer: '曹雨航',
    songTime: '3:34'
}, {
    songName: '爱的迷魂汤',
    songer: '花姐',
    songTime: '4:28'
}, {
    songName: " Baby I'm Sorry",
    songer: 'MYNAME',
    songTime: '3:42'
}, {
    songName: "给你一瓶魔法药水",
    songer: '告五人',
    songTime: '4:18'
},
{
    songName: "陪你走过一年四季",
    songer: '蓝心羽',
    songTime: '2:44'
}, {
    songName: "Bones",
    songer: 'Imagine Dragons',
    songTime: '2:45'
}, {
    songName: "后来的你在哪(女声版)",
    songer: '范茹',
    songTime: '3:18'
}, {
    songName: "黑桃A",
    songer: 'DJ小鱼儿',
    songTime: '3:00'
}, {
    songName: "真的爱着你",
    songer: '广东永琳',
    songTime: '4:54'
}, {
    songName: "真的爱着你",
    songer: '蒋明周',
    songTime: '4:48'
},
{
    songName: "认输",
    songer: 'L(桃籽)、何文宇',
    songTime: '2:54'
}, {
    songName: "唯一",
    songer: '告五人',
    songTime: '4:30'
}
]
let mainContentSongsList = document.querySelector('.mainContent-songsList')
songList.forEach((element, index) => {
    let lis = document.createElement('li')
    lis.innerHTML = `<div class="mainContent-songsList-li_left">
                            <div><span class="selectALL-box"></span></div>
                            <strong>${index + 1}</strong>
                            <span class="span-icon-new">
                                <i class="pc_temp_icon_new"></i>
                            </span>
                            <a href="">${element.songName}<span style="color: #999">
                                    - ${element.songer}
                                </span></a>
                        </div>
                        <div class="mainContent-songsList-li_right">
                            <div class="pc_temp_tips_r">
                                <a href="" class="pc_temp_btn_listen a1"></a>
                                <a href="" class="pc_temp_btn_download a1"></a>
                                <a href="" class="pc_temp_btn_share a1"></a>
                            </div>
                            <span class="pc_temp_time">${element.songTime}</span>
                        </div>`

    mainContentSongsList.appendChild(lis)
    lis.classList.add('mainContent-songsList-li')
    if (index < 3) {
        lis.children[0].children[1].style.color = '#fe2c62'
    }
});
var btn_all = document.querySelector('#btn_all')
var lis = document.querySelectorAll('.mainContent-songsList-li')
var selectALL_box = document.querySelectorAll('.selectALL-box')
var flag_select = false
//全选
btn_all.onclick = function () {

    // console.log(this.className.indexOf('haveSelect_all'))
    if (this.className.indexOf('haveSelect_all') == -1) {
        this.classList.add('haveSelect_all')
        for (let i = 1; i < selectALL_box.length; i++) {
            selectALL_box[i].classList.add('haveSelect')
        }
        flag_select = false
    } else {
        this.classList.remove('haveSelect_all')
        for (let i = 1; i < selectALL_box.length; i++) {
            selectALL_box[i].classList.remove('haveSelect')
        }
        flag_select = true
    }

}


for (let i = 1; i < selectALL_box.length; i++) {
    selectALL_box[i].classList.add('haveSelect')
    selectALL_box[i].addEventListener('click', function (e) {
        classLists = [...this.classList]
        if (classLists.indexOf('haveSelect') == -1) {
            selectALL_box[i].classList.add('haveSelect')
        } else {
            selectALL_box[i].classList.remove('haveSelect')
        }
        var selectArr = document.querySelectorAll('.haveSelect')
        console.log(selectArr.length)
        if (selectArr.length == lis.length) {
            btn_all.classList.add('haveSelect_all')

        } else {
            btn_all.classList.remove('haveSelect_all')
        }


    })
}
// var closemark = document.querySelector(".closemark")
// var markbox = document.querySelector('.markbox')
// page6Box_a.onclick = function () {
//     markbox.style.zIndex = '999'
//     markbox.style.opacity = '1'
// }
// closemark.onclick = function () {
//     markbox.style.zIndex = '-1'
//     markbox.style.opacity = '0'
// }


var erweima = document.querySelector('.erweima01')
var instructions = document.querySelector('.instructions')
var loginmarkcontain = document.querySelector('.loginmarkcontain')
var loginmarkcontain02 = document.querySelector('.loginmarkcontain02')
var flag = true
erweima.onclick = function () {
    if (flag) {
        instructions.style.backgroundPosition = '0px -125px'
        this.style.backgroundPosition = '-72px 0px'
        loginmarkcontain.style.display = 'none'
        loginmarkcontain02.style.display = 'block'
        flag = false
    } else {
        instructions.style.backgroundPosition = '0px -164px'
        this.style.backgroundPosition = '0px 0px'
        loginmarkcontain.style.display = 'block'
        loginmarkcontain02.style.display = 'none'
        flag = true
    }

}

var login = document.querySelector('.login')
var closeLogin = document.querySelector('.closeLogin')
var loginmark = document.querySelector('.loginmark')
let loginmarkcontainImg01 = document.querySelector('.loginmarkcontain-img01')
let loginmarkcontainImg02 = document.querySelector('.loginmarkcontain-img02')
closeLogin.onclick = function () {
    loginmark.style.display = 'none'
    loginmarkcontainImg01.style.transform = 'translate(0px, 0)'
    loginmarkcontainImg02.style.opacity = '1'
}
login.onclick = function () {
    loginmark.style.display = 'block'
    setTimeout(() => {
        loginmarkcontainImg01.style.transform = 'translate(110px, 0)'
        loginmarkcontainImg02.style.opacity = '0'
    }, 1500)
}





let pics = document.querySelector('.pics')
pics.onmouseenter = function () {
    console.log(1);
        loginmarkcontainImg01.style.transform = 'translate(0px, 0)'
        loginmarkcontainImg02.style.opacity = '1'

}
pics.onmouseleave = function () {
    setTimeout(() => {
        loginmarkcontainImg01.style.transform = 'translate(110px, 0)'
        loginmarkcontainImg02.style.opacity = '0'
    }, 1000);

}