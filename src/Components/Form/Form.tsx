import React, {FC, FormEvent} from 'react'

interface IProps{
  createTask?: Function,
  taskSelect?: data,
  updateTaskSelected?: Function
}

interface data{
  name: string,
  description: string,
  id: number,
  state: boolean
}
export const Form:FC<IProps> = ({createTask, taskSelect, updateTaskSelected}) => {

  console.log(taskSelect?.name)

  const capturaData = (event: FormEvent<HTMLFormElement>) =>{

    event.preventDefault();
    const {name, description} = event.target as typeof event.target & {
      name: {value: string},
      description: {value: string}
    }
    console.log(name.value)
    console.log(description.value)
      if (createTask) {
        createTask? createTask(name.value, description.value): null ;
      }
      if (updateTaskSelected) {
        updateTaskSelected? updateTaskSelected(name.value, description.value): null ;
      }
  }

  return (
    <>
      <form action="" onSubmit={(event)=> capturaData(event) }>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre Tarea</label>
          <input type="text"
            name='name'
            className="form-control"
            id="name"
            defaultValue={taskSelect?.name ? taskSelect?.name : ''}
            placeholder="Ingrese tarea" />
        </div>
        <div className="mb-3">
          <label htmlFor="description"
            className="form-label">Descripcion</label>
          <textarea className="form-control"
            name='description'
            defaultValue={taskSelect?.description? taskSelect?.description : ''}
            id="description" rows={3}></textarea>
        </div>
        <input type="submit" value='Crear'/>
      </form>

    </>
  )
}
