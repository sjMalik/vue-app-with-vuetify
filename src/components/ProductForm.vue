<template>
    <v-layout>
        <v-flex xs12>
            <v-form ref="form" v-model="valid">
                <v-text-field
                    label="Title"
                    v-model="product.title"
                    :rules="[(title)=> title.trim() === '' ? 'Title must not be empty' : true]"
                    required>
                </v-text-field>
                <v-textarea
                    label="Description"
                    v-model="product.description">
                </v-textarea>
                <v-text-field
                    label="Price"
                    v-model="product.price"
                    :rules="[(price)=> isNaN(price)
                        ? 'Price must be a valid number' : price <=0
                        ? 'Price must be greater than $0' : true]"
                    prefix="$"
                    required>
                </v-text-field>
                <v-text-field
                    label="Quantity"
                    v-model="product.quantity"
                    :rules="[(q)=> isNaN(q)
                        ? 'Quantity must be a valid number' : q <0
                        ? 'Quantity must be greater than or equal to 0' : true]"
                    required>
                </v-text-field>
                <v-text-field
                    label="Image URL"
                    v-model="product.image"
                    :rules="[(rule)=> rule.trim() === '' ? 'Image URL is required': true]"
                    required>
                </v-text-field>

                <v-btn @click="submit">submit</v-btn>
                <v-btn @click="clear">clear</v-btn>
            </v-form>
        </v-flex>
    </v-layout>
</template>

<script>
// import API from '@/lib/API';

export default {
    props: ['product', 'onSubmit'],
    data() {
        return {
            valid: true,
        };
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.onSubmit();
            }
        },
        clear() {
            this.$refs.form.reset();
        },
    },
};
</script>
