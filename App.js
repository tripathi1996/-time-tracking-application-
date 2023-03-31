import React, { useState, useEffect } from 'react';

function App() {
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        const storedProjects = localStorage.getItem('projects');
        if (storedProjects) {
            setProjects(JSON.parse(storedProjects));
        }
    }, []);
    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    const handleProjectSubmit = (e) => {
        e.preventDefault();
        const projectName = e.target.projectName.value;
        const projectDate = e.target.projectDate.value;
        const newProject = {
            id: Date.now(),
            date: projectDate,
            name: projectName,
        };
        const updatedProjects = [...projects, newProject];
        setProjects(updatedProjects);
        localStorage.setItem('projects', JSON.stringify(updatedProjects));
    };

    const handleTaskSubmit = (e) => {
        const newTask = {
            id: Date.now(),
            name: e.target.taskName.value,

            projectId: parseInt(e.target.projectId.value, 10),
            timeSpent: parseInt(e.target.timeSpent.value || '0', 10),
        };
        setTasks([...tasks, newTask]);
        localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
    };

    const filteredTasks = selectedProject ?
        tasks.filter((task) => task.projectId === selectedProject) :
        tasks;

    return ( <
        >
        <
        div >

        <
        h1 > Projects < /h1> <
        form onSubmit = { handleProjectSubmit } >
        <
        input type = "Date"
        name = "projectDate"
        placeholder = "Project name"
        required /
        >
        <
        input type = "text"
        name = "projectName"
        placeholder = "Project name"
        required /
        >

        <
        button type = "submit" > Add Project < /button> <
        /form>


        <
        h2 > Tasks < /h2> <
        form onSubmit = { handleTaskSubmit } >
        <
        label >
        Task Name:
        <
        input type = "text"
        name = "taskName"
        required / >
        <
        /label> <
        br / >

        <
        label >
        Project:
        <
        select name = "projectId"
        required > {
            projects.map((project) => ( <
                option key = { project.id }
                value = { project.id } > { project.name } <
                /option>
            ))
        } <
        /select> <
        /label> <
        br / >
        <
        label >
        Time Spent:
        <
        input type = "text"
        name = "timeSpent" / >
        <
        /label> <
        br / >
        <
        button type = "submit" > Add Task < /button> <
        /form> <
        /div> <
        table >
        <
        thead >
        <
        tr >
        <
        th > Project Date < /th> <
        th > Project Name < /th> <
        th > Tasks < /th> <
        /tr> <
        /thead> <
        tbody > {
            projects.map((project) => ( <
                tr key = { project.id } >
                <
                td > { project.date } < /td> <
                td > { project.name } < /td>

                <
                td >
                <
                ul > {
                    tasks
                    .filter((task) => task.projectId === project.id)
                    .map((task) => ( <
                        li key = { task.id } > { task.name } { task.timeSpent }
                        hour <
                        /li>
                    ))
                } <
                /ul> <
                /td> <
                /tr>
            ))
        } <
        /tbody> <
        /table> <
        />
    );
}
export default App;