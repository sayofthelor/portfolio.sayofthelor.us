<style>
    a {
        font-size: 20pt;
    }

    .brainstorm-container {
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: auto;
        margin-right: auto;
        padding: 1rem;
        width: calc(100% - 10rem);
        border: #eee 2px solid;
        border-radius: 15px;
        background-color: #222;
    }

    #LARGE {
        font-size: 48pt;
    }

    #styled-img {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        border-radius: 15px;
        border: #eee 2px solid;
    }

</style>

<script lang="ts">
    import s5 from "$lib/screenshot5.png";
    import s6 from "$lib/screenshot6.png";
    import s1 from "$lib/screenshot1.png";
    const info:Array<Array<string>> = [
        ["Brainstorming", `When we were initially brainstorming ideas for our research projects, this was already an idea I was floating, but I didn't exactly have the time to do it in my free time, so I figured now would be the perfect time!`, "", ""],
        ["Initial Setup", `I created a new GitHub repo, and a new HaxeFlixel project.`, "https://github.com/haxequest/haxequest/", s5],
        ["The First Lesson", `Importing things in Haxe both works differently than typical programming languages, using a package/namespace structure as opposed to importing files directly, so I figured that was a good place to start.`, "", s1],
        ["Gathering Feedback", `In general, the feedback from this lesson was quite positive, showing that this is a proven concept, even if I have quite a bit to do.`, "", s6],
        ["Where to Go From Here", `If I have any time over the summer, I plan to further expand on Haxe Quest to make it a full game rather than the demo state it is currently in. I can see this being a very promising way to learn this programming language.`, "", ""]
    ];
</script>


<h1 id="LARGE">The Process</h1>

<p>
    <!-- <strong>1.</strong> I created a new GitHub repository. <a href="http://github.com/haxequest/haxequest">(here)</a> <br />
    <strong>2.</strong> I created a new project in HaxeFlixel. <a href="https://haxeflixel.com/documentation/hello-world/">(here)</a> <br />
    <strong>3.</strong> I implemented the Haxe script interpreter. <br />
    <strong>4.</strong> I made a basic lesson to prove I could do it. <br />
    <strong>5 (current step).</strong> I'm making more lessons to comprehensively teach what I want to teach. -->
    {#each info as i, index}
    <div class="brainstorm-container">
        <h2>{`Step ${index+1}: ${i[0]}`}</h2>
        <p>{i[1]}</p>
        {#if i[2] != ""}
        <a href={i[2]}>(link)</a>
        {/if}
        {#if i[3] != ""}
        {#if i[2] != ""}<br><br>{/if}<img id="styled-img" src={i[3]} alt="img element (unspecified)" />
        {/if}
    </div>
    {/each}
</p>