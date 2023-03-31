import React, { useState } from 'react';

function ProjectList() {
    const [projects, setProjects] = useState([]);

    function addProject(project) {
        setProjects([...projects, project]);
    }

    return ( <
        div >
        <
        h1 > Projects < /h1> <
        ProjectForm addProject = { addProject }
        /> <
        ul > {
            projects.map(project => ( <
                li key = { project.name } > { project.name } < /li>
            ))
        } <
        /ul> <
        /div>
    );
}

function ProjectForm({ addProject }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        const project = {
            name,
            description,
            startDate
        };

        addProject(project);

        setName('');
        setDescription('');
        setStartDate('');
    }

    return ( <
        form onSubmit = { handleSubmit } >
        <
        label >
        Name:
        <
        input type = "text"
        name = "name"
        value = { name }
        onChange = { event => setName(event.target.value) }
        /> <
        /label> <
        label >
        Description:
        <
        input type = "text"
        name = "description"
        value = { description }
        onChange = { event => setDescription(event.target.value) }
        /> <
        /label> <
        label >
        Start Date:
        <
        input type = "date"
        name = "startDate"
        value = { startDate }
        onChange = { event => setStartDate(event.target.value) }
        /> <
        /label> <
        button type = "submit" > Create Project < /button> <
        /form>
    );
}

export default ProjectList;