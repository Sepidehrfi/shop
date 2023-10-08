import { defineStore } from "pinia";
import { AppStatusCode } from "~/models/ApiResponse";
import { loginDTo } from "~/models/auth/loginResultDTo";
import { UserDTo } from "~/models/users/userDTo";
import { GetCurrentUser } from "~/services/userServices";

export const useAuthStore = defineStore("auth", () => {
  const loginResult: Ref<loginDTo | null> = ref(null);
  const currentUser: Ref<UserDTo | null> = ref(null);
  const loading = ref(false);
  const islogin = computed(() => loginResult.value != null);

  const setCurrentValue = async () => {
    const localStorageData = localStorage.getItem("auth-data");
    if (!localStorageData) {
      return;
    }
    const loginData = JSON.parse(localStorageData);
    loginResult.value = loginData;
    loading.value = true;
    let result = await GetCurrentUser();
    if (result.isSuccess) {
      currentUser.value = result.data;
    } else if (result.metaData.appStatusCode === AppStatusCode.UnAuthorize) {
      loginResult.value = null;
      localStorage.removeItem("auth-data");
    }
    loading.value = false;
  };
  return{loginResult,currentUser,islogin,setCurrentValue,loading}
});
