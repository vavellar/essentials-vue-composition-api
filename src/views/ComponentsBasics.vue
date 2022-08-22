<template>
    <div>
        <h1>Here is a child component!</h1>
        <ButtonCounter />
        <ButtonCounter />
        <ButtonCounter />
        <h1>Another child component!</h1>
        <!-- <BlogPost title="My journey with Vue" />
        <BlogPost title="Blogging with Vue" />
        <BlogPost title="Why Vue is so fun" /> -->
        <!--This way using v-for is better-->
        <BlogPost
            v-for="post in posts"
            :key="post.id"
            :title="post.title"
        />

        <hr />
        <h2>Listening to events</h2>
        <div :style="{ fontSize: postFontSize + 'em' }">
            <BlogPost
                @enlarge-text="postFontSize += 0.1"
                v-for="post in posts"
                :key="post.id"
                :title="post.title"
            />
        </div>

        <h2>Example of slot use</h2>
        <AlertBox>
            Something bad happened
        </AlertBox>
    </div>
</template>

<script setup lang="ts">
import ButtonCounter from '../components/ButtonCounter.vue';
import BlogPost from '@/components/BlogPost.vue';
import AlertBox from '@/components/AlertBox.vue'
import { ref } from 'vue';

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])

const postFontSize = ref(1)

</script>

<style scoped>

</style>