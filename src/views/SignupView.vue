<template>
  <AuthLayout>
    <div class="signup-view">
      <CustomText value="Sign Up" variant="h2" />
      <form>
        <CustomInput
          label="Email"
          name="email"
          type="text"
          placeholder="Enter your email"
          :value="email"
          :error="error"
          @input="email = $event"
          customClass="input"
        />

        <CustomInput
          label="Email"
          name="email"
          type="text"
          placeholder="Enter your email"
          :value="email"
          :error="error"
          @input="email = $event"
          customClass="input"
        />

        <CustomInput
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          :value="password"
          @input="password = $event"
          customClass="input"
        />

        <CustomButton text="Signup" size="large" customClass="button" />

        <span class="altText">
          <CustomText value="Already have an account?" variant="p2" />
          <a href="/login">
            <CustomText value="Login here" variant="p2" />
          </a>
        </span>
      </form>
    </div>
  </AuthLayout>
</template>
<script>
import AuthLayout from "@/components/AuthLayout.vue";
import CustomButton from "@/components/Button";
import CustomText from "@/components/Text";
import CustomInput from "@/components/Input";

export default {
  components: {
    AuthLayout,
    CustomButton,
    CustomInput,
    CustomText,
  },
};
</script>
<style scoped>
.signup-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  height: 100%;
  width: 100%;
  padding-left: 80px;

  form {
    margin-top: 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .input {
      margin-bottom: 2rem;
      width: 100%;
    }

    .button {
      margin: 2rem 0;
    }

    .altText {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;

      a {
        text-decoration: underline;
        color: #fe724c;
        font-weight: 600;
        margin-left: 0.5rem;
      }
    }
  }
}
</style>
