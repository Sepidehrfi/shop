<template>
  <div class="auth-container">
    <Head>
      <title>ورود به حساب</title>
    </Head>
    <div class="auth-title mb-3">ورود به حساب</div>
    <div class="auth-box ui-box">
      <Form
        @submit="loginUser"
        :validation-schema="loginSchema"
        class="auth-form"
        v-slot="{ meta }"
      >
        <base-input
          name="email"
          label="تلفن"
          placeholder="شماره تلفن خود را وارد کنید"
          class="mb-3"
          v-model="loginData.phoneNumber"
        ></base-input>
        <base-input
          name="password"
          label="کلمه عبور"
          type="password"
          placeholder="  کلمه عبور خود را وارد کنید "
          class="mb-3"
          v-model="loginData.password"
        ></base-input>
        <div class="form-element-row mb-3">
          <base-button
            :disabled="meta.valid === false || loading"
            class="btn btn-primary"
            >ورود به حساب</base-button
          >
        </div>
        <div class="form-element-row">
          <div>
            حساب کاربری ندارید ؟
            <nuxt-link to="/auth/register" class="link"
              >ثبت نام در سایت</nuxt-link
            >
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

definePageMeta({
  layout: "auth",
});

const loginData = reactive({
  phoneNumber: "",
  password: "",
});

const loginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required()
    .min(11, "شماره تلفن نامعتبر است")
    .max(11, "شماره تلفن نامعتبر است"),
  password: Yup.string().required(),
});
const router = useRouter();
const loginUser = async (data, formEvent) => {
  console.log(e);
  loading.value = true;
  let result = await loginData(loginData.phoneNumber, loginData.password);
  loading.value = false;
  if (result.isSuccess) {
    localStorage.setItem("auth-data", JSON.stringify(result.data));
    await router.push("/");
  } else {
    formEvent.setFieldError(
      "phoneNumber",
      "کاربری با مشخصات وارد شده یافت نشد"
    );
    alert(result.metaData.message);
  }
};
</script>

<style></style>
