<script lang="ts">
    import placeholder from "$lib/placeholder.png";
    export let src = placeholder;
    export let text = "placeholder";
    export let width = "400px";
    export let height = "400px";
    export let alt = "placeholder"
    export let url = "http://example.com";
</script>

<style>
    .captionImageContainer {
        display: inline-block;
        transition: all 0.2s;
        position: relative;
    }
    .captionImageContainer:hover {
        transform: scale(0.9);
    }
    .innerImg {
        z-index: 10;
    }
    /* Centered text */
    .innerText {
        position: absolute;
        text-align: center;
        top: 5%;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 16pt;
        color: #eee;
        font-weight: bold;
        opacity: 0;
        transition: all 0.5s;
        z-index: 9;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
    .innerText:hover {
        opacity: 1;
        top: 0%;
        transform: scale(1.2);
    }

</style>

<div class="captionImageContainer" style="width:{width}; height:{height};" on:click={() => window.open(url, "_blank")} on:keyup={() => null}>
    <div class="innerText" style="width:{width};height:{height};">{text}</div>
    <div class="innerImg" style="width:{width};height:{height};"><img {src} {width} {height} {alt} /></div>
</div>