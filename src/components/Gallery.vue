<template>
  <section class="gallery-section fade-section" id="gallery">
    <h2>Галерея</h2>
    <div class="gallery-grid">
      <img src="../images/galery1.png" alt="Событие 1"/>
      <img src="../images/galery2.png" alt="Событие 2"/>
      <img src="../images/galery3.png" alt="Событие 3"/>
      <img src="../images/galery4.png" alt="Событие 4"/>
      <img src="../images/galery5.png" alt="Событие 5"/>
    </div>
    <button @click="viewAllGallery">Вся галерея</button>
  </section>
</template>

<style scoped>
button {
  margin-top: 4rem;
  background-color: #3CA41C;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #f97316;
}

.gallery-section {
  padding: 2rem;
  text-align: center;
  background-image: url("../images/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 50vh;
}

.gallery-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #E26710;
}

.gallery-grid {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.gallery-grid img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const viewAllGallery = () => {
      router.push('/gallery');
    };
    return { viewAllGallery };
  },
};
</script>