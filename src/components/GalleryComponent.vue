<template>
    <v-row class="px-4">
        <v-col v-for="(id, index) in idList" :key="index" cols="2">
            <v-btn variant="plain" density="compact" @click="scrollToHandler(id)" >
                {{ id.replaceAll('_', ' ') }}
            </v-btn>
        </v-col>
    </v-row>
    <gallery-section-component title="Spleen" subtitle="Spleen Description" :images="spleenImages" id="spleen"></gallery-section-component>
    <v-divider class="mt-4"></v-divider>
    <gallery-section-component title="Cafe Filtre" subtitle="Cafe Filtre Description" :images="cafeFiltreImages" id="cafe_libre"></gallery-section-component>
    <v-divider class="mt-4"></v-divider>
    <gallery-section-component title="CDH" subtitle="CDH Description" :images="cdhImages" id="cdh"></gallery-section-component>
    <v-divider class="mt-4"></v-divider>
    <gallery-section-component title="Nord" subtitle="Nord Description" :images="nordImages" id="nord"></gallery-section-component>
    <v-divider class="mt-4"></v-divider>
    <gallery-section-component title="Note de Passage" subtitle="Note de Passage Description" :images="noteDePassageImages" id="note_de_passage"></gallery-section-component>
    <v-divider class="mt-4"></v-divider>
    <gallery-section-component title="Pour Emile" subtitle="Pour Emile Description" :images="pourEmileImages" id="pour_emile"></gallery-section-component>
    <v-divider class="mt-4"></v-divider>
    <gallery-section-component title="Safeword  Stills" subtitle="Safeword  Stills Description" :images="safewordStillsImages" id="safeword_stills"></gallery-section-component>
    <v-divider class="mt-4"></v-divider>
    <gallery-section-component title="Toi, Moi et L'autre" subtitle="Toi, Moi et L'autre Description" :images="toiMoiEtLautreImages" id="toi_moi_et_lautre"></gallery-section-component>
    <v-divider class="mt-4"></v-divider>
    <gallery-section-component title="Toi et Moi" subtitle="Toi et Moi Description" :images="tuEtMoiImages" id="tu_et_moi"></gallery-section-component>
    <v-divider class="mt-4"></v-divider>
    <gallery-section-component title="Un Noel Pour Tous" subtitle="Un Noel Pour Tous Description" :images="unNoelPourTousImages" id="un_noel_pour_tous"></gallery-section-component>
</template>

<script lang="ts" setup>
import {
    onMounted,
    ref,
} from 'vue';
// @ts-nocheck
import GallerySectionComponent from '@/components/GallerySectionComponent.vue';

type imageInfo = {
    src: string;
    alt: string;
}

type ImageInfoList = imageInfo[]

const idList = ref(['spleen', 'cafe_libre','cdh','nord','note_de_passage','pour_emile','safeword_stills','toi_moi_et_lautre','tu_et_moi','un_noel_pour_tous']);
const spleenImages = ref<ImageInfoList>([]);
const cafeFiltreImages = ref<ImageInfoList>([]);
const cdhImages = ref<ImageInfoList>([]);
const nordImages = ref<ImageInfoList>([]);
const noteDePassageImages = ref<ImageInfoList>([]);
const pourEmileImages = ref<ImageInfoList>([]);
const safewordStillsImages = ref<ImageInfoList>([]);
const toiMoiEtLautreImages = ref<ImageInfoList>([]);
const tuEtMoiImages = ref<ImageInfoList>([]);
const unNoelPourTousImages = ref<ImageInfoList>([]);

onMounted(async () => {
    const spleenImageList = await import.meta.glob('../assets/ss_content/spleen/*.{jpg,png,gif}', { eager: true, import: 'default' });
    spleenImages.value = Object.keys(spleenImageList).map((key) => {
        return {
            src: 'src/' + key.substring(2),
            alt: 'Image_' + key
        }
    }) as { src: string; alt: string; }[];
    const cafeFiltreImageList = await import.meta.glob('../assets/ss_content/cafe_filtre/*.{jpg,png,gif}', { eager: true, import: 'default' });
    cafeFiltreImages.value = Object.keys(cafeFiltreImageList).map((key) => {
        return {
            src: 'src/' + key.substring(2),
            alt: 'Image_' + key
        }
    });
    const cdhImageList = await import.meta.glob('../assets/ss_content/cdh/*.{jpg,png,gif}', { eager: true, import: 'default' });
    cdhImages.value = Object.keys(cdhImageList).map((key) => {
        return {
            src: 'src/' + key.substring(2),
            alt: 'Image_' + key
        }
    });
    const nordImageList = await import.meta.glob('../assets/ss_content/nord/*.{jpg,png,gif}', { eager: true, import: 'default' });
    nordImages.value = Object.keys(nordImageList).map((key) => {
        return {
            src: 'src/' + key.substring(2),
            alt: 'Image_' + key
        }
    });
    const noteDePassageImageList = await import.meta.glob('../assets/ss_content/note_de_passage/*.{jpg,png,gif}', { eager: true, import: 'default' });
    noteDePassageImages.value = Object.keys(noteDePassageImageList).map((key) => {
        return {
            src: 'src/' + key.substring(2),
            alt: 'Image_' + key
        }
    });
    const pourEmileImageList = await import.meta.glob('../assets/ss_content/pour_emile/*.{jpg,png,gif}', { eager: true, import: 'default' });
    pourEmileImages.value = Object.keys(pourEmileImageList).map((key) => {
        return {
            src: 'src/' + key.substring(2),
            alt: 'Image_' + key
        }
    });
    const safewordStillsImageList = await import.meta.glob('../assets/ss_content/safeword_stills/*.{jpg,png,gif}', { eager: true, import: 'default' });
    safewordStillsImages.value = Object.keys(safewordStillsImageList).map((key) => {
        return {
            src: 'src/' + key.substring(2),
            alt: 'Image_' + key
        }
    });
    const toiMoiEtLautreImageList = await import.meta.glob('../assets/ss_content/toi_moi_et_lautre/*.{jpg,png,gif}', { eager: true, import: 'default' });
    toiMoiEtLautreImages.value = Object.keys(toiMoiEtLautreImageList).map((key) => {
        return {
            src: 'src/' + key.substring(2),
            alt: 'Image_' + key
        }
    });
    const tuEtMoiImageList = await import.meta.glob('../assets/ss_content/tu_et_moi/*.{jpg,png,gif}', { eager: true, import: 'default' });
    tuEtMoiImages.value = Object.keys(tuEtMoiImageList).map((key) => {
        return {
            src: 'src/' + key.substring(2),
            alt: 'Image_' + key
        }
    });
    const unNoelPourTousImageList = await import.meta.glob('../assets/ss_content/un_noel_pour_tous/*.{jpg,png,gif}', { eager: true, import: 'default' });
    unNoelPourTousImages.value = Object.keys(unNoelPourTousImageList).map((key) => {
        return {
            src: 'src/' + key.substring(2),
            alt: 'Image_' + key
        }
    });
});

const scrollToHandler = (id: string) => {
    document.getElementById(id)!.scrollIntoView(true)
}

</script>