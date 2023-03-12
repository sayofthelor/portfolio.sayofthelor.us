<style>
    .video {
        overflow: hidden;
        text-align: center;
        transition: all 0.2s;
    }
    .video:hover {
        transform: scale(1.05);
    }
    #vidChild {
        max-width: 95%;
        border: #eee 2px solid;
        border-radius: 10px;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding-left: 2vh;
        padding-right: 2vh;
        overflow: hidden;
        width: 100%;
        text-align: center;
    }
    li {
        float: center;
        display: inline;
    }
</style>
<script lang="ts">
    import CaptionImage from "../../components/CaptionImage.svelte";
    import haxeImg from "$lib/haxe.svg";
    import limeImg from "$lib/lime.png";
    import openflImg from "$lib/openfl.png";
    import flixelImg from "$lib/flixel.svg";
    import hqLogo from "$lib/hq.png";
    const info:Array<Array<string>> = [
        ["Haxe", haxeImg, "http://haxe.org"],
        ["Lime", limeImg, "http://lime.openfl.org"],
        ["OpenFL", openflImg, "http://openfl.org"],
        ["HaxeFlixel", flixelImg, "http://haxeflixel.com"]
    ];
</script>

<h1>Research Overview Video</h1>

<div class="video">
    <iframe id="vidChild" allowFullscreen={true} src="https://www.youtube.com/embed/nleB7uPtQxQ?ecver=1&amp;iv_load_policy=1&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560" width="560" height="315" title="YouTube video" frameborder="0"></iframe>
</div>

<h1>Driving Question:</h1>
<p><strong>How can I make a game that teaches people the Haxe programming language?</strong></p>

<h1>Goal</h1>
<p>To make a game that comprehensively teaches people an easy-to-understand subset of the Haxe programming language.</p>

<h1>And it's called...</h1>
<div style="text-align: center">
    <img src={hqLogo} alt="Haxe Quest logo" width="25%" />
    <p>(working logo)</p>
</div>

<h1>Utilized Technologies</h1>
<ul>
    {#each info as i}
    <li><CaptionImage src={i[1]} text={i[0]} alt={i[0] + " logo"} url={i[2]} width="150px" height="150px"/></li>
    {/each}
</ul>