export const state = () => ({
    list: [
        {
            id: 1,
            title: 'Bridging Academia and Industry - Tech Manthan #1',
            subtitle: 'Talk at Shri Damodar College Margao Goa',
            text: 'Slides and resources from my recent talk on how AI is changing Job Market and how we can prepare for it.',
            type: 'Talk',
            date: '2025-12-16',
            download: 'https://media.mexsonfernandes.com/resources/Bridging%20Academia%20and%20Industry_%20Final.pdf'
        },
        {
            id: 2,
            title: 'Empower Students with AI Awareness - Tech Manthan #2',
            subtitle: 'Talk at Fr. Agnel Higher Secondary School, Pilar Goa',
            text: 'Slides and resources from my recent talk on empowering students with AI awareness.',
            type: 'Talk',
            date: '2026-01-30',
            download: 'https://media.mexsonfernandes.com/resources/Empower%20Students%20with%20AI%20Awareness.pdf'
        },
        {
            id: 3,
            title: 'Beyond the Beep: The Business of AI Voice - PGDM Orientation 2026 #1',
            subtitle: 'Talk at Srinivassa Sinai Dempo College, Bambolim Goa',
            text: 'Slides from my recent talk on the business of AI voice, exploring the opportunities and challenges in this rapidly evolving field.',
            type: 'Talk',
            date: '2026-07-16',
            download: 'https://media.mexsonfernandes.com/resources/Business_of_AI_Voice_compressed_compressed.pdf'
        },
        {
            id: 4,
            title: 'Prompt Engineering Essentials: 10 Skills + AI Research Tools for Students - PGDM Orientation 2026 #2',
            subtitle: 'Talk at Srinivassa Sinai Dempo College, Bambolim Goa',
            text: 'Slides from my recent talk on Prompt Engineering Essentials for students, covering 10 essential skills and AI research tools.',
            type: 'Talk',
            date: '2026-07-28',
            download: 'https://media.mexsonfernandes.com/resources/prompt_engineering_essentials_mexson_fernandes.pdf'
        },
        {
            id: 5,
            title: 'Conversational AI for Business: Build your first AI Voice Concierge - PGDM Orientation 2026 #3',
            subtitle: 'Workshop at Srinivassa Sinai Dempo College, Bambolim Goa',
            text: 'Build your first AI Voice Concierge using RetellAI. This workshop is designed for students to learn how to create conversational AI applications for business.',
            type: 'Workshop',
            date: '2026-07-31',
            download: 'https://github.com/MexsonFernandes/retellai-demo-agent'
        },
        {
            id: 6,
            title: 'AI Agent: Architecture, Memory & Reasoning',
            subtitle: 'Workshop at BridgeAura Academy, Goa',
            text: 'A 60-minute technical starter module',
            type: 'Talk',
            date: '2026-08-25',
            download: 'https://my.kverty.com/r/sP5'
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
