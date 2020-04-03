<template>
  <div class="footer">
    <!-- WirVsVirus Hackathon Logo -->
    <div>
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
    <div class="github-container">
      <img class="github-logo" src="@/assets/github-mark.png" alt="Github Logo" />
      <p class="logo-caption">
        <a href="https://github.com/ProjektKuro/" target="_blank">Github-Repository</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
.footer {
  display: flex;
  justify-content: center;
}
.github-container {
  display: flex;
  flex-direction: column;
}
.github-logo {
  margin: 2rem 3rem;
}
.logo-caption {
  margin-top: 0.25rem;
  text-align: center;
}
.wir-vs-virus-logo {
  /* margin: 0 auto; */
  max-height: 13.7rem;
  max-width: 50vw;
  width: 100%;
}
</style>