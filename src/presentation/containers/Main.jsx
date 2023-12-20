import React, { useEffect, useMemo } from 'react'
import Section from '../components/Sections'
import { useState } from 'react'
import { Component } from 'react'

const Main = ({ language = 'fr', project, sections, tasks }) => {
    useEffect(() => {
        const container = document.querySelector('main .container')
        container.addEventListener('wheel', (e) => {
            e.preventDefault()
            container.scrollLeft += e.deltaY
        })
    }, [])

    const [updatedSectionsOrder, setUpdatedSectionsOrder] = useState(sections)
    const [onIndexSections, setOnIndexSections] = useState([])

    const arrayFilterById = (array, keyId, id) => {
        return array.filter((element) => element[keyId] === id)
    }

    const SetSectionIndex = (index, sectionId) => {
        if (onIndexSections[sectionId] === undefined) {
            setOnIndexSections((prevState) => {
                return {
                    ...prevState,
                    [sectionId]: index,
                }
            })
        }

        const newOnIndexSections = Object.values(onIndexSections)

        console.log('sectionId', sectionId)
        console.log('index', index)
        console.log('onIndexSections', onIndexSections)
        console.log('newOnIndexSections', newOnIndexSections)
    }

    useEffect(() => {
        // const oldSectionsIndex = Object.values(updatedSectionsOrder)
        // console.log('oldSectionsIndex', oldSectionsIndex)
        // console.log('onIndexSections', onIndexSections)
    }, [onIndexSections])

    return (
        <main>
            <div className="container">
                <div className="main-title">SEMAINE</div>

                <div className="sections">
                    {updatedSectionsOrder.map((section, order) => (
                        <Section
                            language={language}
                            section={section}
                            tasks={arrayFilterById(
                                tasks,
                                'sectionId',
                                section.id,
                            )}
                            key={section.id}
                            sectionId={section.id}
                            order={order}
                            indexSection={SetSectionIndex}
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
	height:80%;
    
}
main .tasks{
	display:flex;
	flex-direction:column;
	gap:1rem
}

`
