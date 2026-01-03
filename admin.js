document.addEventListener('DOMContentLoaded', () => {

    const uploadForm = document.getElementById('upload-form');
    uploadForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        alert('This is a demo. "Upload" requires a backend server!');
    });

    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('This is a demo. "Delete" requires a backend server!');
        });
    });

    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('This is a demo. "Edit" requires a backend server!');
        });
    });

});