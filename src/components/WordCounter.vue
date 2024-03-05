<template>
    <div class="container py-5">
      <b-row class="justify-content-md-center">
        <b-col cols="12" md="8">
          <b-form-group label="Enter text:">
            <b-form-textarea
              v-model="textInput"
              placeholder="Type or paste text here..."
              rows="3"
            ></b-form-textarea>
          </b-form-group>
          <b-button variant="primary" @click="countWords">Count Words</b-button>
          <h3 v-if="wordCount > 0" class="mt-3">Word Count: {{ wordCount }}</h3>
        </b-col>
      </b-row>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        textInput: '',
        wordCount: 0,
      };
    },
    methods: {
      countWords() {
        this.wordCount = this.textInput.trim().split(/\s+/).filter(function(n) { return n != '' }).length;
      },
    },
  };
  </script>
