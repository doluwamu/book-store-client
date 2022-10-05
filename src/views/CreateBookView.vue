<template>
  <div class="create-book">
    <h1>ADD A BOOK</h1>
    <CreateForm />
  </div>
</template>

<script>
import CreateForm from "@/components/Forms/CreateForm.vue";

export default {
  name: "CreateBook",
  components: { CreateForm },
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
