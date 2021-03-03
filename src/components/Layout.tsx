import Head from '@components/Head'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const Layout = (props) => (
    <>
        <Head />
        <header>
            <Navbar />
        </header>
        {props.children}
        <Footer />
    </>
)

export default Layout