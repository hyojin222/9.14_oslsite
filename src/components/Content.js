function Content(props) {
    return (

        <div className='content-box'>

            <span>{props.projectName}</span>

            <div className='content'>
                <div className='image-slide'>
                    <img src={props.imglink}></img>
                </div>

                <div className='description'>
                    <mark className='subtitle'>{`- ${props.subtitle} -`}</mark>
                    <p>{props.desc}</p>

                    {props.link && (
                        <p className='link'>

                            <a href={props.link} target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0,0,0)' }}>
                                📎{props.linkName}
                            </a>
                        </p>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Content;