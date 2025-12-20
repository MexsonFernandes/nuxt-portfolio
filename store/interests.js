export const state = () => ({
    list: [{
        interests: [{
            id: 1,
            date_created: "2022-12-31T22:14:23.378Z",
            name: " Machine Learning ",
            brief: "Have been playing around with algorithms and model params tuning. I am more exposed to deploying the models at prod level. As time passed by my focus changed to creating web applications to deploy work. ",
            depiction: "bf18d77a-3c17-4e81-a533-8a4145fca50c",
            icon_link: "https://www.fsm.ac.in/blog/wp-content/uploads/2022/08/ml-e1610553826718.jpg",
            image: {}
        }, {
            id: 2,
            date_created: "2022-12-31T22:14:56.824Z",
            name: " Cross Platform Applications",
            brief: " Started it from my Engineering days. First being the Ionic framework. This was my first dive into mobile applications. Created StayAway app deployed in playstore. ",
            depiction: "3a808968-230f-4889-9c70-f1574d2ec8ce",
            icon_link: require('~/assets/images/interest/cross.png'),
            image: {}
        }, {
            id: 3,
            date_created: "2022-12-31T22:15:28.891Z",
            name: " Internet of Things ",
            brief: " Arduino is my first hands on in hardware communications. I expanded well with NodeMCU and Raspberry Pi. This tech fascinates me as its more of integrations and I make it happen. ",
            depiction: "ebc458d2-a3b6-488e-98f8-3fcfe6a4580f",
            icon_link: "https://live.staticflickr.com/8200/8249565455_9db2524a35_b.jpg",
            image: {}
        }, {
            id: 4,
            date_created: "2022-12-31T22:15:54.808Z",
            name: " Open Source ",
            brief: "Every application developed by me starts of with OSS. Its quite interesting to look at code and learn. To be honest I hardly look at that. If doc doesn't help than I go to Github issues. ",
            depiction: "0054940a-ce19-4579-8ebb-c60eb177f0a3",
            icon_link: "https://res.cloudinary.com/robomx/image/upload/v1634448841/icons8_open_source_150_1a8d257af8.png",
            image: {}
        }, {
            id: 5,
            date_created: "2022-12-31T22:18:49.733Z",
            name: "DevOps",
            brief: "This is in demand due to increase in cloud computing and microservices. I tried learning early during the days of web development and would deploy apps to with automated pipelines. It became my obvious choice in a team of engineers.",
            depiction: "d77380f4-693c-4d09-bc70-9a5ab579c2ea",
            icon_link: "https://i.iinfo.cz/images/420/devops-1.jpg",
            image: {}
        }, {
            id: 6,
            date_created: "2023-07-01T12:29:20.993Z",
            name: "Entrepreneurship",
            brief: "Problem solving through my skill set of tech and having informed decision making based on the market gap excites me to create solutions. I have exposed myself in this through my freelancing journey during college. It was a great experience working internationally with different cultures. ",
            depiction: "df7c7e88-4717-4549-948a-d7255418940f",
            icon_link: require('~/assets/images/interest/entrepreneurship.png'),
            image: {}
        }]
    }]
})

export const getters = {
    getInterests: (state) => state.list[0].interests
}
