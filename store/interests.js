export const state = () => ({
    list: [{
        interests: [{
            id: 1,
            date_created: "2022-12-31T22:14:23.378Z",
            name: "Machine Learning",
            category: "AI & Data Science",
            brief: "Have been playing around with algorithms and model params tuning. I am more exposed to deploying the models at prod level. As time passed by my focus changed to creating web applications to deploy work.",
            tags: ["Machine Learning", "Model Deployment", "Algorithms", "NLP"],
            gradient: "from-indigo-600 via-purple-600 to-pink-500",
            icon: "ml"
        }, {
            id: 2,
            date_created: "2022-12-31T22:14:56.824Z",
            name: "Cross Platform Applications",
            category: "Mobile & Web",
            brief: "Started it from my Engineering days, first being the Ionic framework. This was my first dive into mobile applications. Created the StayAway app deployed on Play Store.",
            tags: ["Ionic", "Cross-Platform", "Mobile Apps", "Full Stack"],
            gradient: "from-cyan-500 via-blue-600 to-indigo-600",
            icon: "mobile"
        }, {
            id: 3,
            date_created: "2022-12-31T22:15:28.891Z",
            name: "Internet of Things",
            category: "Embedded & Hardware",
            brief: "Arduino is my first hands-on in hardware communications. I expanded well with NodeMCU and Raspberry Pi. This tech fascinates me as it connects physical devices with the cloud.",
            tags: ["IoT", "Arduino", "Raspberry Pi", "Sensors"],
            gradient: "from-emerald-500 via-teal-600 to-cyan-600",
            icon: "iot"
        }, {
            id: 4,
            date_created: "2022-12-31T22:15:54.808Z",
            name: "Open Source",
            category: "Community & Tooling",
            brief: "Every application developed by me builds upon open-source software. It's fascinating to explore code, learn from community standards, and contribute back to developers globally.",
            tags: ["Open Source", "GitHub", "Community", "Collaboration"],
            gradient: "from-amber-500 via-orange-500 to-red-500",
            icon: "oss"
        }, {
            id: 5,
            date_created: "2022-12-31T22:18:49.733Z",
            name: "DevOps & Cloud",
            category: "Infrastructure & CI/CD",
            brief: "High demand due to cloud computing and microservices. I learned early to deploy apps with automated CI/CD pipelines, containerization, and reliable infrastructure.",
            tags: ["DevOps", "CI/CD", "Docker", "Cloud"],
            gradient: "from-blue-600 via-indigo-600 to-violet-700",
            icon: "devops"
        }, {
            id: 6,
            date_created: "2023-07-01T12:29:20.993Z",
            name: "Entrepreneurship",
            category: "Startups & Strategy",
            brief: "Problem solving through tech and making informed decisions based on market gaps excites me to build solutions. I've developed this through my freelance and startup journey internationally.",
            tags: ["Startups", "Product Strategy", "Market Gap", "Innovation"],
            gradient: "from-rose-500 via-pink-600 to-purple-600",
            icon: "entrepreneurship"
        }]
    }]
})

export const getters = {
    getInterests: (state) => state.list[0].interests
}
