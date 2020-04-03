<template>
  <div class="footer">
    <!-- WirVsVirus Hackathon Logo -->

    <div class="link-container">
      <div class="logo-wrapper">
        <img
          class="wir-vs-virus-logo"
          src="@/assets/Logo_WirVsVirus.png"
          :alt="$t('Info.WirVsVirusLogo')"
        />
      </div>

      <p class="logo-caption">
        {{$t('Info.Created.First')}}
        <a
          href="https://wirvsvirushackathon.org/"
          target="_blank"
        >{{$t('Info.Created.Link')}}</a>
      </p>
    </div>

    <div class="link-container">
      <div class="github-container">
        <img class="github-logo" src="@/assets/github-mark.png" alt="Github Logo" />
      </div>

      <p class="logo-caption">
        Kuro's
        <a href="https://github.com/ProjektKuro/" target="_blank">Github-Repository.</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid lightgrey;
}
.footer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 1rem;
  margin: 0 auto;
}
.github-container {
  display: flex;
}
.github-logo {
  margin: 1rem auto;
}
.footer-row {
  display: flex;
  flex-direction: row;
}
.logo-caption {
  margin-top: 0.25rem;
  text-align: center;
}
.link-container {
  margin: 0.5rem 1rem;
  padding: 0.5rem;
}
.logo-wrapper {
    text-align: center;
}
.wir-vs-virus-logo {
  text-align: center;
  max-height: 13.7rem;
  max-width: 50vw;
  width: 100%;
}
</style>