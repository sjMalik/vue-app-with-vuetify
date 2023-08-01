<template>
    <ProductForm :product="product" :onSubmit="submit"></ProductForm>
</template>

<script>
export default {
    data() {
        return {
            product: {}
        }
    }
}
</script>