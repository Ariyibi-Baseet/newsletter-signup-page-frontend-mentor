import { ref, computed } from "vue";

const formValidation = () => {
  // form data object
  const formData = ref({
    email: "",
  });

  // Email field form validation with regex
  const isEmail = computed(() => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(formData.value.email);
  });

  // Disable button when nothing email field is empty
  const isBtnDissabled = computed(() => {
    return formData.value.email == "";
  });

  return { formData, isEmail, isBtnDissabled };
};

export default formValidation;
