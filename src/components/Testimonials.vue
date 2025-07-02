<template>
  <section id="testimonials" class="testimonials fade-section">

    <div class="carousel-wrapper">
      <div class="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-item" v-for="(testimonial, index) in testimonials" :key="index">
          <img :src="testimonial.image" :alt="testimonial.name" class="carousel-image"/>
        </div>

      </div>
      <div class="dots">
        <span
            v-for="(t, i) in testimonials"
            :key="i"
            class="dot"
            :class="{ active: i === currentIndex }"
            @click="goTo(i)"
        ></span>
      </div>
    </div>
    <div class="feedback">
      <h2 class="title">ОТЗЫВЫ</h2>
      <p>От лица Родителей и детей группы «Ромашка», хотим поблагодарить наших любимых воспитателей Анну Юрьевну и
        Марину Николаевну , за прекрасную подготовку выпускного. Все прошло замечательно. Вы у нас лучшие!!!</p>
      <div class="name">
        <p>Елена</p>
      </div>
    </div>

  </section>


</template>

<script>

export default {
  data() {
    return {
      currentIndex: 0,
      testimonials: [
        {
          image: "/src/images/merphotos/pasha/ПасхальныеЯйца1.jpg",

        },
        {
          image: "./src/images/merphotos/shashki/волшебныеШашки1.jpg",
        },
        {
          image: "/src/images/merphotos/kreml/поход в кремль1.jpg",
        }, {
          image: "/src/images/merphotos/victorina_dorog/викторинаПДД1.jpg",
        },
      ],
      interval: null,
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    startAutoSlide() {
      this.interval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      }, 4000);
    },
    goTo(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.testimonials {
  position: relative;
  background-color: #d9d9d9;
  padding: 4rem 1rem;
  text-align: center;
  overflow: hidden;
  font-family: sans-serif;
}


.testimonials::after {
  position: absolute;
  font-size: 180px;
  color: #3F635F;
  bottom: 10%;
  right: 25%;
  opacity: 0.4;
  line-height: 1;
  z-index: 0;
  font-family: Georgia, serif;
}


.carousel,
.testimonials {
  position: relative;
  z-index: 1;
}
.feedback {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  width: 50%;
}

.name p {
  color: #3F635F;
}

.testimonials {
  background-color: #e5e5e5;
  padding: 2rem 1rem;
  text-align: center;
  font-family: sans-serif;
}

.title {
  font-size: 1rem;
  font-weight: bold;
  color: #E26710;
  margin-bottom: 1.5rem;
}

.carousel-wrapper {
  overflow: hidden;
  width: 100%;
  max-width: 700px;
  margin: 0 auto 1rem auto;
  position: relative;
}

.carousel {
  display: flex;
  transition: transform 0.6s ease;
}

.carousel-item {
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-image {
  width: 60%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.dots {
  margin-top: 0.5rem;
}

.dot {
  height: 10px;
  width: 10px;
  margin: 0 4px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.dot.active {
  background-color: #333;
}

.quote-box {
  max-width: 700px;
  margin: 2rem auto 0 auto;
  padding: 1rem;
  color: #333;
  background: none;
}

.quote-symbol {
  font-size: 4rem;
  color: #aaa;
}

.quote-text {
  font-style: italic;
  font-size: 1rem;
  margin-bottom: 1rem;
  position: relative;
}

.quote-author {
  font-weight: bold;
}
</style>