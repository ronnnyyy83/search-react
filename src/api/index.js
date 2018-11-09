const suggestionUrl = '/search?q=';

export const getSuggestions = (query) => fetch(`${suggestionUrl}${query}`).then(p => p.json());