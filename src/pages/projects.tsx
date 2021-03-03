import Projects from '@screens/Projects'
import { getSortedProjectsData } from '@services/projects'
import { GetStaticProps } from 'next'

export default Projects

export const getStaticProps: GetStaticProps = async () => {
    const allProjectsData = getSortedProjectsData()
    return {
        props: {
            allProjectsData
        }
    }
}