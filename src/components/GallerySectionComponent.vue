<template>
    <v-container fluid>
        <v-row align-content="center">
            <v-col cols="11">
                <v-card-title>{{ title }}</v-card-title>
                <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
            </v-col>
            <v-col cols="1" align-self="center">
                <v-btn size="x-large" rounded @click="scrowToTop">
                    <v-icon>
                        mdi-arrow-up
                    </v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row class="mt-2">
            <v-col v-for="(image, index) in images" :key="index" cols="12" sm="6">
                <v-img :src="image.src" :alt="image.alt" />
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

type imageInfo = {
    src: string,
    alt: string
}

export default defineComponent({
    name: 'ImageGallery',
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        images: {
            type: Array<imageInfo>,
            required: true
        }
    },
    methods: {
        scrowToTop()  {
            window.scroll({
                top: 0, 
                left: 0, 
                behavior: 'smooth'
            });
        }
    }
})
</script>