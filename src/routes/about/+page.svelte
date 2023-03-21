<link rel='stylesheet' href='https://unpkg.com/prism-themes@1.6.0/themes/prism-atom-dark.css'>
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
    async function doWork() {
        for (let i = 0; i < 1000; i++) {
            await procrastinate();
        }
        actuallyDoWork();
    }
    function procrastinate() {
        return new Promise(r => setTimeout(r, 1000));    
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