<template>
  <div class="container">
    <main-banner></main-banner>
    <features></features>
    <about></about>
    <services></services>
    <choose></choose>
    <maintab></maintab>
    <project></project>
    <team></team>
    <Testimonial></Testimonial>
    <analysis></analysis>
    <blog></blog>
    <partner></partner>
  </div>
</template>

<script>
import MainBanner from '~/components/partials/MainBanner'
import Features from '~/components/partials/Features'
import About from '~/components/partials/About'
import Services from '~/components/partials/Services'
import Choose from '~/components/partials/Choose'
import Maintab from '~/components/partials/Maintab'
import Project from '~/components/partials/Project'
import Team from '~/components/partials/Team'
import Testimonial from '~/components/partials/Testimonial'
import Analysis from '~/components/partials/Analysis'
import Blog from '~/components/partials/Blog'
import Partner from '~/components/partials/Partner'

export default {
  components: {
    MainBanner,
    Features,
    About,
    Services,
    Choose,
    Maintab,
    Project,
    Team,
    Testimonial,
    Analysis,
    Blog,
    Partner
  }
}
</script>

<style></style>
