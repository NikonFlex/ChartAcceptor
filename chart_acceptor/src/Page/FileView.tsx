import React from "react";
import { RootState } from "../Store/Store";
import { useSelector } from "react-redux";

interface PropsFileView {
    id: number;
}

const FileView: React.FC<PropsFileView> = ({
    id,
}) => {

    const files = useSelector((state: RootState) => state.files.data)

    return (
        <div>
            {
                files.map((item) => {
                    console.log(item)

                    return (
                        <p id={item}> {item} </p>
                    )
                })
            }

        </div>
    )
}

export default FileView