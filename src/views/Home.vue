<script setup>
    import { onMounted, ref } from "vue";
    import { RouterLink } from "vue-router";
    import { loadJSON } from "@/utils";
    import { Howl } from "howler";
    
    const hoverSFX = new Howl({ src: "/sounds/hover.wav" });
    const manifest = ref([]);

    onMounted(async () => {
        manifest.value = await loadJSON("/data/albums/manifest.json");
        document.title = "CS Jukebox";
    });
</script>

<template>
    <div :class="$style.menu">
        <div :class="$style.menuTitle">Pick an album:</div>
        <div :class="$style.menuList">
            <template v-for="(item, index) in manifest" :key="index">
            <RouterLink :class="$style.menuItem" @mouseenter="hoverSFX.play()" :to="{ name: 'radio', params: { album: item.url } }">
                {{ item.name }}
            </RouterLink>
            </template>
        </div>
    </div>
</template>

<style lang="scss" module>
    .menu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 20%;
        width: fit-content;
        min-width: 200px;
        height: fit-content;
        max-height: 400px;
        padding: 8px 32px;
        background: #232537;
        border: 3px solid #444655;
        box-shadow: 2px 2px 0 rgb(0, 0, 0, 0.25);

        &Title {
            white-space: nowrap;
            opacity: 0.5;
            font-family: "Courier New", Courier, monospace;
            font-size: 12px;
            color: white;
            margin-bottom: 8px;
        }

        &List {
            display: flex;
            flex-direction: column;
            gap: 8px;
            text-align: left;
            width: 100%;
            height: calc(100% - 16px);
            overflow-y: auto;
        }

        &Item {
            color: white;
            font-family: 'Courier New', Courier, monospace;
            font-weight: normal;
            text-decoration: none;
            font-size: 18px;

            &::before {
                content: ">";
                opacity: 0.5;
                font-size: 12px;
                margin-right: 8px;
            }

            &:hover {
                font-weight: bold;
            }
        }
    }
</style>