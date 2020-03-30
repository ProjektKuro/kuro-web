<template>
  <div class="about">
    <span class="heading">{{$t('Info.AboutKuro')}}</span>
    <p>{{$t('Info.AboutKuroDescription')}}</p>
    <span class="heading">{{$t('Info.MotivationHeading')}}</span>
    <p>{{$t('Info.MotivationDescription')}}</p>
    <p>
      {{$t('Info.Created.First')}}
      <a
        href="https://wirvsvirushackathon.org/"
        target="_blank"
      >{{$t('Info.Created.Link')}}</a>
    </p>
    <img
      class="wir-vs-virus-logo"
      src="../assets/Logo_WirVsVirus.png"
      :alt="$t('Info.WirVsVirusLogo')"
    />
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

.wir-vs-virus-logo {
  background-color: #20beef;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
}
</style>
