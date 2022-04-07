<template>
<div class="slider-container">
    <div class="glide">
    <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
        <li class="glide__slide"><img class="slide-img" src="../pics/1.svg"></li>
        <li class="glide__slide"><img class="slide-img" src="../pics/2.svg"></li>
        <li class="glide__slide"><img class="slide-img" src="../pics/3.svg"></li>
        <li class="glide__slide"><img class="slide-img" src="../pics/4.svg"></li>
        <li class="glide__slide"><img class="slide-img" src="../pics/5.svg"></li>
        </ul>
    </div>
    <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet bullet" data-glide-dir="=2"></button>
        <button class="glide__bullet bullet" data-glide-dir="=3"></button>
        <button class="glide__bullet bullet" data-glide-dir="=4"></button>
    </div>
    <div class="glide__arrows pc" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><img style="transform: rotate(180deg);" src="../pics/arrow_active.svg"></button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">"><img src="../pics/arrow_active.svg"></button>
    </div>
    </div>
</div>

</template>


