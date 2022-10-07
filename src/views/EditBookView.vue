<template>
  <div class="msg-alert" v-if="bookMsg">
    <Alert :type="bookMsg.type" :message="bookMsg.message" />
  </div>

  <div class="msg-alert" v-if="errorMessage">
    <Alert :type="errorMessage.type" :message="errorMessage.message" />
  </div>

  <div class="edit-book">
    <h1>Edit BOOK</h1>
    <EditForm />
  </div>
</template>

<script>
import EditForm from "@/components/Forms/EditForm.vue";
import Alert from "@/components/General/Alert.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "BookEdit",
  components: { EditForm, Alert },
  computed: { ...mapGetters(["bookMsg", "errorMessage"]) },
  methods: {
    ...mapMutations(["clearBooks", "clearBook"]),
  },
  created() {
    this.clearBooks();
    this.clearBook();
  },
};
</script>

<style scoped>
.edit-book {
  padding: 30px 15px 5px;
  text-align: left;
}

.edit-book h1 {
  text-align: center;
}
</style>
