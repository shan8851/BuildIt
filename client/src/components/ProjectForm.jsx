import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { createProject } from "../features/userProjects/userProjectSlice"

export const ProjectForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    stories: [],
    examples: [],
  })

  const { title, description, stories, examples } = formData

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createProject(formData))
    setFormData({
      title: "",
      description: "",
      stories: [],
      examples: [],
    })
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div>
      <h1>proj form</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          placeholder="Please enter a title"
          onChange={onChange}
        />
        <label htmlFor="description">title</label>
        <textarea
          name="description"
          id="description"
          value={description}
          placeholder="Please enter a description"
          onChange={onChange}
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Create Project</button>
      </form>
    </div>
  )
}
