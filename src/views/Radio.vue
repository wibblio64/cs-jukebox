<script setup>
    import { onMounted, ref } from "vue";
    import { onBeforeRouteLeave, useRoute } from "vue-router";
    import { loadJSON } from "@/utils";
    import { Howl } from "howler";

    const route = useRoute();
    const data = ref({});

    const pauseSFX = new Howl({ src: "/sounds/pause.wav" });
    let track = null;

    const currentTrack = ref("");
    const currentlyPlaying = ref(false);
    const toggled = ref(false);

    const playTrack = (name, src) => {
        toggled.value = false;

        currentTrack.value = `Current playing "${name}"`;
        currentlyPlaying.value = true;

        if (track !== null) track.pause();
        track = new Howl({ src: src, loop: true, html5: true });
        track.play();
    };

    const toggleTrack = () => {
        pauseSFX.play();

        toggled.value = (!toggled.value);
        if (toggled.value) {
            track.pause();
        } else {
            track.play();
        }
    }

    onMounted(async () => {
        data.value = await loadJSON(`/data/albums/${route.params.album}.json`);
        document.title = `CS Jukebox - "${data.value.name}"`;
    });

    onBeforeRouteLeave(() => {
        track.currentTime = 0;
        track.pause();
    });
</script>

<template>
    <div :class="$style.radio">
        <div :class="$style.toggle" @click="toggleTrack()" v-if="currentlyPlaying" :style="{ backgroundImage: toggled ? `url('/images/play.png')` : `url('/images/pause.png')` }"></div>
        <div :class="$style.currentTrack">{{ currentTrack }}</div>
        <div :class="$style.radioInner">
            <template v-for="(track, index) in data.tracks" :key="index">
            <div :class="$style.track" @click="playTrack(track.name, `/music/${route.params.album}/${track.src}`)">
                <span :class="$style.trackNumber">{{ index + 1 }}.</span>
                {{ track.name }}
            </div>
            </template>
        </div>
    </div>
</template>

<style lang="scss" module>
    .radio {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 20%;
        width: 90%;
        max-width: 450px;
        height: fit-content;
        max-height: 600px;
        padding: 8px 16px;
        background: #232537;
        border: 3px solid #444655;
        box-shadow: 2px 2px 0 rgb(0, 0, 0, 0.25);
    }

    .toggle {
        position: absolute;
        top: 8px;
        right: 8px;
        width: 12px;
        height: 12px;
        opacity: 0.25;
        background-size: cover;
        cursor: pointer;
    }

    .currentTrack {
        position: absolute;
        top: 8px;
        right: calc(50% + 8px);
        transform: translate(50%, 0);
        white-space: nowrap;
        opacity: 0.5;
        font-family: "Courier New", Courier, monospace;
        font-size: 12px;
        color: white;
    }

    .radioInner {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
        height: calc(100% - 16px);
        margin-top: 16px;
        overflow-y: auto;
    }

    .track {
        padding: 4px;
        color: white;
        font-family: "Courier New", Courier, monospace;
        font-weight: normal;
        font-size: 18px;
        cursor: pointer;

        &:hover {
            font-weight: bold;
        }

        &:not(:last-child) {
            border-bottom: 2px solid #444655;
        }
    }

    .trackNumber {
        opacity: 0.5;
        font-size: 12px;
        padding-right: 12px;
    }
</style>