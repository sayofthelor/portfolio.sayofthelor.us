<link rel='stylesheet' href='./prism.css'>
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
    /**
    * atom-dark theme for `prism.js`
    * Based on Atom's `atom-dark` theme: https://github.com/atom/atom-dark-syntax
    * @author Joe Gibson (@gibsjose)
    * global-ified so sveltekit doesn't die
    */

    :global(code[class*="language-"]),
    :global(pre[class*="language-"]) {
        color: #c5c8c6;
        text-shadow: 0 1px rgba(0, 0, 0, 0.3);
        font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace;
        direction: ltr;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        line-height: 1.5;
    
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
    
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
    }
    
    /* Code blocks */
    :global(pre[class*="language-"]) {
        padding: 1em;
        margin: .5em 0;
        overflow: auto;
        border-radius: 0.3em;
    }
    
    :global(:not(pre) > code[class*="language-"]),
    :global(pre[class*="language-"]) {
        background: #1d1f21;
    }
    
    /* Inline code */
    :global(:not(pre) > code[class*="language-"]) {
        padding: .1em;
        border-radius: .3em;
    }
    
    :global(.token.comment),
    :global(.token.prolog),
    :global(.token.doctype),
    :global(.token.cdata) {
        color: #7C7C7C;
    }
    
    :global(.token.punctuation) {
        color: #c5c8c6;
    }
    
    :global(.namespace) {
        opacity: .7;
    }
    
    :global(.token.property),
    :global(.token.keyword),
    :global(.token.tag) {
        color: #96CBFE;
    }
    
    :global(.token.class-nam) {
        color: #FFFFB6;
        text-decoration: underline;
    }
    
    :global(.token.boolean),
    :global(.token.constant) {
        color: #99CC99;
    }
    
    :global(.token.symbol),
    :global(.token.deleted) {
        color: #f92672;
    }
    
    :global(.token.number) {
        color: #FF73FD;
    }
    
    :global(.token.selector),
    :global(.token.attr-name),
    :global(.token.string),
    :global(.token.char),
    :global(.token.builtin),
    :global(.token.inserted) {
        color: #A8FF60;
    }
    
    :global(.token.variable) {
        color: #C6C5FE;
    }
    
    :global(.token.operator) {
        color: #EDEDED;
    }
    
    :global(.token.entity) {
        color: #FFFFB6;
        cursor: help;
    }
    
    :global(.token.url) {
        color: #96CBFE;
    }
    
    :global(.language-css .token.string),
    :global(.style .token.string) {
        color: #87C38A;
    }
    
    :global(.token.atrule),
    :global(.token.attr-value) {
        color: #F9EE98;
    }
    
    :global(.token.function) {
        color: #DAD085;
    }
    
    :global(.token.regex) {
        color: #E9C062;
    }
    
    :global(.token.important) {
        color: #fd971f;
    }
    
    :global(.token.important),
    :global(.token.bold) {
        font-weight: bold;
    }
    
    :global(.token.italic) {
        font-style: italic;
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