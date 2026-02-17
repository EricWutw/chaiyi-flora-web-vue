<template>
  <div class="home-wrapper">
    <!-- 首頁第一段hero -->
    <!-- https://media.istockphoto.com/id/820747276/photo/forget-me-not-.jpg?s=1024x1024&w=is&k=20&c=PH1ZDPITujkHMi97vjw4gOmNXJxzFYL6h6CQVPJdGWA= -->
    <section class="hero is-medium is-bold">
      <div
        class="hero-body"
        style="
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/扭扭棒.jpg);
          background-size: cover;
          background-position: center;
        "
      >
        <div class="container has-text-centered">
          <h1 class="title is-1 animate-bounce has-text-white has-text-danger-light">
            采依花藝 <span class="icon"><i class="fas fa-leaf"></i></span>
          </h1>
          <p
            class="subtitle is-4 mt-5 has-text-danger-light"
            v-animateonscroll="{ enterClass: 'animate-fadeIn' }"
          >
            為生活，點亮溫度
          </p>
          <p class="is-size-5 mt-2 has-text-danger-light">與花相遇的瞬間，遇見最溫暖的自己</p>
          <p class="is-size-5 mt-2 has-text-danger-light">把這份美好，分享給心上最重要的人</p>
          <div class="mt-6">
            <span class="text-overline has-text-white">read more</span>
            <div class="scroll-arrow mt-2 has-text-white">
              <i class="pi pi-arrow-down"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 圖+文左右 -->
    <div class="columns container" style="margin-top: 50px">
      <div class="column is-1"></div>
      <div class="column is-flex is-justify-content-center is-align-items-center">
        <figure class="image is-256x256" v-animateonscroll="{ enterClass: 'animate-fadeIn' }">
          <img class="is-rounded" src="/扭扭棒1.jpg" />
        </figure>
      </div>
      <div class="column content has-text-centered is-align-content-center">
        <h1>毛茸茸扭扭棒娃娃的「領養」計畫</h1>
        <p>
          生活再硬，也要活得夠軟！<br />
          把「一根根毛茸茸線條」變身為「療癒小靈魂」的魔法實驗室。我們不賣現成的塑膠玩具，我們只賣「捏捏超能力」！
          從一根平凡的毛根開始，透過手指的溫度與一點點「萌力邏輯」，你可以親手創造出各種讓嘴角失守的小怪獸、小動物，甚至是你的分身這群毛毛星人隨時準備好要用無辜的眼神，瞬間融化你的心。
        </p>
      </div>
      <div class="column is-1"></div>
    </div>

    <div class="columns container is-vcentered is-reversed-desktop">
      <div
        class="column is-5 is-flex is-justify-content-center"
        v-animateonscroll="{ enterClass: 'animate-slideInLeft' }"
      >
        <figure class="image is-256x256">
          <img class="is-rounded" src="/S__39223342.jpg " />
        </figure>
      </div>

      <div class="column is-5 content has-text-centered">
        <h1 class="is-2">押花滴膠飾品 的「時間暫停」魔法</h1>
        <p class="">
          生活太快，我們幫你按下的「暫停鍵」！<br />
          把「最美瞬間」封印透明方塊裡。不賣量產的玻璃裝飾，只賣「收藏光影的超能力」！
          從一片真實的花瓣開始，透過黃金比例的樹脂配方與一點點「浪漫邏輯」，你可以把原本會凋零的美好，鎖進這晶瑩剔透的異世界裡。不管是放在床頭刻下你的名字，還是讓陽光穿過花瓣映在牆上，這群「透明系守護者」準備好要用那透亮的靈魂，釋放生活煩惱。
        </p>
      </div>
    </div>
    <div class="columns container" style="margin-top: 50px">
      <div class="column is-1"></div>
      <div class="column is-flex is-justify-content-center is-align-items-center">
        <figure class="image is-256x256" v-animateonscroll="{ enterClass: 'animate-fadeIn' }">
          <img class="is-rounded" src="/水晶花.jpg" />
        </figure>
      </div>
      <div class="column content has-text-centered is-align-content-center">
        <h1>歡迎光臨「透明水晶」夢幻花園</h1>
        <p>
          太悶，我們來點會發光的夢幻氛圍！<br />
          這裡不是普通的花店，而是一間專門把「空氣」與「光」變成花的魔法實驗室。我們不賣會枯萎的鮮花，我們只賣「永不凋零的玻璃心」！
          從一根纖細的金屬線開始，透過精密的結構塑形與液態樹脂的「表面張力魔法」，你可以親手創造出各種讓陽光都忌妒的晶瑩花朵。不管是掛在窗邊捕捉七彩光影，還是放在桌上當作「假裝很專業」的藝術品，這群「透明系守護者」隨時準備好要用那透亮的身體，閃瞎你的生活煩惱。
        </p>
      </div>
      <div class="column is-1"></div>
    </div>

    <div class="columns container is-vcentered is-reversed-desktop">
      <div
        class="column is-5 is-flex is-justify-content-center"
        v-animateonscroll="{ enterClass: 'animate-slideInLeft' }"
      >
        <figure class="image is-256x256">
          <img class="is-rounded" src="/永生花.jpg" />
        </figure>
      </div>

      <div class="column is-5 content has-text-centered">
        <h1 class="is-2">永生花與不凋花的「凍齡傳說」</h1>
        <p class="">
          誰說美麗一定要凋謝？我們偏要它「長生不老」！<br />
          我們不賣那些幾天就垂頭喪氣的鮮花，我們只賣「永遠維持在顏值巔峰」的植物界超能力者！
          這群「不凋花」原本也是嬌嫩的鮮花，但在它們最美的那一秒，我們啟動了特殊的科學置換程序，把植物細胞裡的水分通通換成保鮮精華，
          它們隨時準備好要在你的房間裡「定格美貌」，陪你度過每一個不想澆水的懶惰午後。
        </p>
      </div>
    </div>
    <!-- 三格服務項目 -->
    <section class="section">
      <div class="container">
        <div class="columns is-multiline is-centered">
          <div class="column is-4" v-animateonscroll="{ enterClass: 'animate-slideInTop' }">
            <div
              class="box has-text-centered p-6 custom-card has-text-white"
              style="
                background-image:
                  linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
                  url('https://plus.unsplash.com/premium_photo-1690031000842-1ac0508f18b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D');
                background-size: cover;
                background-position: center;
              "
            >
              <div class="icon-box bg-primary mb-4">
                <i class="fa-notdog fa-solid fa-gift"></i>
              </div>
              <p class="title is-4 has-text-white">花藝禮品</p>
              <p class="content">專為個人節日、告白或居家裝飾打造的獨特花藝設計。</p>
            </div>
          </div>
          <div class="column is-4" v-animateonscroll="{ enterClass: 'animate-fadeIn' }">
            <div
              class="box has-text-centered p-6 custom-card"
              style="
                background-image:
                  linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
                  url('https://media.istockphoto.com/id/1198322429/photo/card-for-the-holiday-with-best-wishes.jpg?s=612x612&w=0&k=20&c=06jcwVGZODcZEstyuP-6iT_4wcJtovIo7y3C3zGOPjw=');
                background-size: cover;
                background-position: center;
              "
            >
              <div class="icon-box bg-info mb-4">
                <i class="fa-regular fa-newspaper"></i>
              </div>
              <p class="title is-4 has-text-white">證照課程</p>
              <p class="content has-text-white">花藝體驗課，共享手作時光。</p>
            </div>
          </div>
          <div class="column is-4" v-animateonscroll="{ enterClass: 'animate-slideInRight' }">
            <div
              class="box has-text-centered p-6 custom-card"
              style="
                background-image:
                  linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
                  url('https://media.istockphoto.com/id/1198322429/photo/card-for-the-holiday-with-best-wishes.jpg?s=612x612&w=0&k=20&c=06jcwVGZODcZEstyuP-6iT_4wcJtovIo7y3C3zGOPjw=');
                background-size: cover;
                background-position: center;
              "
            >
              <div class="icon-box bg-link mb-4">
                <i class="pi pi-building"></i>
              </div>
              <p class="title is-4 has-text-white">空間佈置</p>
              <p class="content has-text-white">
                提供辦公空間、開幕茶會或品牌活動的長效與生花佈置。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 第二段hero -->
    <section class="hero is-medium is-bold">
      <div
        class="hero-body"
        style="
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
            url('https://media.istockphoto.com/id/959301212/photo/pastel-purple-roses-in-clear-acrylic-box.jpg?s=1024x1024&w=is&k=20&c=HndEA_lcNQsaMAoWfNbcQylBkgpgmXPcWUVusrSXlS8=');
          background-size: cover;
          background-position: center;
        "
      >
        <div class="container has-text-centered">
          <h1 class="title is-1 animate-bounce has-text-white has-text-danger-light">
            采依花藝 <span class="icon"><i class="fas fa-leaf"></i></span>
          </h1>
          <p
            class="subtitle is-4 mt-5 has-text-danger-light"
            v-animateonscroll="{ enterClass: 'animate-fadeIn' }"
          >
            為生活，點亮溫度
          </p>
          <p class="is-size-5 mt-2 has-text-danger-light">與花相遇的瞬間，遇見最溫暖的自己</p>
          <p class="is-size-5 mt-2 has-text-danger-light">把這份美好，分享給心上最重要的人</p>
        </div>
      </div>
    </section>
    <!-- 為啥選花藝 -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="title has-text-centered mb-6">為什麼選擇采依花藝</h2>
        <div class="columns is-centered">
          <div class="column is-3" v-animateonscroll="{ enterClass: 'animate-slideInTop' }">
            <div class="has-text-centered">
              <p class="title is-5"><i class="fa-solid fa-user-group"></i></p>
              <p class="is-6">走進教室，體驗零距離的現場實作教學</p>
            </div>
          </div>
          <div class="column is-3" v-animateonscroll="{ enterClass: 'animate-slideInBottom' }">
            <div class="has-text-centered">
              <p class="title is-5"><i class="fa-solid fa-calendar-days"></i></p>
              <p class="is-6">專屬你的課程節奏：排課時間彈性，進度依學員調整</p>
            </div>
          </div>
          <div class="column is-3" v-animateonscroll="{ enterClass: 'animate-slideInTop' }">
            <div class="has-text-centered">
              <p class="title is-5"><i class="fa-solid fa-camera"></i></p>
              <p class="is-6">學會捕捉光影與修圖技巧，讓你的花藝作品在社群更亮眼</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section bg-light">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-3" v-animateonscroll="{ enterClass: 'animate-slideInTop' }">
            <div class="has-text-centered">
              <p class="title is-5"><i class="fa-solid fa-palette"></i></p>
              <p class="is-6">在實作中體驗色彩學與美感，打造獨一無二的作品</p>
            </div>
          </div>
          <div class="column is-3" v-animateonscroll="{ enterClass: 'animate-slideInBottom' }">
            <div class="has-text-centered">
              <p class="title is-5"><i class="fa-regular fa-comments"></i></p>
              <p class="is-6">
                不只是教學，還有創業心得分享。關於花禮製作的所有細節，我都毫無保留告訴你
              </p>
            </div>
          </div>
          <div class="column is-3" v-animateonscroll="{ enterClass: 'animate-slideInTop' }">
            <div class="has-text-centered">
              <p class="title is-5"><i class="fa-solid fa-gift"></i></p>
              <p class="is-6">你的想法，我來實現：結合你想呈現的方向，訂製專屬花禮</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 第三段hero -->
    <section class="hero is-medium is-bold">
      <div
        class="hero-body"
        style="
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/字母花.png');
          background-size: cover;
          background-position: center;
        "
      >
        <div class="container has-text-centered">
          <h1 class="title is-1 animate-bounce has-text-white has-text-danger-light">
            采依花藝 <span class="icon"><i class="fas fa-leaf"></i></span>
          </h1>
          <p
            class="subtitle is-4 mt-5 has-text-danger-light"
            v-animateonscroll="{ enterClass: 'animate-fadeIn' }"
          >
            為生活，點亮溫度
          </p>
          <p class="is-size-5 mt-2 has-text-danger-light">與花相遇的瞬間，遇見最溫暖的自己</p>
          <p class="is-size-5 mt-2 has-text-danger-light">把這份美好，分享給心上最重要的人</p>
        </div>
      </div>
    </section>
    <!-- 績效 -->
    <section class="section">
      <div class="container">
        <nav class="level box py-6" v-animateonscroll="{ enterClass: 'animate-fadeIn' }">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">服務客戶</p>
              <p class="title has-text-primary">850K</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">年度營收</p>
              <p class="title has-text-info">$1.5M</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">銷售作品</p>
              <p class="title has-text-link">140K</p>
            </div>
          </div>
        </nav>
      </div>
    </section>
    <!-- footer -->
  </div>
</template>

<script setup></script>

<style scoped>
@media screen and (min-width: 1024px) {
  .is-reversed-desktop {
    flex-direction: row-reverse; /* 電腦版水平反轉：文字變左，圖片變右 */
  }
}
/* 佈局用樣式 */
.home-wrapper {
  overflow-x: hidden; /* 防止滑入動畫造成橫向捲軸 */
}

.spacer {
  height: 35rem; /* 增加捲動空間感 */
}

.bg-light {
  background-color: #fafafa;
}

/* 核心動畫定義 (直接對應指令名稱) */
.animate-slideInLeft {
  animation: slideInLeft 1s both;
}
.animate-slideInRight {
  animation: slideInRight 1s both;
}
.animate-slideInTop {
  animation: slideInTop 1s both;
}
.animate-slideInBottom {
  animation: slideInBottom 1s both;
}
.animate-fadeIn {
  animation: fadeIn 2s both;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slideInTop {
  from {
    opacity: 0;
    transform: translateY(-60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slideInBottom {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 自定義小組件樣式 */
.icon-box {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
}

.bg-primary {
  background-color: #e2b7d4 !important;
}
.bg-info {
  background-color: #ba9041 !important;
}
.bg-link {
  background-color: #c0ada0 !important;
}

.scroll-arrow {
  font-size: 2rem;
  color: #00d1b2;
}

.custom-card {
  transition: transform 0.3s ease;
  height: 100%;
}
.custom-card:hover {
  transform: translateY(-10px);
}

.shadow {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
