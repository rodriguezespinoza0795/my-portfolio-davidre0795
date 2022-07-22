import React from 'react';
import { useRouter } from 'next/router'

const ProjectItem = () => {
    const {query: {Id}} = useRouter()
    return (
        <div>
            Esta es la página de proyecto: {Id}
        </div>
    );
}

export default ProjectItem;
