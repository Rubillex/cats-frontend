<template>
  <div class="content">
    <div class="header__wrapper" :class="{ shadow: showShadow }">
      <div class="container">
        <div class="header">
          <img alt="logo" src="@/assets/images/logo.svg" />
          <div class="header__navigation">
            <span class="header__item">главная</span>
            <span class="header__item">о питомнике</span>
            <span class="header__item"> производители</span>
            <span class="header__item"> бенгальские котята</span>
            <span class="header__item">контакты</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const showShadow = ref(false);

window.onscroll = () => {
  showShadow.value = document.documentElement.scrollTop > 250;
}
</script>

<style scoped lang="scss">
.content {
  min-height: 100vh;
  width: 100%;
}

.container {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}

.header {
  display: flex;
  flex-direction: row;

  &__wrapper {
    height: max-content;
    background: $white;
    padding: 15px 0;
    position: sticky;
    top: 0;
    z-index: 100;
    transition: all .7s ease-out;
    box-shadow: unset;

    &.shadow {
      transition: all .7s ease-out;
      box-shadow: 3px 11px 11px 11px rgba(166, 166, 166, 0.12), 0 6px 10px 7px rgba(0, 0, 0, 0.07);
    }
  }

  & img {
    max-height: 40px;
  }

  &__navigation {
    margin-left: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  &__item {
    font-size: 21px;
  }
}
</style>