<template>
  <div v-if="message && message.length > 0">
    <div :class="[type ? type : 'success', 'alert']">
      <p class="alert-msg">
        {{ message }}
      </p>
      <p class="alert-close" @click="closeAlert">X</p>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  name: "Alert",
  props: {
    message: String,
    type: String,
  },

  computed: { ...mapMutations(["clearBookMsg", "clearErrorMessage"]) },

  methods: {
    closeAlert() {
      if (this.$props.type === "success") return this.clearBookMsg;
      if (this.$props.type === "error") return this.clearErrorMessage;
    },
  },
};
</script>
<style scoped>
.alert {
  padding: 10px;
  max-width: 1440px;
  animation: openAlert 1s 0.3s;
  display: flex;
  position: fixed;
  top: 56px;
  width: 100%;
  margin-bottom: 230px;
  /* justify-content: ; */
}

.error {
  background: red;
}

.success {
  background: green;
}

.warning {
  background: rgb(122, 122, 1);
}

.alert p {
  color: #fff;
  font-size: 16px;
}

.alert-msg {
  text-align: center;
  width: 95%;
}

.alert-close {
  text-align: center;
  width: 5%;
  cursor: pointer;
}

@keyframes openAlert {
  from {
    transform: translateY(-200px);
  }
  to {
    transform: translateY(0);
  }
}
</style>
