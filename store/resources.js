export const state = () => ({
    list: [
        {
            id: 1,
            title: 'Bridging Academia and Industry - Tech Manthan #1',
            subtitle: 'Talk at Shri Damodar College Margao Goa',
            text: 'Slides and resources from my recent talk on how AI is changing Job Market and how we can prepare for it.',
            type: 'Talks',
            date: '2025-12-16',
            download: 'https://media.mexsonfernandes.com/resources/Bridging%20Academia%20and%20Industry_%20Final.pdf'
        },
        {
            id: 2,
            title: 'Empower Students with AI Awareness - Tech Manthan #2',
            subtitle: 'Talk at Fr. Agnel Higher Secondary School, Pilar Goa',
            text: 'Slides and resources from my recent talk on empowering students with AI awareness.',
            type: 'Talks',
            date: '2026-01-30',
            download: 'https://media.mexsonfernandes.com/resources/Empower%20Students%20with%20AI%20Awareness.pdf'
        }
    ]
})

export const getters = {
    getResources: (state) => state.list,
    getTypes: (state) => {
        const types = new Set(state.list.map(item => item.type))
        return ['All', ...Array.from(types)]
    },
    getYears: (state) => {
        const years = new Set(state.list.map(item => {
            return item.date ? item.date.split('-')[0] : null
        }).filter(Boolean))
        // Sort descending
        const sortedYears = Array.from(years).sort((a, b) => b - a)
        return ['All', ...sortedYears]
    }
}
