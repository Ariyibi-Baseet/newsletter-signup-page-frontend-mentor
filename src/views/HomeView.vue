<template>
  <!-- <div class="container"> -->
  <div class="wrapper d-flex align-items-center min-vh-100">
    <div class="newsletter-wrapper mx-auto bg-white rounded-5">
      <div class="row flex-column-reverse flex-md-row">
        <div class="col-12 col-md-6 p-5 content-area">
          <!-- <div class="container"> -->
          <h1 class="mt-5 mb-3">Stay Updated!</h1>
          <p class="mb-3">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <ul class="ps-0 mb-5">
            <li class="mb-2 ms-0">
              <img src="../../public/img/icon-list.svg" alt="" />
              <span class="ms-3"
                >Product discovery and building what matters</span
              >
            </li>
            <li class="mb-2">
              <img src="../../public/img/icon-list.svg" alt="" />
              <span class="ms-3"
                >Measuring to ensure updates are a success</span
              >
            </li>
            <li class="mb-2">
              <img src="../../public/img/icon-list.svg" alt="" />
              <span class="ms-3">And much more!</span>
            </li>
          </ul>

          <div class="mb-3">
            <div class="d-flex align-items-center justify-content-between">
              <label class="mb-2">Email Address</label>
              <span class="text-danger mb-2 error">Error</span>
            </div>

            <input
              type="email"
              class="form-control shadow-none p-2"
              placeholder="email@company.com"
            />
          </div>

          <button class="btn w-100 mt-3">
            Subscribe to monthly newsletter
          </button>
          <!-- </div> -->
        </div>
        <div class="image-area col-12 col-md-6 d-flex justify-content-end p-0">
          <NewsletterDesktopImage />
          <img
            src="../../public/img/illustration-sign-up-mobile.png"
            alt=""
            class="d-block d-md-none w-100"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import NewsletterDesktopImage from "@/components/NewsletterDesktopImage.vue";
export default {
  name: "HomeView",
  components: { NewsletterDesktopImage },
  setup() {},
};
</script>

<style scoped>
.newsletter-wrapper {
  padding: 28px 30px;
  box-sizing: border-box;
  max-width: 900px;
}
.image {
  width: 400px;
  height: 593px;
}
h1 {
  font-weight: 700;
}

li {
  vertical-align: center;
  font-size: 14px;
}

label,
.error {
  font-size: 12px;
  font-weight: 700;
}
input.form-control,
input.form-control:focus {
  border: 1px solid var(--grey);
  font-size: 16px;
}
input.form-control:hover {
  cursor: pointer;
}
::placeholder {
  color: var(--grey);
}

img.image {
  height: 500px;
}

/* Responsiveness */

@media screen and (max-width: 768px) {
  .wrapper {
    align-items: flex-start !important;
    height: auto !important;
  }
  .newsletter-wrapper {
    padding: 0;
    width: 100%;
    border-radius: 0 !important;
  }
  .content-area {
    padding: 2.5rem !important;
  }
  .image-area {
    padding: 0 !important;
  }
}
</style>
