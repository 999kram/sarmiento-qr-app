<template>
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Email</div>

      <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-btn
        class="mb-4"
        color="blue"
        size="large"
        variant="tonal"
        block
      >
        Sign In
      </v-btn>

      <v-divider class="my-5"></v-divider>

      <v-btn
        color="white"
        variant="outlined"
        block
        size="large"
        height="45"
        class="px-4"
        style="display: flex; justify-content: center; align-items: center;"
        @click="SignInWithGoogle"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
          alt="Google"
          width="20"
          height="20"
          style="margin-right: 10px;"
        />
        <span style="color: #000; font-size: 14px;">Sign in with Google</span>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: "auth",
  methods: {
    SignInWithGoogle(){
      this.$auth.loginWith('google')
    }
  }
}
</script>