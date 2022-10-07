<template>
  <div class="msg-alert" v-if="bookMsg && bookMsg.message">
    <Alert :type="bookMsg.type" :message="bookMsg.message" />
  </div>
  <div class="create-book">
    <h1>ADD A BOOK</h1>
    <CreateForm />
  </div>
</template>

<script>
import CreateForm from "@/components/Forms/CreateForm.vue";
import Alert from "@/components/General/Alert.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CreateBook",
  components: { CreateForm, Alert },
  computed: { ...mapGetters(["bookMsg"]) },
  methods: {
    ...mapMutations(["clearBooks"]),
    ...mapMutations(["clearBook"]),
  },
  created() {
    this.clearBooks();
    this.clearBook();
  },
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
