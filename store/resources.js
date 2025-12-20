export const state = () => ({
    list: [
        {
            id: 1,
            title: '2024 Roadmap',
            subtitle: 'My goals and milestones for the year.',
            text: `A comprehensive look at my technical and personal growth plans for 2024.

### Key Goals
- **Master** Advanced AI Agents
- **Build** 3 SaaS Products
- **Contribute** to Open Source

### Technologies
1. Nuxt 3
2. Python
3. PyTorch`,
            type: 'Roadmap',
            date: '2024-01-01',
        },
        {
            id: 2,
            title: 'Building Scalable Nuxt Apps',
            subtitle: 'Talk at Local Meetup',
            text: 'Slides and resources from my recent talk on structuring large-scale Vue and Nuxt applications for performance and maintainability.',
            type: 'Talks',
            date: '2023-11-15',
        },
        {
            id: 3,
            title: 'The Future of AI Agents',
            subtitle: 'Conference Keynote',
            text: 'Exploring the potential of autonomous AI agents in software development and beyond.',
            type: 'Talks',
            date: '2023-10-05',
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
