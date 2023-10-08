<template>
  <div class="auth-container">
    <Head>
      <title>ورود به حساب</title>
    </Head>
    <div class="auth-title mb-3">ثبت نام در سایت</div>
    <div class="auth-box ui-box">
      <Form
        @submit="register"
        :validation-schema="registerSchema"
        class="auth-form"
        v-slot="{ meta }"
      >
        <base-input
          name="phoneNumber"
          label="شماره تلفن"
          placeholder="شماره تلفن خود را وارد کنید"
          class="mb-3"
          v-model="registerData.phoneNumber"
        ></base-input>
        <base-input
          name="password"
          label="کلمه عبور"
          type="password"
          placeholder="  کلمه عبور خود را وارد کنید "
          class="mb-3"
          v-model="registerData.password"
        ></base-input>
        <base-input
          name="confirmPassword"
          label=" تکرار کلمه عبور  "
          type="Password"
          placeholder=" تکرار کلمه عبور خود را وارد کنید "
          class="mb-3"
          v-model="registerData.confirmPassword"
        ></base-input>
        <div class="form-element-row mb-3">
          <base-button
            :disabled="meta.valid === false || loading"
            type="submit"
            :loading="loading"
            class="btn btn-primary"
            >ورود به حساب</base-button
          >
        </div>
        <div class="form-element-row">
          <div>
            قبلا ثبت نام کرده اید؟
            <nuxt-link to="/auth/login" class="link">ورود به سایت</nuxt-link>
          </div>
        </div>
        <div class="form-element-row">
          <hr />
          <div>
            با ورود و یا ثبت نام در سایت شما
            <a href="#" class="link">شرایط و قوانین</a> استفاده از تمام سرویس
            های سایت و <a href="#" class="link">قوانین حریم خصوصی</a> آن را
            می‌پذیرید.
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";
import * as Yup from "yup";
import { RegisterDTo } from "~/models/auth/registerDTo.ts";
import { RegisterUser } from "~/services/authServices.ts";

definePageMeta({
  layout: "auth",
});

const registerSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required()
    .min(11, "شماره تلفن نامعتبر است")
    .max(11, "شماره تلفن نامعتبر است"),
  password: Yup.string().required(),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "کلمه های عبور یکسان نیستند"
  ),
});

const registerData: registerDTo = reactive({
  phoneNumber: "",
  password: "",
  confirmPassword: "",
});
const loading = ref(false);
const router = useRouter();

const register = async () => {
  loading.value = true;
  let result = await registerUser(registerData);
  loading.value = false;
  if (result.isSuccess) {
    router.push("/auth/login");
  } else {
    alert(result.metaData.message);
  }
};
</script>

<style></style>
