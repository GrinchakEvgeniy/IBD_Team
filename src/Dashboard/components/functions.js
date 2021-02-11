 function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }


 export async function getAmamFetch(protocol_id = null){
     let csrftoken = getCookie('csrftoken');
     const request = {
         method: 'GET', // *GET, POST, PUT, DELETE, etc.
         credentials: 'same-origin',
         headers: {
             'Content-Type': 'application/json',
             "X-CSRFToken": csrftoken
         },
     }
     let response = null;
     if (protocol_id != null){
         response = await fetch('/api/amam'+protocol_id, request);
     } else {
         response = await fetch('/api/amam', request);
     }
     const result = await response.json();
     return result;
 }

 export async function createAmamFetch(data){
    let csrftoken = getCookie('csrftoken');
    const request = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            "X-CSRFToken": csrftoken
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }
    const response = await fetch('/api/amam', request);
    const result = await response.json();
    return result;
}

 export async function getProtocols(protocol_id = null){
     let csrftoken = getCookie('csrftoken');
     const request = {
         method: 'GET', // *GET, POST, PUT, DELETE, etc.
         credentials: 'same-origin',
         headers: {
             'Content-Type': 'application/json',
             "X-CSRFToken": csrftoken
         },
     }
     let response = null;
     if (protocol_id != null){
         response = await fetch('/api/protocols/'+protocol_id, request);
     } else {
         response = await fetch('/api/protocols', request);
     }
     const result = await response.json();
     return result;
 }

 export async function deleteProtocol(data){
     let csrftoken = getCookie('csrftoken');
     const request = {
         method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
         credentials: 'same-origin',
         headers: {
             'Content-Type': 'application/json',
             "X-CSRFToken": csrftoken
         },
         body: JSON.stringify(data)
     }
     const response = await fetch('/api/protocols', request);
     const result = await response.json();
     return result;
 }


  export async function updateProtocol(data){
     let csrftoken = getCookie('csrftoken');
     const request = {
         method: 'PUT', // *GET, POST, PUT, DELETE, etc.
         credentials: 'same-origin',
         headers: {
             'Content-Type': 'application/json',
             "X-CSRFToken": csrftoken
         },
         body: JSON.stringify(data)
     }
     const response = await fetch('/api/protocols', request);
     const result = await response.json();
     return result;
 }


export async function uploadProtocol(data){
    let csrftoken = getCookie('csrftoken');
    const request = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            "X-CSRFToken": csrftoken
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }
    const response = await fetch('/api/protocols', request);
    const result = await response.json();
    return result;
}

export async function uploadProtocolImages(data){
    let csrftoken = getCookie('csrftoken');
    const request = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin',
        headers: {
            // 'Content-Type': 'multipart/form-data',
            "X-CSRFToken": csrftoken
        },
        body: data // body data type must match "Content-Type" header
    }
    const response = await fetch('/api/protocols-images', request);
    const result = await response.json();
    return result;
}

export async function deleteProtocolImages(data){
    let csrftoken = getCookie('csrftoken');
    const request = {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            "X-CSRFToken": csrftoken
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }
    const response = await fetch('/api/protocols-images', request);
    const result = await response.json();
    return result;
}