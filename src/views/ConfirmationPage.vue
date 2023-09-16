<template>
  <div
    class="wrapper d-flex align-items-center justify-content-center min-vh-100"
  >
    <div class="confirmation-wrapper rounded-5 p-5 bg-white">
      <SuccessImage />
      <h1 class="mt-3">Thanks for subscribing!</h1>
      <p class="mt-2 mb-5">
        A confirmation email has been sent to
        <span class="fw-bold">{{ userEmail }}</span
        >. Please open it and click the button inside to confirm your
        subscription.
      </p>

      <button class="btn w-100" @click="backToHome">Dismiss message</button>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import SuccessImage from "@/components/SuccessImage.vue";

export default {
  name: "ConfirmationPage",
  components: { SuccessImage },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const userEmail = route.params.email;

    const backToHome = () => {
      router.push({ name: "home" });
    };

    return { userEmail, backToHome };
  },
};
</script>

<style scoped>
h1 {
  font-size: 3.2rem;
  font-weight: 700;
}

.confirmation-wrapper {
  max-width: 450px;
}

@media screen and (max-width: 576px) {
  .wrapper {
    align-items: flex-start !important;
    justify-content: flex-start !important;
    max-width: 100% !important;
  }
  h1 {
    font-size: 2.9rem;
  }
  .confirmation-wrapper {
    border-radius: 0 !important;
    max-width: 100%;
    height: 100vh;
    position: relative;
    padding-top: 200px !important;
  }
  button {
    position: absolute;
    bottom: 50px;
    width: 80% !important;
  }
}
</style>
