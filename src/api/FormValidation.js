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

  return { formData, isEmail };
};

export default formValidation;
