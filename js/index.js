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
    // $(window).scroll(function () {


    //     if ($(window).scrollTop() > 100) {
    //         $(".sidebox").css('display', 'block');
    //     } else {
    //         $(".sidebox").css('display', 'none');
    //     }
    // })
    // $("#goBack").click(function () {
    //     $("html,body").animate({ "scrollTop": "0px" }, 0);
    // })
    let sidebox = document.querySelector('.sidebox')
    let goBack = document.querySelector('#goBack')
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 100) {
            sidebox.style.display = 'block'
        } else {
            sidebox.style.display = 'none'
        }
    }
    goBack.onclick = function () {
        let a = scrollY
        let timer = setInterval(() => {
            if (a > 0) {
                a -= 20
                a < 0 ? scrollTo(0, 0) : scrollTo(0, a)
                return
            }
            clearInterval(timer)
        }, 6);

        // console.log(a);
        // document.documentElement.scrollTop = 0
    }

    var imgs = ['https://imgessl.kugou.com/commendpic/20220807/20220807230334990714.jpg',
        'https://imgessl.kugou.com/commendpic/20220317/20220317144937978098.jpg',
        'https://imgessl.kugou.com/commendpic/20220807/20220807204129330167.jpg', 'https://imgessl.kugou.com/commendpic/20220807/20220807203907842327.jpg', 'https://imgessl.kugou.com/commendpic/20220317/20220317145017775531.jpg', 'https://imgessl.kugou.com/commendpic/20220807/20220807204018854585.jpg']
    function Shuffling(times) {
        this.index = 0
        this.leftBtn = document.querySelector('.leftBtn')
        this.rightBtn = document.querySelector('.rightBtn')
        this.shuffling = document.querySelector('.shuffling')
        this.imgItems = null
        this.btnList = document.querySelector('.btnList')
        this.shufflingWidth = this.shuffling.offsetWidth
        this.circle = []
        clearInterval(this.autoPlay)
        this.autoPlay = null
        this.init()
        this.auto(times)
        this.stopSetInterval()
        this.starSetInterval(times)

        // document.addEventListener("visibilitychange", () => {
        //     if (document.hidden === true) {
        //         this.stopSetInterval()
        //         clearInterval(this.autoPlay)
        //         this.autoPlay = null
        //         console.log('页面被挂起');
        //         // 页面被挂起
        //     } else {
        //         this.auto(times)
        //         console.log('页面由挂起被激活');
        //         // 页面由挂起被激活
        //     }
        // });

        this.leftBtn.onclick = () => {
            this.leftClick()
        }
        this.rightBtn.onclick = () => {
            this.rightClick()
        }
        // this.shuffling.onmouseover = () => {
        //     this.leftBtn.style.display = 'block'
        //     this.rightBtn.style.display = 'block'
        //     clearInterval(this.autoPlay)
        //     this.autoPlay = null
        // }
        // this.shuffling.onmouseout = () => {
        //     this.leftBtn.style.display = 'none'
        //     this.rightBtn.style.display = 'none'
        //     this.auto(times)
        // }
    }
    //初始化公共方法

    //创建小圆点
    Shuffling.prototype.init = function () {
        imgs.forEach(() => {
            this.circle = document.createElement('div')
            this.circle.innerHTML = `<div class="circle"></div>`
            this.btnList.appendChild(this.circle)
        })

        document.querySelector('.circle').classList.add('active')
        this.circle = document.querySelectorAll('.circle')
        for (let i = 0; i < this.circle.length; i++) {
            this.circle[i].onclick = () => {
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
        this.autoPlay = setInterval(() => {
            this.rightClick()
        }, times)
    }
    Shuffling.prototype.stopSetInterval = function () {

        this.shuffling.onmouseover = () => {
            this.leftBtn.style.display = 'block'
            this.rightBtn.style.display = 'block'
            clearInterval(this.autoPlay)
            this.autoPlay = null
        }
    }
    Shuffling.prototype.starSetInterval = function (times) {
        this.shuffling.onmouseout = () => {
            this.leftBtn.style.display = 'none'
            this.rightBtn.style.display = 'none'
            this.auto(times)
        }
    }
    let shuffling = new Shuffling(2000)


    let songerimgs = [
        {
            pic: 'https://imgessl.kugou.com/uploadpic/softhead/240/20220714/20220714130853543.jpg',
            name: '周杰伦'

        }, {
            pic: 'https://imgessl.kugou.com/uploadpic/softhead/240/20210328/20210328211239904.jpg',
            name: '林俊杰'

        }, {
            pic: 'https://imgessl.kugou.com/uploadpic/softhead/240/20180906/20180906181115284.jpg',
            name: '许嵩'

        }, {
            pic: 'https://imgessl.kugou.com/uploadpic/softhead/240/20200731/20200731181911977.jpg',
            name: '田馥甄'

        }, {
            pic: 'https://imgessl.kugou.com/uploadpic/softhead/240/20220531/20220531161239190.jpg',
            name: 'G.E.M.邓紫棋'

        },

        {
            pic: 'https://imgessl.kugou.com/uploadpic/softhead/240/20220802/20220802085631689.jpg',
            name: 'Pink Floyd'
        },
        {
            pic: 'https://imgessl.kugou.com/uploadpic/softhead/240/20210517/20210517173236916.jpg',
            name: 'Michael Jackson'
        },
        {
            pic: 'https://imgessl.kugou.com/uploadpic/softhead/240/20210621/20210621144829847.jpg',
            name: 'Taylor Swift'
        },
        {
            pic: 'https://imgessl.kugou.com/uploadpic/softhead/240/20180624/20180624013043389.jpg',
            name: 'XXXTENTACION'
        },
        {
            pic: 'https://imgessl.kugou.com/uploadpic/softhead/240/20210319/20210319161332735.jpg',
            name: 'Justin Bieber'
        },
        {
            pic: 'https://imgessl.kugou.com/uploadpic/softhead/240/20210804/20210804151041865.jpg',
            name: 'BLACKPINK'
        }, {
            pic: 'https://imgessl.kugou.com/uploadpic/softhead/240/20210604/20210604162833246.jpg',
            name: 'EXO'

        }, {
            pic: 'https://imgessl.kugou.com/uploadpic/softhead/240/20220405/20220405093641418.jpg',
            name: '太阳TAEYANG'

        }, {
            pic: 'https://imgessl.kugou.com/uploadpic/softhead/240/20220405/20220405093559236.jpg',
            name: 'BIGBANG'

        }, {
            pic: 'https://imgessl.kugou.com/uploadpic/softhead/240/20210615/20210615094648166.jpg',
            name: 'IU'
        },

    ]

    let singerList = document.querySelector('.singerList')
    let singCountries = document.querySelector('#singType')
    let flag01 = 0
    let i = 0
    songerimgs.forEach((element) => {

        if (i < 5) {
            let lis = document.createElement('li')
            lis.innerHTML = ` <div class="singerpic">
                    <img src="${songerimgs[i].pic}" alt=""
                        class="singer">
                </div>
                <a href="">${songerimgs[i].name}</a>`
            singerList.appendChild(lis)
            i++
        }

    });
    for (let i = 0; i < singCountries.children.length; i++) {
        singCountries.children[i].setAttribute('data-index', i)
        singCountries.children[i].addEventListener('mouseover', function () {
            singerList.innerHTML = ''
            flag01 = parseInt(this.getAttribute('data-index'))
            i = flag01 * 5
            songerimgs.forEach((element) => {

                if (i < 5 * (flag01 + 1)) {
                    let lis = document.createElement('li')
                    lis.innerHTML = ` <div class="singerpic">
                    <img src="${songerimgs[i].pic}" alt=""
                        class="singer">
                </div>
                <a href="">${songerimgs[i].name}</a>`
                    singerList.appendChild(lis)
                    i++
                }

            });
            for (let j = 0; j < singCountries.children.length; j++) {
                singCountries.children[j].classList.remove('singCountries-liAction')
            }
            this.classList.add('singCountries-liAction')
        })
    }

    let newsongs = [{
        songs: [{
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220808/20220808093102377873.jpg',
            songName: '侠',
            songerName: '时代少年团'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220726/20220726160107578393.jpg',
            songName: '后来的你在哪(女声版)',
            songerName: '范茹'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220804/20220804193952692740.jpg',
            songName: '别说我的眼泪你无所谓',
            songerName: '半吨兄弟'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220805/20220805204816964306.jpg',
            songName: '眼泪说的谎',
            songerName: '莫叫姐姐'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220803/20220803151204169607.jpg',
            songName: '只想为了你停留',
            songerName: '白小白'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220805/20220805142010768061.jpg',
            songName: '秋日成诗',
            songerName: '王靖雯'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220806/20220806185603978712.jpg',
            songName: '将军话',
            songerName: 'TF家族、TF家族 - 张极、TF家族 - 左航、TF家族 - 张泽禹、TF家族 - 童禹坤、TF家族 - 陈天润'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220805/20220805172216796216.jpg',
            songName: '穷',
            songerName: '杨小壮'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220802/20220802143620396956.jpg',
            songName: '我们这个年纪的人',
            songerName: '苏谭谭'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220805/20220805180452832081.jpg',
            songName: '上海滩 + 最爱上海滩(Live)',
            songerName: '刘德华、廖昌永、李克勤、梁静茹、李荣浩、黄霄雲、希林娜依高'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220804/20220804105618869763.jpg',
            songName: '吻得太逼真(女版)',
            songerName: '弹棉花的小花'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220805/20220805185302397648.jpg',
            songName: '麒麟(Live)',
            songerName: '早安'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220805/20220805140639691216.jpg',
            songName: '慢慢失去',
            songerName: '李乐乐'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220804/20220804172732710738.jpg',
            songName: '月光华尔兹',
            songerName: '范茹'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220805/20220805183517468230.jpg',
            songName: '熬',
            songerName: '封茗囧菌、玄觞'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220805/20220805201835386043.jpg',
            songName: '对着月亮说',
            songerName: '安儿陈'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220803/20220803175422542189.jpg',
            songName: '满分距离',
            songerName: '叶洛洛'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220805/20220805184102451875.jpg',
            songName: '藏海花·张起灵·等',
            songerName: '音频怪物'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220804/20220804173553466496.jpg',
            songName: '命中有你',
            songerName: '云朵'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220805/20220805172027178120.jpg',
            songName: '想自由',
            songerName: '不是花火呀'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220805/20220805143409388459.jpg',
            songName: '不分手的恋爱',
            songerName: '1个球'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220808/20220808182101467805.jpg',
            songName: '怎配',
            songerName: '镜予歌、喧笑、陈亦洺'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220808/20220808145430544213.jpg',
            songName: '不该',
            songerName: '叶里'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220728/20220728152817881161.jpg',
            songName: '以后别来打扰我',
            songerName: '任夏'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220808/20220808094057508364.jpg',
            songName: '没爱过自己',
            songerName: '何深彰'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220808/20220808151200875717.jpg',
            songName: '孤独交错',
            songerName: '成学迅'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220806/20220806233700435307.jpg',
            songName: '追着彩虹的我们',
            songerName: '郑鱼'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220802/20220802190906237080.jpg',
            songName: '追',
            songerName: '康姆士乐团'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220802/20220802104928933303.jpg',
            songName: '太多舍不得',
            songerName: '苏星婕'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220808/20220808170153432648.jpg',
            songName: '我想连上你的wifi',
            songerName: 'T2PRO'
        },]
    }, {
        songs: [{
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220802/20220802053001969937.jpg',
            songName: 'Obsessed(Explicit)',
            songerName: 'Calvin Harris、Charlie Puth、Shenseea'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220805/20220805040604936911.jpg',
            songName: 'Darkness(Explicit)',
            songerName: 'Eminem'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220729/20220729081014897943.jpg',
            songName: 'American Psycho',
            songerName: 'Marshmello、Mae Muller、Trippie Redd'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220801/20220801112804750999.jpg',
            songName: 'CHURCH GIRL(Explicit)',
            songerName: 'Beyoncé'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220729/20220729084411145986.jpg',
            songName: 'A Potion For Love',
            songerName: 'AURORA'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220726/20220726170715859896.jpg',
            songName: 'All That Really Matters',
            songerName: 'ILLENIUM、Teddy Swims'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220724/20220724011610609736.jpg',
            songName: 'Not My Day(Explicit)',
            songerName: 'LeMarvin、Akon'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220720/20220720074712454864.jpg',
            songName: 'Push It',
            songerName: 'Slushii、Nitro Fun、Bok Nero'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220805/20220805081309835209.jpg',
            songName: 'Stranger',
            songerName: 'Lauv'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220803/20220803090905213744.jpg',
            songName: 'Slide(Explicit)',
            songerName: '21 Savage、Madmarcc'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220603/20220603023305746309.jpg',
            songName: 'Are You Entertained(Explicit)',
            songerName: 'Russ、Ed Sheeran'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220629/20220629080408963133.jpg',
            songName: 'Like I Used To',
            songerName: 'Slushii'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220722/20220722083301280922.jpg',
            songName: 'No Piensa',
            songerName: 'Don Diablo、PnB Rock、Boaz Van De Beatz'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220803/20220803080913506370.jpg',
            songName: 'Villainy(Clean Mix)',
            songerName: 'Slushii、Dr.Ozi、GLD、Mikey Rotten'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220628/20220628100410904851.jpg',
            songName: 'Forgive Me',
            songerName: 'Slushii'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220803/20220803103605144631.jpg',
            songName: 'Ready Or Not(Clean)',
            songerName: 'Calvin Harris、Busta Rhymes'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220714/20220714230604616665.jpg',
            songName: '2 Be Loved(Am I Ready)(Am I Ready)',
            songerName: 'Lizzo'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220729/20220729000237558450.jpg',
            songName: "We're Not Even(Explicit) ",
            songerName: 'Wiz Khalifa'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220509/20220509082307659451.jpg',
            songName: 'DEAD2ME',
            songerName: 'AVIVA'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220708/20220708083401537535.jpg',
            songName: "Don't Let Me Let Go",
            songerName: 'Dillon Francis、ILLENIUM、EVAN GIIA'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220625/20220625021406565671.jpg',
            songName: 'PEW PEW',
            songerName: 'Slushii、Tokyo Machine'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220726/20220726103750925938.jpg',
            songName: 'Lollipop(Yum bi dum like Bubblegum)',
            songerName: 'CHROMANCE'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220801/20220801223705113020.jpg',
            songName: 'High School in Jakarta',
            songerName: 'NIKI'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220720/20220720054008232294.jpg',
            songName: 'Revolution',
            songerName: 'Bishop Briggs'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220630/20220630230508835375.jpg',
            songName: "I Don't Like Myself",
            songerName: 'Imagine Dragons'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220712/20220712151906953087.jpg',
            songName: "Family Affair(Dance For Me)",
            songerName: 'David Guetta'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220722/20220722083505341893.jpg',
            songName: "Goo",
            songerName: 'Em Beihold'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220715/20220715083101727980.jpg',
            songName: "Easy Lover",
            songerName: 'Ellie Goulding、Big Sean'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220624/20220624122611357387.jpg',
            songName: "From The D 2 The LBC(Explicit)",
            songerName: 'Eminem、Snoop Dogg'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220624/20220624110310440222.jpg',
            songName: 'Carolina(From The Motion Picture "Where The Crawdads Sing")',
            songerName: 'Taylor Swift'
        }
        ]
    }, {
        songs: [{
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220808/20220808171504363532.jpg',
            songName: 'GO',
            songerName: '高耀太'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220731/20220731172001111792.jpg',
            songName: 'Mixtape: Time Out',
            songerName: 'Stray Kids'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220805/20220805095518755414.jpg',
            songName: 'FOREVER 1',
            songerName: '少女时代'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220801/20220801153507332581.jpg',
            songName: 'Hype Boy',
            songerName: 'NewJeans(뉴진스)'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220722/20220722170106736918.jpg',
            songName: 'SNEAKERS',
            songerName: 'ITZY(있지)'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220802/20220802143812664484.jpg',
            songName: '사랑이 불어오나 봐(The Love)',
            songerName: 'Punch'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220708/20220708100908798371.jpg',
            songName: 'Girls',
            songerName: 'aespa(에스파)'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220802/20220802143511461268.jpg',
            songName: '이 세상에서(In this world)',
            songerName: '金在中'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220728/20220728192702907095.jpg',
            songName: 'Kiss',
            songerName: 'NMIXX'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220725/20220725142108470490.jpg',
            songName: 'Somebody!',
            songerName: 'LOCO、华莎'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220624/20220624115219503857.jpg',
            songName: 'POP!',
            songerName: 'NAYEON(TWICE)'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220622/20220622144408157820.jpg',
            songName: '열이 올라요(Heart Burn)',
            songerName: '宣美'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220711/20220711114508557328.jpg',
            songName: '바라만 본다(Just Watching You)',
            songerName: '郑世云'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220719/20220719164215193594.jpg',
            songName: 'BEAUTIFUL MONSTER',
            songerName: 'STAYC'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220802/20220802175209976334.jpg',
            songName: '묘(Cat)',
            songerName: 'Colde'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220725/20220725151506628215.jpg',
            songName: 'Nerdy',
            songerName: '퍼플키스'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220713/20220713130901790399.jpg',
            songName: 'Guerrilla',
            songerName: 'ATEEZ'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220727/20220727170106269560.jpg',
            songName: '괴짜(Freak)',
            songerName: 'ZICO(지코)'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220802/20220802164801299900.jpg',
            songName: '빠져들어(Dive into you)',
            songerName: '문빈、윤산하'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220721/20220721145104444285.jpg',
            songName: '안하기가 쉽지 않아요(Inevitable)',
            songerName: '裴秀智'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220718/20220718111407678985.jpg',
            songName: 'No Thanks',
            songerName: '孝琳'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220721/20220721175007838369.jpg',
            songName: '달빛바다(Sea of Moonlight)',
            songerName: 'fromis_9(프로미스나인)'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220720/20220720164702642113.jpg',
            songName: '둠두둠(Doom Du Doom)',
            songerName: 'P1Harmony'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220714/20220714132406342161.jpg',
            songName: 'U & Iverse',
            songerName: 'ASTRO'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220726/20220726105803459259.jpg',
            songName: 'Just A Dancer',
            songerName: '先艺'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220620/20220620142609966285.jpg',
            songName: 'Up!',
            songerName: 'Kep1er(케플러)'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220719/20220719102406960087.jpg',
            songName: 'Rain Day',
            songerName: 'NCT U'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220705/20220705145154910639.jpg',
            songName: 'Last Sequence',
            songerName: '宇宙少女'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220627/20220627153805904793.jpg',
            songName: 'Stay This Way',
            songerName: 'fromis_9(프로미스나인)'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220708/20220708115308537705.jpg',
            songName: 'Sparkling',
            songerName: '请夏'
        }]
    }, {
        songs: [{
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220725/20220725132501494385.jpg',
            songName: '88☆彡(piano ver.)',
            songerName: 'まらしぃ'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220706/20220706190701536661.jpg',
            songName: '余命2: 30',
            songerName: 'ピノキオピー'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220713/20220713163708485144.jpg',
            songName: '命运之门',
            songerName: '花澤香菜'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220805/20220805230507408793.jpg',
            songName: 'ウタカタララバイ',
            songerName: 'Ado'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220720/20220720175805371454.jpg',
            songName: 'ゆかたの君',
            songerName: '初音ミク'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220712/20220712154801382848.jpg',
            songName: 'ゾンビ(丧尸)',
            songerName: 'DECO * 27、初音ミク'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220718/20220718125501957715.jpg',
            songName: 'あいもかわらず',
            songerName: '石崎ひゅーい、菅田将暉'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220623/20220623185607442672.jpg',
            songName: '駆け引きはポーカーフェイス(策略是摆出冷漠的扑克脸)',
            songerName: '花澤香菜'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220802/20220802160006936182.jpg',
            songName: 'Summer Bike',
            songerName: 'FANTASTICS from EXILE TRIBE'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220622/20220622082906633850.jpg',
            songName: 'ぎみぎみ(请给我爱)',
            songerName: 'Sou'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220712/20220712165803710871.jpg',
            songName: '煽げや尊し',
            songerName: 'Reol'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220713/20220713163409104497.jpg',
            songName: 'アンダーキッズ',
            songerName: 'ツユ'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220617/20220617100015745748.jpg',
            songName: '常夜灯',
            songerName: 'Sou'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220612/20220612191401489229.jpg',
            songName: '天使の憂鬱(天使的忧郁)',
            songerName: '二藤部冬馬、初音ミク'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220705/20220705204101835521.jpg',
            songName: 'ネリヤカナヤ ～美ら奄美～',
            songerName: 'ReoNa'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220719/20220719154506583082.jpg',
            songName: 'Dance Dance',
            songerName: 'Da - iCE、木村昴'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220616/20220616170006689001.jpg',
            songName: '花の塔(花之塔)',
            songerName: 'さユり'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220802/20220802160012733751.jpg',
            songName: 'Cherry - ish!',
            songerName: '井本彩花、伊藤美来'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220623/20220623125402539818.jpg',
            songName: 'ALIVE',
            songerName: 'ClariS'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220720/20220720180007538029.jpg',
            songName: 'BUILD BACK BETTER',
            songerName: '初音ミク'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220730/20220730082811510962.jpg',
            songName: 'くびったけ',
            songerName: 'yama'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220609/20220609202101329200.jpg',
            songName: '猫之城',
            songerName: 'GARNiDELiA'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220712/20220712210202972977.jpg',
            songName: '猫失格',
            songerName: 'ReoNa'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220722/20220722150202854405.jpg',
            songName: 'DREAMER',
            songerName: 'EIKO starring 96猫'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220705/20220705230802369025.jpg',
            songName: '逆光(ウタ from ONE PIECE FILM RED)',
            songerName: 'Ado'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220701/20220701102711554351.jpg',
            songName: 'NOT ENOUGH',
            songerName: 'BACK - ON、FLOW'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220726/20220726164806646854.jpg',
            songName: '3636',
            songerName: 'あいみょん'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220614/20220614151806275290.jpg',
            songName: '百日草',
            songerName: 'Suara'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220722/20220722150104664158.jpg',
            songName: '10年後の私になら',
            songerName: 'こはならむ'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/240/20220629/20220629165054525516.jpg',
            songName: '雨燦々',
            songerName: 'King Gnu'
        }]
    }]


    let newSongs = document.querySelector('#newSongs')
    let newSongsCount = 0
    let newSongsFlag = 1
    let dataIndex = 0
    traverseSong(1, 0)

    function traverseSong(newSongsFlag, index) {
        newSongs.innerHTML = ''
        newSongsCount = 10 * (newSongsFlag - 1)
        newsongs[index].songs.forEach(element => {
            if (newSongsCount < 10 * (newSongsFlag)) {
                let lis = document.createElement('li')
                lis.innerHTML = `<div class="songsimg">
                        <img src="${newsongs[index].songs[newSongsCount].pic}" width="100%"
                            alt="">
                    </div>
                    <div class="songName">
                        <p class="newsongName">${newsongs[index].songs[newSongsCount].songName}</p>
                        <p class="songerName">${newsongs[index].songs[newSongsCount].songerName}</p>
                    </div>
                    <div class="play">
                        <span class="playSong"></span>
                        <span class="songdownloada"></span>
                    </div>`
                newSongs.appendChild(lis)
                newSongsCount++
            }


        });
    }

    let backPages = document.querySelector('.backPages')
    let nextPages = document.querySelector('.nextPages')
    let pagesNum = document.querySelector('.pagesNum')

    backPages.addEventListener('click', fn1) //上一页
    nextPages.addEventListener('click', fn2)//下一页
    function fn1() {
        newSongsFlag--
        console.log(newSongsFlag);
        if (newSongsFlag == 1) {
            this.style.opacity = '.5'
            backPages.removeEventListener('click', fn1)
        } else if (newSongsFlag <= 0) {
            traverseSong(1, 0)
            newSongsFlag = 1
            return
        } else {
            nextPages.style.opacity = '1'
            nextPages.addEventListener('click', fn2)
        }
        traverseSong(newSongsFlag, dataIndex)
        pagesNum.innerText = newSongsFlag + '/3'
    }

    function fn2() {
        newSongsFlag++
        if (newSongsFlag == 3) {
            this.style.opacity = '0.5'
            nextPages.removeEventListener('click', fn2)
        } else {
            backPages.style.opacity = '1'
            backPages.addEventListener('click', fn1)
        }

        traverseSong(newSongsFlag, dataIndex)
        pagesNum.innerText = newSongsFlag + '/3'
    }


    let singCountries02 = document.querySelector('#singCountries02')
    let singCountriesSpans = document.querySelectorAll('.singCountriesSpan')
    for (let i = 0; i < singCountries02.children.length; i++) {
        singCountries02.children[i].setAttribute('data-index', i)
        singCountries02.children[i].onmouseover = function () {

            dataIndex = parseInt(this.getAttribute('data-index'))
            newSongsFlag = 1
            traverseSong(1, dataIndex)
            backPages.style.opacity = '.5'
            backPages.removeEventListener('click', fn1)
            nextPages.addEventListener('click', fn2)//下一页
            nextPages.style.opacity = '1'
            pagesNum.innerText = newSongsFlag + '/3'


            for (let j = 0; j < singCountries02.children.length; j++) {
                singCountries02.children[j].classList.remove('newsongsAction')
                singCountriesSpans[j].style.opacity = 0
            }
            this.classList.add('newsongsAction')
            singCountriesSpans[i].style.opacity = '1'
        }
    }


    //听书精选

    let books = [{
        booknews: [{
            pic: 'https://imgessl.kugou.com/stdmusic/150/20211103/20211103120537893541.jpg',
            bookName: '凡人修仙传',
            authorName: '微媒有道',
            viewCounts: '6520.5万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220510/20220510185901334740.jpg',
            bookName: '乱世枭雄',
            authorName: '单田芳',
            viewCounts: '13236.7万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20191115/20191115175338400312.jpg',
            bookName: '程一电台',
            authorName: '程一',
            viewCounts: '10510.0万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20211208/20211208100152706123.jpg',
            bookName: '盗墓笔记',
            authorName: '周建龙',
            viewCounts: '15528.5万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20200819/20200819175118566928.jpg',
            bookName: '天津卫视·德云社相声晚会——开开心心年年好',
            authorName: '华语群星',
            viewCounts: '1556.0万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20210903/20210903184704477802.jpg',
            bookName: '白眉大侠',
            authorName: '单田芳',
            viewCounts: '21844.5万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220318/20220318155807113185.jpg',
            bookName: '猴子警长探案记1 - 2季 | 宝宝巴士故事',
            authorName: '宝宝巴士',
            viewCounts: '7081.5万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20210630/20210630141101608539.jpg',
            bookName: '《金牌喜剧班》郭德纲 陈佩斯 英达大咖齐亮相',
            authorName: '郭德纲、陈佩斯、英达',
            viewCounts: '1325.2万'
        },]

    }, {
        booknews: [{
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220309/20220309085852943440.jpg',
            bookName: '驱鬼道长',
            authorName: '有声的夏天V',
            viewCounts: '16.0万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220513/20220513191201906202.jpg',
            bookName: '我的极品美女们',
            authorName: '我的极品美女们',
            viewCounts: '1.2万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20211126/20211126134813229406.jpg',
            bookName: '天命风水师',
            authorName: ' ',
            viewCounts: '63.4万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220715/20220715105709968675.jpg',
            bookName: '王爷被休了（爆笑古言穿越免费双播）',
            authorName: ' ',
            viewCounts: '5.8万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220315/20220315234411980816.jpg',
            bookName: '天界打工皇帝（爆笑爽文 & 劲爆火书）',
            authorName: ' ',
            viewCounts: '0.7万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220715/20220715115403878552.jpg',
            bookName: '替嫁新妻：总裁老公超宠我',
            authorName: ' ',
            viewCounts: '19.4万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20201214/20201214231301654314.jpg',
            bookName: '最强修仙赘婿',
            authorName: '道然',
            viewCounts: '1.3万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20201211/20201211164201299771.jpg',
            bookName: '造化之王',
            authorName: '主播双枪屁孩',
            viewCounts: '9.2万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220627/20220627151603869087.jpg',
            bookName: '鬼吹灯之牧野诡事 | 全解鬼吹灯未解之谜',
            authorName: '老拾柒',
            viewCounts: '0.6万'
        },]
    }, {
        booknews: [{
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220713/20220713180104435176.jpg',
            bookName: '0～3岁宝宝启蒙益智儿歌',
            authorName: '儿童早教儿歌',
            viewCounts: '2.4万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220624/20220624163708320473.jpg',
            bookName: '热门儿童歌曲大全',
            authorName: '少儿主播杜拉拉',
            viewCounts: '16.3万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20200623/20200623130317543996.jpg',
            bookName: '小猪佩奇 第三四季 中文版',
            authorName: '',
            viewCounts: '145.5万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220321/20220321175317165667.jpg',
            bookName: '儿童儿歌故事大全',
            authorName: '贝瓦儿歌',
            viewCounts: '760.2万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220325/20220325185001974051.jpg',
            bookName: '安全警长啦咘啦哆 | 宝宝巴士故事',
            authorName: '宝宝巴士',
            viewCounts: '273.6万'
        }, {
            pic: '',
            bookName: '儿童歌曲大全',
            authorName: '儿童歌曲大全',
            viewCounts: '0.5万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20210928/20210928112101128856.jpg',
            bookName: '4 - 7岁睡前故事 | 宝宝巴士故事',
            authorName: '宝宝巴士',
            viewCounts: '191.9万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20210915/20210915210600891325.jpg',
            bookName: '经典儿歌大全',
            authorName: '栗子绵绵',
            viewCounts: '19.1万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220316/20220316020100667994.jpg',
            bookName: '儿童歌曲 | 儿歌大全',
            authorName: '花开有声剧社',
            viewCounts: '0.4万'
        },]
    }, {
        booknews: [{
            pic: 'https://imgessl.kugou.com/stdmusic/150/20211215/20211215114611248850.jpg',
            bookName: '郭德纲于谦相声',
            authorName: '我的空间',
            viewCounts: '2.8万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220624/20220624165803434996.jpg',
            bookName: '岳云鹏相声精选（高清）',
            authorName: '夜音',
            viewCounts: '夜音'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220711/20220711085742851724.jpg',
            bookName: '郭德纲历年相声',
            authorName: '郭德纲相声',
            viewCounts: '1.2万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220223/20220223105313302933.jpg',
            bookName: '郭德纲于谦相声',
            authorName: '我的空间',
            viewCounts: '2.8万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20210223/20210223124918536922.jpg',
            bookName: '郭德纲经典相声',
            authorName: '郭德纲相声',
            viewCounts: '0.6万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20210705/20210705150844147650.jpg',
            bookName: '郭德纲于谦超清相声',
            authorName: '郭德纲相声',
            viewCounts: '11.9万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20211230/20211230161501923885.jpg',
            bookName: '郭德纲于谦2019年相声合集',
            authorName: '',
            viewCounts: '0.7万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220325/20220325100907112195.jpg',
            bookName: '岳云鹏 孙越 相声合集',
            authorName: '',
            viewCounts: '0.2万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20200819/20200819175118566928.jpg',
            bookName: '天津卫视·德云社相声晚会——开开心心年年好',
            authorName: '华语群星',
            viewCounts: '18.9万'
        },]
    }, {
        booknews: [{
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220502/20220502222801783260.jpg',
            bookName: '抖音歌曲最火的歌2022',
            authorName: '青芒果电台',
            viewCounts: '1.4万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20211204/20211204091408756703.jpg',
            bookName: '那些超赞的语录文案',
            authorName: '哇哇',
            viewCounts: '3.0万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220424/20220424194210520402.jpg',
            bookName: '万物声',
            authorName: '青山山',
            viewCounts: '0.4万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220712/20220712174439983752.jpg',
            bookName: '倾听夜声 | 晚安故事',
            authorName: '王小凯',
            viewCounts: '1.9万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220615/20220615164702257015.jpg',
            bookName: '夜色渐沉｜该回家了',
            authorName: 'Minnie米妮',
            viewCounts: '1.0万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220526/20220526125111208136.jpg',
            bookName: '师父说',
            authorName: '钦洁',
            viewCounts: '0.5万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20220418/20220418142447892402.jpg',
            bookName: '空语FM | 你的心灵小筑',
            authorName: '空语',
            viewCounts: '1.0万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20210730/20210730133410103739.jpg',
            bookName: '一人一声·睡前夜听',
            authorName: 'NJ凡洛',
            viewCounts: '15.0万'
        }, {
            pic: 'https://imgessl.kugou.com/stdmusic/150/20191117/20191117223547115833.jpg',
            bookName: '勿先生电台',
            authorName: '勿先生',
            viewCounts: '0.6万'
        },]
    }]

    let choicenessBook = document.querySelector('#choicenessBook')
    let choicenessBookUl = document.querySelector('#choicenessBook-ul')
    let bookIndex = 0
    for (let i = 0; i < choicenessBook.children.length; i++) {
        choicenessBook.children[i].setAttribute('data-index', i)
        choicenessBook.children[i].onmouseover = function () {
            bookIndex = parseInt(this.getAttribute('data-index'))
            book(bookIndex)
            for (let j = 0; j < choicenessBook.children.length; j++) {
                choicenessBook.children[j].classList.remove('bookLisAction')
            }
            this.classList.add('bookLisAction')
        }
    }

    function book(index) {
        choicenessBookUl.innerHTML = ''
        books[index].booknews.forEach(element => {
            let lis = document.createElement('li')
            lis.innerHTML = `<div class="songsimg">
                    <img src="${element.pic}" width="100%"
                        alt="">
                </div>
                <div class="songName" style="width:160px;">
                    <p style="font-size:14px">${element.bookName}</p>
                    <p style="font-size:12px;margin-top: 6px;">${element.authorName}</p>
                </div>
                <div class="read">
                    <span class="readBook"></span>
                    <span style="font-size: 12px;">${element.viewCounts}</span>
                </div>`
            choicenessBookUl.appendChild(lis)


        });
    }
    book(0)

    //推荐内容
    let recommendedArr = [
        '白眉大侠',
        '茅山捉鬼人',
        '夜听FM',
        '贝瓦故事',
        '文武贝流行钢琴（1）',
        '郭德纲',
        '心舒眠纯音乐',
        '黑水公园',
        '舒烟电台',
        '晚安故事盒子',
        '哄睡故事',
        '隋唐演义',
        '程一电台',
        '宝宝巴土儿歌',
        '这首歌，等你来听',
        '斗罗大陆',
        '水浒传',
        '星空下的钢琴曲1',
        '盗墓笔记',
        '抬棺匠',
        '晚安故事盒子',
        '无敌剑域',
        '治疗师｜3D助眠解压沉浸式音乐',
        '小猪佩奇',
        '鬼吹灯经典系列',
        '上门龙婿',
        '超牛女婿',
        '奇葩修真天才',
        '治愈失眠:雷雨声',
        '蕊希电台',
        '成语故事专题',
        '儿童故事专题',
        '鬼吹灯专题'

    ]

    let recommended = document.querySelector('.recommended')
    let backPages01 = document.querySelector('.backPages01')
    let nextPages01 = document.querySelector('.nextPages01')
    let pagesNum01 = document.querySelector('.pagesNum01')
    let pages = 1
    let pagesCount = 0

    function recommendedTraverse(pages) {
        recommended.innerHTML = ''
        pagesCount = 21 * (pages - 1)
        recommendedArr.forEach(element => {
            if (pagesCount < 21 * pages) {
                if (recommendedArr[pagesCount] == undefined) {
                    return
                }
                let lis = document.createElement('li')
                lis.innerHTML = `<a href="javascript:;">${recommendedArr[pagesCount]}</a>`
                recommended.appendChild(lis)
                pagesCount++


            }
        });

    }
    recommendedTraverse(1)


    backPages01.addEventListener('click', back)
    nextPages01.addEventListener('click', next)
    function back() {
        if (pages > 1) {
            pages--
            recommendedTraverse(pages)
            nextPages01.style.opacity = '1'
            backPages01.style.opacity = '0.5'
            pagesNum01.innerText = pages + '/2'
        }

    }
    function next() {
        if (pages < 2) {
            pages++
            recommendedTraverse(pages)
            nextPages01.style.opacity = '0.5'
            backPages01.style.opacity = '1'
            pagesNum01.innerText = pages + '/2'
        }

    }
}

