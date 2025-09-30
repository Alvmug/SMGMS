<template>
  <div class="navbar">
    <div class="image">
      <img src="/src/assets/sgms-high-resolution-logo.png" alt="SMGSlogo" />
    </div>
    <div class="links">
      <router-link to="/" class="router-link"><FontAwesomeIcon :icon="faHome" /> Home</router-link>
      <router-link to="/Teachers" class="router-link"
        ><FontAwesomeIcon :icon="faChalkboardTeacher" /> Teachers</router-link
      >
      <router-link to="/Student" class="router-link"
        ><FontAwesomeIcon :icon="faGraduationCap" /> Student</router-link
      >
      <router-link to="/Admin" class="router-link"
        ><FontAwesomeIcon :icon="faMicrochip" /> Admin</router-link
      >
    </div>
  </div>
  <br />
  <div class="add">
    <h1>Scholastic Indulgence</h1>
    <p class="center">Your academic perfomance, activities, and controls in one place.</p>
    <router-link to="/Start" class="register">Get Started</router-link>
  </div>
  <br />
  <div class="desc">
    <div class="Storage">
      <img src="/src/assets/Documents.jpg" alt="" />
      <FontAwesomeIcon :icon="faSchool" class="Icon" />
      <h1>Documentation</h1>
      <p>
        A stronghold for academic documents, and facilitation of document retrieval. Effective
        management of a school's classified documents for students. Info is safe with us.
      </p>
    </div>
    <div class="monitor">
      <img src="/src/assets/Megaphone.jpg" alt="" />
      <FontAwesomeIcon :icon="faCamera" class="Icon" />
      <h1>Monitoring & Announcements</h1>
      <p>
        Delightful real-time display of academic activities and situations. Students can't miss any
        events.
      </p>
    </div>
    <div class="result">
      <h1>Perfomance Illustration</h1>
      <p>
        A showcase of a student's overall perfomance. Hence, their report card. This also gives
        teachers a lot more control. The best feature yet!
      </p>
      <div class="join">
        <h1>Join Us.</h1>
        <p>
          No revolution or vision can be achieved alone.Therefore, we need the utmost help we can
          get, for a high order of accuracy
        </p>
      </div>
    </div>
  </div>
  <br />
</template>
<script setup>
import _ from 'lodash'
import { onMounted, onUnmounted } from 'vue'
const handleScroll = _.debounce(() => {
  const navbar = document.querySelector('.navbar')
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}, 10)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target)
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    },
    {
      threshold: 1,
    },
  )
  const description = document.querySelectorAll('.desc')
  description.forEach((el) => observer.observe(el))

  const hiddenElements = document.querySelectorAll('.add')
  hiddenElements.forEach((el) => observer.observe(el))
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faSchool } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
</script>
<style>
body {
  background: rgb(11, 11, 11);
  font-family:
    ui-sans-serif,
    system-ui,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    Segoe UI Symbol,
    'Noto Color Emoji';
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

.add {
  display: flex;
  justify-content: center;
  align-items: center;
  left: 15%;
  position: absolute;
  top: 30%;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-size: 50px;
  color: rgb(255, 255, 255);
  flex-direction: column;
  opacity: 0;
  transform: translateX(5%);
  transition: 1.4s ease;
}
.add.show {
  opacity: 1;
}
.add h1 {
  font-weight: bold;
}
.add .center {
  text-align: center;
}
.add p {
  font-size: 30px;
  width: 590px;
  opacity: 80%;
}
.add .register {
  position: absolute;
  top: 120%;
  text-decoration: none;
  color: black;
  background-color: whitesmoke;
  font-weight: 550;
  border-radius: 35px;
  font-size: 40px;
  padding: 5px 5px;
  width: 310px;
  text-align: center;
  transition: 0.3s ease;
}
.add .register:hover {
  background: rgb(0, 0, 0);
  color: white;
}
.desc {
  border-radius: 10px;
  position: absolute;
  top: 100%;
  left: 4%;
  width: 90vw;
  height: 70rem;
  color: white;
  background: linear-gradient(black 50%, rgb(38, 38, 38) 50%);
  display: flex;
  align-items: center;
  transition: 0.6s ease;
}
.Storage {
  display: flex;
  position: relative;
  top: -35%;
  left: 42%;
  border-radius: 12px;
  width: 33vw;
  height: 12rem;
}
.Storage p {
  font-style: italic;
  position: absolute;
  left: 21%;
  top: 55%;
  font-size: 19px;
  opacity: 75%;
  font-weight: 600;
  width: 500px;
  padding: 10px;
  border-radius: 12px;
  background-color: rgb(12, 12, 12);
}
.Storage h1 {
  margin-top: 3%;
  margin-left: -2%;
  font-size: 50px;
  font-weight: 500;
}
.Storage img {
  border-radius: 12px;
  position: absolute;
  top: -5%;
  right: 115%;
  height: 400px;
  width: 400px;
}
.Icon {
  opacity: 80%;
  font-size: 50px;
  padding: 5% 5%;
}
.monitor {
  display: flex;
  position: relative;
  top: 20%;
  right: 35%;
  border-radius: 12px;
  width: 40vw;
  height: 12rem;
  background: linear-gradient(to left, black 98%, white 7%);
}
.monitor h1 {
  margin-top: 3%;
  margin-left: -2%;
  font-size: 50px;
  font-weight: 500;
}
.monitor p {
  font-style: italic;
  position: absolute;
  left: 10%;
  top: 95%;
  font-size: 19px;
  opacity: 75%;
  font-weight: 600;
  width: 500px;
  padding: 10px;
  border-radius: 12px;
  background-color: rgb(12, 12, 12);
}
.monitor img {
  opacity: 80%;
  border-radius: 12px;
  position: absolute;
  top: -16%;
  left: 125%;
  height: 400px;
  width: 410px;
}
.result {
  position: absolute;
  display: flex;
  top: 97%;
  background-color: rgb(0, 0, 0);
  color: black;
  width: 90vw;
  height: 10rem;
  justify-content: center;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}
.result h1 {
  font-weight: bold;
  color: whitesmoke;
  margin-top: 3%;
  margin-left: -60%;
}
.result p {
  font-style: italic;
  position: absolute;
  left: 5%;
  top: 65%;
  font-size: 19px;
  color: whitesmoke;
  opacity: 75%;
  font-weight: 600;
  width: 75rem;
  padding: 10px;
  border-radius: 12px;
  background-color: rgb(0, 0, 0);
}
.join {
  position: absolute;
  font-size: 30px;
  top: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95rem;
  color: white;
  flex-direction: column;
  left: 1%;
}
.join h1 {
  font-weight: bold;
  margin-top: -5%;
  margin-left: -3%;
}
.join p {
  font-style: italic;
  font-size: 30px;
  opacity: 85%;
}
.navbar {
  display: flex;
  align-items: center;
  background-color: black;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 100;
  padding: 0 20px;
  box-sizing: border-box;
  height: fit-content;
  width: 100vw;
}
.navbar.scrolled {
  box-shadow: 0px 6px 4px rgb(6, 6, 6);
  transition: all 0.1ms ease-out;
}
.image {
  display: flex;
  min-height: 160px;
  background-color: black;
  top: 0;
}
.image > img {
  width: 160px;
  height: 160px;
}
.links {
  display: flex;
  justify-content: center;
  width: 900px;
  height: 83px;
  border-radius: 5px;
  position: relative;
  top: 1%;
  background-color: rgb(19, 19, 19);
  left: 25%;
  border: solid rgba(18, 18, 18, 0.167);
  gap: 90px;
}
.links .router-link:nth-child(1) {
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 17px;
  width: 100px;
  border-radius: 5px;
  margin-top: 2%;
  padding: 8px;
  height: 43px;
  text-decoration: none;
}
.links .router-link:nth-child(2) {
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 17px;
  width: 120px;
  border-radius: 5px;
  padding: 8px;
  text-decoration: none;
  margin-top: 2%;
  height: 43px;
}
.links .router-link:nth-child(3) {
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 17px;
  width: 110px;
  border-radius: 5px;
  padding: 8px;
  text-decoration: none;
  margin-top: 2%;
  height: 43px;
}
.links .router-link:nth-child(4) {
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 17px;
  width: 100px;
  border-radius: 5px;
  padding: 8px;
  text-decoration: none;
  margin-top: 2%;
  height: 43px;
}
.router-link:hover {
  transform: translateY(-9%);
  background-color: rgb(0, 0, 0);
}
.router-link-active {
  background-color: rgb(24, 23, 23);
  box-shadow: 0px 3px 1px white;
}
</style>
