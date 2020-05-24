<template>
  <div class="body">
    <div id="header">
      <slot name="header"></slot>
    </div>
    <div id="container" class="column">
      <div id="center">
        <slot name="center"></slot>
      </div>
    </div>
    <div id="left" class="column">
      <slot name="left"></slot>
    </div>
    <div id="right" class="column">
      <slot name="right"></slot>
    </div>
    <div id="footer">底部</div>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      console.log(123);
      console.log(124);
    }
  }
};
</script>

<style>
.body {
  min-width: 500px;
}

#container {
  width: 100%;
}

.column {
  float: left;
}

#center {
  margin-left: 200px;
  margin-right: 150px;
}

#left {
  width: 200px;
  margin-left: -100%;
}

#right {
  width: 150px;
  margin-left: -150px;
}

#footer {
  clear: both;
}
</style>
