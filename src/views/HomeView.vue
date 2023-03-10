<script setup lang="ts">
import GalleryComponent from '@/components/GalleryComponent.vue';

const jsonLd = JSON.stringify(
  {
    '@schema': 'https://json.schemastore.org/jsonld.json',
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    name: 'Sagerpreet Singh',
    url: 'https://sagerpreet-singh.ca',
    description: 'Sagerpreet Singh Personnal Website',
  },
  null,
  2
);
</script>

<template>
  <v-container fluid>
    <gallery-component />
  </v-container>
  <teleport to="head">
    <meta
      name="keyword"
      content="sagerpreet,singh,cinematography,gallery,blog"
    />
    <meta name="description" content="Sagerpreet Singh Personnal Website" />
    <component :is="'script'" type="application/ld+json">
      {{ jsonLd }}
    </component>
  </teleport>
  
</template>
