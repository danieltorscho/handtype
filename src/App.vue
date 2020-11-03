<template>
  <div id="app">
    <div class="output-wrap">
      <button @click="bold = !bold">B</button>
      <button @click="fontsize -= 1">-</button>
      <button @click="fontsize += 1">+</button>
      <h5>Output:</h5>
      <div :class="outputClass" :style="'font-size: ' + fontsize + 'px;'" v-html="output" />
    </div>
    <input :class="'input'" type="text" v-model="text" placeholder="Type some text here">
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      text: '',
      output: '',
      bold: false,
      fontsize: 20
    }
  },

  computed: {
    outputClass () {
      return {
        'output': true,
        'bold': this.bold,  
      }
    }
  },

  watch: {
    text (val) {
      // Characters from text
      const characters = val.split('').map(i => {
        // Random number number to choose between fonts
        let random = Math.floor(Math.random() * (3 - 1 + 1)) + 1
        return '<span class="style' + random + '">' + i + '</span>'
      })
      this.output = characters.join('')
    }
  }
}
</script>

<style>
@font-face {
  font-family: "handwrite1";
  src: local("handwrite1"), url(./assets/fonts/handwrite1.ttf) format("truetype");
}
@font-face {
  font-family: "handwrite2";
  src: local("handwrite2"), url(./assets/fonts/handwrite2.ttf) format("truetype");
}
@font-face {
  font-family: "handwrite3";
  src: local("handwrite3"), url(./assets/fonts/handwrite3.ttf) format("truetype");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.input {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 10px;
  border: 1px solid #ccc;
}

.output {
  margin: 30px 0 0 0;
  padding: 10px;
}

.bold {
  font-weight: bold;
}

.style1 { font-family: 'handwrite1'; }
.style2 { font-family: 'handwrite2'; }
.style3 { font-family: 'handwrite3'; }
</style>
