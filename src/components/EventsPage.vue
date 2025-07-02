<template>
  <div id="app">

    <!-- Hero Section -->
    <div class="hero">
      <h2>Мероприятия</h2>
    </div>

    <!-- Event Grid -->
    <div class="event-grid">
      <div v-for="event in events" :key="event.id" class="event-card fade-section" :class="{ appear: isVisible(event.id) }">
        <img src="../../public/images/event2.png" alt="Event Image">
        <h3>{{ event.title }}</h3>
        <p>{{ event.date }}</p>
        <p>{{ event.description }}</p>
        <button @click="register(event.id)">Посетить</button>
      </div>
    </div>

    <!-- Back Button -->
    <div class="back-button">
      <button @click="goBack">Назад</button>
    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    'header-component': () => import('./Header.vue'),
    'footer-component': () => import('./Footer.vue')
  },
  data() {
    return {
      events: [
        { id: 1, title: '8 марта', date: '08.03.2025 12:00', description: 'Описание мероприятия...', image: 'path/to/image1.jpg' },
        { id: 2, title: '8 марта', date: '08.03.2025 12:00', description: 'Описание мероприятия...', image: 'path/to/image2.jpg' },
        { id: 3, title: '8 марта', date: '08.03.2025 12:00', description: 'Описание мероприятия...', image: 'path/to/image3.jpg' }
      ],
      visibleEvents: new Set(),
      isVisibleFooter: false
    };
  },
  methods: {
    register(id) {
      alert(`Регистрация на мероприятие с ID ${id} выполнена!`);
    },
    isVisible(id) {
      return this.visibleEvents.has(id);
    },
    goBack() {
      window.history.back();
    }
  },
  mounted() {
    this.events.forEach((event, index) => {
      setTimeout(() => this.visibleEvents.add(event.id), index * 200);
    });
    setTimeout(() => this.isVisibleFooter = true, this.events.length * 200);
  }
});
</script>

<style scoped>
body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  color: #3f635f;
  background-color: #f9f5f2;
}

.hero {
  text-align: center;
  padding: 3rem 1rem;
  background-color: #fff;
  margin-bottom: 2rem;
}

.hero h2 {
  font-size: 2rem;
  color: #e26710;
  margin-bottom: 1rem;
  font-weight: 600;
}

.event-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
}

.event-card {
  background: #fff;
  border: 2px solid #e26710;
  border-radius: 12px;
  padding: 1.5rem;
}

.event-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(226, 103, 16, 0.1);
}

.event-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.event-card h3 {
  color: #e26710;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.event-card p {
  font-size: 0.95rem;
  color: #5a6a62;
  margin: 0.25rem 0;
  line-height: 1.5;
}

.event-card button {
  background: #e26710;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.event-card button:hover {
  background: #b8510e;
}

.back-button {
  text-align: center;
  margin: 2rem 0;
}

.back-button button {
  background: #e26710;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.back-button button:hover {
  background: #b8510e;
}

.fade-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-section.appear {
  opacity: 1;
  transform: translateY(0);
}
</style>