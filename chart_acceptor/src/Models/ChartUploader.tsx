import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/Store";
import { addFiles } from "../Store/FileSlice"

function FileUpload() {

    const dispatch = useDispatch()

    function handleFile(event: any) {
        dispatch(addFiles(event.target.files[0].name))
    }

    function handleUpload(event: any) {
        event.preventDefault()

        const files = useSelector((state: RootState) => state.files.data)
        files.map((item) => {
            fetch(
                'https://localhost:7073/WeatherForecast',
                {
                    method: 'POST',
                    body: item
                }
            ).then((response) => response.json()).then(
                (result) => {
                    console.log('success', result)
                }
            ).catch(error => {
                console.error("Error", error)
            })
        })
    }

    return (
        <div>
            <form onSubmit={handleUpload} >
                <input type='file' name='file' onChange={handleFile} />
                <button type="submit">Upload</button>
            </form>
        </div>
    )
}

export default FileUpload;

