import React, { useEffect, useMemo } from 'react'
import Section from '../components/Sections'

const Main = ({ language = 'fr', project, sections, tasks }) => {

    const arrayFilterById = (array, keyId, id) => {
        return array.filter((element) => element[keyId] === id)
    }

    const draggable = (draggable)=>{
        const {sectionId, drag} = draggable
        console.log('sectionId', sectionId)
        console.log('drag', drag)
    }

    const sectionsOrder = useMemo(() => {
        return sections.slice().sort((a, b) => a.order - b.order);
    }, [sections]);
    

    useEffect(() => {
        const container = document.querySelector('main .container')
        container.addEventListener('wheel', (e) => {
            e.preventDefault()
            container.scrollLeft += e.deltaY
        })
    }, [])

    return (
        <main>
            <div className="container">
                <div className="main-title">SEMAINE</div>

                <div className="sections">
                    {sectionsOrder.map((section) => (
                        <Section
                            language={language}
                            section={section}
                            tasks={arrayFilterById(
                                tasks,
                                'sectionId',
                                section.id,
                            )}
                            key={section.id}
                            draggableFunc={draggable}
                        />
                    ))}

                    <div className="section">
                        <div className="title pointer">
                            + Ajouter une section
                        </div>
                    </div>
                </div>
            </div>
            <style>{MainStyles}</style>
        </main>
    )
}

export default Main

const MainStyles = `
main {
	width: 100%;
	overflow-x: hidden;
	height:100vh;
	background-color: #fff;
	line-height: 1.5rem;
}
main .container{
	padding: 3rem 5rem;
	width:100%;
	height:100%;
	overflow-x:auto;
}
main .main-title {
	padding: 1rem;
	position:sticky;
	left:0;
}

main .sections{
	width: fit-content;
	display:grid;   
	grid-auto-flow:column;  
	grid-gap:5rem; 
    
}
main .tasks{
	display:flex;
	flex-direction:column;
	gap:1rem
}

`
