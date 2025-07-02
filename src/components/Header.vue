<template>
  <header class="site-header">
    <div class="container">
      <div class="logo">
        <span class="accent">МБДОУ</span>
        <span class="text1"> "Детский сад № 11 </span>
        <span class="accent">"Россияночка"</span>
      </div>
      <nav class="navigation">
        <a href="#event-section" class="nav-link">Актуальное</a>
        <a href="#testimonials" class="nav-link">Для родителей</a>
        <a href="#gallery" class="nav-link">Галерея</a>
        <a href="#contacts" class="nav-link">Контакты</a>
        <a href="#" class="nav-link">Информация</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  font-family: sans-serif;
  height: 60px;
  align-content: center;

}
.text1{
  color: #3F635F;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.logo {
  font-size: 1.2rem;
  font-weight: bold;
}

.logo .accent {
  color: #f97316;
}

.navigation {
  display: flex;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  color: #3F635F;
}

.nav-link:hover {
  color: #f97316;
}

</style>