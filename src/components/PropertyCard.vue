<template>
<div class='bg-white p-2 border rounded-lg overflow-hidden'>
    <img class='rounded-lg' :src="property.imageUrl" alt="property.imageAlt">
    <div class='p-6'>
        <div class="text-gray-600 text-xs uppercase font-semibold tracking-wide">
            {{ property.beds }} beds &bull; {{ property.baths }} baths
        </div>
        <h4 class="font-semibold text-lg leading-tight truncate">{{ property.title }}</h4>
        <div class="mt-1">
            {{ property.formattedPrice }}
            <span class="text-gray-600 text-sm">/ wk</span> 
        </div>
        <div class="mt-2 flex items-center">
            <svg  v-for="i in 5" :key="i" :class="i <= property.rating ? 'text-teal-500' : 'text-gray-400'" class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <span class="ml-2 text-gray-600 text-sm"> (based on {{ property.reviewCount }} reviews)</span>

        </div>
        
    </div>
    
</div>    
</template>
<script>
export default {
    props:['property'],

}
</script>

<style>

</style>script