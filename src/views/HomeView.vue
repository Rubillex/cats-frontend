<template>
  <div ref="fullpageRef" class="fullpage-wrapper">
    <div class="section">
      <div class="content">
        <div class="paw paw__1">
          <scroll-parallax speed="0.6">
            <img class="untouchable" width="46" src="@/assets/images/paw.svg"/>
          </scroll-parallax>
        </div>
        <div class="paw paw__2">
          <scroll-parallax speed="0.37">
            <img class="untouchable" width="56" src="@/assets/images/paw.svg"/>
          </scroll-parallax>
        </div>
        <div class="paw paw__3">
          <scroll-parallax speed="0.5">
            <img class="untouchable" width="60" src="@/assets/images/paw.svg"/>
          </scroll-parallax>
        </div>
        <div class="paw paw__4">
          <scroll-parallax speed="0.55">
            <img class="untouchable" width="56" src="@/assets/images/paw.svg"/>
          </scroll-parallax>
        </div>
        <div class="paw paw__5">
          <scroll-parallax speed="0.46">
            <img class="untouchable" width="50" src="@/assets/images/paw.svg"/>
          </scroll-parallax>
        </div>
        <div class="content__title-parappax">
          <scroll-parallax speed="0.4">
            <div class="content__title-wrapper">
              <span class="untouchable content__title">Питомник бенгальских кошек</span>
              <span class="untouchable content__name">REXFELIS</span>
            </div>
          </scroll-parallax>
        </div>
      </div>
    </div>
      <div class="section">
        section 2
      </div>
  </div>
</template>

<script setup>
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';
import {useWindowScroll, useDebounce} from '@vueuse/core';
import {onMounted, ref, watch} from 'vue';

</script>

<style scoped lang="scss">
.fullpage-wrapper {
  width: 100%;
  height: 100vh;
  //overflow-y: scroll;
  //scroll-snap-type: y mandatory;
  //scroll-padding: 100px;
}

.section {
  width: 100%;
  height: 100vh;
  //scroll-snap-align: start;
}

.content {
  position: relative;
  min-height: 100vh;

  &__title-parappax {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, 0);
  }

  &__title-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    letter-spacing: 2px;
    font-size: 22px;
    font-weight: 700;
    padding: 0;
    color: $accent-color-secondary;
  }

  &__name {
    font-size: 5vw;
    letter-spacing: 8px;
    font-weight: 900;
    color: $accent-color;
    line-height: 1;
    text-transform: uppercase;
  }
}

.about {
  display: flex;
  flex-direction: column;

  &__header {
    height: 60px;
    z-index: 2;
  }

  &__wpapper {
    position: relative;
  }

  &__card {
    max-width: 1440px;
    width: 100%;

    background: $white;
    padding: 20px;
    border-radius: 16px;
    box-shadow: 3px 11px 11px 11px rgba(166, 166, 166, 0.12), 0 6px 10px 7px rgba(0, 0, 0, 0.07);
  }
}

.card {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 15px;

  &__title {
    letter-spacing: 2px;
    font-size: 22px;
    font-weight: 700;
    padding: 0;
    color: $grey-title;
  }

  &__img {
    width: 30%;
    border-radius: 20px;
  }
}

.paw {
  position: absolute;

  & img {
    filter: invert(23%) sepia(14%) saturate(2812%) hue-rotate(301deg) brightness(96%) contrast(99%);;
  }

  &__1 {
    top: 50%;
    left: 20%;

    & img {
      transform: rotate(10deg);
    }
  }

  &__2 {
    top: 40%;
    left: 80%;

    & img {
      transform: rotate(-10deg);
    }
  }

  &__3 {
    top: 20%;
    left: 36%;

    & img {
      transform: rotate(20deg);
    }
  }

  &__4 {
    top: 76%;
    left: 45%;

    & img {
      transform: rotate(5deg);
    }
  }

  &__5 {
    top: 68%;
    left: 78%;

    & img {
      transform: rotate(-20deg);
    }
  }

  &__6 {
    top: 36%;
    left: 90%;
  }
}
</style>