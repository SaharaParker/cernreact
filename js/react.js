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
            <p></p>
        </div>
    )
}

function Header2() {
    return(
        <div>
            <h3></h3>
        </div>
    );
}

function Para2() {
    return(
        <div>
            <p></p>
        </div>
    );
}






const App = () => {
    return (
        <div>
            <Header/>
            <Para1 name="The WorldWide Web (W3) is a wide area hypermedia information retrieval initiative aiming to give universal access to a large universe of documents.
                Everything there is online about W3 is linked directly or indirectly to this document, including and executive summary or the project, Mailing lists, Policy, November's W3 News, and Frequently Asked Questions."/>
            <Header2 name="What's Out there?"/>
            <Para1 name="Pointers to the World's online information,subjects,W3,servers,etc."/>
            <Header2 name="Help"/>
            <Para1 name="on the browser you're using"/>
            <Header2 name="Software Products"/>
            <Para1 name="A list of W3 project components and their current state. (e.g. Line Mode, X11, Viola,NeXTStep, Servers, Tools, Mail Robot, Library)"/>
            <Header2 name="Technical"/>
            <Para1 name="Details of protocols, formats, program internals, etc."/>
            <Header2 name="Bibliography"/>
            <Para1 name="Paper documentation onW3 and references."/>
            <Header2 name="People"/>
            <Para1 name="A list of some people involved in the project."/>
            <Header2 name="History"/>
            <Para1 name="A summary of the history of the project."/>
            <Header2 name="How Can I Help?"/>
            <Para1 name="If you would like to support the web."/>
            <Header2 name="Getting Code"/>
            <Para1 name="Getting the anonymous FTP,etc."/>

        </div>
    )
}