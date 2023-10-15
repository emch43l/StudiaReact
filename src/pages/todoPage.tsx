import MainCard from "../components/mainCard";
import MainCardHeader from "../components/mainCardHeader";
import TodosTable from "../components/todosTable";

export default function TodoPage() {
  return (
    <MainCard>
      <MainCardHeader isSubPage={true} text={"Todos"} />
      <TodosTable />
    </MainCard>
  );
}
