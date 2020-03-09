<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item active">
            <router-link 
            tag="a"
            class="nav-link"
            :to="{name:'main'}">
              Home</router-link>
          <!-- <a class="nav-link" href="/">Home</a> -->
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li> -->
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>
