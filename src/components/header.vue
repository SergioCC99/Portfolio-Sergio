<script setup>
import { ref } from "vue"

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <header class="header">
    <a href="#">
      <img src="/images/Logo1.webp" alt="Logo" class="logo" v-on:click="() => $router.push('/')" decoding="async"/>
    </a>
    <nav class="primary-nav">
      <div class="nav-links">
          <a href="#projects">Projects</a>
          <a href="#about">About me</a>
          <a href="#contact">Contact</a>
        </div>
      <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" class="button">Download Resume</a>
    </nav>

    <button
      class="menu-toggle"
      :class="{ 'is-open': menuOpen }"
      @click="toggleMenu"
      aria-label="Toggle menu"
      :aria-expanded="menuOpen"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <transition name="mobile-nav">
      <nav v-if="menuOpen" class="mobile-nav">
        <a href="#projects" @click="closeMenu">Projects</a>
        <a href="#about" @click="closeMenu">About me</a>
        <a href="#contact" @click="closeMenu">Contact</a>
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" class="button" @click="closeMenu">Download Resume</a>
      </nav>
    </transition>
  </header>
</template>
