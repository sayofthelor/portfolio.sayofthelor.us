
<style>
    .sframe {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        border: 0px;
        z-index: -1;
        width: 100%;
        height: 100vh;
        opacity: 0.3;
    }
    :-webkit-any(body) {
        overflow-y: hidden;
    }
</style>
<div class="sframe">
    <iframe style="border: 0px" src="https://sayofthelor.github.io/r_p_shader/" width="100%" height="100%" title="shader"/>
</div>
<h1>Sailor Priddy Capstone Portfolio</h1>
<p>Use the navbar to navigate the website.</p>
{#each Array(30) as _}
<br />
{/each} 
<!-- to prevent user from interacting with the iframe -->