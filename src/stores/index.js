import { ref } from "vue";
import { eStore } from "pinia";

export const Register = defineStore("register", () => {
  let registratsiya = ref({})
  return { registratsiya};
});
