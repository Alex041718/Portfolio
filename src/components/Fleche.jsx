function Fleche(props){


    var content = props.content;
    return (
    <div className="containerFleche">
        <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L7.51172 7.51172L0 15.0234V0Z" fill="#96AA68"/>
        </svg>

        <p>{content}</p>
    </div>
    )
}


export default Fleche