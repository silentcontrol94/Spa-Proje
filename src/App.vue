<template>
  <div>
    <div id="sidebar-menu" class="sidebar">
        <span class="closebtn" onclick="closeSideBar()">&times;</span>
        <ul>
        <li id="1"><a href="#">Home</a></li>
        <li id="2"><a href="#">Menu</a></li>
        <li id="3"><a href="#">Menu</a></li>
        <li id="4"><a href="#">Contact</a></li>
    </ul>
      </div>
      <!--Açılır Menü Hamburger Simgesi-->
      <span class="openbtn" style="font-size:30px;cursor:pointer" onclick="openSideBar()">&#9776;</span>
      <app-body-contents></app-body-contents>
      <div class="pop-up">
          Açılır Menü İçeriği
      </div> 
  </div>
</template>

<script>
import BodyContents from "./Components/bodyContents"
export default {
  data() {
    return {
      
    }
  },
    components : {
      appBodyContents : BodyContents,
    }
  }
</script>
