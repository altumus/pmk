<template>
    <div class="container">
        <div class="slider">
        </div>
    </div>
    <div class="control">
        <div class="arrow" id="left" onclick=slide()><img src="../pics/arrow_active.svg" style="transform: rotate(180deg)"></div>
        <div class="bullet"></div>
        <div class="bullet"></div>
        <div class="bullet"></div>
        <div class="bullet"></div>
        <div class="bullet"></div>
        <div class="arrow" id="right" onclick=slide()><img src="../pics/arrow_active.svg"></div>
    </div>
</template>

<script>
    function slide(some){
        console.log(some);
    }
</script>
