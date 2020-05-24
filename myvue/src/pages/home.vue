<template>
  <div class="container">
    <div class="d1">
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .container{
        margin: 0;
        padding: 0;
        background: #000000;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .d1{
        position: relative;
        width: 360px;
        height: 520px;
        overflow: hidden;
    }
    .d1 span{
        position: absolute;
        top:0;
        width: 120px;
        height: 100%;
        background: #ffffff
    }
    .d1::after{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 200%;
        background: linear-gradient(to right,transparent ,#000000,#000);
        z-index: 3;
        animation: animate 4s  infinite linear forwards
    }
    @keyframes animate{
        0%{
            right: 0;
        }
        100%{
            right: -200%;
        }
    }
    span:nth-child(1){
        background: #f00;
        left: 0;
    }
    span:nth-child(2){
        background: #f00;
        left: 0;
        transform-origin: top;
        transform:skewX(25deg);
        box-shadow: 0 0 40px rgba(0,0,0,1);
        z-index: 1;
    }
    span:nth-child(3){
        background: #f00;
        right: 0;
    }
</style>