# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop view](./public/screenshot/desktop_view.png)
![Mobile view](./public/screenshot/mobile_view.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Ariyibi-Baseet/newsletter-signup-page-frontend-mentor)
- Live Site URL: [Add live site URL here](https://newsletter-signup-page-frontend-mentor.vercel.app/)

## My process

### Built with

- HTML5
- CSS3
- Bootstrap5
- Mobile-first workflow
- [Vue Js](https://reactjs.org/) - Fast-rising Javascript framework

### What I learned

What stood out for me in this particular project is how to use REGEX, how to implement watchers and use computed properties to carry out amazing tasks.

Some code snippet here:

```js
// For Email validation
const isEmail = computed(() => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  return emailRegex.test(formData.value.email);

  // To disable button by default
  const isBtnDissabled = computed(() => {
    return formData.value.email == "";
  });

  // conditions for validation and watchers
  const validateEmail = () => {
    if (formData.value.email) {
      router.push({
        name: "confirmation",
        params: { email: formData.value.email },
      });
      if (isEmail.value) {
        return isEmail;
      }
    }
  };

  watch(formData, validateEmail);
});
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Looking forwars to implement custom vue loader. And that will be implemented soon. So watch out for it

### Useful resources

- [Vue Watchers](https://vuejs.org/guide/essentials/watchers.html) - This helped in handling my computed properties well.
- [Vue Computed Properties](https://www.example.com) - This give me good insight on how to use computed properties very well

## Author

- Website - [Ariyibi Baseet .A](https://www.your-site.com)
- Frontend Mentor - [@Ariyibi-Baseet](https://www.frontendmentor.io/profile/Ariyibi-Baseet)
- Twitter - [@ariyibibaseet\_](https://www.twitter.com/ariyibibaseet_)

## Acknowledgments

I acknowledged myslef for putting in more effort so as to accomplish this task. See you in the next task
