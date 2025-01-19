<template>
  <AuthLayout>
    <div class="signup-view">
      <CustomText value="Sign Up" variant="h2" />
      <ValidationObserver v-slot="{ handleSubmit }" class="validation-observer">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <ValidationProvider
            name="email"
            rules="required|email"
            v-slot="{ errors }"
            class="validation-provider"
          >
            <CustomInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              :value="formData.email"
              :error="errors[0]"
              @input="formData.email = $event"
              customClass="input"
            />
          </ValidationProvider>
          <ValidationProvider
            name="username"
            rules="required|alpha|min:3"
            v-slot="{ errors }"
            class="validation-provider"
          >
            <CustomInput
              label="Username"
              name="username"
              type="text"
              placeholder="Create your username"
              :value="formData.username"
              :error="errors[0]"
              @input="formData.username = $event"
              customClass="input"
            />
          </ValidationProvider>

          <ValidationProvider
            name="password"
            rules="required|max:12|min:6"
            v-slot="{ errors }"
            class="validation-provider"
          >
            <CustomInput
              label="Password"
              name="password"
              type="password"
              placeholder="Create your password"
              :value="formData.password"
              @input="formData.password = $event"
              customClass="input"
              :error="errors[0]"
            />
          </ValidationProvider>

          <CustomButton
            text="Signup"
            type="submit"
            size="large"
            :isLoading="isSubmitting"
            customClass="button"
          />

          <span class="altText">
            <CustomText value="Already have an account?" variant="p2" />
            <router-link to="/login">
              <CustomText value="Login here" variant="p2" />
            </router-link>
          </span>
        </form>
      </ValidationObserver>
    </div>
  </AuthLayout>
</template>
<script>
import Vue from "vue";
import AuthLayout from "@/components/AuthLayout.vue";
import CustomButton from "@/components/Button";
import CustomText from "@/components/Text";
import CustomInput from "@/components/Input";
import { signupApi } from "@/api";

export default {
  components: {
    AuthLayout,
    CustomButton,
    CustomInput,
    CustomText,
  },
  data() {
    return {
      formData: {
        email: "",
        username: "",
        password: "",
      },
      isSubmitting: false,
    };
  },
  methods: {
    onSubmit() {
      this.isSubmitting = true;

      signupApi(this.formData)
        .then(() => {
          Vue.$toast.success("Signup successful!", {
            timeout: 2000,
          });

          this.$router.push({ name: "login" });
        })
        .catch(() => {
          Vue.$toast.error("An error occured. Please try again!", {
            timeout: 2000,
          });
        })
        .finally(() => (this.isSubmitting = false));
    },
  },
};
</script>
<style scoped>
.signup-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  height: 100%;
  width: 100%;
  padding-left: 80px;

  .validation-observer {
    width: 100%;

    form {
      margin-top: 4rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;

      .validation-provider {
        width: 100%;

        .input {
          margin-bottom: 2rem;
          width: 100%;
        }
      }

      .button {
        margin: 2rem 0;
      }

      .altText {
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          text-decoration: underline;
          color: #fe724c;
          font-weight: 600;
          margin-left: 0.5rem;
        }
      }
    }
  }
}
</style>
