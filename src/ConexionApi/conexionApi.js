

export async function getVideos() {
    try {
        const response = await fetch('https://677e20be94bde1c1252a7da4.mockapi.io/api/videos/videos');
        if (!response.ok) {
            throw new Error('Error al obtener los videos');
        }
        const videos = await response.json();
        return videos;
    } catch (error) {
        console.error('Error en getVideos:', error);
        return [];
    }
}

export async function addVideo(video) {
    try {
        const response = await fetch('https://677e20be94bde1c1252a7da4.mockapi.io/api/videos/videos', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(video), 
        });

        if (!response.ok) {
            throw new Error('Error al agregar el video');
        }

        const newVideo = await response.json();
        alert('Video agregado Exitosamente')
        return newVideo;
    } catch (error) {
        console.error('Error en addVideo:', error);
        return null;
    }
}

export async function deleteVideo(id) {
    try {
        const response = await fetch(`https://677e20be94bde1c1252a7da4.mockapi.io/api/videos/videos/${id}`,{
            method: 'DELETE',
        });

        if (!response.ok){
            throw new Error('Error al eliminar el video')
        }
        alert('Video Eliminado Correctamente')
        console.log('Video eliminado');
        return true

    } catch (error) {
        console.error('Error en deleteVideo:', error);
        return false;
    }
}

export async function updateVideo(id, video) {
    try {
        const response = await fetch(`https://677e20be94bde1c1252a7da4.mockapi.io/api/videos/videos/${id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(video), 
        });

        if (!response.ok) {
            throw new Error('Error al actualizar el video');
        }
        alert('Video actualizado exitosamente')
        const updatedVideo = await response.json();
        console.log('Video actualizado:', updatedVideo);

        return updatedVideo; 
    } catch (error) {
        console.error('Error en updateVideo:', error);
        return null;
    }
}
