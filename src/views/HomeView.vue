<template>
  <!-- <div class="container"> -->
  <div class="d-flex align-items-center min-vh-100">
    <div
      class="newsletter-wrapper col-12 col-md-8 mx-auto bg-white rounded-5 p-3"
    >
      <div class="row flex flex-column-reverse">
        <div class="col-12 col-md-6 ps-5" style="border: 2px solid black">
          <!-- <div class="container"> -->
          <h1 class="mt-5 mb-3">Stay Updated!</h1>
          <p class="mb-3">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <ul>
            <li class="mb-2">
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
            <label class="mb-2">Email Address</label>
            <input
              type="email"
              class="form-control shadow-none"
              placeholder="email@company.com"
            />
          </div>

          <button class="btn w-100 mt-3">
            Subscribe to monthly newsletter
          </button>
          <!-- </div> -->
        </div>
        <div class="col-12 col-md-6 d-flex justify-content-end p-0">
          <img
            src="../../public/img/illustration-sign-up-desktop.svg"
            alt=""
            class="image object-fit-cover d-none d-md-block"
          />
          <img
            src="../../public/img/illustration-sign-up-mobile.svg"
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
export default {
  name: "HomeView",
  setup() {},
};
</script>

<style>
h1 {
  font-weight: 700;
}

li {
  vertical-align: center;
  font-size: 14px;
}

label {
  font-size: 12px;
  font-weight: 700;
}
input.form-control,
input.form-control:focus {
  border: 1px solid var(--grey);
}
input.form-control:hover {
  cursor: pointer;
}
::placeholder {
  color: var(--grey);
}

button.btn {
  background-color: var(--dark-slate-grey);
  color: #fff;
  font-weight: 700;
  padding: 14px;
}

button.btn:hover {
  background-color: var(--tomato);
  color: #fff;
  box-shadow: 3px 1px 15px var(--grey);
}

img.image {
  height: 500px;
}

/* Responsiveness */
@media screen and (max-width: 576px) {
  .newsletter-wrapper {
    border-radius: 0 !important;
  }
}

@media screen and (max-width: 768px) {
}
</style>
