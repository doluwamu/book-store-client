<template>
  <div class="msg-alert" v-if="addBookMsg && addBookMsg.message">
    <Alert type="success" :message="addBookMsg.message" />
  </div>
  <div class="create-book">
    <h1>ADD A BOOK</h1>
    <CreateForm />
  </div>
</template>

<script>
import CreateForm from "@/components/Forms/CreateForm.vue";
import Alert from "@/components/General/Alert.vue";
import { mapGetters } from "vuex";

export default {
  name: "CreateBook",
  components: { CreateForm, Alert },
  computed: { ...mapGetters(["addBookMsg"]) },
};
</script>

<style scoped>
.create-book {
  padding: 30px 15px 5px;
  text-align: left;
}

.create-book h1 {
  text-align: center;
}
</style>
