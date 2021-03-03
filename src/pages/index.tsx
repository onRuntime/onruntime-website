import Home from '@screens/Home'
import { getSortedProjectsData } from '@services/projects'
import { GetStaticProps } from 'next'

export default Home

export const getStaticProps: GetStaticProps = async () => {
    const allProjectsData = getSortedProjectsData()
    return {
        props: {
            allProjectsData
        }
    }
}