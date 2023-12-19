import { useSelector } from 'react-redux'
import Login from './containers/Login'
import './styles/fonts.css'
import './styles/App.css'
import TodoApp from './containers/TodoApp'

export function App() {
    const isAuthenticated = useSelector((store) => store.USER.isAuthenticated)
    return <>{isAuthenticated ? <TodoApp arrayProjects={projects} arraySections={sections} arrayTasks={tasks} /> : <Login />}</>
    // return <TodoApp />
}

const projects = [
    {
        id: 'p0',
        title: 'TODO APP',
    },
    {
        id: 'p1',
        title: 'PROJET 2',
    },
    {
        id: 'p2',
        title: 'PROJET 3',
    },
]
const sections = [
    {
        id: 's0',
        projectId: 'p0',
        title: 'A FAIRE',
        order: 0,
    },
    {
        id: 's1',
        projectId: 'p0',
        title: 'EN COURS',
        order:1,
    },
    {
        id: 's2',
        projectId: 'p0',
        title: 'FAIT',
        order:2,
    },
    {
        id: 's3',
        projectId: 'p0',
        title: 'EN ATTENTE',
        order: 3,
    },
    {
        id: 's4',
        projectId: 'p1',
        title: 'LUNDI',
        order: 0,
    },
    {
        id: 's5',
        projectId: 'p1',
        title: 'MARDI',
        order: 1,
    },
    {
        id: 's6',
        projectId: 'p1',
        title: 'MERCREDI',
        order: 2,
    },
    {
        id: 's7',
        projectId: 'p1',
        title: 'EN ATTENTE',
        order: 3,
    },
    {
        id: 's8',
        projectId: 'p2',
        title: 'A FAIRE',
        order: 0,
    }

]
const tasks = [
    {
        id: 't0',
        title: 'Tâche 1',
        projectId: 'p0',
        sectionId: 's0',
        userId: ['u0', 'u1'],
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: false,
    },
    {
        id: 't1',
        title: 'Tâche 2',
        projectId: 'p0',
        sectionId: 's1',
        userId: ['u0', 'u1'],
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: false,
    },
    {
        id: 't20',
        title: 'Nouvelle Tâche 20',
        projectId: 'p2',
        sectionId: 's8',
        userId: ['u15', 'u16'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: false,
    },
    {
        id: 't21',
        title: 'Nouvelle Tâche 21',
        projectId: 'p0',
        sectionId: 's3',
        userId: ['u17', 'u18'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: false,
    },
    {
        id: 't22',
        title: 'Nouvelle Tâche 22',
        projectId: 'p1',
        sectionId: 's6',
        userId: ['u10', 'u11'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: false,
    },
    {
        id: 't23',
        title: 'Nouvelle Tâche 23',
        projectId: 'p2',
        sectionId: 's8',
        userId: ['u12', 'u13'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: false,
    },
    {
        id: 't24',
        title: 'Nouvelle Tâche 24',
        projectId: 'p0',
        sectionId: 's1',
        userId: ['u14', 'u15'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: false,
    },
    {
        id: 't25',
        title: 'Nouvelle Tâche 25',
        projectId: 'p1',
        sectionId: 's5',
        userId: ['u16', 'u17'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: false,
    },
    {
        id: 't26',
        title: 'Nouvelle Tâche 26',
        projectId: 'p2',
        sectionId: 's8',
        userId: ['u18', 'u19'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: false,
    },
    {
        id: 't27',
        title: 'Nouvelle Tâche 27',
        projectId: 'p0',
        sectionId: 's0',
        userId: ['u0', 'u1'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: false,
    },
    {
        id: 't28',
        title: 'Nouvelle Tâche 28',
        projectId: 'p1',
        sectionId: 's4',
        userId: ['u2', 'u3'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: true,
    },
    {
        id: 't29',
        title: 'Nouvelle Tâche 29',
        projectId: 'p2',
        sectionId: 's8',
        userId: ['u4', 'u5'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: false,
    },
    {
        id: 't30',
        title: 'Nouvelle Tâche 30',
        projectId: 'p0',
        sectionId: 's3',
        userId: ['u6', 'u7'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: false,
    },
    {
        id: 't31',
        title: 'Nouvelle Tâche 31',
        projectId: 'p1',
        sectionId: 's6',
        userId: ['u8', 'u9'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: false,
    },
    {
        id: 't32',
        title: 'Nouvelle Tâche 32',
        projectId: 'p2',
        sectionId: 's8',
        userId: ['u10', 'u11'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: false,
    },
    {
        id: 't33',
        title: 'Nouvelle Tâche 33',
        projectId: 'p0',
        sectionId: 's2',
        userId: ['u12', 'u13'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: false,
    },
    {
        id: 't34',
        title: 'Nouvelle Tâche 34',
        projectId: 'p1',
        sectionId: 's4',
        userId: ['u14', 'u15'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: false,
    },
    {
        id: 't35',
        title: 'Nouvelle Tâche 35',
        projectId: 'p2',
        sectionId: 's8',
        userId: ['u16', 'u17'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: false,
    },
    {
        id: 't36',
        title: 'Nouvelle Tâche 36',
        projectId: 'p0',
        sectionId: 's1',
        userId: ['u18', 'u19'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: true,
    },
    {
        id: 't37',
        title: 'Nouvelle Tâche 37',
        projectId: 'p1',
        sectionId: 's4',
        userId: ['u0', 'u1'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: false,
    },
    {
        id: 't38',
        title: 'Nouvelle Tâche 38',
        projectId: 'p2',
        sectionId: 's8',
        userId: ['u2', 'u3'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: false,
    },
    {
        id: 't39',
        title: 'Nouvelle Tâche 39',
        projectId: 'p0',
        sectionId: 's0',
        userId: ['u4', 'u5'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.',
        isCompleted: true,
    }
]
