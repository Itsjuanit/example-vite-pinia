import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
    state: () => ({
        userData: "juan@gmail.com", // userData is the data that will be stored in the store
    })
})