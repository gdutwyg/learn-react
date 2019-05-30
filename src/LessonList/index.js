
import React, { Component } from 'react'
class Lesson extends Component {
  clickLesson () {
    console.log(this.props.i + '-' + this.props.lesson.title)
  }
  render () {
    const { lesson, i } = this.props
    return (
      <div onClick={this.clickLesson.bind(this)}>
        <h1>{lesson.title}</h1>
        <p>{lesson.description}</p>
      </div>
    )
  }
}
class LessonList extends Component {
  static defaultProps = {
    lessons: [
      { title: 'Lesson 1: title', description: 'Lesson 1: description' },
      { title: 'Lesson 2: title', description: 'Lesson 2: description' },
      { title: 'Lesson 3: title', description: 'Lesson 3: description' },
      { title: 'Lesson 4: title', description: 'Lesson 4: description' }
    ]
  }
  render () {
    return (
      this.props.lessons.map((item, i) => <Lesson lesson={item} key={i} i={i} />)
    )
  }
}
export default LessonList