<template>
  <div>
    <template v-if="isMobile()">
      <MobileLayout />
    </template>
    <template v-else>
      <DesktopLayout />
    </template>
  </div>
</template>

<script setup lang="ts">
import MobileLayout from "@/layouts/MobileLayout.vue";
import DesktopLayout from "@/layouts/DesktopLayout.vue";
import { isMobile } from '@/use/isMobile';
</script>
