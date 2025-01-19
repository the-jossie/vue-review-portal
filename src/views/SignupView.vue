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
      </form>
    </div>
  </AuthLayout>
</template>
<script>
import AuthLayout from "@/components/AuthLayout.vue";
import CustomText from "@/components/Text";
import CustomInput from "@/components/Input";

export default {
  components: {
    AuthLayout,
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
  justify-content: center;
  height: 100%;
  width: 100%;
  padding-left: 80px;

  form {
    margin-top: 2rem;
    width: 100%;

    .input {
      margin-bottom: 2rem;
    }
  }
}
</style>
