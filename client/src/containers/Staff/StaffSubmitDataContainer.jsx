import React, { useState } from 'react'
import { StaffJoin } from '../../components/Joins'
import { BaseInput } from '../../components/Inputs'
import { AppButton } from '../../components/Buttons'

function StaffSubmitDataContainer() {
    const [file, setFile] = useState(null)
    const [fileType, setFileType] = useState("")
    const onFileInput = (event) => {
        const uploadedFile = event.target.files[0]
        if (uploadedFile) {
            setFileType(uploadedFile.type)
            const reader = new FileReader()
            reader.onload = (e) => {
                setFile({
                    name: uploadedFile.name,
                    type: uploadedFile.type,
                    size: uploadedFile.size,
                    content: e.target.result
                })
            }
            if (uploadedFile.type.includes("image")) {
                reader.readAsDataURL(uploadedFile)
            } else if (uploadedFile.type.includes("text")) {
                reader.readAsText(uploadedFile)
            } else if (uploadedFile.type.includes("pdf")) {
                reader.readAsDataURL(uploadedFile)
            } else {
                alert("Unsupported FIle Type")
            }
        }
    }
    const onUploadFileClick = () => {
        setFile(null)
        setFileType("")
    }
    return (
        <div className="flex-1 bg-accent m-3 p-5 border border-[#D2D2D2] rounded-xl">
            <div className='w-full flex flex-col items-center gap-5'>
                <div>
                    <h3 className='text-xl font-semibold'>Submit Data for Analytics</h3>
                    <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec vehicula lectus, et hendrerit ante. Sed porttitor facilisis quam, eu euismod quam ullamcorper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec vehicula lectus, et hendrerit ante. Sed porttitor facilisis quam, eu euismod quam ullamcorper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec vehicula lectus, et hendrerit ante. Sed porttitor facilisis quam, eu euismod quam ullamcorper eu. </p>
                </div>
                <StaffJoin joinBtnText={'Select FIle'} onStaffJoinButtonClick={() => document.getElementById('fileInput').click()} />
                <div className='grid grid-cols-5 gap-10'>
                    <div className='col-span-3'>
                        {file && (
                            <div>
                                <div className='w-full flex items-center justify-center bg-secondary h-10'><p><strong>Preview</strong> - {file.name}</p></div>
                                {fileType.includes("image") && (<img src={file.content} alt="Preview" className="w-1/2 border rounded-b-md" />)}
                                {fileType.includes("pdf") && (<iframe src={file.content} title="PDF Preview" className="w-full h-[690px] border" />)}
                                {fileType.includes("text") && (<pre className="bg-base-100 p-3 border rounded-b-md">{file.content}</pre>)}
                            </div>
                        )}
                    </div>
                    <div className='col-span-2'>
                        {file && (
                            <div className='bg-secondary px-10 py-6 flex flex-col gap-3'>
                                <p><strong>File Name:</strong> {file.name}</p>
                                <p><strong>FIle Type:</strong> {file.type}</p>
                                <p><strong>File Size:</strong> {(file.size / 1024).toFixed(2)} KB</p>
                                <div className='hidden'>
                                    <BaseInput placeholder={"Enter Full Name"} className={"w-full mt-3"} />
                                    <div className='bg-black h-[1px] my-3'></div>
                                    <div className='flex flex-col'>
                                        <p className='text-lg font-semibold'>Author Preview</p>
                                        <p>Submitted by: someone</p>
                                        <p>Role, Institution</p>
                                    </div>
                                </div>
                                <AppButton btnText={"Upload FIle"} className={"w-40 rounded self-center mt-5"} onClick={onUploadFileClick} />
                            </div>
                        )}
                    </div>
                </div>
                <input type='file' className='hidden' id='fileInput' accept="image/*, text/*, application/pdf" onChange={onFileInput}></input>
            </div>
        </div>
    )
}

export default StaffSubmitDataContainer