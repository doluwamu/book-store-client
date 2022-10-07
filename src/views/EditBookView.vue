<template>
  <div class="edit-book">
    <h1>Edit BOOK</h1>
    <EditForm />
  </div>
</template>

<script>
import EditForm from "@/components/Forms/EditForm.vue";

export default {
  name: "BookEdit",
  components: { EditForm },
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
