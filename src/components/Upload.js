import React, { useState } from 'react';
import { MdCloudUpload } from 'react-icons/md';
import { api_key } from '../api';

function Upload() {
	const [selectedFile, setFileUpload] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	// handling input event
	const handleInputChange = (event) => {
		setFileUpload(event.target.files[0]);
		setIsFilePicked(true);
	};

	// handling onclick event

	const uploadFile = () => {
		const formData = new FormData();

		formData.append('File', selectedFile);

		fetch('https://api.thecatapi.com/v1/images/upload', {
			headers: {
				'x-api-key': api_key,
			},
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json())
			.then((cats) => {
				console.log(cats);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="container">
			<p>Select Cat Picture</p>
			<div className="upload">
				<input type="file" name="file" onChange={handleInputChange} />
				{isFilePicked ? (
					<div>
						<p>Filename: {selectedFile.name}</p>
						<p>Filetype: {selectedFile.type}</p>
						<p>Size in bytes: {selectedFile.size}</p>
						<p>lastModifiedDate: {selectedFile.lastModifiedDate.toLocaleDateString()}</p>
					</div>
				) : (
					<p>Select a file to show details</p>
				)}
				<button onClick={uploadFile}>
					<MdCloudUpload />
				</button>
			</div>
		</div>
	);
}

// const uploadStyles = {
// 	display: 'flex',
// 	flexDirection: 'column',
// 	justifyContent: 'center',
// 	alignItems: 'center',
// 	padding: '100px 20px',
// 	width: '40%',
// 	margin: 'auto',
// 	border: '1px solid #000',
// 	marginTop: '120px',
// 	maxHeight: '400px',
// };
export default Upload;
