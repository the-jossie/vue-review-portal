<template>
  <AuthLayout>
    <div class="login-view">
      <CustomText value="Login" variant="h2" />
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
            name="password"
            rules="required|max:12|min:6"
            v-slot="{ errors }"
            class="validation-provider"
          >
            <CustomInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              :value="formData.password"
              @input="formData.password = $event"
              customClass="input"
              :error="errors[0]"
            />
          </ValidationProvider>

          <CustomButton
            text="Login"
            type="submit"
            size="large"
            customClass="button"
          />

          <span class="altText">
            <CustomText value="Don't have an account?" variant="p2" />
            <router-link to="/signup">
              <CustomText value="Signup here" variant="p2" />
            </router-link>
          </span>
        </form>
      </ValidationObserver>
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
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.formData);
    },
  },
};
</script>
<style scoped>
.login-view {
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
