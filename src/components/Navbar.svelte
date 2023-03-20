<style>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 100;
        width: 100%;
        text-align: center;
        background-color: #222;
    }
    li {
        float: center;
        display: inline;
    }
    li a {
        display: inline-block;
        color: #eee;
        text-align: center;
        padding: 8px 16px;
        text-decoration: none;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        transition: all .25s;
        opacity: 0.7;
    }
    li a:hover {
        opacity: 1;
        background-color: #333;
        transform: scale(1.1);
        font-weight: bold;
    }
</style>

<script lang="ts">
    import { base } from '$app/paths';
    const navItems:Array<Array<string>> = [
        ["home", base + "/"],
        ["overview", base + "/overview"],
        ["process", base + "/process"],
        ["about", base + "/about"]
    ];
</script>

<ul>
    {#each navItems as item}
    <li><a href={item[1]}>{item[0]}</a></li>
    {/each}
</ul>