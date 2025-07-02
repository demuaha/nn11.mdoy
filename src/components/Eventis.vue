<template>
  <section id="event-section" class="event-section fade-section">
    <h2 class="section-title">Ближайшие мероприятия</h2>
    <div class="event-cards">
      <div class="event-card" v-for="event in events" :key="event.id">
        <div class="event-card-image-block">
          <img src="../images/event2.png" alt="event image" class="event-card-image" />
        </div>
        <div class="event-card-info">
          <h3 class="event-card-title">{{ event.title }}</h3>
          <p class="event-card-date">{{ event.date }} | {{ event.time }}</p>
          <p class="event-card-description">{{ event.description }}</p>
          <button class="event-card-button" @click="viewEvent(event.id)">
            Подробнее
          </button>
        </div>
      </div>
    </div>

    <!-- КНОПКА "ВСЕ МЕРОПРИЯТИЯ" -->
    <div class="all-events-button-wrapper">
      <button class="all-events-button" @click="viewAllEvents">
        Все мероприятия
      </button>
    </div>
  </section>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const viewEvent = (id) => {
      router.push(`/event/${id}`);
    };
    const viewAllEvents = () => {
      router.push('/events');
    };
    const events = [
      {
        id: 1,
        image: "../images/event1.png",
        title: "8 марта",
        date: "08.03.2025",
        time: "12:00",
        description:
            "Праздничное мероприятие ко Дню 8 марта с концертами, мастер-классами и подарками.",
      },
      {
        id: 2,
        image: "../images/event2.png",
        title: "Осенний фестиваль",
        date: "01.10.2025",
        time: "14:00",
        description:
            "Фестиваль с ярмаркой, творческими выступлениями и интерактивами для всей семьи.",
      },
      {
        id: 3,
        image: "../images/event3.png",
        title: "Новый год",
        date: "31.12.2025",
        time: "22:00",
        description:
            "Новогодняя ночь с фейерверками, танцами, поздравлениями и праздничной атмосферой.",
      },
    ];
    return { events, viewEvent, viewAllEvents };
  },
};
</script>

<style>
.event-section {
  padding: 3rem 1rem;
  background-color: #fdfdfd;
  font-family: sans-serif;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
}

.event-cards {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .event-cards {
    flex-direction: row;
  }
}

.event-card {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: #D9D9D9;
}

.event-card-image-block {
  height: 200px;
  overflow: hidden;
}

.event-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-card-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-grow: 1;
}

.event-card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.event-card-date {
  color: #777;
  font-size: 1rem;
}

.event-card-description {
  font-size: 1rem;
  color: #3F635F;
  flex-grow: 1;
}

.event-card-button {
  align-self: flex-start;
  margin-top: 1rem;
  background-color: #3CA41C;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.event-card-button:hover {
  background-color: #f97316;
}

/* Кнопка "все мероприятия" */
.all-events-button-wrapper {
  text-align: center;
  margin-top: 2rem;
}

.all-events-button {
  background-color: #3CA41C;
  color: white;
  font-size: 1rem;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.all-events-button:hover {
  background-color: #f97316;
}
</style>