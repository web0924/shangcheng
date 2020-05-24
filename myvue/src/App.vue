<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  /* height: 100%; */
}
input{
  border: none;
  outline: 0;
  caret-color:#377FFF;
}
::-webkit-input-placeholder{ /* WebKit, Blink, Edge */color: #CCCCCC;font-size:1rem;}

:-moz-placeholder { /* Mozilla Firefox 4 to 18 */   color:    #CCCCCC;font-size:1rem; }

::-moz-placeholder { /* Mozilla Firefox 19+ */   color:  #CCCCCC; font-size:1rem;}

:-ms-input-placeholder { /* Internet Explorer 10-11 */   color:  #CCCCCC;font-size:1rem; }

</style>
