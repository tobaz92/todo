import React, { useState } from 'react'

const LeftBar = ({ arrayProjects, arrayTasks, onClick }) => {
    const [isActived, setIsActived] = useState(null)

    const arrayFilterById = (array, keyId, id) => {
        return array.filter((element) => element[keyId] === id)
    }

    return (
        <>
            <div className="left-bar">
                <h1 className="pointer">T0D0</h1>
                <div className="menu">
                    <div className="menuuser pointer">→ TOMI</div>
                    <div className="menuaddtask pointer">
                        + Ajouter une tâche
                    </div>
                    <div className="menusearchtask pointer">∂ Recherche</div>
                </div>
                <div className="projects">
                    <h2>Mes projets</h2>
                    <div className="project-list">
                        {arrayProjects.map((project) => (
                            <div
                                key={project.id}
                                className={`project pointer ${
                                    isActived === project.id ? 'active' : ''
                                }`}
                                onClick={() => {
                                    setIsActived(project.id)
                                    onClick(project.id)
                                }}
                            >
                                <span className="title">{project.title}</span>
                                <span className="nb">{
                                    arrayFilterById(arrayTasks, 'projectId', project.id).length
                                }</span>
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
.left-bar  h1, .left-bar  h2, .left-bar .add-project, .left-bar .menuuser{
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
