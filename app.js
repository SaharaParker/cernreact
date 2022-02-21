function Header() {
        return(
            <div>
                <h1>World Wide Web</h1>
                <para1>The WorldWide Web (W3) is a wide area hypermedia information retrieval initiative aiming to give universal access to a large universe of documents.
                    Everything there is online about W3 is linked directly or indirectly to this document, including and executive summary or the project, Mailing lists, Policy, November's W3 News, and Frequently Asked Questions.</para1>
            </div>
        );
}
function Header2() {
    return(
        <div>
            <h3>What's Out there?</h3>
            <para2>Pointers to the World's online information,subjects,W3,servers,etc.</para2>
        </div>
    )
}

function Header3() {
    return(
        <div>
            <h3>Help</h3>
            <para3>on the browser you're using</para3>
        </div>
    )
}





const App = () => {
    return (
        <div>
            <Header/>
            <Header2/>
            <Header3/>
        </div>
    )
}