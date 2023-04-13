import {defineField, defineType} from 'sanity';

export default defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
          }),
          defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
          }),
          defineField({
            name: 'image',
            title: 'image',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
          defineField({
            name: 'text',
            title: 'Text',
            type: 'string',
          }),
          defineField({
            name: 'detailedText',
            title: 'Detailed Text',
            type: 'string',
          }),
          defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
          }),
    ]
})