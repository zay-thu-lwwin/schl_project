document.addEventListener('DOMContentLoaded', () => {
    // Video Container Logic
    const videoContainer = document.querySelector('.video-container');
    const videoIds = [
        'dQw4w9WgXcQ',
        'VIDEO_ID_2',
        'VIDEO_ID_3',
        'VIDEO_ID_4'
    ];

    videoIds.forEach(videoId => {
        const video = document.createElement('div');
        video.classList.add('video');
        video.innerHTML = `
            <iframe width="400" height="225" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
        `;
        videoContainer.appendChild(video);
    });

    // Dark Mode Logic
    
   
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
       
    }
});