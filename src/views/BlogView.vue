<template>
    <!-- <v-container class="about">
        <h1>This is a blog page</h1>
        <v-btn @click="showSnackbar('Blog Test')">Snackbar test</v-btn>
    </v-container> -->
    <v-container>
        <blog-component v-for="(post, index) in state.blogPosts" :key="index" :post="post" />
    </v-container>
</template>
  
<script lang="ts" setup>
// import { useGlobal } from '@/store';
import BlogComponent from '@/components/BlogComponent.vue';
// import blogData from '../assets/blogposts.json';
import { reactive, onMounted } from 'vue';

const state = reactive({
    blogPosts: [] as PostListType,
});

type PostType = {
    title: String,
    date: String,
    writer: String,
    imageSrc: String,
    text: String
}

type PostListType = Array<PostType>

// const globalStore = useGlobal();

// const showSnackbar = (message: string) => {
//     globalStore.setMessage(message);
// };


onMounted(async () => {
    import('../assets/blogposts.json').then(module => {
        console.log(module.default.blogData);
        // const response = await fetch(blogData);
        // const data = await response.json();
        // state.blogPosts = module.default.blogData;
        state.blogPosts = module.default.blogData
    });
    // console.log(state.blogPosts)
});

</script>
  