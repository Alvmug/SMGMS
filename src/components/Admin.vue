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

  <router-link to="/HM"
    ><div class="headmaster" @click="">
      <h1><FontAwesomeIcon :icon="faUserTie" class="tie" />HM</h1>
    </div>
  </router-link>
  <router-link to="/DoS"
    ><div class="DoS">
      <h1><FontAwesomeIcon :icon="faMarker" class="tie" />DoS</h1>
    </div></router-link
  >
  <router-link to="/Accountant"
    ><div class="Account">
      <h1><FontAwesomeIcon :icon="faMoneyCheckDollar" class="tie" />Accountant</h1>
    </div></router-link
  >
  <router-link to="/Mentron"
    ><div class="Mentron">
      <h1><FontAwesomeIcon :icon="faHand" class="tie" />Mentron</h1>
    </div></router-link
  >
  <router-link to="/Secretary"
    ><div class="Secretary">
      <h1><FontAwesomeIcon :icon="faFolderOpen" class="tie" />Secretary</h1>
    </div></router-link
  >
</template>
<script setup>
import {
  faFolderOpen,
  faHand,
  faMarker,
  faMoneyCheckDollar,
} from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash'
import { onBeforeMount, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const handleScroll = _.debounce(() => {
  const navbar = document.querySelector('.navbar')
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}, 10)

onBeforeMount(() => {
  const router = useRouter()
  let ask = window.prompt('Enter the code to access: ')
  if (ask !== '344') {
    Swal.fire({
      text: 'Invalid! Access Denied',
      background: '#1a1a1a',
      color: 'white',
      confirmButtonColor: '#d33',
    })
    router.push('/')
  } else {
    Swal.fire({
      icon: 'success',
      timer: 1500,
      text: 'Access Granted, transmitting to portal...',
      color: 'white',
      background: '#1a1a1a',
      radius: '12px',
    })
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style>
.headmaster:hover {
  background-color: black;
}
.headmaster {
  display: flex;
  position: absolute;
  top: 30%;
  border-radius: 12px;
  justify-content: center;
  align-content: center;
  left: 5%;
  width: 30rem;
  height: 20rem;
  background-color: rgb(27, 26, 26);
  transition: 0.5s ease;
}
.headmaster > h1 {
  position: relative;
  top: 25%;
  color: rgb(199, 199, 199);
  font-weight: 500;
  font-size: 6em;
}

.DoS {
  display: flex;
  position: absolute;
  top: 30%;
  border-radius: 12px;
  justify-content: center;
  align-content: center;
  left: 40%;
  width: 25rem;
  height: 20rem;
  background-color: rgb(27, 26, 26);
  transition: 0.5 ease;
}
.DoS:hover {
  background-color: black;
}
.DoS > h1 {
  position: relative;
  top: 20%;
  color: rgb(199, 199, 199);
  font-weight: 500;
  font-size: 6em;
}
.Secretary {
  display: flex;
  position: absolute;
  top: 75%;
  border-radius: 12px;
  justify-content: center;
  align-content: center;
  left: 40%;
  width: 25rem;
  height: 20rem;
  background-color: rgb(27, 26, 26);
  transition: 0.5 ease;
}
.Secretary:hover {
  background-color: black;
}
.Secretary > h1 {
  position: relative;
  top: 35%;
  color: rgb(199, 199, 199);
  font-weight: 500;
  font-size: 3.5em;
}
.Account > h1 {
  position: relative;
  top: 28%;
  color: rgb(199, 199, 199);
  font-weight: 500;
  font-size: 3.5em;
}
.Account:hover {
  background-color: black;
}
.Account {
  display: flex;
  position: absolute;
  top: 30%;
  border-radius: 12px;
  justify-content: center;
  align-content: center;
  left: 68%;
  width: 25rem;
  height: 20rem;
  background-color: rgb(27, 26, 26);
  transition: 0.5 ease;
}
.Mentron {
  display: flex;
  position: absolute;
  top: 75%;
  border-radius: 12px;
  justify-content: center;
  align-content: center;
  left: 5%;
  width: 30rem;
  height: 20rem;
  background-color: rgb(27, 26, 26);
  transition: 0.5 ease;
}
.Mentron:hover {
  background-color: black;
}
.Mentron > h1 {
  position: relative;
  top: 35%;
  color: rgb(199, 199, 199);
  font-weight: 500;
  font-size: 3.5em;
}
</style>
