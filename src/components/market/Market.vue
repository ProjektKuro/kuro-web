<template>
    <div class="market">
        <img class="shop-image" src="@/assets/logo.svg" alt="shop-logo">
        <span class="shop-name" v:bind="prop-name">{{ name }}</span>
    </div>    
</template>

<script>
export default {
    name: "Market",
    props: {
        name
    },
    // data: () => {
    //     return {};
    // },
    methods: {

    }
}
</script>

<style scoped>
.shop-image {
    margin-left: 0.75rem;
    max-width: 4rem;
}
.market {
    display: flex;
    flex-direction: row;
    border: 1px solid lightgray;
    border-radius: 1.9rem;
    box-shadow: 2px 4px 6px 1px rgba(0,0,0,0.2);
    transition: 0.3s;
    padding: 0.5rem;
    margin: 0.5rem auto;
}

.market:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  border: 1px solid lightgray;
}

.shop-name {
    vertical-align: center;
    margin: 1.75rem 0.75rem;
}
</style>