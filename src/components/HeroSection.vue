<template>
  <section class="hero-section ">
    <img src="../images/hero.png" alt="Hero" class="hero-image" />
    <div class="hero-text-box">
      <h2>ДОБРО ПОЖАЛОВАТЬ!</h2>
      <p>Мы рады приветствовать вас на официальном сайте муниципального бюджетного
        дошкольного образовательного учреждения</p>
    </div>
  </section>
</template>

<style>
.hero-section {
  position: relative;
}

.hero-image {
  width: 100%;
  object-fit: cover;
}

.hero-text-box {
  position: relative;
  top: -250px;
  margin: 0 auto;
  max-width: 640px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 1rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  border-radius: 15px;
  border: 1px solid white;
}

.hero-text-box h2 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: white;
}
.hero-text-box p{
  color: white;
}
</style>