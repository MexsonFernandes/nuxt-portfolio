export const state = () => ({
    list: [
        {
            id: 1,
            title: 'Bridging Academia and Industry - Tech Manthan #1',
            subtitle: 'Talk at Shri Damodar College Margao Goa',
            text: 'Slides and resources from my recent talk on how AI is changing Job Market and how we can prepare for it.',
            type: 'Talks',
            date: '2025-12-16',
            download: '/resources/Bridging Academia and Industry_ Final.pdf'
        }
    ]
})

export const getters = {
    getResources: (state) => state.list,
    getTypes: (state) => {
        const types = new Set(state.list.map(item => item.type))
        return ['All', ...Array.from(types)]
    }
}
