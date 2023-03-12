<style>
    :global(h1) {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 32pt;
        color: #eee;
        font-weight: bold;
        text-align: center;
    }
    :global(p) {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 24pt;
        color: #eee;
        text-align: center;
        z-index: 2;
    }
    :global(body) {
        background-color: #111;
        overflow-x: hidden;
    }
    :global(a:link) {
        color: #ccc;
    }
    :global(a:visited) {
        color: #999;
    }
    /* ===== Scrollbar CSS ===== */
    /* Firefox */
    :global(*) {
        scrollbar-width: auto;
        scrollbar-color: #eee #222;
    }

    /* Chrome, Edge, and Safari */
    :global(*::-webkit-scrollbar) {
        width: 8px;
    }

    :global(*::-webkit-scrollbar-track) {
        background: #222;
    }

    :global(*::-webkit-scrollbar-thumb) {
        background-color: #eee;
        border-radius: 10px;
        border: 3px solid #222;
    }
</style>
<script>
    import Navbar from '../components/Navbar.svelte';
    import Footer from '../components/Footer.svelte';
</script>
<br /> <br />
<Navbar />
<slot />
<Footer />
<br /> <br />