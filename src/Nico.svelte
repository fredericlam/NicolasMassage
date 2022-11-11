<script lang="ts">
import svelteLogo from './assets/svelte.svg'
import viteLogo from './assets/vite.svg'
import data from './assets/data.json';

let about: { id: number, text: string , picture : string}[] = data.about ;
let services: { id: number, name: string, price : number , duration : string }[] = data.services ;
let avis: { id: number, title: string}[] = data.avis ;
let infos:object = data.infos ; 

</script>

<main>

  <!--<section id="home" class="home-area pt-100">

    <div class="container-fluid position-relative">
      <p>Plus de 10 ans de gym a haut niveau a jeune m’ont permis de connaitre mon corps et d’etre massé aux entrainements. Le massage m’a aussi été transmis par ma mère professeur de sport qui me massait après les entrainements egalement.</p>

      <p>J’ai toujours massé les gens autout de moi jusqu’au jour ou j’ai été bloqué dans mes mouvements et par ma connaisse et j’ai eu envie d’apprendre le massage de manière professionnel.</p>

      <p>Formé par « A fleur de peau » il ya un an et demi, j’ai depuis deplacé ma table dans toute la France pour regaler mes amis et la famille. Aujourd’hui j’ai envie de vous transmettre ce ressentit.</p>

      <p>Je travaillle dans le cinema comme directeur de la photographie mais loin des plateaux cette activité apasiante et a la fois dans le don de soi de son energie ...</p>

    </div>

  </section>-->

  <section id="home" class="slider-area pt-100">
      <div class="container-fluid position-relative">
          <div class="slider-active">

              {#each about as a_bout}
                <div class="single-slider">
                    <div class="slider-bg">
                        <div class="row no-gutters align-items-center ">
                            <div class="col-lg-4 col-md-5">
                                <div class="slider-product-image d-none d-md-block">
                                    <img src="{a_bout.picture}" alt="{a_bout.title}">
                                    <!--<div class="slider-discount-tag">
                                        <p>-50% <br> OFF</p>
                                    </div>-->
                                </div> <!-- slider product image -->
                            </div>
                            <div class="col-lg-8 col-md-7">
                                <div class="slider-product-content">
                                    <h1 class="slider-title mb-10" data-animation="fadeInUp" data-delay="0.3s">{a_bout.title}</h1>
                                    <p class="mb-25" data-animation="fadeInUp" data-delay="0.9s">{a_bout.text}</p>
                                    <!--<a class="main-btn" href="/" data-animation="fadeInUp" data-delay="1.5s">Explore More <i class="lni-chevron-right"></i></a>-->
                                </div> <!-- slider product content -->
                            </div>
                        </div> <!-- row -->
                    </div> <!-- container -->
                </div> <!-- single slider -->
              {/each}

          </div> <!-- slider active -->

          <div class="slider-social">
              <div class="row justify-content-end">
                  <div class="col-lg-7 col-md-6">
                      <ul class="social text-right">
                          <li><a href="/"><i class="lni-facebook-filled"></i></a></li>
                          <li><a href="/"><i class="lni-twitter-original"></i></a></li>
                          <li><a href="/"><i class="lni-instagram"></i></a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div> <!-- container fluid -->
  </section>

  <section id="services" class="services-area pt-100 pb-130">
      <div class="container">
          <div class="row">
              <div class="col-lg-4">
                  <div class="showcase-title pt-25">
                      <h2 class="title">Services</h2>
                  </div> <!-- showcase title -->
              </div> 
              <div class="col-lg-8">
                  <div class="showcase-title pt-25">
                      <p>Je masse dans mon salon, bougies, encens, douche possible. Attention j’ai un chat que laisse dans une autre partie de l’appart pendant le massage mais les poils peuvent presents dans le salon.</p>
                      <p>Temps de recuperation où je vous proposerais un thé drainant.</p>
                      <p>Je travaille avec des huiles neutres sans allergènes. J’utilise uniquement des huiles BIO première pression à froid et des Huiles Essentielles de qualité.</p>
                  </div> <!-- showcase title -->
              </div>
          </div> <!-- row -->
          <div class="row">
              <div class="col-lg-12">
                  <div class="showcase-active mt-65">
                      {#each services as service}
                      <div class="single-showcase {service.class}">
                          <div class="price {service.class}">
                              <p>{service.price}€</p>
                          </div>
                          <div class="duration {service.class}">
                              <p><i class="lni lni-timer"></i>{service.duration}</p>
                          </div>
                          <div class="desc">
                            <p>{service.desc}</p>
                          </div>
                          <img src="{ service.picture }" alt="{service.name}">
                          <a href="/" class="main-btn {service.class}">{service.name}</a>
                      </div> <!-- single showcase -->
                      {/each}
                  </div> <!-- showcase active -->
              </div>
          </div> <!-- row -->
      </div> <!-- container -->
  </section>

  <section id="agenda">
    
    <div class="container">

      <p style="margin:20px 0">De part mon activité, j’ouvre des plages à la reservation de massages à des moments precis. Voici les créneaux disponibles ci-dessous.</p>
      <iframe title="agenda" src="https://calendar.google.com/calendar/embed?src=family07472837986232886021%40group.calendar.google.com&ctz=Europe%2FParis" style="border: 0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>

    </div>

  </section>

  <section id="avis" class="blog-area pt-125">
      <div class="container">
          <div class="row">
              <div class="col-lg-4">
                  <div class="showcase-title pt-25">
                      <h2 class="title">Avis</h2>
                  </div> <!-- showcase title -->
              </div> 
          </div>
          <div class="row justify-content-center">
              
              {#each avis as av}
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog mt-30">
                        <div class="blog-content">
                            <div class="content">
                                <h4 class="title">"{av.title}"</h4>
                                <span>{ av.date }</span>
                            </div>
                            <div class="meta d-flex justify-content-between align-items-center">
                                <div class="meta-admin d-flex align-items-center">
                                   
                                    <div class="admin-title">
                                        <h6 class="title"><a href="/">{ av.author }</a></h6>
                                    </div>
                                </div>  <!-- meta admin -->
                                <div class="meta-icon">
                                    <ul>
                                        <li><a href="/"><i class="lni-share"></i></a></li>
                                        <li><a href="/"><i class="lni-heart"></i></a></li>
                                    </ul>
                                </div> <!-- meta icon -->
                            </div> <!-- meta -->
                        </div>
                    </div> <!-- single blog -->
                </div>
              {/each}

          </div> <!-- row -->
      </div> <!-- container -->
  </section>

  <section id="contact" class="contact-area pt-115">
    <div class="container">
        <div class="row">
              <div class="col-lg-4">
                  <div class="showcase-title pt-25">
                      <h2 class="title">Contactez-moi</h2>
                  </div> <!-- showcase title -->
              </div> 
          </div>
        <div class="contact-box mt-70">
            <div class="row">
                <div class="col-lg-4">
                    <div class="contact-info pt-25">
                        <h4 class="info-title">Informations de contact</h4>
                        <ul>
                            <li>
                                <div class="single-info mt-30">
                                    <div class="info-icon">
                                        <i class="lni-phone-handset"></i>
                                    </div>
                                    <div class="info-content">
                                        <p><a href="tel:{infos.phone}">{infos.phone}</a></p>
                                    </div>
                                </div> <!-- single info -->
                            </li>

                            <li>
                                <div class="single-info mt-30">
                                    <div class="info-icon">
                                        <i class="lni lni-whatsapp"></i>
                                    </div>
                                    <div class="info-content">
                                        <p><a href="https://wa.me/{infos.phone}">{infos.phone}</a></p>
                                    </div>
                                </div> <!-- single info -->
                            </li>

                            <li>
                                <div class="single-info mt-30">
                                    <div class="info-icon">
                                        <i class="lni-envelope"></i>
                                    </div>
                                    <div class="info-content">
                                        <p><a href="mailto:{infos.email}">{infos.email}</a></p>
                                    </div>
                                </div> <!-- single info -->
                            </li>
                            <li>
                                <div class="single-info mt-30">
                                    <div class="info-icon">
                                        <i class="lni-home"></i>
                                    </div>
                                    <div class="info-content">
                                        <p>{infos.address}</p>
                                    </div>
                                </div> <!-- single info -->
                            </li>
                        </ul>
                    </div> <!-- contact info -->
                </div> 
                <div class="col-lg-8">
                    <div class="contact-form">
                        <form id="contact-form" action="assets/contact.php" method="post" data-toggle="validator">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="single-form form-group">
                                        <input type="text" name="name" placeholder="Entrez votre nom" data-error="Name is required." required="required">
                                        <div class="help-block with-errors"></div>
                                    </div> <!-- single form -->
                                </div>
                                <div class="col-lg-6">
                                    <div class="single-form form-group">
                                        <input type="email" name="email" placeholder="Entrez votre email"  data-error="Valid email is required." required="required">
                                        <div class="help-block with-errors"></div>
                                    </div> <!-- single form -->
                                </div>
                                <div class="col-lg-12">
                                    <div class="single-form form-group">
                                        <textarea name="message" placeholder="Votre message" data-error="Please,leave us a message." required="required"></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div> <!-- single form -->
                                </div>
                                <p class="form-message"></p>
                                <div class="col-lg-12">
                                    <div class="single-form form-group">
                                        <button class="main-btn" type="submit">Envoyer</button>
                                    </div> <!-- single form -->
                                </div>
                            </div> <!-- row -->
                        </form>
                    </div> <!-- row -->
                </div> 
            </div> <!-- row -->
        </div> <!-- contact box -->
    </div> <!-- container -->
  </section>

  <section id="footer" class="footer-area">
      <div class="container">
          <div class="footer-widget pt-75 pb-120">
              <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="footer-logo mt-40">
                          <a href="/">
                              <img style="max-height: 80px;" src="assets/images/logo.png" alt="Logo">
                          </a>
                          <p class="mt-10">Nicolas Berteyac, masseur, de père en fils depuis 1876</p>
                          <ul class="footer-social mt-25">
                              <li><a href="/"><i class="lni-facebook-filled"></i></a></li>
                              <li><a href="/"><i class="lni-twitter-original"></i></a></li>
                              <li><a href="/"><i class="lni-instagram"></i></a></li>
                          </ul>
                      </div> <!-- footer logo -->
                  </div>
                  <!--<div class="col-lg-3 col-md-4 col-sm-5">
                      <div class="footer-link mt-50">
                          <h5 class="f-title">Services</h5>
                          <ul>
                              {#each services as serv}
                              <li><a href="/">{serv.name}</a></li>
                              {/each}
                          </ul>
                      </div>
                  </div>
                  <div class="col-lg-2 col-md-3 col-sm-5">
                      <div class="footer-link mt-50">
                          <h5 class="f-title">Avis</h5>
                          <ul>
                              {#each avis as av}
                              <li><a href="/">{av.title}</a></li>
                              {/each}
                          </ul>
                      </div>
                  </div>-->
                  <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="footer-info mt-50">
                          <h5 class="f-title">Informations de contact</h5>
                          <ul>
                              <li>
                                  <div class="single-footer-info mt-20">
                                      <span><i class="lni-phone-handset"></i></span>
                                      <div class="footer-info-content">
                                          <p><a href="tel:{infos.phone}">{infos.phone}</a></p>
                                      </div>
                                  </div> <!-- single footer info -->
                              </li>
                              <li>
                                  <div class="single-footer-info mt-20">
                                      <span><i class="lni-whatsapp"></i></span>
                                      <div class="footer-info-content">
                                          <p><a href="https://wa.me/{infos.phone}">{infos.phone}</a></p>
                                      </div>
                                  </div> <!-- single footer info -->
                              </li>
                               <li>
                                  <div class="single-footer-info mt-20">
                                      <span><i class="lni lni-facebook-messenger"></i></span>
                                      <div class="footer-info-content">
                                          <p><a href="http://m.me/{infos.facebook}">{infos.facebook}</a></p>
                                      </div>
                                  </div> <!-- single footer info -->
                              </li>
                              <li>
                                  <div class="single-footer-info mt-20">
                                      <span><i class="lni lni-envelope"></i></span>
                                      <div class="footer-info-content">
                                         <p><a href="mailto:{infos.email}">{infos.email}</a></p>
                                      </div>
                                  </div> <!-- single footer info -->
                              </li>
                              <li>
                                  <div class="single-footer-info mt-20">
                                      <span><i class="lni-home"></i></span>
                                      <div class="footer-info-content">
                                         <p>{infos.address}</p>
                                      </div>
                                  </div> <!-- single footer info -->
                              </li>
                          </ul>
                      </div> <!-- footer link -->
                  </div>
              </div> <!-- row -->
          </div> <!-- footer widget -->
          <div class="footer-copyright pt-15 pb-15">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="copyright text-center">
                          <p>Made with <a href="https://vitejs.dev/">ViteJS <img src="{viteLogo}" alt="Vite JS"></a>, on top of <a href="https://svelte.dev/" target="_blank">Svetle <img src="{svelteLogo}" alt="Svelte"></a>, theme from <a href="https://uideck.com" rel="nofollow">UIdeck</a></p>
                      </div> <!-- copyright -->
                  </div>
              </div> <!-- row -->
          </div> <!--  footer copyright -->
      </div> <!-- container -->
  </section>

</main>

<style>
  
</style>