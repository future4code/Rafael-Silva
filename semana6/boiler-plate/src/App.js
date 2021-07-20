import React from 'react'
import styled from 'styled-components'
import './styles.css'
import remove from "./img/close_black_24dp.svg"
import done from "./img/done_black_24dp.svg"

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const ContainerTasks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    cursor: pointer;
  }
`
const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  padding: 20px 0;

`


const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
        tarefas: [
            {
                id: Date.now(),
                texto: 'Texto da primeira tarefa',
                completa: false // Indica se a tarefa está completa (true ou false)
            },
            {
                id: Date.now(),
                texto: 'Texto da segunda tarefa',
                completa: true // Indica se a tarefa está completa (true ou false)
            }
        ],
        inputValue: '',
        filtro: ''
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.tarefas !== this.state.tarefas) {
            localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
        }
    };

    componentDidMount() {
        const newsTasks = JSON.parse(localStorage.getItem("tarefas"))

        this.setState({
            tarefas: newsTasks,
            inputValue: '',
            filtro: ''
        })
    };

    onChangeInput = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    criaTarefa = () => {
        const task = {
            id: Date.now(),
            texto: this.state.inputValue,
            completa: false
        }

        const newTasks = [...this.state.tarefas, task]

        this.setState({
            tarefas: newTasks,
            inputValue: ''
        })
    }

    selectTarefa = (id) => {
        const newTasksList = this.state.tarefas.map((task) => {
            if (task.id === id) {
                const newTask = {
                    ...task,
                    completa: !task.completa
                }
                return newTask
            } else {
                return task
            }
        })

        this.setState({
            tarefas: newTasksList
        })
    }

    onChangeFilter = (event) => {
        const option = event.target.value
        if (option === "pendentes") {
            this.setState({
                filtro: option
            })
        } else {
            this.setState({
                filtro: option
            })
        }
    }

    checkTask = (id) => {
        const newTasksList = this.state.tarefas.map((task) => {
            if (task.id === id) {
                const taskDone = {
                    ...task,
                    completa: !task.completa
                }

                return taskDone
            } else {
                return task
            }
        })

        this.setState({
            tarefas: newTasksList
        })
    }

    removeTask = (id) => {
        const newTasks = this.state.tarefas.filter((task) => {
            return task.id !== id
        })

        this.setState({
            tarefas: newTasks
        })
    }

    removeAllTasks = (length) => {
        this.setState({
            tarefas: []
        })
    }

    render() {
        const listaFiltrada = this.state.tarefas.filter((tarefa) => {
            switch (this.state.filtro) {
                case 'pendentes':
                    return !tarefa.completa
                case 'completas':
                    return tarefa.completa
                default:
                    return !tarefa.completa
            }
        })

        return (
            <div className="App">
                <h1>Lista de tarefas</h1>
                <InputsContainer>
                    <input value={this.state.inputValue} onChange={this.onChangeInput}/>
                    <button onClick={this.criaTarefa}>Adicionar</button>
                </InputsContainer>
                <br/>

                <InputsContainer>
                    <label>Filtro</label>
                    <select value={this.state.filter} onChange={this.onChangeFilter}>
                        <option value="pendentes">Pendentes</option>
                        <option value="completas">Completas</option>
                    </select>
                </InputsContainer>
                <TarefaList>
                    {listaFiltrada.map((tarefa, index) => {
                        return (
                            <ContainerTasks key={index}>
                                <span onClick={() => this.checkTask(tarefa.id)}>
                                    <img src={done} alt="resolvido"/>
                                </span>

                                <Tarefa
                                    completa={tarefa.completa}
                                    onClick={() => this.selectTarefa(tarefa.id)}
                                >
                                    {tarefa.texto}
                                </Tarefa>


                                <span onClick={() => this.removeTask(tarefa.id)}>
                                    <img src={remove} alt="remover"/>
                                </span>

                            </ContainerTasks>
                        )
                    })}

                    <button onClick={() => this.removeAllTasks(listaFiltrada.length)}>Remover Todos</button>
                </TarefaList>
            </div>
        )
    }
}

export default App
