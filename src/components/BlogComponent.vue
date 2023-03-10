<template>
    <v-card class="blog">
      <v-img :src="post.imageSrc" aspect-ratio="1.5" />
      <v-card-title>{{ post.title }}</v-card-title>
      <v-card-subtitle>{{ post.date }} by {{ post.writer }}</v-card-subtitle>
      <v-card-text>{{ post.text }}</v-card-text>
    </v-card>
  </template>
  
  <script lang="ts">
  export default {
    name: "BlogComponent",
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .blog {
    margin: 20px;
  }
  </style>