<template>
    <div>
        <h2>Hello {{ moon }} Vue.js</h2>
        <em>You can put any saturn's moon in the URL after <code>/saturn/bla-bla</code></em>
        <br><br>
    </div>
</template>

<script>
export default {
     props: ['moon']
}
</script>