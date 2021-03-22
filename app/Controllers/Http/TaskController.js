"use strict";

class TaskController {
  index({ view }) {
    const tasks = [
      { title: 'Task one', body: 'This is task one' },
      { title: 'Task two', body: 'This is task two' }
    ]

    return view.render('task', {
      title: 'Yours tasks',
      tasks: tasks
    })
  }
}

module.exports = TaskController;
