<template>
  <div class="profile">
    <div class="empty"></div>
    <h1>World Mission High School (HM)</h1>
    <p>Kigali, Rwanda</p>
  </div>
  <div class="body">
    <div class="nav">
      <div class="image">
        <img src="/src/assets/sgms-high-resolution-logo.png" alt="SMGSlogo" />
      </div>
      <div class="links">
        <router-link to="/" class="router-link"
          ><FontAwesomeIcon :icon="faHome" /> Home</router-link
        >
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
    <div class="info">
      <div class="students">
        <h1>
          <FontAwesomeIcon :icon="faGraduationCap" />
          <p>Students</p>
          <h1>456</h1>
          <p>Ongoing...</p>
        </h1>
      </div>
      <div class="students">
        <h1>
          <FontAwesomeIcon :icon="faHand" />
          <p>Absence/Presence ration</p>
          <router-link to="/Mentron" class="routes"><h1>80-90</h1></router-link>
          <p>7:30 A.M</p>
        </h1>
      </div>
      <div class="students">
        <h1>
          <FontAwesomeIcon :icon="faClock" />
          <p>Schedule</p>
          <h1>Learning Time</h1>
          <p>8:30 A.M</p>
        </h1>
      </div>
      <div class="students">
        <h1>
          <FontAwesomeIcon :icon="faBullhorn" />
          <p>Announcements</p>
          <h1>Sports meeting</h1>
          <p>Pending...</p>
        </h1>
      </div>
    </div>
    <br />
    <div class="box1">
      <h1>Teaching Schedule</h1>
    </div>
    <div class="box1">
      <h1>Teaching Schedule</h1>
    </div>
    <div class="box1">
      <h1><FontAwesomeIcon :icon="faClock" class="clock" /> Teaching Schedule</h1>
      <div class="null"></div>
      <div class="Level">
        <div class="time">
          <h1>8:00 - 8:40</h1>
        </div>
        <h1>L3MMP</h1>
        <div class="GD">
          <h1>Graphics Design</h1>
        </div>
      </div>
      <div class="Level4">
        <div class="null"></div>
        <div class="time2">
          <h1>8:00 - 8:40</h1>
        </div>
        <h1>L4SOD</h1>
        <div class="DS">
          <h1>Data Structure</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { faBullhorn, faChalkboardTeacher, faClock, faHand } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { onMounted } from 'vue'
import { onUnmounted } from 'vue'
import _ from 'lodash'

const handleScroll = _.debounce(() => {
  const navbar = document.querySelector('.nav')
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}, 10)
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style>
.body {
  width: 200vh;
  height: 300vh;
  background: white;
}
.nav {
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
  top: 18%;
}
.nav.scrolled {
  box-shadow: 0px 6px 4px rgb(6, 6, 6);
  transition: all 0.1ms ease-out;
}
.routes {
  text-decoration: none;
  font-size: 20px;
  color: black;
}
.profile {
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
  height: 10vw;
}
.profile > h1 {
  top: -15%;
  left: 1%;
  font-weight: bold;
  position: relative;
  color: white;
}
.profile p {
  position: absolute;
  top: 60%;
  left: 7.5%;
  color: rgb(215, 211, 211);
}
.empty {
  border-radius: 100%;
  width: 5vw;
  height: 5vw;
  background: white;
}
.info {
  display: flex;
  width: fit-content;
  position: absolute;
  top: 45%;
  gap: 1%;
}
.students {
  border-radius: 11px;
  padding: 35px;
  top: 45%;
  left: 5%;
  width: 25vw;
  height: 16vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background: rgb(246, 241, 241);
  color: black;
}
.students:nth-child(1) {
  box-shadow: 4px 5px 30px rgb(190, 190, 190);
}
.students:nth-child(2) {
  box-shadow: 4px 5px 30px rgb(190, 190, 190);
  left: 33%;
}
.students:nth-child(3) {
  box-shadow: 4px 5px 30px rgb(190, 190, 190);
  left: 59%;
}
.students:nth-child(4) {
  box-shadow: 4px 5px 30px rgb(190, 190, 190);
  left: 59%;
}
.students h1:nth-child(3) {
  font-size: 40px;
}
.students p {
  color: rgb(55, 55, 55);
  font-size: 25px;
}
.box1 {
  display: flex;
  position: absolute;
  width: 35rem;
  height: 24rem;
  background: rgb(246, 241, 241);
  top: 90%;
  left: 1%;
  border-radius: 12px;
  box-shadow: 1px 1px 49px rgb(156, 155, 155);
  transition: 0.3s ease-in-out;
}
.box1 > h1 {
  position: absolute;
  top: 10%;
  left: 2%;
  font-weight: 450;

  font-size: 25px;
  color: black;
}
.box1:nth-child(4) {
  left: 75%;
  width: 30rem;
}
.box1:nth-child(5) {
  left: 40%;
  width: 30rem;
}
.box1:hover {
  transform: translateY(-5%);
}
.clock {
  position: relative;
  left: 190%;
  color: black;
  font-size: 30px;
}
.null {
  width: 0.4em;
  position: absolute;
  border-radius: 5px;
  top: 30%;
  left: 10%;
  height: 7em;
  background: rgb(21, 21, 21);
}
.null:nth-child(1) {
  left: -29%;
  background-color: rgb(60, 60, 60);
}
.Level {
  color: black;
  position: relative;
  top: 30%;
  left: 15%;
}
.GD {
  position: absolute;
  width: 200px;
  color: rgb(60, 59, 59);
  font-size: 10px;
  top: 22%;
}
.Level4 {
  color: black;
  position: absolute;
  top: 63%;
  left: 15%;
}
.DS {
  color: rgb(60, 59, 59);
  font-size: 10px;
  top: 119%;
  width: 200px;
  position: absolute;
}
.time {
  position: absolute;
  font-size: 10px;
  left: 350%;
  width: 100px;
  opacity: 50%;
  padding: 3px;
  background: rgba(41, 171, 130, 0.386);
  border-radius: 12px;
}
.time2 {
  position: absolute;
  font-size: 10px;
  left: 390%;
  width: 100px;
  opacity: 80%;
  padding: 3px;
  background: rgb(22, 107, 255);
  border-radius: 12px;
}
</style>
