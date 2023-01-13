import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'oxlheos6',
    dataset:'production',
    apiVersion:'2023-01-13',
    useCdn:true,
    token:'sksDs9F6A2vmFuEuwbsHbwDayJEEq55aG92Vj7BrDH9Hp6avAjCwblVS44Q7xoDuYX6kpUncz5mFA8sDsAQAuBbCY9iyHUP6xNSt284zTqt0W5Jq5pzhxZI8UBEWJrg4yNOrv2TQI8sETBrvY2IdYExrpgTMLX1EgsXQ47XWJiU9icSgg2KE'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);