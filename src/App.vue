<template>
    <div id="app">
      <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        fixed
        app
      >
        <v-list dense>
          <v-list-tile :to="{name: 'Products'}">
            <v-list-tile-action>
              <v-icon>list</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Products</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile :to="{name: 'Create'}">
            <v-list-tile-action>
              <v-icon>create</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>New Product</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout>
            <router-view></router-view>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer color="indigo" app>
        <span class="white--text">&copy; 2017</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: true,
    };
  },
};
</script>

<style>
</style>
