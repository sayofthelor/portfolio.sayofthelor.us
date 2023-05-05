<link rel='stylesheet' href='https://unpkg.com/prism-themes@1.6.0/themes/prism-atom-dark.css'>
<script lang="ts">
    import Prism from 'svelte-prism';
    const source:string = `import Human from "../human.ts";
class Me extends Human {
    /*
        could probably implement this better
        buuuut we've got about 5 years before production anyways
    */
    constructor() {
        super();
        name = "Sailor Priddy";
        age = 16;
        gender = {
            pronouns: "she/they",
            gender: "transed 😎"
        };
        interests = [
            "Information Technology",
            "Rhythm Games",
            "Drawing and Animation",
            "Music Production"
        ];
    }
    let knownProgramLangs:Array<string> = [
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
        await actuallyDoWork();
    }
    async function procrastinate() {
        return new Promise(r => setTimeout(r, 1000));    
    }
    async function ActuallyDoWork() {
        await doWork();
    }
}`;
</script>
<style>
    .codeBlock {
        width: calc(100vw - 10rem);
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
<h1>
    Some more info about the website, for those interested
</h1>
<p>
    This website is built with <a href='https://kit.svelte.dev'>SvelteKit</a>, my preferred web framework. It has a lot of useful features that make web development fast, and I would recommend giving it a look.<br />
    The shader is the background of the homepage is <a href="https://www.shadertoy.com/view/Wt33Wf">Cyber Fuji 2020</a>, and I'm displaying it with a custom Flixel project I made, using my custom fork of a Flixel library called <a href="https://github.com/sayofthelor/flixel-shadertoy-shader-lr">flixel-shadertoy-shader-lr</a>. If you want to see the project by itself, you can find it <a href="https://sayofthelor.github.io/r_p_shader">here</a>.<br />
    It's hosted on <a href="https://vercel.com">Vercel</a>, and you can find the source code for the website <a href="https://github.com/sayofthelor/research-portfolio">here</a>.
</p>