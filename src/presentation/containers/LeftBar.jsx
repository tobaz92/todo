import React, { useState } from 'react'

const LeftBar = () => {
    const [isActived, setIsActived] = useState(null)

    const [projects, setProjects] = useState([
        {
            id: 0,
            title: 'SEMAINE',
            nb: 2,
        },
        {
            id: 1,
            title: 'PROJET 1',
            nb: 10,
        },
        {
            id: 2,
            title: 'PROJET 2',
            nb: 5,
        },
    ])

    const projetClickHandler = (id) => {
        setIsActived(id)
    }

    return (
        <>
            <div className="left-bar">
                <h1 className="pointer">T0D0</h1>
                <div className="menu">
                    <div className="user pointer">→ TOMI</div>
                    <div className="task pointer">+ Ajouter une tâche</div>
                    <div className="task pointer">∂ Recherche</div>
                </div>
                <div className="projects">
                    <h2>Mes projets</h2>
                    <div className="project-list">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className={`project pointer ${
                                    isActived === project.id ? 'active' : ''
                                }`}
                                onClick={() => projetClickHandler(project.id)}
                            >
                                <span className="title">{project.title}</span>
                                <span className="nb">{project.nb}</span>
                            </div>
                        ))}
                    </div>
                    <div className="pointer add-project">
                        + Ajouter un projet
                    </div>
                </div>
            </div>
            <style>{LeftStyles}</style>
        </>
    )
}
export default LeftBar

const LeftStyles = `
.left-bar {
	width: 100%;
	height:100vh;
	background-color: #f2f2f2;
	padding: 3rem 4rem;
	line-height: 1.5rem;
	min-width: 24rem;
	position: sticky;
	left:0;
}
.left-bar  h1, .left-bar  h2, .left-bar .add-project, .left-bar .user{
	padding: 1rem 0;
}
.left-bar  h2{
	padding-top: 2rem;
}
.left-bar .project{
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;

}
.left-bar .project *{
	pointer-events: none;
}

.left-bar .project .title:before{
	content: "—";
	margin-right: 1rem;
}
.left-bar .project .nb{
	color: #808080;
}
.left-bar .project .nb:before{
	display: inline-block;
	content: "›";
	opacity:0;
	transform:translateX(-5px);
	transition: all .2s ease-in-out;
}
.left-bar .project.active .nb:before {
	opacity:1;
	transform:translateX(0);
}

`
