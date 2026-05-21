<template>
  <header class="header">
    <a href="#">
      <img src="/images/Logo1.png" alt="Logo" class="logo" v-on:click="() => $router.push('/')"/>
    </a>
    <nav>
      <div class="nav-links">
          <a href="#projects">Projects</a>
          <a href="#about">About me</a>
          <a href="#contact">Contact</a>
        </div>
      <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" class="button">Download Resume</a>
    </nav>
  </header>
</template>