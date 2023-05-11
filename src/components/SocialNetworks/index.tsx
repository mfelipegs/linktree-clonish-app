import './styles.css'

const SocialNetworks = () => {

    const arrayNetworks = [
        { id: 1, urlName: 'Instagram', urlLink: 'https://www.instagram.com/felippendesvoid/' },
        { id: 2, urlName: 'Twitch', urlLink: 'https://www.twitch.tv/infinitilipee' },
        { id: 3, urlName: 'Linkedin', urlLink: 'https://www.linkedin.com/in/matheus-felipe-gomes-662778231/' }
    ]

    const NetworkLinks = arrayNetworks.map((props) => 
        <div key={props.id} className='contentLinks'>
            <a href={props.urlLink}>{props.urlName}</a>
        </div>
    )

    return (
        <>
            {NetworkLinks}
        </>
    )
}

export default SocialNetworks;