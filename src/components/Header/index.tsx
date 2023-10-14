import { useContext, useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import { TaskContext } from "../../contexts/task";

import logoImg from "../../assets/logo.png";
import plusImg from "../../assets/plus.png";

export function Header() {
  const [newTask, setNewTask] = useState("");

  const taskContext = useContext(TaskContext);

  function handleAddNewTask() {
    if (taskContext !== null) {
      taskContext.addTask({
        id: Math.random(),
        title: newTask,
        isCompleted: false,
      });

      setNewTask("");
    }
  }
  console.log(newTask);

  return (
    <View style={styles.container}>
      <Image source={logoImg} />
      <View style={styles.contentInput}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          style={styles.input}
          value={newTask}
          onChangeText={setNewTask}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAddNewTask}>
          <Image source={plusImg} style={styles.imgPlus} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
