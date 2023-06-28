<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-card>
                <v-card-media :src="product.image" height="800px"></v-card-media>
                <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">{{ product.title }}</h3>
                    <div> {{ product.description }} </div>
                    <h4>${{ product.price }}</h4>
                    <small>{{ product.quantity }} in stock</small>
                </div>
                </v-card-title>
                <v-card-actions>
                <!-- <v-btn  color="orange">View</v-btn> -->
                </v-card-actions>
            </v-card>
        </v-flex>
  </v-layout>
</template>

<script>
import API from '@/lib/API';

export default {
    data() {
        return {
            product: {
                title: '',
                image: '',
                description: '',
            },
        };
    },
    mounted() {
        const { id } = this.$route.params;
        this.getProduct(id);
    },
    methods: {
        getProduct(id) {
            API.getProduct(id)
                .then((response) => {
                    this.product = response;
                });
        },
    },
};
</script>
