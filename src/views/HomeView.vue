<template>
  <div :class="$style['page']">
    <header :class="$style['page__header']">
      <MySpace />
    </header>
    
    <AuroraBackground
      :from="'var(--color-brand-light)'"
      :x-percent="'40'"
      :y-percent="'90'"
    />
    <AuroraBackground
      :from="'var(--color-brand-light)'"
      :x-percent="'90'"
      :y-percent="'30'"
    />
    <AuroraBackground
      :from="'var(--color-tone-light)'"
      :x-percent="'0'"
      :y-percent="'0'"
    />
    <div :class="$style['page__container']">
     <span :class="$style['page__logo']">
        <img
        src="@/assets/images/logo.svg"
        :class="$style['page__logo']"
        alt="Geoguess Master Logo"
        >
     </span>
      <CreateGameForm />
      <span :class="$style['page__title']">Explore Your Next<br>Vacation Adventure &#127758;</span>
    </div>
    <footer :class="$style['page__footer']">
      <span
        :style="{
          color: 'var(--color-surface-primary)',
          fontSize: '12px',
          fontWeight: 500,
        }"
      >
        
        <strong>✈️ makemytrip.com</strong>
      </span>
    </footer>
  </div>
</template>

<script setup lang="ts">
import MySpace from "@/components/shared/MySpace.vue";
import AuroraBackground from "@/components/home/AuroraBackground.vue";
import CreateGameForm from "@/components/home/CreateGameForm.vue";

</script>

<style module lang="scss">
.page {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.page__header {
  @include pagePadding;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;

  @media #{$tablet-landscape} {
    height: 84px;
  }
}

.page__logo {
  height: 64px;
  position:fixed;
  top:5%;
  left:50%;
  transform : translateX(-50%);
  width:500px;
  @media #{$tablet-landscape} {
    height: 80px;
  }
}

.page__github-ribbon {
  position: absolute;
  top: 0;
  right: 0;
}

.page__container {
  @include pagePadding;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  top: 0;
  left: 0;
  padding-top: 48px;
  width: 100%;
  height: calc(100% - 84px); // header + footer
  @media #{$tablet-landscape} {
    height: calc(100% - 120px);
  }
}

.page__title {
  margin-top: 48px;
  font-size: 48px;
  font-weight: 700;
  text-align:center;
  line-height:1.19;
  color: var(--color-surface-primary);

  @media #{$tablet-landscape} {
    font-size: 60px;
  }
}

.page__footer {
  @include pagePadding;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 12px;
  width: 100%;
  height: 24px;
  @media #{$tablet-landscape} {
    height: 36px;
  }
}
</style>
