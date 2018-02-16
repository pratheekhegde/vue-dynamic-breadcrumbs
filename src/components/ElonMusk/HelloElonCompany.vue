<template>
<div>
    <h2>Hello {{company}} Vue.js</h2>
    <router-view/>
</div>
</template>

<script>
export default {
    props: ['company']
}
</script>