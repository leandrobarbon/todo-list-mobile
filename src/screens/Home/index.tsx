import { useContext } from "react";
import { FlatList, View } from "react-native";

import { styles } from "./styles";
import { Header } from "../../components/Header";
import { TextTotal } from "../../components/TextTotal";
import { NoTasks } from "../../components/NoTasks";
import { Card } from "../../components/Card";
import { TaskContext } from "../../contexts/task";

export function Home() {
  const taskContext = useContext(TaskContext);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentTotal}>
        <TextTotal
          text="Criadas"
          total={taskContext?.tasks.length || 0}
          colors={{ text: "#4EA8DE" }}
        />
        <TextTotal
          text="Concluídas"
          total={
            taskContext?.tasks.filter((task) => task.isCompleted).length || 0
          }
          colors={{ text: "#8284FA" }}
        />
      </View>

      {taskContext?.tasks.length === 0 ? (
        <NoTasks />
      ) : (
        <View style={styles.contentList}>
          <FlatList
            data={taskContext?.tasks}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <Card tasks={item} />}
          />
        </View>
      )}
    </View>
  );
}
