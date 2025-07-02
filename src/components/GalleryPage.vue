<template>
  <div id="app">

    <!-- Секция галереи -->
    <div class="gallery-section">
      <h2>Галерея</h2>
      <div class="gallery-grid">
        <div v-for="event in events" :key="event.id" class="gallery-card fade-section" :class="{ appear: isVisible(event.id) }" @click="openAlbum(event.id)">
          <img :src="event.thumbnail" alt="Миниатюра мероприятия">
          <div class="gallery-info">
            <h3>{{ event.title }}</h3>
            <p>{{ event.date }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно -->
    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <span class="close-btn" @click="closeModal">&times;</span>
        <img :src="currentAlbum[currentIndex]" alt="Фото мероприятия" class="modal-image">
        <div class="modal-nav">
          <button @click="prevImage" :disabled="currentIndex === 0">←</button>
          <span>{{ currentIndex + 1 }} / {{ currentAlbum.length }}</span>
          <button @click="nextImage" :disabled="currentIndex === currentAlbum.length - 1">→</button>
        </div>
      </div>
    </div>

    <!-- Кнопка "НАЗАД" -->
    <div class="back-button">
      <button @click="goBack">НАЗАД</button>
    </div>

  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    'header-component': () => import('../components/Header.vue'),
    'footer-component': () => import('../components/Footer.vue'),
  },
  setup() {
    const events = ref([
      { id: 1, title: 'Гуляй Масленица 2', date: '2023', thumbnail: './images/merphotos/maslenca2/Массленница1.jpg', album: ['./images/merphotos/maslenca2/Массленница1.jpg', './images/merphotos/maslenca2/Массленица2.jpg', './images/merphotos/maslenca2/Массленица3.jpg'] },
      { id: 2, title: 'День знаний', date: '2023', thumbnail: './images/merphotos/denznaniy/день знаний.jpg', album: ['./images/merphotos/denznaniy/день знаний.jpg', './images/merphotos/denznaniy/день знаний2.jpg', './images/merphotos/denznaniy/день знаний3.jpg'] },
      { id: 3, title: 'Гуляния Масленица', date: '2021', thumbnail: './images/merphotos/maslenica2021/гуляй масленница1.jpg', album: ['./images/merphotos/maslenica2021/гуляй масленница1.jpg', './images/merphotos/maslenica2021/гуляй масленница2.jpg', './images/merphotos/maslenica2021/гуляй масленница3.jpg'] },
      { id: 4, title: 'Викторина знатоки дорог', date: '2023', thumbnail: './images/merphotos/victorina_dorog/викторинаПДД1.jpg', album: ['./images/merphotos/victorina_dorog/викторинаПДД1.jpg', './images/merphotos/victorina_dorog/ВикторинаПДД2.jpg', './images/merphotos/victorina_dorog/ВикторинаПДД3.jpg'] },
      { id: 5, title: 'В гости пожарным', date: '2023', thumbnail: './images/merphotos/gostipozharnie/в гости к пожарным.jpg', album: ['./images/merphotos/gostipozharnie/в гости к пожарным.jpg', './images/merphotos/gostipozharnie/в гости к пожарным2.jpg', './images/merphotos/gostipozharnie/в гости к пожарным3.jpg'] },
      { id: 6, title: 'Осень золотая', date: '2023', thumbnail: './images/merphotos/osenzolotaya/Осень Золотая1.jpg', album: ['./images/merphotos/osenzolotaya/Осень Золотая1.jpg', './images/merphotos/osenzolotaya/ОсеньЗолотая2.jpg', './images/merphotos/osenzolotaya/ОсеньЗолотая3.jpg'] },
      { id: 7, title: 'Достижения России', date: '2023', thumbnail: './images/merphotos/russiandost/достиженияРоссии.jpg', album: ['./images/merphotos/russiandost/достиженияРоссии.jpg', './images/merphotos/russiandost/ДостижениеРоссии2.jpg', './images/merphotos/russiandost/ДостиженияРоссии3.jpg'] },
      { id: 8, title: 'Мама милая моя', date: '2023', thumbnail: './images/merphotos/mama-milaya/мама_милая.jpg', album: ['./images/merphotos/mama-milaya/мама_милая.jpg', './images/merphotos/mama-milaya/мама_милая2.jpg', './images/merphotos/mama-milaya/мама_милая3.jpg'] },
      { id: 9, title: 'Поход в Кремль', date: '2023', thumbnail: './images/merphotos/kreml/поход в кремль1.jpg', album: ['./images/merphotos/kreml/поход в кремль1.jpg', './images/merphotos/kreml/поход в кремль2.jpg', './images/merphotos/kreml/поход в кремль3.jpg'] },
      { id: 10, title: 'Волшебные шашки', date: '2022', thumbnail: './images/merphotos/shashki/волшебныеШашки1.jpg', album: ['./images/merphotos/shashki/волшебныеШашки1.jpg', './images/merphotos/shashki/волшебныеШашки2.jpg', './images/merphotos/shashki/волшебныеШашки3.jpg'] },
      { id: 11, title: 'Окно победы', date: '2023', thumbnail: './images/merphotos/okno-pobedy/ОкнаПобеды1.jpg', album: ['./images/merphotos/okno-pobedy/ОкнаПобеды1.jpg', './images/merphotos/okno-pobedy/ОкнаПобеды2.jpg', './images/merphotos/okno-pobedy/ОкнаПобеды3.jpg'] },
      { id: 12, title: 'Пасхальные яйца', date: '2023', thumbnail: './images/merphotos/pasha/ПасхальныеЯйца1.jpg', album: ['./images/merphotos/pasha/ПасхальныеЯйца1.jpg', './images/merphotos/pasha/ПасхальныеЯйца2.jpg', './images/merphotos/pasha/ПасхальныеЯйца3.jpg'] }
    ]);
    const visibleEvents = ref(new Set());
    const isModalOpen = ref(false);
    const currentAlbum = ref([]);
    const currentIndex = ref(0);

    const isVisible = (id) => visibleEvents.value.has(id);

    const openAlbum = (eventId) => {
      const event = events.value.find(e => e.id === eventId);
      if (event && event.album) {
        currentAlbum.value = event.album;
        currentIndex.value = 0;
        isModalOpen.value = true;
      }
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    const prevImage = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--;
      }
    };

    const nextImage = () => {
      if (currentIndex.value < currentAlbum.value.length - 1) {
        currentIndex.value++;
      }
    };

    const goBack = () => {
      window.history.back();
    };

    events.value.forEach((event, index) => {
      setTimeout(() => visibleEvents.value.add(event.id), index * 200);
    });

    return { events, visibleEvents, isVisible, goBack, openAlbum, isModalOpen, currentAlbum, currentIndex, closeModal, prevImage, nextImage };
  },
});
</script>

<style scoped>
body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  color: #3f635f;
  background-image: url('./images/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.gallery-section {
  padding: 2rem 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
}

.gallery-section h2 {
  text-align: center;
  font-size: 2rem;
  color: #e26710;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  padding: 0 1rem;
}

.gallery-card {
  background: #fff;
  border: 2px solid #e26710;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(226, 103, 16, 0.1);
}

.gallery-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;
}

.gallery-info {
  padding: 0.5rem;
  text-align: center;
}

.gallery-info h3 {
  font-size: 1rem;
  color: #e26710;
  margin: 0.25rem 0;
  font-weight: 600;
}

.gallery-info p {
  font-size: 0.9rem;
  color: #5a6a62;
  margin: 0;
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
  text-transform: uppercase;
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

/* Стили для модального окна */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  position: relative;
  width: 80%;
  max-width: 600px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
  color: #e26710;
}

.modal-image {
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
  margin-bottom: 10px;
}

.modal-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.modal-nav button {
  background: #e26710;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.modal-nav button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.modal-nav span {
  color: #3f635f;
  font-size: 1rem;
}
</style>