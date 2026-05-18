<script setup>
import HeaderSection from "./header.vue"
import { projects } from '../data/projects'
import { skills } from '../data/skills'

const LabelClass = (index) => {
  if (index === 0) return 'label0'
  if (index === 1) return 'label1'
  if (index === 2) return 'label2'
  return 'label3'
}
</script>

<template>
    <HeaderSection />
    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="HeroContent">
            <h2>¡Hi, I´m Sergio!</h2>
            <h1>From
                <span>Concept</span>
                <br>
                to creati<label class="toggle-o"><span class="switch"></span></label>n
            </h1>



            <div class="labelsgroup">
                <div class="label0"><p>UX/UI</p></div>
                <div class="label1"><p>Mobile & Web Design</p></div>
                <div class="label2"><p>Saas & App Exp.</p></div>
                <div class="label3"><p>3 years Exp.</p></div>
            </div>
        </div>
        <img src="/images/profileimg.png" alt="Foto personal" class="imghero">
    </section>


    <!-- Projects -->
    <section id="projects" class="projects">
        <div class="TitleSection">
            <p>Selected work</p>
            <h2>Featured Projects</h2>
        </div>
        <!-- Grid Projects -->
        <div class="GridProjects">
            <router-link class="CardProject" v-for="project in projects" :key="project.title" :to="`/project/${project.id}`">
                <div class="image-container">
                    <img :src="project.imageBanner" :alt="project.title" class="Projectimg">
                </div>
                <h3>{{ project.title }}</h3>
                <div class="labelsgroupsmall">
                    <span class="labelsmall" v-for="label in project.labels" :key="label">{{ label }}</span>
                </div>
             </router-link>
        </div>
    </section>

    <!-- About me -->
    <section id="about" class="aboutme">
        <div class="TitleSection">
            <p>About me</p>
            <h2>Design is how I think.</h2>
        </div>
        <div class="ContentAbout">
           <p class="DescriptionAbout">I´m a UX/UI Designer with experience in startup environments and digital product development for companies in consumer goods, healthcare, technology, and innovation. I have worked on user-centered experiences for SaaS platforms, web and mobile applications, including mental health apps and clinical management software. I specialize in creating intuitive and visually appealing interfaces, always prioritizing usability and product consistency.</p> 
           <div class="skills">
                <h3>Core Skills</h3>
                <div class="labelsgroup">
                    <div :class="LabelClass(index)" v-for="(skill,index) in skills" :key="skill"><p>{{skill}}</p></div>
                </div>
           </div> 
        </div>
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
            <img src="/images/desk.png" alt="Imagen contacto" class="imgcontact">
        </div>

    </section>
    <!-- Footer -->
    <footer class="footer">
        <p>© 2026 Portfolio. All rights reserved.</p>
        <div class="footer-links">
            <a href="https://www.behance.net/sergiocombariza" target="_blank">Behance</a>
            <a href="https://www.linkedin.com/in/sergiocombariza-uxdesign/" target="_blank">LinkedIn</a>
        </div>
    </footer>
</template>