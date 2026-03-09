export const state = () => ({
    list: [
        {
            id: 10,
            title: "Goa Technology Association wins GIBA Cricket Tournament",
            description: "The GTA Giants won the cricket tournament organised by the Goa IT Business Association, delivering a dominant performance throughout. Led by Captain Sujeet Shetty, the team won every match and defeated Toshiba by 9 wickets in the final. Strong bowling, impactful batting, and excellent team support powered GTA to a memorable championship victory.",
            image: "/media/GTA Giants Lift GIBA Cricket Tournament Trophy with Dominant Performance.jpg",
            link: "https://www.instagram.com/p/DVolbQKCL5R/?igsh=MWY2aWtrcGtheHZvdQ==",
            source: "Salt TV Goa",
            date: "8th March 2026",
            type: "Social Media"
        },
        {
            id: 9,
            title: "Goa Technology Association wins GIBA Cricket Tournament",
            description: "The GTA Giants won the cricket tournament organised by the Goa IT Business Association, delivering a dominant performance throughout. Led by Captain Sujeet Shetty, the team won every match and defeated Toshiba by 9 wickets in the final. Strong bowling, impactful batting, and excellent team support powered GTA to a memorable championship victory.",
            image: "/media/Goa Technology Association wins GIBA Cricket TournamentThe GTA Giants won the cricket tournament.jpg",
            link: "https://www.instagram.com/p/DVoVnJAjOuf/?igsh=MW0yYnR6bXN0eXZydg==",
            source: "Goa News Hub GNH",
            date: "8th March 2026",
            type: "Social Media"
        },
        {
            id: 8,
            title: "GTA Giants Win GIBA Corporate Cricket Tournament",
            description: "",
            image: "/media/GTA Giants Win GIBA Corporate Cricket Tournament.jpg",
            link: "https://www.instagram.com/p/DVqQixbCA8c/?igsh=MWt5eDdwd2szbm11Yw==",
            source: "PBN Bharat",
            date: "8th March 2026",
            type: "Social Media"
        },
        {
            id: 7,
            title: "Goa Shines at Bengaluru Tech Summit 2025",
            description: "The Goa Technology Association (GTA) represented Goa at the Bengaluru Tech Summit 2025, showcasing the state's growing IT and startup strengths.",
            image: "/media/prime-media-bts-2025.jpg",
            link: "https://www.instagram.com/p/DRRxCUNiqZo/",
            source: "Prime Media Goa",
            date: "20 November 2025",
            type: "Social Media"
        },
        {
            id: 6,
            title: "GTA delegation represents Goa at Bengaluru Tech Summit 2025",
            description: "Goa Technology Association (GTA) official delegation successfully represented Goa at the Bengaluru Tech Summit 2025, one of Asia's leading platforms for emerging technologies.",
            image: "/media/business-goa-nov-2025.png",
            link: "https://businessgoa.in/business-goa-magazine-november-2025/",
            source: "Business Goa",
            date: "November 2025",
            type: "Magazine"
        },
        {
            id: 4,
            title: "GTA represents Goa IT Inc at Bengaluru Tech Summit",
            description: "The official delegation of Goa Technology Association (GTA) represented the state at the prestigious Bengaluru Tech Summit 2025.",
            image: "/media/news-clipping-1.png",
            link: "https://epaper.thegoan.net/4086155/TG/TG#clip/78610625/25715ddd-ce97-4f8f-90f2-ad783ead8a94/384.2223009965876:495.91181578552005",
            source: "The Goan",
            date: "21 November 2025",
            type: "Newspaper"
        },
        {
            id: 5,
            title: "Building the Future - Civilines App Feature",
            description: "A construction management app 'Civilines' developed by two Canacona-based youngsters featured in NT KURIOCITY.",
            image: "/media/navhind-times-civilines.jpg",
            source: "Navhind Times",
            date: "February 2021",
            type: "Newspaper"
        },
    ]
})

export const getters = {
    getMedia: (state) => state.list
}
