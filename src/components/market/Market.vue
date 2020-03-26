<template>
    <div class="market">
        <img class="shop-image" src="@/assets/ic_markt.svg" alt="shop-logo">
        <div class="shop-text">
          <span class="shop-name" v:bind="prop-name">{{ name }}</span>
          <span class="shop-adress" v:bind="prop-name">Adresse</span>
        </div>
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
.market {
    display: flex;
    flex-direction: row;
    border: 1px solid lightgray;
    border-radius: 1rem;
    box-shadow: 2px 4px 6px 1px rgba(0,0,0,0.2);
    transition: 0.3s;
    padding: 0.5rem;
    margin: 0.5rem auto;
    background-color: #c6e2e6;
}

.market:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    border: 1px solid lightgray;
}

.shop-image {
    margin-left: 0.75rem;
    max-width: 3.5rem;
}

.shop-text{
    margin: 0.5rem 0.75rem;
    display: block;
    color: 0f576d;
}

.shop-name {
    display: block;
    font-weight: bold;
    text-transform: uppercase;
}

.shop-adress{
    display: block;
}
</style>
