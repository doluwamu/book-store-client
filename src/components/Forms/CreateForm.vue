<template>
  <form class="form-container">
    <div class="form-items">
      <div class="form-item book__name">
        <div class="label-wrapper">
          <label>Name:</label>
        </div>
        <input type="text" placeholder="Write here..." />
      </div>
      <div class="form-item book__image">
        <div class="label-wrapper">
          <label>Image:</label>
        </div>
        <input type="text" placeholder="Write here..." />
      </div>
      <div class="form-item book__author">
        <div class="label-wrapper">
          <label>Author:</label>
        </div>
        <input type="text" placeholder="Write here..." />
      </div>
      <div class="form-item book__publish__date">
        <div class="label-wrapper">
          <label>Publish date:</label>
        </div>
        <input type="date" placeholder="Write here..." />
      </div>
      <div class="form-item book__num__of__pages">
        <div class="label-wrapper">
          <label>Number of pages:</label>
        </div>
        <input type="number" placeholder="Write here..." />
      </div>
      <div class="form-item book__preface">
        <div class="label-wrapper">
          <label>Preface:</label>
        </div>
        <textarea
          name="preface"
          placeholder="Write here..."
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div class="form-item book__link">
        <div class="label-wrapper">
          <label>Link:</label>
        </div>
        <input type="text" placeholder="Write here..." />
      </div>
    </div>
  </form>
</template>

<script>
import "@/assets/styles/form.css";

export default {
  name: "CreateForm",
};
</script>

<style scoped></style>
