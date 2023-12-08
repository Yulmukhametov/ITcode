<template>
  <div class="todo_container">
    <div class="todo_wrap">
      <div class="title_wrap">
        <p class="title">ToDo List</p>
      </div>
      <form class="create_wrap">
        <input v-model="creatingToDo" class="create_input" type="text" />
        <select v-model="creatingPriority" class="create_priority">
          <option value="low">Не важно</option>
          <option value="high">Важно!</option>
        </select>
        <button
          class="create_button"
          @click.prevent="handleSendToDo(creatingToDo, creatingPriority)"
        >
          Завести задачу
        </button>
      </form>
      <div class="task_list_wrap">
        <div class="filter_buttons">
          <button @click="handleFilter('all')">Все задачи</button>
          <button @click="handleFilter('important')">Важные задачи</button>
        </div>
        <div
          v-for="(todoItem, index) in filteredTodoList"
          :key="index"
          class="todo_list_element"
        >
          <div class="element_content">
            <input v-model="todoItem.status" type="checkbox" />
            <p 
              v-if="!todoItem.isEditing"
              :style="{ textDecoration: todoItem.status ? 'line-through' : 'none' }"
            >
              {{ todoItem.name }}
            </p>
            <input
              v-else
              ref="editingInput"
              :value="todoItem.name"
              :index="index"
              type="text"
            />
          </div>
          <div v-if="!todoItem.isEditing" class="element_buttons">
            <button @click.prevent="handleEditToDo(todoItem)">
              Редактировать
            </button>
            <button @click.prevent="handleDeleteToDo(todoItem)">Удалить</button>
          </div>
          <div v-else class="element_buttons">
            <button @click.prevent="handleSaveEdited(todoItem)">
              Сохранить
            </button>
            <button @click.prevent="handleStopEdit(todoItem)">Отменить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const creatingToDo = ref("");

const editingInput = ref();

const creatingPriority = ref("low");

const filter = ref("all");

const handleFilter = (type: string) => {
  filter.value = type;
};

const handleSendToDo = (creatingToDo: string, priority: string) => {
  todoList.value.push({ 
    status: false, 
    name: creatingToDo, 
    isEditing: false,
    priority: priority 
  });
  showNotification('Задача создана успешно!');
};

const handleDeleteToDo = (todoItem: IToDoItem) => {
  let todoToDeleteIndex = todoList.value.indexOf(todoItem);
  if (todoToDeleteIndex !== -1) {
    todoList.value.splice(todoToDeleteIndex, 1);
  }
  showNotification('Задача удалена!');
};

const handleEditToDo = (todoItem: IToDoItem) => {
  let todoToEditIndex = todoList.value.indexOf(todoItem);
  todoList.value[todoToEditIndex].isEditing = true;
};

const handleStopEdit = (todoItem: IToDoItem) => {
  let todoEditingIndex = todoList.value.indexOf(todoItem);
  todoList.value[todoEditingIndex].isEditing = false;
};

const handleSaveEdited = (todoItem: IToDoItem) => {
  let todoToSaveIndex = todoList.value.indexOf(todoItem);
  todoList.value[todoToSaveIndex].name = editingInput.value.find(
    (input: { attributes: { index: { value: string | number; }; }; }) => +input.attributes.index.value === todoToSaveIndex
  ).value;
  todoList.value[todoToSaveIndex].isEditing = false;
};

const filteredTodoList = computed(() => {
  if (filter.value === "important") {
    return todoList.value.filter((item) => item.priority === "high");
  } else {
    return todoList.value;
  }
});

const showNotification = (message: string) => {
  if ('Notification' in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        new Notification('ToDo App', { body: message });
      }
    });
  } else {
    alert(message);
  }
};



interface IToDoItem {
  status: boolean;
  name: string;
  isEditing: boolean;
  priority: string;
}

const todoList = ref<IToDoItem[]>([
  {
    status: false,
    name: "Название задачи",
    isEditing: false,
    priority: "low"
  },
]);
</script>

<style lang="scss" scoped>
.todo_container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .todo_wrap {
    width: 500px;
    height: 800px;
    border: 1px black solid;
    padding: 0 20px;
    background-color: #242424;

    .title {
      color: black;
      font-size: 24px;
      font-weight: 700;
    }

    .create_wrap {
      display: flex;
      align-items: center;
      gap: 10px;

      .create_input {
        height: 24px;
      }

      .create_button {
        padding: 4px 8px;
      }
    }

    .task_list_wrap {
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .todo_list_element {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        background-color: #6d6d6d;
        border-radius: 10px;
        padding: 0 10px;

        .element_content {
          display: flex;
          align-items: center;
          gap: 10px;

          p {
            margin: 6px 0;
          }
        }

        .element_buttons {
          display: flex;
          align-items: center;
          gap: 10px;

          button {
            padding: 3px 6px;
            font-size: 14px;
          }
        }
      }

      .filter_buttons button {
        padding: 4px 2px;
        margin: 5px;
      }
    }
  }
}
</style>
