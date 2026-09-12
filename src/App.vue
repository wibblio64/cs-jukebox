<script setup>
    import { isNightTime } from "./utils";
    import { onMounted } from "vue";
    import { RouterLink, RouterView } from "vue-router";

    const checkDarkMode = () => {
        if (isNightTime()) {
            document.documentElement.dataset["theme"] = "dark";
        } else {
            delete document.documentElement.dataset["theme"];
        }
        setTimeout(checkDarkMode, 1000);
    }

    onMounted(() => {
        checkDarkMode();
    });
</script>

<template>
    <div :class="$style.moon"></div>
    <div :class="$style.cloud4"></div>
    <div :class="$style.cloud3"></div>
    <div :class="$style.cloud2"></div>
    <div :class="$style.cloud1"></div>
    <div :class="$style.dragon">
        <RouterLink :to="{ name: 'home' }">
            <div :class="$style.dragonInner"></div>
        </RouterLink>
    </div>
    <footer :class="$style.footer">
        <div :class="$style.footerLeft">Created by <a target="_blank" rel="noopener noreferrer" href="https://wibblio.neocities.org/">wibblio</a></div>
        <div :class="$style.footerRight">View on <a target="_blank" rel="noopener noreferrer" href="https://github.com/wibblio64/cs-jukebox">GitHub</a></div>
    </footer>
    <RouterView/>
</template>

<style lang="scss" module>
    .moon {
        position: absolute;
        left: var(--moon-left);
        right: var(--moon-right);
        top: 72px;
        width: 68px;
        height: 68px;
        background: no-repeat var(--moon-bg);
        background-size: cover;
    }

    .cloud {
        &1 {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 200%;
            height: 80px;
            background: repeat-x var(--cloud1-bg);
            background-size: auto 80px;
            animation: cloudScroll 1.5s linear infinite;
        }

        &2 {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 200%;
            height: 140px;
            background: repeat-x var(--cloud2-bg);
            background-size: auto 140px;
            animation: cloudScroll 3s linear infinite;
        }

        &3 {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 200%;
            height: 186px;
            background: repeat-x var(--cloud3-bg);
            background-size: auto 186px;
            animation: cloudScroll 4.5s linear infinite;
        }

        &4 {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 200%;
            height: 256px;
            background: repeat-x var(--cloud4-bg);
            background-size: auto 256px;
            animation: cloudScroll 6s linear infinite;
        }
    }

    @keyframes cloudScroll {
        0% {
            left: 0;
        }
        100% {
            left: -640px;
        }
    }

    .dragon {
        position: absolute;
        left: 20%;

        &Inner {
            position: relative;
            width: 80px;
            height: 72px;
            background: no-repeat url("/images/dragon.apng");
            background-size: cover;
            filter: drop-shadow(2px 2px 0 rgb(0, 0, 0, 0.25));
            animation: dragonFloat 3s ease-in-out infinite;
        }
    }

    @keyframes dragonFloat {
        0% {
            top: 0;
        }
        50% {
            top: -25px;
        }
        100% {
            top: 0;
        }
    }

    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: fit-content;
        margin-bottom: 8px;
        color: white;
        font-family: 'Courier New', Courier, monospace;
        text-shadow: 2px 2px 0 rgb(0, 0, 0, 0.25);

        &Left {
            margin-left: 16px;
        }

        &Right {
            margin-right: 16px;
        }

        & a {
            position: relative;
            top: 0;
            color: white;
            font-weight: bold;

            &:hover {
                top: -2px;
            }
        }
    }
</style>