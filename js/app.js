(function() {
    const API_KEY = "AIzaSyCZENTwJq_Hreia9ZT1FKvSs_KTB22xzeE";
    const CHANNEL_ID = "UCt_4wzTQqmcUvemNkeO0plA";
    
    const renderVideos = data => {
        const $container = document.getElementById('videos');
        const content = data.items.map(item => {
            return '
                <figure>
                    <img src="${item.snippet.thumbnails.medium.url}" alt="${item.snippet.description}" />
                    <figcaption>${item.snippet.descrition}</figcaption>
                </figure>
                <iframe width="800" height="400" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0"/>
            '
        }).join(' ')

        $container.innerHTML = content;
    };

    fetch (
        'https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&border=date&maxResults=20'
    )
        .then(res => res.json())
        .then(res => renderVideos(res));
}) ();