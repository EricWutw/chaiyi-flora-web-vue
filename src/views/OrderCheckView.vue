<template>
  <div class="container section">
    <div class="columns is-centered">
      <div class="column is-6-desktop is-10-tablet has-text-centered">
        <div class="box py-6 px-5">
          <h1 class="title is-3">預約需求單已送出</h1>

          <div class="status-badge tag is-warning is-light is-medium mb-5">⚠️ 訂單尚未正式成立</div>
          <div class="footer-note has-text-warning is-size-5">
            訂單編號：<span id="order-id" class="has-text-weight-bold">ORD-20260203-001</span><br />
            如果未聯絡上完成訂單確認<br />該需求單將於 24 小時後自動失效。
          </div>
          <div class="content has-text-left steps-container mb-6">
            <p>感謝您的預約！為了提供最高品質的花材：</p>
            <ol>
              <li><strong>專人核對：</strong>我們將透過 Line 確認當季花材庫存。</li>
              <li><strong>付款細節：</strong>對帳完成後，訂單才正式進入製作流程。</li>
              <li><strong>隱私保障：</strong>本站不開放網頁查單，所有進度將由 Line 專人通知。</li>
            </ol>
          </div>

          <a
            href="https://line.me/ti/p/0952306081"
            class="button is-success is-large is-fullwidth line-button mb-4"
          >
            <span class="icon">
              <i class="fab fa-line"></i>
            </span>
            <span>立即加 Line 完成訂單確認</span>
          </a>

          <p class="is-size-7 has-text-grey">或搜尋 Line ID: <strong>@your_line_id</strong></p>

          <hr />

          <div class="mt-5">
            <RouterLink to="/" class="button is-light">回到首頁</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.icon-box {
  font-size: 4rem;
  line-height: 1;
}

.status-badge {
  font-weight: bold;
  border-radius: 290486px;
}

.steps-container {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #ffd12c;
}

.line-button {
  background-color: #06c755 !important;
  color: white !important;
  border: none;
  transition: transform 0.2s;
}

.line-button:hover {
  transform: scale(1.02);
  background-color: #05b34c !important;
}

.footer-note {
  line-height: 1.6;
}

/* 動畫效果 */
.box {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
