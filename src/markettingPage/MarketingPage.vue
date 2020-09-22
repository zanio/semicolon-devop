<template>
  <!--==========================
  Header
  ============================-->
  <div>
    <button v-if="showNavigationButton" @click="menuIcon"
      type="button" ref="mobileToggle" class="mobile-nav-toggle d-lg-none"><i ref="iElement"
                                        :class="['fa',` ${mobileIconMenu}`]"></i></button>
  <header id="header" class="fixed-top">
    <div class="container">

      <div class="logo float-left">
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <h1 class="text-light"><a href="#header"><span>NewBiz</span></a></h1> -->
        <a href="#intro" class="scrollto"><img :src="require('@/assets/ds-suite-logo.svg')" alt="" class="img-fluid"></a>
      </div>

      <nav ref="mobileNav"  class="main-nav float-right d-none d-lg-block">
        <ul>
          <li class="active"><router-link to="#intro">Home</router-link></li>
          <li><router-link to="#about">About Us</router-link></li>
          <li><router-link to="#services">Services</router-link></li>
          <li><router-link to="#contact">Contact Us</router-link></li>
          <li><router-link to="/register"><v-btn elevation="0" shaped color="primary" ripple=false >Register</v-btn></router-link></li>
          <li><router-link to="/login"><v-btn elevation="0" shaped color="primary" outlined link ripple=false >Login</v-btn></router-link></li>
        </ul>
      </nav><!-- .main-nav -->

    </div>
  </header><!-- #header -->

  <!--==========================
    Intro Section
  ============================-->
  <section id="intro" class="clearfix">
    <div class="container">

      <div class="intro-img">
        <img :src="require('@/assets/img/undraw_nakamoto_2iv6.svg')" alt="" class="img-fluid">
      </div>

      <div class="intro-info">
<!--        we’re automating the entire DevOps processes into one suite.-->
        <h2>We’re Automating the entire <br><span>DevOps processes</span><br> into one suite</h2>
        <div>
          <router-link to="/register" href="" class="btn-get-started scrollto">Get Started</router-link>
          <router-link to="/#services" href="" class="btn-services scrollto">Our Services</router-link>
        </div>
      </div>

    </div>
  </section><!-- #intro -->

  <main id="main">

    <!--==========================
      About Us Section
    ============================-->
    <section id="about">
      <div class="container">

        <header class="section-header">
          <h3>About Us</h3>
          <p>Introducing the Semicolon DS SUITE</p>
        </header>

        <div class="row about-container">

          <div class="col-lg-6 content order-lg-1 order-2">
            <p>
              Ds suite simply means DevOps Service Suite. This platform offers a unique DevOps-as-a-service approach to project delivery.
            </p>

            <div class="icon-box wow fadeInUp">
              <div class="icon"><i class="fa fa-shopping-bag"></i></div>
              <h4 class="title"><a href="">Offerings</a></h4>
              <p class="description">DS Suite is shipped with integration of custom pipelines </p>
            </div>

            <div class="icon-box wow fadeInUp" data-wow-delay="0.2s">
              <div class="icon"><i class="fa fa-photo"></i></div>
              <h4 class="title"><a href="">SeamLess Experience</a></h4>
              <p class="description">The aim is to provide seamless experiences for Semicolon teams</p>
            </div>

            <div class="icon-box wow fadeInUp" data-wow-delay="0.4s">
              <div class="icon"><i class="fa fa-bar-chart"></i></div>
              <h4 class="title"><a href="">CI / CD</a></h4>
              <p class="description">We set up the test environment for your code,
                build your project artifacts and deploy the application to the cloud</p>
            </div>

          </div>

          <div class="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
            <img :src="require('@/assets/img/undraw_team_spirit_hrr4.svg')" class="img-fluid" alt="">
          </div>
        </div>

        <div class="row about-extra">
          <div class="col-lg-6 wow fadeInUp">
            <img :src="require('@/assets/img/undraw_interaction_design_odgc.svg')" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <h4>Objective.</h4>
            <p>
              We want to programmatically design a system that automatically does all the DevOps processes
              that we would ordinarily have needed to do manually for each team as a service.
            </p>
            <p>
              Thus, we’re automating the entire DevOps processes into one suite.
            </p>
          </div>
        </div>

        <div class="row about-extra">
          <div class="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <img :src="require('@/assets/img/undraw_teacher_35j2.svg')" class="img-fluid" alt="">
          </div>

          <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
            <h4>What we do</h4>
            <p>
              We are a team of DevOps engineers that are concerned with creating low cost CI/CD DevOps solutions
              to serve as an affordable run-to alternative for developers who cannot afford the high costs of deployment offered by the Big-Dogs in the industry.
            </p>
            <p>
              We thus have created various solutions to meet the various deployment needs of your chosen development stack and have packaged
              it in a very user-friendly form that has simplified the entire process of deployment for you to just few clicks and filling a simple form.
            </p>
            <p>
              The process begins at the point where the developer comes on-board to the platform by
              registering via the register handle, and then the process develops until the final stage when their apps are deployed into production.
            </p>
          </div>

        </div>

      </div>
    </section><!-- #about -->

    <!--==========================
      Services Section
    ============================-->
    <section id="services" class="section-bg">
      <div class="container">

        <header class="section-header">
          <h3>Services</h3>
          <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
        </header>

        <div class="row">

          <div class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon"><i class="ion-ios-analytics-outline" style="color: #ff689b;"></i></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon"><i class="ion-ios-bookmarks-outline" style="color: #e9bf06;"></i></div>
              <h4 class="title"><a href="">Dolor Sitema</a></h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon"><i class="ion-ios-paper-outline" style="color: #3fcdc7;"></i></div>
              <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
              <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon"><i class="ion-ios-speedometer-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon"><i class="ion-ios-world-outline" style="color: #d6ff22;"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon"><i class="ion-ios-clock-outline" style="color: #4680ff;"></i></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>

        </div>

      </div>
    </section><!-- #services -->

    <!--==========================
      Why Us Section
    ============================-->
    <section id="why-us" class="wow fadeIn">
      <div class="container">
        <header class="section-header">
          <h3>Why choose us?</h3>
          <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
        </header>

        <div class="row row-eq-height justify-content-center">

          <div class="col-lg-4 mb-4">
            <div class="card wow bounceInUp">
              <i class="fa fa-diamond"></i>
              <div class="card-body">
                <h5 class="card-title">Corporis dolorem</h5>
                <p class="card-text">Deleniti optio et nisi dolorem debitis. Aliquam nobis est temporibus sunt ab inventore officiis aut voluptatibus.</p>
                <a href="#" class="readmore">Read more </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-4">
            <div class="card wow bounceInUp">
              <i class="fa fa-language"></i>
              <div class="card-body">
                <h5 class="card-title">Voluptates dolores</h5>
                <p class="card-text">Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur.</p>
                <a href="#" class="readmore">Read more </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-4">
            <div class="card wow bounceInUp">
              <i class="fa fa-object-group"></i>
              <div class="card-body">
                <h5 class="card-title">Eum ut aspernatur</h5>
                <p class="card-text">Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex. </p>
                <a href="#" class="readmore">Read more </a>
              </div>
            </div>
          </div>

        </div>

        <div class="row counters">

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">274</span>
            <p>Clients</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">421</span>
            <p>Projects</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">1,364</span>
            <p>Hours Of Support</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">18</span>
            <p>Hard Workers</p>
          </div>

        </div>

      </div>
    </section>

    <!--==========================
      Contact Section
    ============================-->
    <section id="contact">
      <div class="container-fluid">

        <div class="section-header">
          <h3>Contact Us</h3>
        </div>

        <v-row justify="center" class="row wow fadeInUp">
        <v-col offset-md="2" class="d-sm-none"/>
          <v-col cols="12" md="8" sm="12" class="col-lg-6 col-md-8 col-sm-12">
            <div class="row">
              <div class="col-md-5 app-background-color">
                <i class="ion-ios-location-outline"></i>
                <p>A108 Adam Street, NY 535022</p>
              </div>
              <div class="col-md-4 app-background-color">
                <i class="ion-ios-email-outline"></i>
                <p>info@example.com</p>
              </div>
              <div class="col-md-3 app-background-color">
                <i class="ion-ios-telephone-outline"></i>
                <p>+1 5589 55488 55</p>
              </div>
            </div>

            <div class="form">
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage"></div>
              <form action="" method="post" role="form" class="contactForm">
                <div class="form-row">
                  <div class="form-group col-lg-6">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div class="validation"></div>
                  </div>
                  <div class="form-group col-lg-6">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  <div class="validation"></div>
                </div>
                <div class="text-center"><button type="submit" title="Send Message">Send Message</button></div>
              </form>
            </div>
          </v-col>
          <v-col offset-md="2" class="d-sm-none"/>

        </v-row>

      </div>
    </section><!-- #contact -->

  </main>

  <!--==========================
    Footer
  ============================-->
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-4 col-md-6 footer-info">
            <h3>DS SUITE</h3>
            <p>Feel free to contact the DevOps team with any issues you may encounter with your projects.</p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              A108 Adam Street <br>
              New York, NY 535022<br>
              United States <br>
              <strong>Phone:</strong> +1 5589 55488 55<br>
              <strong>Email:</strong> info@example.com<br>
            </p>

            <div class="social-links">
              <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
              <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
              <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
              <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
              <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
            </div>

          </div>

          <div class="col-lg-3 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
            <form action="" method="post">
              <input type="email" name="email"><input type="submit"  value="Subscribe">
            </form>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong>DS SUITE</strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!--
          All the links in the footer should remain intact.
          You can delete the links only if you purchased the pro version.
          Licensing information: https://bootstrapmade.com/license/
          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=NewBiz
        -->
        Designed by <a href="https://bootstrapmade.com/">Semicolon DevOp Team</a>
      </div>
    </div>
  </footer><!-- #footer -->

  <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
  <!-- Uncomment below i you want to use a preloader -->
  <div id="preloader"></div>
    <div v-show="showOverlay" ref="overlay" :class="['mobile-nav-overly',`${displayNature}`]"></div>
  </div>
</template>

<script>
export default {
  name: "MarketingPage",
  data() {
    return {
      showNavigationButton: false,
      showOverlay:false,
      mobileIconMenu:"fa-bars",
      displayNature:"none"
    };
  },

  created() {
    this.showNavigationButton = !this.showNavigationButton;
  },

  mounted() {
    const __mobileNav = this.$refs.mobileNav;
    const root = this.$el;
    if(__mobileNav){
      const clonedElement = __mobileNav.cloneNode(true);
      clonedElement.classList.add("mobile-nav","d-lg-none");
      clonedElement.classList.contains("d-lg-block") ? clonedElement.classList.remove("d-lg-block"):null;
      clonedElement.classList.contains("d-none") ? clonedElement.classList.remove("d-none"):null;
      clonedElement.setAttribute("ref","mobileVersion");
      root.append(clonedElement);
    }
  },
  methods:{
    toggle(){
      Element.prototype.toggle = function() {
        if ( this.style.display === '' || this.style.display === 'block' ) {
          this.style.display = 'none';
        }else{
          this.style.display = 'block';
        }
      }
    },
    menuIcon(event){
      const root = this.$el;
      console.log(event);
      // this.toggle();
      root.classList.toggle('mobile-nav-active');
      if(this.mobileIconMenu === "fa-bars"){
        this.mobileIconMenu = "fa-times";
        this.showOverlay = true;
        this.displayNature = "block";
        // this.$refs.mobileVersion.classList.
      } else{
        this.mobileIconMenu= "fa-bars";
        this.showOverlay = false;
        this.displayNature = "none";
      }
      // this.$refs.overlay.toggle();

    }
  }
}
</script>

<style scoped>
@import "lib/bootstrap/css/bootstrap.min.css";
@import "lib/font-awesome/css/font-awesome.min.css";
@import "lib/animate/animate.min.css";
@import "lib/ionicons/css/ionicons.min.css";
@import "lib/owlcarousel/assets/owl.carousel.min.css";
@import "lib/lightbox/css/lightbox.min.css";
@import "css/style.css";

</style>