export const state = () => ({
    list: [
        {
            id: 1,
            title: 'Comparative Performance of Machine Learning Algorithms for Fake News Detection',
            conference: '3rd International Conference on Advances in Computing & Data Sciences',
            year: '2019',
            authors: 'Arvinder Pal Singh Bali, Mexson Fernandes, Sourabh Choubey, Mahima Goel, Pradosh K. Roy',
            abstract: 'Automatic detection of fake news, which could negatively affect individuals and the society ; is an emergingresearch area attracting global attention .The problem has been approached in this paper from Natural LanguageProcessing and Machine Learning perspectives. The evaluation is carried out for three standard datasets with a novel set offeatures extracted from the headlines and the contents . Performances of seven machine learning algorithms in terms ofaccuracies and F1 scores are compared . Gradient Boosting outperformed other classifiers with mean accuracy of 88 % and F1-Score of 0.91.',
            link: 'https://www.researchgate.net/publication/333145202_Comparative_Performance_of_Machine_Learning_Algorithms_for_Fake_News_Detection',
            tags: ['Machine Learning', 'Natural Language Processing', 'Fake News Detection'],
            type: 'Research paper'
        },
        {
            id: 2,
            title: 'ELISA System',
            conference: 'Thesis Report (B.Tech)',
            year: '2019',
            authors: 'Arvinder Pal Singh Bali, Sourabh Choubey, Mexson Fernandes',
            abstract: ' In this project, the multitask learning ensemble is used to jointly learn across multiple related features, in spotting the reliable content in everyday news. Although much effort has recently been devoted to training high-quality reliable news spotters, the quality of datasets has not improved. For the same reason, personal dataset was created to work with by scrapping the news from the known sources (reliable as well as unreliable website).',
            link: 'https://www.researchgate.net/publication/377746961_ELISA_System_-_Bachelor_of_Technology_in_Computer_Science_Engineering_-_Final_Year_Project_Thesis',
            tags: ['Fake News Detection', 'Machine Learning', 'Natural Language Processing'],
            type: 'Thesis'
        },
        {
            id: 3,
            title: 'A METHOD FOR ALERTING A USER OF A POSSIBILITY OF INFECTION (Pat 594569)',
            shortTitle: 'A Method for Alerting a User of a Possibility of Infection',
            status: 'Granted',
            patentNumber: '594569',
            applicationNumber: '202111038746',
            publicationNumber: '11/2023',
            publicationDate: '17/03/2023',
            filingDate: '26/08/2021',
            grantDate: '07/07/2026',
            fieldOfInvention: 'BIO-MEDICAL ENGINEERING',
            classification: 'G16H0050300000, G08B0021020000, G06F0003048100, G06N0003080000, H04W0004021000',
            conference: 'Indian Patent Office (App No. 202111038746 | Pat No. 594569)',
            year: '2026',
            authors: 'Harpreet Singh, Prashant Singh Rana, Neeru Jindal, Mexson Fernandes, Mandeep Singh, Varinder Garg, Harish Kumar and Kanupriya Vashishth',
            abstract: 'A granted patent detailing systems and intelligent machine learning methods for alerting a user to the possibility of an infection, combining biomedical engineering with predictive algorithms.',
            link: 'https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/PatentDetails',
            tags: ['Bio-Medical Engineering', 'Healthcare', 'Machine Learning', 'Infection Alert'],
            type: 'Patent'
        }
    ]
})

export const getters = {
    getPapers: (state) => {
        return [...state.list].sort((a, b) => parseInt(b.year) - parseInt(a.year));
    },
    getTypes: (state) => {
        const types = new Set(state.list.map(r => r.type).filter(Boolean))
        return ['All', ...types]
    },
    getFeaturedPatent: (state) => {
        return state.list.find(item => item.type === 'Patent')
    }
}
