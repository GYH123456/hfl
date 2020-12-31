<template>
  <div class="main" v-title data-title="中山市恒丰利织造有限公司">
    <!-- 导航栏 -->
    <nav
      class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top"
    >
      <div class="container">
        <a class="navbar-brand"
          ><img
            src="../assets/images/logo.png"
            width="50"
            height="50"
            alt=""
            loading="lazy"
          />
          中山市恒丰利织造有限公司</a
        >
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" style="margin-right: 18px;">
              <a class="nav-link" >关于我们</a>
            </li>

            <li class="nav-item" style="margin-right: 18px;">
              <a class="nav-link">联系我们</a>
            </li>
            <li class="nav-item" style="margin-right: 18px;">
              <a class="nav-link" @click="goPage('Login')">客户登录</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">公司内部登录</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- 轮播图 -->
    <div
      id="carouselExampleCaptions"
      class="carousel slide auto-img"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/images/001.jpg"
            class="d-block w-100 auto-img"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>扁机领</h5>
            <p>恒丰织造有限公司</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/002.jpg"
            class="d-block w-100 auto-img"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>自动间</h5>
            <p>恒丰织造有限公司</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/003.jpg"
            class="d-block w-100 auto-img"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>染厂染色</h5>
            <p>恒丰织造有限公司</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/004.jpg"
            class="d-block w-100 auto-img"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <!-- Page Content -->
    <div class="container">
      <h1 class="my-4">欢迎来到恒丰利</h1>
      <!-- Marketing Icons Section -->
      <div class="row">
        <div class="col-lg-4 mb-4">
          <div class="card h-100">
            <h4 class="card-header">扁机领</h4>
            <div class="card-body">
              <p class="card-text">
                一 )
                、电脑提花领：芝麻花领、格仔提花领、英文字提花领、收针领(牛角领)
                、双面领等各种不规则图案电脑提花领。 二 )
                、直纹针织罗纹带：直纹间色罗纹带、直纹净色罗纹带收针领(牛角领)、之字罗纹带。
                三 ) 、3 针 -18 针扁机领罗纹、衫脚、袖口： 1*1 扁机领、 2*2
                扁机罗纹、 3*3 扁机罗纹、 4*4 扁机罗纹。 四 )
                、人字带：棉织人字带、毛织人字、 PP 人字带。
              </p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-4">
          <div class="card h-100">
            <h4 class="card-header">自动间布料</h4>
            <div class="card-body">
              <p class="card-text">四色及六色自动间布，排间布</p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-4">
          <div class="card h-100">
            <h4 class="card-header">染厂染色</h4>
            <div class="card-body">
              <p class="card-text">
                位于番中公路旁，交通便利。本部经营染领、纱、布等业务。有专业染领拉缸、J缸，提供专业的染领服务。有10至1000磅各种型号纱缸，满足客户不同量订单的需求。有2吨/日的染布产能。本部设备齐全，先进，可满足客户的各种需求。经过5年的努力，本部打造出一只过硬的管理团队。质量好，交货快，返修率低。
              </p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <!-- /.row -->
      <!-- Portfolio Section -->
      <h2>Portfolio Heading</h2>
      <div class="row">
        <div class="col-lg-4 col-sm-6 portfolio-item">
          <div class="card h-100">
            <a href="#"
              ><img
                class="card-img-top"
                src="http://placehold.it/700x400"
                alt=""
            /></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">Project One</a>
              </h4>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus
                sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum
                tempora ex quae? Nihil, dolorem!
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 portfolio-item">
          <div class="card h-100">
            <a href="#"
              ><img
                class="card-img-top"
                src="http://placehold.it/700x400"
                alt=""
            /></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">Project Two</a>
              </h4>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                viverra euismod odio, gravida pellentesque urna varius vitae.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 portfolio-item">
          <div class="card h-100">
            <a href="#"
              ><img
                class="card-img-top"
                src="http://placehold.it/700x400"
                alt=""
            /></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">Project Three</a>
              </h4>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                quisquam, error quod sed cumque, odio distinctio velit nostrum
                temporibus necessitatibus et facere atque iure perspiciatis
                mollitia recusandae vero vel quam!
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 portfolio-item">
          <div class="card h-100">
            <a href="#"
              ><img
                class="card-img-top"
                src="http://placehold.it/700x400"
                alt=""
            /></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">Project Four</a>
              </h4>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                viverra euismod odio, gravida pellentesque urna varius vitae.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 portfolio-item">
          <div class="card h-100">
            <a href="#"
              ><img
                class="card-img-top"
                src="http://placehold.it/700x400"
                alt=""
            /></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">Project Five</a>
              </h4>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                viverra euismod odio, gravida pellentesque urna varius vitae.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 portfolio-item">
          <div class="card h-100">
            <a href="#"
              ><img
                class="card-img-top"
                src="http://placehold.it/700x400"
                alt=""
            /></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">Project Six</a>
              </h4>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                earum nostrum suscipit ducimus nihil provident, perferendis rem
                illo, voluptate atque, sit eius in voluptates, nemo repellat
                fugiat excepturi! Nemo, esse.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- /.row -->
      <!-- Features Section -->
      <div class="row">
        <div class="col-lg-6">
          <h2>Modern Business Features</h2>
          <p>The Modern Business template by Start Bootstrap includes:</p>
          <ul>
            <li>
              <strong>Bootstrap v4</strong>
            </li>
            <li>jQuery</li>
            <li>Font Awesome</li>
            <li>Working contact form with validation</li>
            <li>Unstyled page elements for easy customization</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
            omnis doloremque non cum id reprehenderit, quisquam totam aspernatur
            tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum
            ducimus unde.
          </p>
        </div>
        <div class="col-lg-6">
          <img
            class="img-fluid rounded"
            src="http://placehold.it/700x450"
            alt=""
          />
        </div>
      </div>
      <!-- /.row -->
      <hr />
      <!-- Call to Action Section -->
      <div class="row mb-4">
        <div class="col-md-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
            expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo
            praesentium cum alias asperiores commodi.
          </p>
        </div>
        <div class="col-md-4">
          <a class="btn btn-lg btn-secondary btn-block" href="#"
            >Call to Action</a
          >
        </div>
      </div>
    </div>
    <!-- /.container -->

    <!-- Footer -->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">
          Copyright &copy; 恒丰利织造有限公司 2020
        </p>
      </div>
      <!-- /.container -->
    </footer>
  </div>
</template>

<script>
import "../assets/css/main.less";

export default {
  data() {
    return {};
  },

  methods: {
    goPage(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style lang="less" scoped>

</style>