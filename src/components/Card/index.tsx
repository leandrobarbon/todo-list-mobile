import { styles } from "./styles";
import { Image, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import trashCanImg from "../../assets/trashcan.png";
import { TaskContext } from "../../contexts/task";
import { useContext } from "react";

type Task = {
  tasks: {
    id: number;
    title: string;
    isCompleted: boolean;
  };
};

export function Card({ tasks }: Task) {
  const taskContext = useContext(TaskContext);

  const handleRemoveTask = (id: number) => {
    if (taskContext !== null) {
      taskContext.removeTask(id);
    }
  };

  const handleTaskCompleted = (id: number) => {
    if (taskContext !== null) {
      taskContext.handleTaskCompleted(id);
    }
  };

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={24}
        fillColor="#4EA8DE"
        unfillColor="#333"
        text={tasks.title}
        iconStyle={{ borderColor: "#4EA8DE" }}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={(isChecked: boolean) => {
          handleTaskCompleted(tasks.id);
        }}
        style={{ width: "80%" }}
        textStyle={{ fontSize: 14, color: "#F2F2F2" }}
      />
      <TouchableOpacity
        style={styles.buttonDelete}
        onPress={() => handleRemoveTask(tasks.id)}
      >
        <Image source={trashCanImg} />
      </TouchableOpacity>
    </View>
  );
}
