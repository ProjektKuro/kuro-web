<template>
  <div class="about">
    <span class="heading">{{$t('Info.AboutKuro')}}</span>
    <p>{{$t('Info.AboutKuroDescription')}}</p>
    <span class="heading">{{$t('Info.MotivationHeading')}}</span>
    <p>{{$t('Info.MotivationDescription')}}</p>
  </div>
</template>

<style scoped>
.about {
  text-align: left;
}
.about, p {
  margin: 1.5rem auto;
  margin-top: .8rem;
}
.heading {
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
