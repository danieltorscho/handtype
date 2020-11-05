<template>
  <div id="app">
    <div class="output-wrap">
      <button @click="bold = !bold">B</button>
      <button @click="fontsize -= 1">-</button>
      <button @click="fontsize += 1">+</button>
      <h5>Output:</h5>
      <div :class="outputClass" :style="'font-size: ' + fontsize + 'px;'">
        <span v-for="(item, i) in text.split('')" :key="item + i" :class="`style${i % styles.length + 1}`" v-html="item" />
      </div>
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
      styles: [1, 2, 3],
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

button {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
  margin-right: 2px;
  cursor: pointer;
  transition: 200ms all;
}
button:last-of-type {
  margin-right: 0;
}
button:hover {
  background: #eee;
  border-radius: #ccc;
}

.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.output {
  margin: 30px 0 0 0;
  padding: 10px;
  word-wrap: break-word;
}

.bold {
  font-weight: bold;
}

.style1 { font-family: 'handwrite1'; }
.style2 { font-family: 'handwrite2'; }
.style3 { font-family: 'handwrite3'; }
</style>
