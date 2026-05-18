<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects'

const route = useRoute()

const project = projects.find(
  p => p.id == route.params.id
)

const selectedImage = ref(null)

const openImage = (img) => {
  selectedImage.value = img
}

const closeImage = () => {
  selectedImage.value = null
}

</script>


<template>

  <img :src="project.imageBanner" :alt="project.title" class="banner-project" loading="lazy">
  
  <div class="case-study">
    <div class =main>

      <!--Botón volver-->
      <button class="backbutton" @click="$router.back()"><span class="material-symbols-outlined">arrow_back_ios</span>Volver</button>

      <!--INTRO-->
      <section class="case-hero">
        <h1>{{ project.title }}</h1>
        <div class="labelsgroup">
          <span class="label" v-for="label in project.labels" :key="label">{{ label }}</span>
        </div>
      </section>

      <!-- IMPACTO -->
      <section class="case-impact">
        <div class="titlesection">
          <h2><span class="material-symbols-outlined">trending_up</span>impact</h2>
        </div>
        <p class="impact-description">{{ project.impact}}</p>
      </section>

      <section class="metrics">
        <div class="impact-metrics">
          <div class="metric-card" v-for="metrics in project.metrics" :key="label">
            <div class="metric-icon">
              <span class="material-symbols-outlined">{{metrics.icon}}</span>
              <h2>{{ metrics.number }}</h2>
            </div>
            <p>{{ metrics.label }}</p>
          </div>
        </div>
      </section>

      <!-- PROBLEMA -->
      <section class="case-problem">
        <div class="titlesection">
          <h2><span class="material-symbols-outlined">bomb</span>Problem</h2>
        </div>
        <p class="problem-description" >{{ project.problem}}</p>
      </section>

      <!-- PROCESO -->
      <section class="case-proccess">
        <div class="titlesection">
          <h2><span class="material-symbols-outlined">automation</span>My process</h2>
        </div>
        <section class="StepsGroup">
          <div class="step-card" v-for="(step, index) in project.process" :key="index">
            <span class="stepnumber">{{ index + 1  }}</span>
            <p>{{ step }}</p>
          </div>
        </section>
      </section>

      <section>

        <!-- GRID -->
        <div class="grid">
          <div v-for="(img, index) in project.images" :key="index" v-memo="[img]" class="image-container">
            <img :src="img"class="grid-image" @click="openImage(img)"   loading="lazy" decoding="async"/>
          </div>
        </div>

        <!-- MODAL -->
        <div v-if="selectedImage" class="modal">

        <!-- Botón cerrar -->
        <button class="close-btn" @click="closeImage">✕</button>

        <img :src="selectedImage" class="modal-image" loading="lazy"/>
        </div>

      </section>

      <!-- APRENDIZAJE -->
      <section class="case-learning">
        <div class="titlesection">
          <h2><span class="material-symbols-outlined">lightbulb</span>Learning</h2>
        </div>
        <p>{{ project.learning}}</p>
      </section>
      <!-- imagenes del proyecto -->
      <section class="imggroup">
        <img v-for="(img, index) in project.floatImages" :key="index":src="img"class="Floatingimg" loading="lazy"/>
      </section>
      <!-- Contact -->
      <section id="contact" class="Contact">
        <div class="Information">
            <div class="TitleSectionWhite">
                <p>Get in touch</p>
                <h2>Let's create something extraordinary.</h2>
                <p>Have a project in mind? I'd love to hear about it. Drop me a line and let's explore how we can work together</p>
            </div>
            <div class="ContentAbout">
                <div class="ContactInfo">
                    <p class="ContactItem"><span class="material-symbols-outlined">mail</span>sergiocombarizaux@gmail.com</p>
                    <!--<p class="ContactItem"><span class="material-symbols-outlined">phone</span> +57 301 5894 036</p>-->
                    <p class="ContactItem"><span class="material-symbols-outlined">location_on</span>Colombia & Remote Jobs</p>
                </div>
            </div>
        </div>
        <div class="img-contact-container">
            <img src="../images/desk.png" alt="Imagen contacto" class="imgcontact" loading="lazy" >
        </div>
      </section>



    </div>
  </div>

  <!-- Footer -->
  <footer class="footer">
      <p>© 2026 Portfolio. All rights reserved.</p>
      <div class="footer-links">
          <a href="https://www.behance.net/sergiocombariza" target="_blank">Behance</a>
          <a href="https://www.linkedin.com/in/sergiocombariza-uxdesign/" target="_blank">LinkedIn</a>
      </div>
  </footer>

</template>

