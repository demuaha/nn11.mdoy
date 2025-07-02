<template>
  <section class="contacts fade-section" id="contacts">

    <h2>Контакты</h2>
    <div class="main">
      <div class="left-side">
        <h2>Заведующий МБДОУ "Детский сад № 11 "Россияночка"</h2>
        <p>Самыловская Олеся Николаевна</p>
        <h2>Прием родителей (законных представителей)</h2>
        <p>Понедельник - с 8.00 до 12.00</p>
        <p>Среда - с 13.00 до 16.00</p>
      </div>
      <div class="right-side">
        <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A453ce59e6671655be459b6a93b9aba7903508eaa64235ad1031a717cfd1fbbec&amp;source=constructor"
            width="500" height="400" frameborder="0"></iframe>
      </div>
    </div>
  </section>
</template>
<style scoped>
h2 {
  text-align: center;
  color: #E26710;
}



iframe {
  border-radius: 30px;
}

.main {
  padding: 2rem;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
}

.contacts h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.main h2 {
  text-align: start;
  font-size: 1rem;
}
.contacts p {
  margin: 0.5rem 0;
  color: #3F635F;
}
</style>
<script setup lang="ts">
</script>