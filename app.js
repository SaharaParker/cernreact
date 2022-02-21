function Header(props) {
        return(
            <div>
                <h1>World Wide Web</h1>
            </div>
        );
}

function Para1() {
    return(
        <div>
            <p>The WorldWide Web (W3) is a wide area hypermedia information retrieval initiative aiming to give universal access to a large universe of documents.
                Everything there is online about W3 is linked directly or indirectly to this document, including and executive summary or the project, Mailing lists, Policy, November's W3 News, and Frequently Asked Questions.</p>
        </div>
    )
}

function Header2() {
    return(
        <div>
            <h3>What's Out there?</h3>
        </div>
    );
}

function Para2() {
    return(
        <div>
            <p>Pointers to the World's online information,subjects,W3,servers,etc.</p>
        </div>
    );
}

function Header3() {
    return(
        <div>
            <h3>Help</h3>
        </div>
    );
}

function Para3() {
    return(
        <p>on the browser you're using</p>
    );
}





const App = () => {
    return (
        <div>
            <Header name=""/>
            <Para1 name=""/>
            <Header2 name=""/>
            <Para1 name=""/>
            <Header2 name=""/>

        </div>
    )
}