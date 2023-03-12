<link rel='stylesheet' href='src/lib/atom-dark.css'>
<script lang="ts">
    import Prism from 'svelte-prism';
    const source:string = `class AboutMe {
    let name = "Sailor Priddy";
    let interests = [
        "Information Technology",
        "Rhythm Games",
        "Drawing and Animation",
        "Music Production"
    ];
}`;
</script>
<style>
    .codeBlock {
        width: 50%;
        text-align: center;
        margin: auto;
    }
</style>
<h1>
    About Me
</h1>
<div class="codeBlock">
    <Prism language="js" {source}/>
</div>