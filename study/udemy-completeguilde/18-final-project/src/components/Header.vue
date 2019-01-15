<template>
  <div>
    <b-navbar toggleable="md" type="light " variant="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <router-link to="/" tag="b-navbar-brand">
        <a>Stock Trader</a>
      </router-link>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <router-link tag="b-nav-item" activeClass="active" to="/postfolio">
            <a>PostFolio</a>
          </router-link>
          <router-link tag="b-nav-item" activeClass="active" to="/stocks">
            <a>Stocks</a>
          </router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
             <router-link tag="b-nav-item" activeClass="active" to="/postfolio">
              <a>End Day</a>
            </router-link>
          <b-nav-item-dropdown text="Save & Load" right>
            <b-dropdown-item href="#">Save</b-dropdown-item>
            <b-dropdown-item href="#">Load</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style >
   *{
       text-decoration: none
       
   }
</style>