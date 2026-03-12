export const state = () => ({
    list: [
        {
            id: 1,
            name: 'Goa Technology Association',
            role: 'Member',
            year: '2025',
            type: 'Associations',
            logo: require('~/assets/images/affiliation/gta.jpg')
        },
        {
            id: 2,
            name: 'Techstars',
            role: 'Startup - Preflet',
            year: '2023',
            type: 'Accelerator',
            logo: require('~/assets/images/affiliation/techstars.png')

        },
        {
            id: 3,
            name: 'Xartup',
            role: '2022 Cohort',
            year: '2022',
            type: 'Fellowship',
            logo: require('~/assets/images/affiliation/xartup.png')
        },
        {
            id: 4,
            name: 'Microsoft for Startups',
            role: 'Preflet',
            year: '2021',
            type: 'Startup Programs',
            logo: require('~/assets/images/affiliation/microsoft-startup.webp')
        },
        {
            id: 5,
            name: 'APEs',
            role: 'Member',
            year: '2025',
            type: 'Community',
            logo: require('~/assets/images/affiliation/apes.jpg')
        },
        {
            id: 5,
            name: 'Jagriti Digital Yatra',
            role: 'Yatri',
            year: '2021',
            type: 'Community',
            logo: require('~/assets/images/affiliation/jy-logo.webp')
        }
    ]
})

export const getters = {
    getAffiliations: (state) => state.list,
    getTypes: (state) => {
        const types = new Set(state.list.map(item => item.type))
        return ['All', ...Array.from(types)]
    }
}
