/* Client-side Javascript */

const { createApp } = Vue;

createApp({
    data() {
        return {
            public_articles: [
                {
                    title: 'My fifth article.',
                    author: 'benuthoff',
                    description: 'Happy to be here, as always.',
                    published: 'June 26th, 2024'
                },
                {
                    title: 'My fourth article.',
                    author: 'benuthoff',
                    description: 'Happy to be here, as always.',
                    published: 'June 26th, 2024'
                },
                {
                    title: 'My third article.',
                    author: 'benuthoff',
                    description: 'Happy to be here, as always.',
                    published: 'June 26th, 2024'
                },
                {
                    title: 'My second article.',
                    author: 'benuthoff',
                    description: 'Happy to be here, as always.',
                    published: 'June 26th, 2024'
                },
                {
                    title: 'Welcome to Blogging!',
                    author: 'benuthoff',
                    description: 'A tutorial for using the blog server.',
                    edited:  'June 26th, 2024',
                    published: 'June 24th, 2024'
                }
            ]
        }
    }
}).mount('#app');