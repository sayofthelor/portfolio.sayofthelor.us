<style>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 100;
        width: 100%;
        text-align: center;
        background-color: #222;
    }
    li {
        float: center;
        display: inline;
    }
    li e {
        display: inline-block;
        color: #ff3c00;
        text-align: center;
        padding: 8px 8px;
        text-decoration: none;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        transition: all .25s;
        opacity: 0.7;
    }
    li e:hover {
        opacity: 1;
        transform: scale(1.1);
        font-weight: bold;
    }
    li .text {
        display: inline-block;
        color: #eee;
        text-align: center;
        font-size: 12pt;
        text-decoration: none;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        transition: all .25s;
        opacity: 0.7;
    }

    #heart {
        display: inline-block;
        transition: all 0.2s ease; 
        margin-left: 5px;
        margin-right: 5px;
        color: #FF69B4;
    }

    #heart:hover {
        animation: heartPulse infinite .6s;
    }
    
    @keyframes heartPulse {
        0% {
            transform: scale(1.2);
        }
        41.66% {
            transform: scale(1);
        }
    }
</style>

<script>
    import FontAwesome from "svelte-fa";
    import {faHeart} from "@fortawesome/free-solid-svg-icons";
</script>


<ul>
    <li><div class="text">sailor priddy capstone portfolio • made with <div id="heart"><FontAwesome icon={faHeart} /></div> and </div><e on:click={() => window.open("http://kit.svelte.dev", "_blank")} on:keyup={() => null}>sveltekit</e></li>
</ul>