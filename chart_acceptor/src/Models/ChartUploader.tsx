import { Chart } from "./Chart";
import React from 'react'
import { useState } from 'react'

function FileUpload() {
    const [file, setFile] = useState()

    function handleFile(event: any) {
        setFile(event.target.files[0])
        //console.log(file)
        console.log(typeof (file))
    }

    function handleUpload() {
        const formData = new FormData()
        formData.append('file', file)
        fetch(
            'url',
            {
                method: 'POST',
                body: formData
            }
        ).then((response) => response.json()).then(
            (result) => {
                console.log('success', result)
            }
        ).catch(error => {
            console.error("Error", error)
        })
    }

    return (
        <div>
            <form onSubmit={handleUpload}>
                <input type='file' name='file' onChange={handleFile} />
                <button>Upload</button>
            </form>
        </div>
    )
}

export default FileUpload;

