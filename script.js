document.addEventListener("alpine:init", () => {
  Alpine.data("signupForm", () => ({
    username: "",
    password: "",
    passwordConfirm: "",
    belt: "",
    bio: "",
    newsletter: true,
    showPass: false,
    errors: {},
    beltChoices: ["black", "white", "red", "orange", "broen "],
    success: false,

    validateFrom() {
      this.errors = {};

      if (this.username.length < 3) {
        this.errors.username = "Username must be at least 3 characters.";
      }

      if (this.password.length < 6) {
        this.errors.password = "Password must be at least 6 characters.";
      }

      if (this.password != this.passwordConfirm) {
        this.errors.passwordConfirm = "Password do not match.";
      }

      if (!this.belt) {
        this.errors.belt = "Please select a belt color.";
      }

      if (this.bio.length < 10) {
        this.errors.bio = "Bio must be at least 10 characters.";
      }
    },

    submitForm($event) {
      this.validateFrom();
      console.log(this.errors);

      if (Object.keys(this.errors).length === 0) {
        console.log(this.username, this.password);
        $event.target.reset();

        this.success = true;
      }
    },
  }));
});
