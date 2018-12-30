<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p v-highlight:background.delayed="'green'">V-highlight</p>
    <p v-local-highlight:background.delayed.blink="{ mainColor:'red',secondColor:'blue',delay:500}">Local-directive</p>
  </div>
</template>

<script>
export default {
  name: "app",
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers['delayed']) {
          delay = 3000;
        }
        if (binding.modifiers['blink']) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, 1000);
          }, binding.value.delay);
        } else {
          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }
      }
    }
  }
};
</script>

<style>
</style>
