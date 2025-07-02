<template>
  <footer class="site-footer fade-section">
    <div class="footer-top">
      <div class="footer-block">
        <h4>Локация</h4>
        <p>Литературная ул., 26А</p>
      </div>
      <div class="footer-block">
        <h4>Время работы</h4>
        <p>Пн–Пт: 7:00 – 19:00</p>
      </div>
      <div class="footer-block">
        <h4>Контакты</h4>
        <p>Тел: (831) 274-60-94, (831) 274-62-66</p>
        <p>Email: ds11_nn@mail.52gov.ru</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© МБДОУ "Детский сад № 11 "Россиянка"</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: #333;
  color: white;
  font-size: 14px;
  font-family: sans-serif;
}

.footer-top {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-block {
  margin: 10px;
  min-width: 200px;
}

.footer-block h4 {
  margin-bottom: 6px;
  font-weight: bold;
  color: #E26710;
}

.footer-bottom {
  text-align: center;
  padding: 10px 0;
  border-top: 1px solid #444;
  background-color: #222;
}
</style>