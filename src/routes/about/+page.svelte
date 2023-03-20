<link rel='stylesheet' href='src/lib/atom-dark.css'>
<script lang="ts">
    import Prism from 'svelte-prism';
    const source:string = `class Me {
    let name = "Sailor Priddy";
    let age = 16;
    let gender = {
        pronouns: "she/they",
        gender: "transed 😎"
    }
    let interests = [
        "Information Technology",
        "Rhythm Games",
        "Drawing and Animation",
        "Music Production"
    ];
    let knownProgramLangs = [
        "JavaScript",
        "TypeScript",
        "Python",
        "Lua",
        "C#",
        "Haxe"
    ];
    function doWork() {
        for (let i = 0; i < 1000; i++) {
            procrastinate();
        }
        actuallyDoWork();
    }
    function ActuallyDoWork() {
        doWork();
    }
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