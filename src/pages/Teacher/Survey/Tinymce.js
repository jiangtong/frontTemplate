import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default () => {
    return (
        <div>
            <Editor
                apiKey="v4mwno45c8b2t05finm76onri8cz8elcwtmxhmj0boctx5fl"
                initialValue="<p>This is the initial content of the editor</p>"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ]
                }}
            ></Editor>
        </div>
    );
};
