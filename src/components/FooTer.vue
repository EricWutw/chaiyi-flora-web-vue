<template>
  <footer class="footer py-6">
    <div class="container">
      <nav class="level mb-6">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading has-text-primary"><i class="pi pi-map-marker mr-1"></i> 零距離教學</p>
            <p class="is-size-6">面對面手把手指導</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading has-text-primary"><i class="pi pi-calendar mr-1"></i> 彈性預約</p>
            <p class="is-size-6">進度自由、支援密集排課</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading has-text-primary"><i class="pi pi-palette mr-1"></i> 配色自選</p>
            <p class="is-size-6">色彩學與美感養成</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading has-text-primary"><i class="pi pi-camera mr-1"></i> 攝影修圖</p>
            <p class="is-size-6">記錄作品最美的一面</p>
          </div>
        </div>
      </nav>

      <hr style="background-color: #eee; height: 1px" />

      <div class="columns is-multiline mt-5">
        <div class="column is-4 has-text-centered">
          <h3 class="title is-4 mb-3">采依花藝</h3>
          <p class="is-size-6 has-text-grey">
            為生活，點亮溫度。<br />
            結合你的想法，訂製專屬花禮；<br />
            不藏私經驗分享，陪伴你的花藝創業路。
          </p>
        </div>

        <div class="column is-4 has-text-centered">
          <h3 class="title is-5 mb-3">快速連結</h3>
          <ul>
            <li class="mb-2">
              <RouterLink to="/about" class="has-text-grey-dark">關於采依</RouterLink>
            </li>
            <li class="mb-2">
              <RouterLink to="/services" class="has-text-grey-dark">課程資訊</RouterLink>
            </li>
            <li class="mb-2">
              <RouterLink to="/gallery" class="has-text-grey-dark">作品展示</RouterLink>
            </li>
          </ul>
        </div>

        <div class="column is-4 has-text-centered">
          <h3 class="title is-5 mb-3">聯絡我們</h3>
          <p class="is-size-6 has-text-grey mb-1">
            <i class="pi pi-envelope mr-2"></i> chaiyi.flora@email.com
          </p>
          <p class="is-size-6 has-text-grey mb-3"><i class="pi pi-phone mr-2"></i> 02-XXXX-XXXX</p>
          <!-- <div class="buttons ">
            <a class="button is-small is-rounded is-light"><i class="fab fa-line"></i></a>
            <a class="button is-small is-rounded is-light"><i class="fab fa-facebook-f"></i></a>
            <a class="button is-small is-rounded is-light"><i class="fab fa-instagram"></i></a>
          </div> -->
        </div>
      </div>

      <div class="content has-text-centered mt-6 pt-5" style="border-top: 1px solid #f5f5f5">
        <p class="is-size-7 has-text-grey-light">
          &copy; 2024 采依花藝 Chaiyi Flora. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #fafafa; /* 淡淡的底色 */
}
.heading {
  font-weight: bold !important;
  font-size: 0.85rem !important;
  letter-spacing: 1px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
a:hover {
  color: #00d1b2 !important; /* 滑過變色 */
}
</style>
