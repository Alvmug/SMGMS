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
  <div class="status">
    <h1>What's your status?</h1>
  </div>
  <br />
  <div class="cards">
    <router-link to="/Student" class="router">
      <div class="card1">
        <FontAwesomeIcon :icon="faGraduationCap" style="font-size: 40px" />
        <h1>Student</h1>
      </div>
    </router-link>
    <router-link to="/Teachers" class="router"
      ><div class="card2">
        <FontAwesomeIcon :icon="faChalkboardTeacher" style="font-size: 40px" />
        <h1>Teacher</h1>
      </div>
    </router-link>
    <router-link to="/Admin" class="router"
      ><div class="card3">
        <FontAwesomeIcon :icon="faMicrochip" style="font-size: 40px" />
        <h1>Admin</h1>
      </div></router-link
    >
  </div>
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
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
</script>
<style>
.status {
  position: absolute;
  top: 30%;
  left: 20%;
  color: rgb(226, 223, 223);
  font-size: 50px;
}
.status > h1 {
  font-weight: 500;
}

.card1 {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 52%;
  left: 1%;
  width: 33rem;
  height: 20rem;
  border-radius: 12px;
  background-color: rgb(22, 22, 22);
  transition: 0.5s ease;
}
.card1 > h1 {
  font-size: 55px;
  color: whitesmoke;
  font-weight: 500;
}
.card2 {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 52%;
  left: 37%;
  width: 25rem;
  height: 20rem;
  border-radius: 12px;
  background-color: rgb(22, 22, 22);
  transition: 0.5s ease;
}
.card2 > h1 {
  font-size: 55px;
  color: whitesmoke;
  font-weight: 500;
}
.card3 {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 52%;
  left: 65%;
  width: 33rem;
  height: 20rem;
  border-radius: 12px;
  background-color: rgb(22, 22, 22);
  transition: 0.5s ease;
}
.card3 > h1 {
  font-size: 55px;
  color: whitesmoke;
  font-weight: 500;
}
.router {
  color: rgb(132, 132, 132);
  border: solid whitesmoke;
}
.card1:hover {
  background-color: black;
}
.card2:hover {
  background-color: black;
}
.card3:hover {
  background-color: black;
}
</style>
