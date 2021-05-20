<template>
    <div>
        <h1>{{rank_name}}</h1>
        <h3>{{rank_type}}</h3>
    </div>
</template>

<style scoped>

</style>

<script>
export default {
    props: {
        rank_name: String,
        rank_type: String
    }
}
</script>